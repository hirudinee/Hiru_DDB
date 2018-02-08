let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {


	ddb.get({
		TableName: 'HiruTest',
		Key: { 'ID': '001' }
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