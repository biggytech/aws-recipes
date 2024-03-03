import { S3Client, CopyObjectCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client();

const run = async () => {
    try {
        const data = await s3Client.send(new CopyObjectCommand({
            Bucket: 'neli2', // destination bucket
            CopySource: 'neli/image.png',
            Key: 'image.png' // destination file name
        }));
        console.log('Success', data);
    } catch (err) {
        console.log("Error", err);
    }
};

run();
