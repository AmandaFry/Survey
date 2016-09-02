// require mongoose
var mongoose = require('mongoose');

//create the schema for user
var userSchema = new mongoose.Schema({
	//validation, the filed cannot be empty and at least 2 character long in string format
	name: {type:String, required:true, minlength:2}
},{timestamps: true});

var user = mongoose.model('User', userSchema);

//create the schema for polls
// var pollSchema = new mongoose.Schema({
// 	name: {type:Srting, required:true, minlength:2},
// 	question:{type:String, required:true, minlength:2},
// 	optionOne:{type:String, required:true, minlength:2},
// 	optionTwo:{type:String, required:true, minlength:2},
// 	optionThree:{type:String, required:true, minlength:2},
// 	optionFour:{type:String, required:true, minlength:2},
// 	votes:[
// 		{option:{type:Number,default:0}},
// 		{option:{type:Number,default:0}},
// 		{option:{type:Number,default:0}},
// 		{option:{type:Number,default:0}},
// 	]
// },{timestamps: true});

var pollSchema = mongoose.Schema({
  name: {type:String, minlength:2},
  question:{type:String, required:true, minlength:2},
  options:[
    {text:{type:String, required:true, minlength:1}, 
    votes:Number, defualt:0}
  ]
},{timestamps:true})

var poll = mongoose.model('Poll', pollSchema);