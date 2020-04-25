/**
 * EmailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

require('dotenv').config();


module.exports = {
  	create: async function (req, res) {
  		console.log("body", req.body);
		const { name, email, message } = req.body;

	    await sails.helpers.email({
	      to: 'alvarivan88@gmail.com',
	      from: sails.config.custom.mailgunFrom,
	      subject: `Portfolio query from ${name}!`,
	      text: message
	    });

	    // res.ok({
	    //   code: 0,
	    //   result: 'user created successfully'
	    // });	

	    res.redirect(process.env.CONTACT_REDIRECT);
	}
};

