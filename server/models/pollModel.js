// require mongoose
var mongoose = require('mongoose');

//create the schema for user
var userSchema = new mongoose.Schema({
	//validation, the filed cannot be empty and at least 2 character long in string format
	name: {type:String, required:true, minlength:2}
},{timestamps: true});
var Users = mongoose.model('Users', userSchema);


var PollSchema = new mongoose.Schema({
	name: {type:String},
	question: {type:String},
	option1:{type:String},
	option2:{type:String},
	option3:{type:String},
	option4:{type:String},
	votes:[
		{option: {type:Number,default:0}},
		{option: {type:Number,default:0}},
		{option: {type:Number,default:0}},
		{option: {type:Number,default:0}},
		]
},{timestamps:true});

var Polls = mongoose.model('Polls', PollSchema);