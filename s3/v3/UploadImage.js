import {S3Client, PutObjectCommand} from '@aws-sdk/client-s3'
import { readFileSync} from 'fs'

const s3Client = new S3Client();

const run = async (filePath) => {
    try {
        const fileContent = readFileSync(filePath);
        const data = await s3Client.send(new PutObjectCommand({
            Bucket: 'neli',
            ACL: 'public-read',
            Key: 'image.png',
            Body: fileContent
        }));
        console.log('Success', data);
    } catch (err) {
        console.log("Error", err);
    }
};

run('data/image.png')
