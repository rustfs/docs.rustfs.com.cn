export const sidebar = [
  {
    text: 'RustFS 安装指南',
    link: '/installation/index',
    // collapsed: true,
    home: true,
    items: [
      {
        text: 'Linux安装',
        link: '/installation/linux/index',
        items: [
          {
            text: 'Linux快速安装',
            link: '/installation/linux/quick-start'
          },
          {
            text: '单机单盘安装',
            link: '/installation/linux/single-node-single-disk'
          },
          {
            text: '单机多盘安装',
            link: '/installation/linux/single-node-multiple-disk'
          },
          {
            text: '多机多盘安装',
            link: '/installation/linux/multiple-node-multiple-disk'
          }
        ]
      },
      {
        text: 'Windows 安装',
        link: '/installation/windows/index'
      },
      {
        text: 'macOS 安装',
        link: '/installation/macos/index'
      },
      {
        text: 'Docker 安装',
        link: '/installation/docker/index'
      },
      {
        text: '云原生安装',
        link: '/installation/cloud-native/index'
      },
    ]
  },
  {
    text: '安装检查清单',
    // collapsed: true,
    home: true,
    items: [
      {
        text: '硬件要求',
        link: '/installation/checklists/hardware-checklists'
      },
      {
        text: '硬件选择',
        link: '/installation/checklists/hardware-selection'
      },
      {
        text: '网络检查',
        link: '/installation/checklists/network-checklists'
      },
      {
        text: '软件检查',
        link: '/installation/checklists/software-checklists'
      },
      {
        text: '安全检查',
        link: '/installation/checklists/security-checklists'
      }
    ]
  },
  {
    text: 'RustFS 性能和框架',
    // collapsed: true,
    home: true,
    items: [
      {
        text: 'RustFS性能对比',
        link: '/concepts/comparison'
      },
      {
        text: 'RustFS设计架构',
        link: '/concepts/architecture'
      },
      {
        text: '术语说明',
        link: '/concepts/glossary'
      },
      {
        text: '使用限制',
        link: '/concepts/limit'
      },
      {
        text: '核心概念',
        // collapsed: true,
        link: '/concepts/principle',
        items: [
          {
            text: '纠删码',
            link: '/concepts/principle/erasure-coding'
          },
          // {
          //   text: '条带',
          //   link: '/concepts/principle/stripe'
          // },
          // {
          //   text: 'Data Scanner',
          //   link: '/concepts/principle/data-scanner'
          // },
          // {
          //   text: 'bitrot',
          //   link: '/concepts/principle/bitrot'
          // },
          // {
          //   text: '数据自愈',
          //   link: '/concepts/principle/data-self-recovery',
          // },
          // {
          //   text: '使用限制',
          //   link: '/concepts/principle/limit'
          // },
          // {
          //   text: '单机单盘',
          //   link: '/concepts/principle/snsd'
          // },
          // {
          //   text: '单机多盘',
          //   link: '/concepts/principle/snmd'
          // },
          // {
          //   text: '多机多盘',
          //   link: '/concepts/principle/mnmd'
          // }
        ]
      },
    ]
  },
  {
    text: '管理 RustFS',
    // collapsed: true,
    home: true,
    items: [
      {
        text: '存储桶管理',
        link: '/management/bucket/index',
        items: [
          {
            text: '存储桶创建',
            link: '/management/bucket/creation'
          },
          {
            text: '存储桶删除',
            link: '/management/bucket/deletion'
          },
          // {
          //   text: '存储桶配额',
          //   link: '/management/bucket/bucket-quota'
          // },
          // {
          //   text: '存储桶复制管理',
          //   link: '/management/bucket/bucket-rep'
          // }
        ]
      },
      {
        text: '对象管理',
        link: '/management/object/index',
        // collapsed: true,
        items: [
          {
            text: '对象上传',
            link: '/management/object/creation'
          },
          // {
          //   text: '对象下载',
          //   link: '/management/object/download'
          // },
          {
            text: '对象删除',
            link: '/management/object/deletion'
          },
          // {
          //   text: '对象分享',
          //   link: '/management/object/sharing',
          // },
          // {
          //   text: '加密',
          //   link: '/management/encryption',
          //   // collapsed: true,
          //   items: [
          //     {
          //       text: 'SSE-C',
          //       link: '/management/encryption/sse-c',
          //     },
          //     {
          //       text: 'SSE-KMS',
          //       link: '/encryption/sse-kms',
          //     },
          //     {
          //       text: 'SSE-S3',
          //       link: '/management/encryption/sse-s3'
          //     }
          //   ]
          // },
        ]
      },
      // {
      //   text: '对象版本',
      //   // collapsed: true,
      //   items: [
      //     {
      //       text: '开通对象版本',
      //       link: '/management/object-version/bucket-create-and-delete'
      //     },
      //     {
      //       text: '对象创建',
      //       link: '/management/object-version/bucket-repulication'
      //     },
      //     {
      //       text: '对象回滚',
      //       link: '/management/object-version/object-rollback'
      //     },
      //     {
      //       text: '对象历史版本查看',
      //       link: '/management/object-version/version-history'
      //     }
      //   ]
      // },
      // {
      //   text: '对象锁',
      //   // collapsed: true,
      //   items: [
      //     {
      //       text: '合规模式',
      //       link: '/management/iam/user',
      //     },
      //     {
      //       text: '保留模式',
      //       link: '/management/iam/user-group',
      //     },
      //     {
      //       text: '治理模式',
      //       link: '/management/iam/ak-sk',
      //     }
      //   ]
      // },
      {
        text: '对象扫描',
        link: '/management/object/scanner'
      },
      // {
      //   text: '生命周期管理',
      //   link: '/management/lifecycle/index',
      //   // collapsed: true,
      //   items: [
      //     {
      //       text: '对象过期',
      //       link: '/management/lifecycle/object-expire'
      //     },
      //     {
      //       text: '对象分层',
      //       link: '/management/lifecycle/object-layers'
      //     },
      //     {
      //       text: '与磁设备对接',
      //       link: '/management/lifecycle/magnetic-devices'
      //     },
      //     {
      //       text: '与光设备对接',
      //       link: '/management/lifecycle/optical-devices'
      //     }
      //   ]
      // },
      // {
      //   text: '事件通知管理',
      //   link: '/management/event-notifaction',
      //   items: [
      //     {
      //       text: '创建分层',
      //       link: '/'
      //     },
      //     {
      //       text: '添加事件源',
      //       link: '/'
      //     }
      //   ]
      // }
    ]
  },
  {
    text: '升级、扩容和卸载',
    link: '/upgrade-scale/index',
    // collapsed: true,
    home: true,
    items: [
      {
        text: '可用性和扩展说明',
        link: '/upgrade-scale/availability-and-resiliency'
      },
      {
        text: '升级',
        link: '/upgrade-scale/upgrade',
      },
      // {
      //   text: '扩容',
      //   link: '/upgrade-scale/scale',
      // },
      // {
      //   text: '退役',
      //   link: '/upgrade-scale/retire'
      // },
      // {
      //   text: '再平衡',
      //   link: '/upgrade-scale/re-balance'
      // },
      // {
      //   text: '卸载',
      //   link: '/upgrade-scale/uninstall'
      // }
    ]
  },
  {
    text: '故障排查',
    link: '/troubleshooting/index',
    // collapsed: true,
    home: true,
    items: [
      {
        text: '磁盘故障',
        link: '/troubleshooting/driver'
      },
      {
        text: '对象检查与自动恢复',
        link: '/troubleshooting/healing'
      },
      {
        text: '节点故障',
        link: '/troubleshooting/node'
      }
    ]
  },
  {
    text: '系统管理',
    link: '/administration/index',
    // collapsed: true,
    home: true,
    items: [
      {
        text: 'IAM管理',
        link: '/administration/iam',
        items: [
          // {
          //   text: '用户',
          //   link: '/administration/user'
          // },
          // {
          //   text: '用户组',
          //   link: '/administration/user-group'
          // },
          // {
          //   text: 'AK/SK',
          //   link: '/administration/ak-sk'
          // },
          // {
          //   text: 'Policy',
          //   link: '/administration/policy'
          // },
          // {
          //   text: '桶策略',
          //   link: '/administration/bucket-policy'
          // },
          {
            text: '访问令牌',
            link: '/administration/iam/access-token'
          }
        ]
      },
      // {
      //   text: '日志管理',
      //   link: '/administration/logs',
      //   items: [
      //     {
      //       text: '日志配置',
      //       link: '/administration/logs/configuration'
      //     },
      //     {
      //       text: 'Prometheus 配置',
      //       link: '/administration/logs/prometheus'
      //     },
      //     {
      //       text: '可观测配置',
      //       link: '/administration/logs/observility'
      //     }
      //   ]
      // }
    ]
  },
  {
    text: '集成',
    // collapsed: true,
    home: true,
    items: [
      {
        text: 'Nginx反向代理配置',
        link: '/integration/nginx'
      },
      {
        text: '虚拟主机模式配置',
        link: '/integration/virtual'
      },
      {
        text: 'Milvus 对象存储配置',
        link: '/integration/milvus',
      },
      {
        text: 'GitLab 对象存储配置',
        link: '/integration/gitlab'
      },
      {
        text: 'traefik 反向代理配置',
        link: '/integration/traefik'
      },
      {
        text: 'TLS 配置',
        link: '/integration/tls-configured'
      }
    ]
  },
  {
    text: '开发者',
    // collapsed: true,
    home: true,
    items: [
      // {
      //   text: 'STS',
      //   link: '/developer/sts'
      // },
      {
        text: 'MCP',
        link: '/developer/mcp'
      },
      {
        text: 'MinIO Client',
        link: '/developer/mc'
      },
      {
        text: 'SDK',
        link: '/developer/sdk/index',
        // collapsed: true,
        items: [
          {
            text: 'Java',
            link: '/developer/sdk/java'
          },
          {
            text: 'Python',
            link: '/developer/sdk/python'
          },
          {
            text: 'Rust',
            link: '/developer/sdk/rust'
          },
          {
            text: 'JavaScript',
            link: '/developer/sdk/javascript'
          },
          {
            text: 'TypeScript',
            link: '/developer/sdk/typescript'
          },
          {
            text: 'Golang',
            link: '/developer/sdk/go'
          },
          {
            text: '其他 SDK',
            link: '/developer/sdk/other'
          }
        ],
      },
      {
        text: 'S3 兼容性 API',
        link: '/developer/api'
      },
      {
        text: '开源许可证',
        link: '/developer/license'
      }
    ]
  },
  {
    text: '产品功能',
    // collapsed: true,
    home: true,
    items: [
      {
        text: '分布式',
        link: '/features/distributed/'
      },
      {
        text: '日志管理',
        link: '/features/logging/'
      },
      {
        text: '版本控制',
        link: '/features/versioning/'
      },
      {
        text: 'S3 兼容',
        link: '/features/s3-compatibility/'
      },
      {
        text: '对象级与只读',
        link: '/features/worm/'
      },
      {
        text: '跨区域复制',
        link: '/features/replication/'
      },
      {
        text: '加密',
        link: '/features/encryption/'
      },
      {
        text: '生命周期管理',
        link: '/features/lifecycle/'
      },
    ],
  },
  {
    text: '解决方案',
    // collapsed: true,
    home: true,
    items: [
      {
        text: '现代数据湖',
        link: '/features/data-lake/'
      },
      {
        text: 'AI 和机器学习',
        link: '/features/ai/'
      },
      {
        text: '云原生',
        link: '/features/cloud-native/'
      },
      {
        text: '大数据计算存储分离',
        link: '/features/hdfs/'
      },
      {
        text: 'SQL 支持',
        link: '/features/sql-server/'
      },
      {
        text: '量化交易',
        link: '/features/quantitative-trading/'
      },
      {
        text: '制造业降本',
        link: '/features/industry/'
      },
      {
        text: '冷归档存储',
        link: '/features/cold-archiving/'
      },
      {
        text: '视频存储方案',
        link: '/features/video/'
      },
      {
        text: '国产信创和 SM 解决方案',
        link: '/features/domestic/'
      },
    ],
  },
]
