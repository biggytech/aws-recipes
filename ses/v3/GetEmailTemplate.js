import { SESClient, GetTemplateCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient();

const params = {
    TemplateName: 'templateName'
};

const run = async () => {
    try {
        const data = await sesClient.send(new GetTemplateCommand(params));
        console.log('Success', data);
        return data;
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
