let User = require('./../controllers/users')
let path= require('path')

module.exports = (app)=>{
	app.get('/index', User.index);
	app.post('/registering', User.registering);
	app.post('/creatingList', User.creatingList);
	app.get('/getMyListing', User.getMyListing);
	app.get('/getAllListing', User.getAllListing);
	app.put('/editListing', User.editListing);
	app.delete('/deleteListing/:listingid', User.deleteListing);
	app.get('/logOut', User.logOut);
	app.post('/login', User.login);
	app.get('/getUser', User.getUser)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}