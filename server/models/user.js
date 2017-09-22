let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
	firstname: {type: String, required:true, minlength:2},
	lastname: {type: String, required:true, minlength:2},
	email: {type:String,required:true,unique: true},
	password: {type:String, required: true},
	trial: {type:Number}}
	,{timestamps:true}, {versionKey:false});
mongoose.model('User', userSchema);

let bikeSchema = new mongoose.Schema({
	title: {type: String, required:true},
	desc: {type: String, required:true, maxlength:200},
	price: {type: Number, required:true, min: 1},
	location: {type: String, required:true},
	imgsrc: {type: String, required:true},
	_user:[{type:Schema.Types.ObjectId, ref:'User'}]}
	,{timestamps:true}, {versionKey:false});
mongoose.model('Bike', bikeSchema)
