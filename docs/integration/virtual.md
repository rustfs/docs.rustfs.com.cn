---
title: "Virtual模式配置"
description: "RustFS S3的Virtual模式配置模式和path style模式配置"
---

# RustFS S3模式介绍

RustFS 100%的符合S3存储协议的要求，在S3存储时，请求路径分为两个模式：

1. 虚拟主机模式 (Virtual Host Style)

2. 路径模式 (Path Style)

这两种模式的核心区别在于如何将存储桶（Bucket）的名称放入请求的 URL 中。


## 1. Path style mode

在启动的时，默认使用Path style模式。Path style模式的特点是桶名在Endpoint接入端点后，假设主机名为rustfs.com，桶名为test，那么Path style拼接下来的路径为：

~~~
http://rustfs.com/test
~~~

注意：
- 默认为Path style
- 用户不用进行任何设置即为Path style模式


## 2. Virtual Host Style


在启动的时，可以将模式改为Virtual Host Style。Virtual Host Style模式的特点是桶名在为域名的一部份，假设主机名为rustfs.com，桶名为test，那么Virtual Host Style拼接下来的路径为：

~~~
http://test.rustfs.com/
~~~


设置Virtual Host Style的步骤如下：

1. 将你的域名泛解析至指定的服务器。 假设域名为rustfs.com，则可以将 *.rustfs.com 解析至指定的服务器；
2. 如果是Linux修改 `/etc/default/rustfs` 文件，如果是Docker 或者 Kubernetes则修改yaml或者启动配置参数；
3. 在配置文件中加入：`RUSTFS_SERVER_DOMAINS` , 将这个参数设置为 `RUSTFS_SERVER_DOMAINS = "rustfs.com"` ；
4. 保存配置文件，然后使用 `systemctl restart rustfs` 重启服务。

### 域名包含端口的情况（可选）

如果你的域名是**通过端口号访问的**，那么在配置 `RUSTFS_SERVER_DOMAINS` 时，**必须同时包含端口号**，否则 Virtual Host Style 的请求将无法被正确识别。

例如，当你的服务通过 `rustfs.com:9001` 对外提供访问时，应按如下方式配置：

```ini
RUSTFS_SERVER_DOMAINS = "rustfs.com:9001"
```

这样，以下形式的请求才能在 Virtual Host Style 模式下被正确解析：

```
http://test.rustfs.com:9001/
```

> ⚠️ 注意：
> `RUSTFS_SERVER_DOMAINS` 的值必须与客户端请求中的 **Host 头完全一致**，如果访问时包含端口号，则配置中也必须包含该端口号。
