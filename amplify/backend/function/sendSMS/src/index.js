/* Amplify Params - DO NOT EDIT
	API_ZSECURITYAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_ZSECURITYAPP_GRAPHQLAPIIDOUTPUT
	API_ZSECURITYAPP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
AWS.config.region = "us-east-1";
const pinpoint = new AWS.pinpoint();

exports.handler = async (event, context) => {
    try {
        event = event.argument.input;

        // Create a AWS Pinpoint project
        const appID = await createApp();

        // Enable the SES email address for the project
        enableChannels(appID, event.email);

        // Create the endpoints for the Pinpoint project/app
        await createEndPoints(
            appID,
            event.id,
            event.email,
            event.name,
            event.token
        );

        // Create a segment where you want to filter the endpoint you want to send a message to
        const segmentID = await createSegment(appID);

        // Create starter segment and campaing
        const hookLambda = "sendSMS-dev";
        const result = await createCampaign(
            appID,
            event.message,
            hookLambda,
            segmentID
        );

        return result;
    } catch (error) {
        console.log('An error happened');
    }
};


