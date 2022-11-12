#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { WebsiteStack } from '../lib/WebsiteStack';

const app = new cdk.App();

const GLOBALS = {
  bucketName: 'bradwebb101websitebucket',
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  domainName: 'bradwebb101.com',
  websiteLocation: './website/build/'
};

const websiteStack = new WebsiteStack(app, 'WebsiteStack', {
  ...GLOBALS,
});



