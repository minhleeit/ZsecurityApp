


 var AWS = require('aws-sdk');
    

 AWS.config.update({region: 'us-east-1'});
 
exports.handler = async (event) => {
   
    
    var params = {
        Message: 'Help me!', /* required */
        PhoneNumber: '3158770042',
    };
    
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
    
    publishTextPromise.then(
        function(data) {
        console.log("Hello")
        console.log("MessageID is " + data.MessageId);
        return data;    
    }).catch(
        function(err) {
        console.error(err, err.stack);
        
        return -1;
    });

    
   
};
