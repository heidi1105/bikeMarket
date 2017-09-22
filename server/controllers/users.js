let mongoose=require('mongoose');
let User = mongoose.model('User');
let Bike = mongoose.model('Bike');
let bcrypt = require('bcrypt');
let session = require('express-session');
let config = {secret:"YouWillFloatToo"}

//mongoose.Promise = global.Promise

module.exports={
	index:(req, res)=>{
		res.json(true)
	},

	registering:(req, res)=>{
		User.findOne({email:req.body.email}, (err, foundUser)=>{
			if (err){
				console.log(err);
			}else{
				if (foundUser){
					res.json("You have registered already")
				}else{
					let user = new User({
						email: req.body.email,
						firstname: req.body.firstname,
						lastname:req.body.lastname
					})
					user.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
					user.save((err, user)=>{
						if (err){
							res.json("err in register")
						}else{
							req.session.uid=user._id;
							res.json({_id:user._id})
						}
					})
				}
			}
		})
	},

	login: (req, res)=>{
		if (!req.session.uid){
			req.session.uid="";
		}
		User.find({email:req.body.email}, (err, users)=>{
			if (err){
				console.log(err);
			}else{
				if (users.length===1){
					User.findOne({email:req.body.email}).exec((err, user)=>{
						if (err){
							console.log("error in find one");
							res.json(err)
						}else{
							if (bcrypt.compareSync(req.body.password, user.password)){
								console.log("login successfully!")
								req.session.uid=user._id
								res.json({_id:user._id})
							}else{
								res.json("Incorrect password")
							}
						}
					})
				}else{
					res.json("Please register first")
				}

			}
		})
	},
	getUser: (req, res)=>{
		if (req.session.uid){
			res.json(req.session.uid)
		}else{
			res.json(false)
		}
	},

	creatingList: (req, res)=>{
		let bike=new Bike(req.body)
		bike._user=req.session.uid;
		bike.save((err, savedBike)=>{
			if (err){
				console.log("error")
			}else{
				res.json(savedBike)
			}
		})
	},

	getMyListing: (req, res)=>{
		console.log("controllers/getMyListing")
		console.log(req.session.uid)
		Bike.find({_user:req.session.uid}).exec((err, listings)=>{
			if(err){
				console.log(err)
			}else{
				res.json(listings)
			}
		})
	},

	logOut: (req, res)=>{
		if (req.session.uid){
			req.session.uid="";
		}
		res.json("logged Out")
	},

	editListing: (req, res) =>{
		Bike.update({_id:req.body._id}, req.body, (err, savedListing)=>{
			if(err){
				console.log("got err in removing")
				res.json(err)				
			}else{
				console.log("successfully edit")
				res.json(req.body)						
			}
		})
	},

	deleteListing: (req, res) =>{
		console.log("controllers/deleteListing")
		Bike.remove({_id:req.params.listingid}, (err, savedListing)=>{
			if(err){
				console.log("got err in removing")
				res.json(err)				
			}else{
				console.log("successfully edit")
				res.json(true)						
			}
		})
	},
	getAllListing: (req, res)=>{
		Bike.find().exec((err, listings)=>{
			if(err){
				console.log(err)
			}else{
				res.json(listings)
			}
		})
	},




}




