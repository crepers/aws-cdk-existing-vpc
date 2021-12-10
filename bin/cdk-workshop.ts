#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

const app = new cdk.App();
new CdkWorkshopStack(app, 'CdkWorkshopStack', {
  // 👇 explicitly set region and account
  env: {
    region: 'ap-northeast-2',
    account: '892090217348'
  },
});