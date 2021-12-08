/* Amplify Params - DO NOT EDIT
	API_ZSECURITYAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_ZSECURITYAPP_GRAPHQLAPIIDOUTPUT
	API_ZSECURITYAPP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const Responses = require('../../../../../common/API_Responses');
const AWS = require("aws-sdk");
const SNSClient = new AWS.SNS({apiVersion: '2010-03-31'});
//AWS.config.region = "us-east-1";
//const pinpoint = new AWS.pinpoint();

exports.handler = async (event, context) => {
    console.log('event', event);

    const body = JSON.parse(event.body);

    if (!body || !body.phoneNumber || !body.message) {
        return Responses._400({ message: 'missing phone number or message from the body' });
    }

    const AttributeParams = {
        attributes: {
            DefaultSMSType: 'Promotional'
        },
    };

    const messageParams = {
        Message: body.message,
        PhoneNumber: body.phoneNumber,
    };

    try {
        await SNSClient.setSMSAttributes(AttributeParams).promise();
        await SNSClient.publish(messageParams).promise(); 
        return Responses._200({ message: 'text has been sent' });
    } catch (error) {
        console.log('An error happened', error);
        return Responses._400({ message: 'text failed to send' });
    }
};