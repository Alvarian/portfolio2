const db = require('../config/db');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const readAllUsers = async () => {	
	try {
		const allMasters = await prisma.master.findMany();

		return allMasters;
	} catch (err) {
		console.log(err);
	} finally {
		await prisma.$disconnect();
	}
};

const readOneUser = (name) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM public.find_by_name('${name}')`, (err, result) => {
			if (err) reject(err);

			resolve(result.rows[0]);
		});
	});
};

const createUser = (u, p) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM public.create_master('${u}', '${p}')`, (err, result) => {
			if (err) reject(err);

			resolve(true);
		});
	});
};

module.exports = { readAllUsers, readOneUser, createUser };