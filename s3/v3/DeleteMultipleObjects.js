import { S3Client, DeleteObjectsCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client();

const run = async () => {
    try {
        const data = await s3Client.send(new DeleteObjectsCommand({
            Bucket: 'neli',
            Delete: {
                Objects: [
                    { Key: 'image.png' },
                    { Key: 'image2.png' }
                ]
            }
        }));
        console.log('Success', data.Deleted);
    } catch (err) {
        console.log("Error", err);
    }
};

run();
