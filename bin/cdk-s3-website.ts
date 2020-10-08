#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkS3WebsiteStack } from '../lib/cdk-s3-website-stack';

const app = new cdk.App();
new CdkS3WebsiteStack(app, 'CdkS3WebsiteStack');
