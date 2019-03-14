"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aliyun_sdk_node_request_1 = require("aliyun-sdk-node-request");
class Client {
    constructor(option) {
        this.RegionId = option.RegionId;
        this.AccessKeyId = option.AccessKeyId;
        this.AccessKeySecret = option.AccessKeySecret;
        this.request = new aliyun_sdk_node_request_1.default({
            endpoint: `http://eci.aliyuncs.com`,
            AccessKeyId: this.AccessKeyId,
            AccessKeySecret: this.AccessKeySecret,
            Version: '2018-08-08'
        });
    }
    createContainerGroup(option) {
        return this.request.invoke('CreateContainerGroup', Object.assign({ RegionId: this.RegionId }, option));
    }
    deleteContainerGroup(option) {
        return this.request.invoke('DeleteContainerGroup', Object.assign({ RegionId: this.RegionId }, option));
    }
    execContainerCommand(option) {
        return this.request.invoke('ExecContainerCommand', Object.assign({ RegionId: this.RegionId }, option));
    }
    describeContainerGroups(option) {
        return this.request.invoke('DescribeContainerGroups', Object.assign({ RegionId: this.RegionId }, option));
    }
    describeContainerLog(option) {
        return this.request.invoke('DescribeContainerLog', Object.assign({ RegionId: this.RegionId }, option));
    }
}
exports.default = Client;
