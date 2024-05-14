import { RDSClient, DeleteDBSnapshotCommand } from '@aws-sdk/client-rds';

const rdsClient = new RDSClient();

const run = async () => {
    try {
        const data = await rdsClient.send(new DeleteDBSnapshotCommand({
            DBSnapshotIdentifier: 'myrds-final-snapshot',
        }));
        console.log(data);
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
