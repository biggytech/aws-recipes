import { S3Client, DeleteBucketCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client();

const run = async () => {
    try {
        const data = await s3Client.send(new DeleteBucketCommand({
            Bucket: 'neli'
        }));
        console.log('Success', data);
    } catch (err) {
        console.log("Error", err);
    }
};

run();
