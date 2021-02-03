const mapIfSlidesExist = async (dataArr, db) => {
	const newDataArr = dataArr.map(async row => {
		const { deployed_url, game_file, style_file, id } = row;

		if (!deployed_url && !game_file && !style_file) {
			const newRow = new Promise(function(resolve, reject) {
				db.query(`SELECT * FROM public.find_service_by_id(${id})`, (err, result) => {
					if (err) reject(err);

					row.slides = result.rows.reverse();

					resolve(row);
				});
			});

			return newRow
		} else {
			return row;
		}
	});

	const promises = await Promise.all(newDataArr);
	return promises;
};


module.exports = {
	mapIfSlidesExist	
};