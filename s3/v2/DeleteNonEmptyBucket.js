const AWS = require('aws-sdk')

const s3 = new AWS.S3()

const DeleteBucket = async (Bucket) => {
    try {
        console.log(`Deleting ${Bucket}`);

        // Empty the bucket
        const { Contents } = await s3.listObjects({
            Bucket
        }).promise();

        if (Contents.length > 0) {
            await s3.deleteObjects({
                Bucket,
                Delete: {
                    Objects: Contents.map(({
                        Key
                    }) => ({ Key }))
                }
            }).promise();
        }

        await s3.deleteBucket({ Bucket }).promise();
        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
}

DeleteBucket('testbucket');
