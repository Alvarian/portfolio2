const getFileExt = (file) => {
	if (!file) return null;

	const {originalname} = file[0];

	if (originalname.split('.')[1] === 'js') {	
		return 'javascript';
	}

	if (originalname.split('.')[1] === 'css') {
		return 'cascade';
	}
};

const checkIfFileIsBufferable = (cb, file, awsKey) => {
	return new Promise(async function(resolve, reject) {
		if (typeof file === 'string' || !file) {
			return resolve(file);
		}

		resolve(cb(file, awsKey));
	});
};

module.exports = {
	checkIfFileIsBufferable, getFileExt
};