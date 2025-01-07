import { SESClient, ListTemplatesCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient();

const run = async () => {
    try {
        const data = await sesClient.send(new ListTemplatesCommand({}));
        console.log('Success', data);
        return data;
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
