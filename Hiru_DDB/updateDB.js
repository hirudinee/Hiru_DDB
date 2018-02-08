let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.update({
		TableName: 'HiruTest',
		ExpressionAttributeNames: { '#name': 'ID' },
		ExpressionAttributeValues: { ':id': '003' },
		UpdateExpression: 'set # S :',
		ConditionExpression: 'undefined',
	}, function (err, data) {
		if (err) {
			console.log('error : ',err);
			callback(null, err);
		} else {
			console.log('success : ',data);
			callback(null, data);
		}
	});


	callback(null, 'Successfully executed');
}