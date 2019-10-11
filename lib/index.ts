import Request from 'aliyun-sdk-node-request';

export interface ClientDO {
  RegionId?: string; // 实例所属的地域 ID
  AccessKeyId: string; // 用户 AccessKey
  AccessKeySecret: string; // 用户 SecretKey
  Version?: string;
}

export interface CreateContainerGroupRequestDO {
  RegionId?: string; // 实例所属的地域 ID
  SecurityGroupId: string; // 安全组 ID
  VSwitchId: string; // 虚机交换机 ID
  ContainerGroupName: string; // 实例名称，不要求唯一。长度为[2, 128]个英文小写字母、数字或者连字符（-）。不能以连接字符开始或结尾
  InitContainer?: Array<any>; // 初始化容器列表
  Container: Array<any>; // 容器列表
  ZoneId?: string; // 实例所属的可用区编号，空表示由系统选择，默认值：空
  RestartPolicy?: string; // 实例重启策略，默认：Always
  Tag?: Array<any>;// 容器标签
  ImageRegistryCredential?: Array<any>;// 镜像仓库登录信息
  Volume?: Array<any>; // 数据卷列表
  EipInstanceId?: Array<string>;// 弹性IP ID
  DnsConfig?: any;// Dns 配置
  Cpu?: string; //CPU 大小
  Memory?: string; //内存大小
}
export interface DeleteContainerGroupDO {
  RegionId?: string;
  ContainerGroupId: string;
}
export interface ExecContainerCommandDO {
  RegionId?: string;
  ContainerGroupId: string;
  ContainerName: string;
  Command: string;
}

export interface DescribeContainerGroupsDO {
  RegionId?: string;
  ZoneId?: string;
  VSwitchId?: string;
  ContainerGroupIds?: string;
  ContainerGroupName?: string;
  Status?: string;
  Tag?: Array<any>;
  NextToken?: string;
  Limit?: number;
}

export interface DescribeContainerLogDO {
  ContainerGroupId: string;
  RegionId?: string;
  ContainerName:string;
  Tail?: string; // 默认500行，最大2000行 ，日志内容最大返回 1M 数据
  StartTime?: string; // UTC时间，RFC3339标准，例如：2018-08-02T15:00:00Z
}

class Client {
  private AccessKeyId;
  private AccessKeySecret;
  private request;
  private RegionId;
  constructor(option: ClientDO) {
    this.RegionId = option.RegionId;
    this.AccessKeyId = option.AccessKeyId;
    this.AccessKeySecret = option.AccessKeySecret;
    this.request = new Request({
      endpoint: `http://eci.aliyuncs.com`,
      AccessKeyId: this.AccessKeyId,
      AccessKeySecret: this.AccessKeySecret,
      Version: '2018-08-08'
    });
  }
  createContainerGroup(option: CreateContainerGroupRequestDO) {
    return this.request.invoke('CreateContainerGroup', {
      RegionId: this.RegionId,
      ...option
    });
  }
  deleteContainerGroup(option: DeleteContainerGroupDO) {
    return this.request.invoke('DeleteContainerGroup', {
      RegionId: this.RegionId,
      ...option
    });    
  }
  execContainerCommand(option: ExecContainerCommandDO) {
    return this.request.invoke('ExecContainerCommand', {
      RegionId: this.RegionId,
      ...option
    });   
  }
  describeContainerGroups(option: DescribeContainerGroupsDO) {
    return this.request.invoke('DescribeContainerGroups', {
      RegionId: this.RegionId,
      ...option
    });  
  }
  describeContainerLog(option: DescribeContainerLogDO) {
    return this.request.invoke('DescribeContainerLog', {
      RegionId: this.RegionId,
      ...option
    });
  }
}

export default Client;
