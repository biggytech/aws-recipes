import { RDSClient, DeleteDBInstanceCommand } from '@aws-sdk/client-rds';

const rdsClient = new RDSClient();

const run = async () => {
    try {
        const data = await rdsClient.send(new DeleteDBInstanceCommand({
            DBInstanceIdentifier: 'myrds',
            DeleteAutomatedBackups: true,
            FinalDBSnapshotIdentifier: 'myrds-final-snapshot',
            SkipFinalSnapshot: false,
        }));
        console.log(data);
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
