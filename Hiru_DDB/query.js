let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {


	ddb.query({
		TableName: 'Hiru002',
		ExpressionAttributeValues: {
			':id': '002'
		},
		KeyConditionExpression: 'ID = :id',
		FilterExpression: 'Year > :id'
	}, function (err, data) {
		if (err) {
			//handle error
			console.log('error : ', err);
			callback(null, err);
		} else {
			//your logic goes here
			console.log('success : ', data);
			callback(null, data);
		}
	});


	//callback(null, 'Successfully executed');
}