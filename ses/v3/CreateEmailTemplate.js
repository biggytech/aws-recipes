import { SESClient, CreateTemplateCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient();

const params = {
    Template: {
        TemplateName: 'templateName',
        SubjectPart: 'Email subject',
        TextPart: 'Email body',
        HtmlPart: 'Email body',
    },
};

const run = async () => {
    try {
        const data = await sesClient.send(new CreateTemplateCommand(params));
        console.log('Success', data);
        return data;
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
