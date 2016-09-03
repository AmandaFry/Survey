var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.export = {

	//show all users
	show: function(req, res){
		Users.find({}, function(err,data){
			if(err)
				console.log(err);
			else:
				res.json(data);

		});
	},








}