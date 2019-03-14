import { default as Client } from '../lib/index';
import * as dotenv from 'dotenv';

import 'mocha';
describe('基本用户故事', function () {
  before(() => {
    dotenv.config({
      path: '.env'
    });
  })
    it('用例1', async function () {
      const client = new Client({
        RegionId: 'cn-hangzhou',
        AccessKeyId: process.env.AccessKeyId,// 用户 AccessKey
        AccessKeySecret: process.env.AccessKeySecret, // 用户 SecretKey
        Version: '2018-08-08'
      });

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
      console.log('client', result);
    })
})
