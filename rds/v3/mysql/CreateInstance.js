import { RDSClient, CreateDBInstanceCommand} from '@aws-sdk/client-rds';

const rdsClient = new RDSClient();

const run = async () => {
    try {
        const data = await rdsClient.send(new CreateDBInstanceCommand({
            DBName: 'myrds',
            DBInstanceIdentifier: 'myrds',
            AllocatedStorage: 5, // GB
            DBInstanceClass: 'db.t2.micro', // free tier
            Engine: 'MySQL',
            MasterUsername: 'admin',
            MasterUserPassword: 'password',
            Port: 3306,
            EngineVersion: '8.0.27',
            PubliclyAccessible: true,
            StorageType: 'gp2', // General Purpose
        }));
        console.log(data);
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
