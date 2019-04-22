"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var aliyun_sdk_node_request_1 = require("aliyun-sdk-node-request");
var Client = /** @class */ (function () {
    function Client(option) {
        this.RegionId = option.RegionId;
        this.AccessKeyId = option.AccessKeyId;
        this.AccessKeySecret = option.AccessKeySecret;
        this.request = new aliyun_sdk_node_request_1["default"]({
            endpoint: "http://eci.aliyuncs.com",
            AccessKeyId: this.AccessKeyId,
            AccessKeySecret: this.AccessKeySecret,
            Version: '2018-08-08'
        });
    }
    Client.prototype.createContainerGroup = function (option) {
        return this.request.invoke('CreateContainerGroup', __assign({ RegionId: this.RegionId }, option));
    };
    Client.prototype.deleteContainerGroup = function (option) {
        return this.request.invoke('DeleteContainerGroup', __assign({ RegionId: this.RegionId }, option));
    };
    Client.prototype.execContainerCommand = function (option) {
        return this.request.invoke('ExecContainerCommand', __assign({ RegionId: this.RegionId }, option));
    };
    Client.prototype.describeContainerGroups = function (option) {
        return this.request.invoke('DescribeContainerGroups', __assign({ RegionId: this.RegionId }, option));
    };
    Client.prototype.describeContainerLog = function (option) {
        return this.request.invoke('DescribeContainerLog', __assign({ RegionId: this.RegionId }, option));
    };
    return Client;
}());
exports["default"] = Client;
