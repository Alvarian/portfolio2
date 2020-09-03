const aws = require('aws-sdk');


require('dotenv').config();
const { 
	ACCESS_KEY_ID,
	ACCESS_SECRET_KEY,
	REGION_NAME,
	BUCKET_NAME
} = process.env;


aws.config.update({
	secretAccessKey: ACCESS_SECRET_KEY,
	accessKeyId: ACCESS_KEY_ID,
	region: REGION_NAME
});

const s3 = new aws.S3();

function s3Create(file, fileKey) {
	if (!file) return null;

	const type = () => {
		const keyType = fileKey.split('/')[1];

		if (keyType === 'style') return 'text/css';
		if (keyType === 'logic') return 'application/x-javascript';
	};

	return new Promise(function(resolve, reject) {
		const params = {
			Bucket: BUCKET_NAME, // pass your bucket name
			Key: fileKey,
			ACL: 'public-read',
			Body: file[0].buffer,
			ContentType: type(),
			CacheControl: 'max-age=0'
		};

		s3.upload(params, function(s3Err, data) {
			if (s3Err) reject(s3Err);

			console.log(`File uploaded successfully at ${data.Location}`);
			resolve(data.Location);
		});
	});
}

function s3Destroy(fileKey) {
	return new Promise(async function(resolve, reject) {
		// let params = { Bucket: BUCKET_NAME, Prefix: fileKey };

		const delObj = () => {			
			s3.deleteObjects(params, function(err, data) {
				if (err) return reject(err, err.stack);  // error
				
				console.log(`File deleted successfully: ${data}`);
				resolve(data);                 // deleted
			});
		};

		s3.listObjectsV2(params, function(err, data) {
			if (err) return reject(err);

			if (data.Contents.length == 0) return delObj();

			params = { Bucket: BUCKET_NAME };
			params.Delete = {Objects:[]};

			data.Contents.forEach(function(content) {
				params.Delete.Objects.push({Key: content.Key});
			});

			delObj();
		});
	});
}

module.exports = { s3Create, s3Destroy };