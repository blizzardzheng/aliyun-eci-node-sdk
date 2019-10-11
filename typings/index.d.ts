export interface ClientDO {
    RegionId?: string;
    AccessKeyId: string;
    AccessKeySecret: string;
    Version?: string;
}
export interface CreateContainerGroupRequestDO {
    RegionId?: string;
    SecurityGroupId: string;
    VSwitchId: string;
    ContainerGroupName: string;
    InitContainer?: Array<any>;
    Container: Array<any>;
    ZoneId?: string;
    RestartPolicy?: string;
    Tag?: Array<any>;
    ImageRegistryCredential?: Array<any>;
    Volume?: Array<any>;
    EipInstanceId?: Array<string>;
    DnsConfig?: any;
    Cpu?: string;
    Memory?: string;
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
    ContainerName: string;
    Tail?: string;
    StartTime?: string;
}
export interface UpdateContainerGroupDO {
    ContainerGroupId: string;
    Cpu?: string;
    Memory?: string;
    ImageRegistryCredential?: Array<any>;
    Volume?: Array<any>;
    RestartPolicy?: string;
    InitContainer?: Array<any>;
    Container?: Array<any>;
    Tag?: Array<any>;
}
declare class Client {
    private AccessKeyId;
    private AccessKeySecret;
    private request;
    private RegionId;
    constructor(option: ClientDO);
    createContainerGroup(option: CreateContainerGroupRequestDO): any;
    deleteContainerGroup(option: DeleteContainerGroupDO): any;
    execContainerCommand(option: ExecContainerCommandDO): any;
    describeContainerGroups(option: DescribeContainerGroupsDO): any;
    describeContainerLog(option: DescribeContainerLogDO): any;
    updateContainerGroup(option: UpdateContainerGroupDO): any;
}
export default Client;
