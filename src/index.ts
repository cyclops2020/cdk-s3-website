import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export interface S3WebsiteBucketProps extends cdk.StackProps {
  bucketName?: string;
  WebsiteIndexDocument: string,
  WebsiteErrorDocument: string
}

export class S3WebsiteBucket extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, props: S3WebsiteBucketProps) {
    super(scope, id);

    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: `${props.bucketName}-${Math.floor(Math.random() * Math.floor(1000000))}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: props.WebsiteIndexDocument,
      websiteErrorDocument: props.WebsiteErrorDocument
  });
  }
}
