let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	var message = {};
	message.id = event.id;
	message.name = event.name;
	message.year = event.year;

	ddb.put({
		TableName: 'HiruTest',
		Item: {
			'ID': message.id,
			'Name': message.name,
			'Year': message.year
		}
	}, function (err, data) {
		if (err) {
			console.log('error : ', err);
			callback(null, err);
		} else {
			console.log('success : ', data);
			callback(null, data);
		}
	});


	//callback(null, 'Successfully executed');
}