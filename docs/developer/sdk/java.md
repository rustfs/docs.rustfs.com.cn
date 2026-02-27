---
title: "Java SDK"
description: "本文主要讲解 RustFS 中 Java SDK 的使用。"
---

# Java SDK

RustFS 是一款兼容 S3 协议的对象存储系统，支持通过 AWS S3 SDK 与系统进行集成。本文将以 AWS S3 Java SDK 为例，介绍如何从零开始搭建开发环境，连接 RustFS，并完成基本的对象存储操作。

## 一、集成 AWS S3 Java SDK

### 1.1 创建 Maven 项目

使用如下目录结构或在 IDE 中新建 Maven 项目：

```
rustfs-java-s3-demo/
├── pom.xml
└── src/
 └── main/
 └── java/
 └── com/
 └── example/
 └── RustfsS3Example.java
```

### 1.2 添加依赖

在 `pom.xml` 中添加 AWS SDK 依赖：

```xml
<dependencies>
 <dependency>
 <groupId>software.amazon.awssdk</groupId>
 <artifactId>s3</artifactId>
 <version>2.25.27</version>
 </dependency>
</dependencies>
```

> 推荐使用 AWS SDK v2 版本，功能更完善，支持异步、响应式等模式。

---

## 二、连接并使用 RustFS

### 2.1 初始化 S3 客户端

```java
package com.example;

import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;

import java.net.URI;
import java.nio.file.Paths;

public class RustfsS3Example {

 public static void main(String[] args) {
 // 1. 初始化 S3 客户端
 S3Client s3 = S3Client.builder()
 .endpointOverride(URI.create("http://192.168.1.100:9000")) // RustFS 地址
 .region(Region.US_EAST_1) // 可写死，RustFS 不校验 region
 .credentialsProvider(
 StaticCredentialsProvider.create(
 AwsBasicCredentials.create("rustfsadmin", "rustfsadmin")
 )
 )
 .forcePathStyle(true) // 关键配置！RustFS 需启用 Path-Style
 .build();

 // 2. 创建 Bucket
 String bucket = "my-bucket";
 try {
 s3.createBucket(CreateBucketRequest.builder().bucket(bucket).build());
 System.out.println("Bucket created: " + bucket);
 } catch (BucketAlreadyExistsException | BucketAlreadyOwnedByYouException e) {
 System.out.println("Bucket already exists.");
 }

 // 3. 上传文件
 s3.putObject(
 PutObjectRequest.builder().bucket(bucket).key("hello.txt").build(),
 Paths.get("hello.txt")
 );
 System.out.println("Uploaded hello.txt");

 // 4. 下载文件
 s3.getObject(
 GetObjectRequest.builder().bucket(bucket).key("hello.txt").build(),
 Paths.get("downloaded-hello.txt")
 );
 System.out.println("Downloaded hello.txt");

 // 5. 列出对象
 ListObjectsV2Response listResponse = s3.listObjectsV2(ListObjectsV2Request.builder().bucket(bucket).build());
 listResponse.contents().forEach(obj -> System.out.println("Found object: " + obj.key()));

 // 6. 删除对象
 s3.deleteObject(DeleteObjectRequest.builder().bucket(bucket).key("hello.txt").build());
 System.out.println("Deleted hello.txt");

 // 7. 删除桶（可选）
 // s3.deleteBucket(DeleteBucketRequest.builder().bucket(bucket).build());
 }
}
```

---

## 三、常见问题与排查

| 问题 | 原因 | 解决方法 |
| -------------------------------------- | ------------------------------------ | ----------------------------------------- |
| `S3Exception: 301 Moved Permanently` | 未启用 path-style 或 region 错误 | 设置 `.forcePathStyle(true)` 且 region 使用任意值 |
| `ConnectException: Connection refused` | RustFS 未启动或端口不正确 | 检查 RustFS 状态与端口 |
| `403 Forbidden` | AccessKey / SecretKey 错误 | 检查认证配置 |
| 上传失败无响应 | SDK 默认使用 HTTPS，RustFS 仅支持 HTTP（或需证书） | 使用 `http://` 地址并配置 `endpointOverride` |

---

## 四、附录

### 4.1 Maven 清单打包

打包项目：

```bash
mvn clean package
```

执行：

```bash
java -cp target/rustfs-java-s3-demo-1.0-SNAPSHOT.jar com.example.RustfsS3Example
```

### 4.2 RustFS 配置建议

* 保证服务使用 HTTP 协议时关闭 SSL 校验。
* 启用 CORS 支持（若用于 Web 前端）。
* 推荐设置 `max_object_size` 和 `max_part_size` 等限制，防止大文件传输失败。

---

好的，下面是 **RustFS 使用 AWS S3 Java SDK 的高级功能示例补充**，包括：

* 预签名 URL（Presigned URL）生成与使用
* 分片上传（Multipart Upload）完整流程

---

## 五、Java 高级功能示例

### 5.1 生成并使用 Presigned URL（预签名 URL）

> Presigned URL 允许客户端在不暴露凭据的情况下，临时访问私有对象，广泛用于浏览器直接上传或下载文件场景。

#### 5.1.1 生成下载链接（GET）

```java
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.GetObjectPresignRequest;

S3Presigner presigner = S3Presigner.builder()
 .endpointOverride(URI.create("http://192.168.1.100:9000"))
 .region(Region.US_EAST_1)
 .credentialsProvider(
 StaticCredentialsProvider.create(
 AwsBasicCredentials.create("rustfsadmin", "rustfsadmin")
 )
 )
 .build();

GetObjectRequest getObjectRequest = GetObjectRequest.builder()
 .bucket("my-bucket")
 .key("hello.txt")
 .build();

GetObjectPresignRequest presignRequest = GetObjectPresignRequest.builder()
 .getObjectRequest(getObjectRequest)
 .signatureDuration(Duration.ofMinutes(15)) // 有效期 15 分钟
 .build();

PresignedGetObjectRequest presignedRequest = presigner.presignGetObject(presignRequest);

System.out.println("Presigned URL: " + presignedRequest.url());
```

> 🔗 使用浏览器打开链接，即可访问该对象。

#### 5.1.2 上传 Presigned URL（PUT）

类似地，也可生成上传 URL：

```java
PutObjectRequest putRequest = PutObjectRequest.builder()
 .bucket("my-bucket")
 .key("upload.txt")
 .build();

PresignedPutObjectRequest presignedPut = presigner.presignPutObject(
 PutObjectPresignRequest.builder()
 .putObjectRequest(putRequest)
 .signatureDuration(Duration.ofMinutes(10))
 .build()
);

System.out.println("Upload URL: " + presignedPut.url());
```

---

### 5.2 实现分片上传（Multipart Upload）

> Multipart Upload 是大文件上传的推荐方式，可在网络波动时断点续传。

#### 5.2.1 启动分片上传

```java
CreateMultipartUploadRequest createRequest = CreateMultipartUploadRequest.builder()
 .bucket("my-bucket")
 .key("bigfile.zip")
 .build();

CreateMultipartUploadResponse createResponse = s3.createMultipartUpload(createRequest);
String uploadId = createResponse.uploadId();
```

#### 5.2.2 上传各分片（Part）

```java
List<CompletedPart> completedParts = new ArrayList<>();
for (int i = 1; i <= 3; i++) {
 String partPath = "part" + i + ".bin"; // 假设每个 part 为本地文件
 UploadPartRequest uploadPartRequest = UploadPartRequest.builder()
 .bucket("my-bucket")
 .key("bigfile.zip")
 .uploadId(uploadId)
 .partNumber(i)
 .build();

 UploadPartResponse uploadPartResponse = s3.uploadPart(uploadPartRequest, Paths.get(partPath));
 completedParts.add(
 CompletedPart.builder()
 .partNumber(i)
 .eTag(uploadPartResponse.eTag())
 .build()
 );
}
```

#### 5.2.3 完成分片上传

```java
CompletedMultipartUpload completedUpload = CompletedMultipartUpload.builder()
 .parts(completedParts)
 .build();

CompleteMultipartUploadRequest completeRequest = CompleteMultipartUploadRequest.builder()
 .bucket("my-bucket")
 .key("bigfile.zip")
 .uploadId(uploadId)
 .multipartUpload(completedUpload)
 .build();

s3.completeMultipartUpload(completeRequest);
System.out.println("Multipart upload completed.");
```

#### 5.2.4 异常中止上传（可选）

```java
AbortMultipartUploadRequest abortRequest = AbortMultipartUploadRequest.builder()
 .bucket("my-bucket")
 .key("bigfile.zip")
 .uploadId(uploadId)
 .build();

s3.abortMultipartUpload(abortRequest);
```

---
