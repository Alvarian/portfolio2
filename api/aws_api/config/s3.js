const aws = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');
const fs = require('fs');


require('dotenv').config();
const { 
	ACCESS_KEY_ID,
	ACCESS_SECRET_KEY,
	REGION_NAME,
	BUCKET_NAME
} = process.env;

const s3 = new aws.S3();

aws.config.update({
	secretAccessKey: ACCESS_SECRET_KEY,
	accessKeyId: ACCESS_KEY_ID,
	region: REGION_NAME
});


function upload(file, fileKey) {
	if (!file) return null;

	return new Promise(async function(resolve, reject) {
		const params = {
			Bucket: BUCKET_NAME, // pass your bucket name
			Key: fileKey,
			ACL: 'public-read',
			Body: file[0].buffer,
			ContentType: file[0].memetype
		};

		s3.upload(params, function(s3Err, data) {
			if (s3Err){
				reject(s3Err);
			}
			console.log(`File uploaded successfully at ${data.Location}`);
			resolve(data.Location);
		});
	});
}


module.exports = upload;