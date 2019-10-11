# ECI Node SDK 使用示例
Eci 的 node SDK，基于上层封装 eci 特性api typings 申明 [aliyun-sdk-node-request](https://github.com/blizzardzheng/aliyun-nodesdk-common-request)


### 安装
```
npm install aliyun-eci-node-sdk --save
```

### ts & typings
使用 vscode 引入，所有的参数都有智能提示

### 创建 Client

#### 接口参数

|       名称      |  类型  | 是否必须 |        描述       |
|:---------------:|:------:|:--------:|:-----------------:|
|     RegionId    | string |    是    | 实例所属的地域 ID |
|   AccessKeyId   | string |    是    |   用户 AccessKey  |
| AccessKeySecret | string |    是    |   用户 SecretKey  |
|     Version     | string |    否    |      api版本      |

#### 返回参数
|       名称      |  类型  |         描述       |
|:---------------:|:------:|:-----------------:|
|     eciClient    | client instance | 用户调用 ECI 接口的对象
 |

#### 代码
```js
  import EciClient from 'aliyun-eci-node-sdk';
  const client = new EciClient({
    RegionId: 'cn-hangzhou',
    AccessKeyId: process.env.AccessKeyId,// 用户 AccessKey
    AccessKeySecret: process.env.AccessKeySecret, // 用户 SecretKey
    Version: '2018-08-08'
  });
```

### 创建容器组
#### 接口参数

```js
export interface CreateContainerGroupRequestDO {
  SecurityGroupId: string; // 安全组 ID
  VSwitchId: string; // 虚机交换机 ID
  ContainerGroupName: string; // 实例名称，不要求唯一。长度为[2, 128]个英文小写字母、数字或者连字符（-）。不能以连接字符开始或结尾
  InitContainers?: Array<any>; // 初始化容器列表
  Container: Array<any>; // 容器列表
  ZoneId?: string; // 实例所属的可用区编号，空表示由系统选择，默认值：空
  RestartPolicy?: string; // 实例重启策略，默认：Always
  Tags?: Array<any>;// 容器标签
  ImageRegistryCredentials?: Array<any>;// 镜像仓库登录信息
  Volumes?: Array<any>; // 数据卷列表
  EipInstanceId?: Array<string>;// 弹性IP ID
  DnsConfig?: any;// Dns 配置
  Cpu?: string; //CPU 大小
  Memory?: string; //内存大小
}
```

#### 返回参数
|       名称      |  类型  |         描述       |
|:---------------:|:------:|:-----------------:|
|     RequestId    | string | 请求 ID|
|     ContainerGroupId    | string | 容器组 ID |

#### 代码
```js
  import EciClient from 'aliyun-eci-node-sdk';
  const result = await client.createContainerGroup({
    SecurityGroupId: process.env.SecurityGroupId,
    VSwitchId: process.env.VSwitchId,
    ContainerGroupName: 'test',
    // ZoneId: 'B',
    Container: [{
      Command: ['%2Fbin%2Fsh', '-c', 'echo 1'],
      Cpu: '1.00',
      Image: 'ubuntu',
      Memory: '2.00',
      Name: 'u1'
    }]
  });
```

