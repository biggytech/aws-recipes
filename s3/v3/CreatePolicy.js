import { S3Client, PutBucketPolicyCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client();

const bucketName = 'neli';

const readOnlyUserPolicy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": ["s3:GetObject"],
            "Resource": [""]
        }
    ]
};

const bucketResource = `arn:aws:s3:::${bucketName}/*`;
readOnlyUserPolicy.Statement[0].Resource[0] = bucketResource;

const run = async () => {
    try {
        const data = await s3Client.send(new PutBucketPolicyCommand({
            Bucket: bucketName,
            Policy: JSON.stringify(readOnlyUserPolicy)
        }));
        console.log('Success', data);
    } catch (err) {
        console.log('Error', err);
    }
};

run();
