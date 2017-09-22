import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class BikeService {

  constructor(private _http:Http) { }


	regUser(user){
  	return this._http.post('/registering', user).map(Response=>Response.json()).toPromise()
  }

  	logUser(user){
  	return this._http.post('/login', user).map(Response=>Response.json()).toPromise()
  }

  	currentUser(){
  		return this._http.get('/getUser').map(Response=>Response.json()).toPromise()
  	}

  	createListing(listing){
  		return this._http.post('/creatingList', listing).map(Response=>Response.json()).toPromise()
  	}

  	getMyListing(){
  		return this._http.get('/getMyListing').map(Response=>Response.json()).toPromise()
  	}

  	logOut(){
  		console.log("logOut2")
  		return this._http.get('/logOut').map(Response=>Response.json()).toPromise()
  	}

  	editListing(listing){
  		return this._http.put('/editListing', listing).map(Response=>Response.json()).toPromise()
  	}

  	deleteListing(listingid){
  		console.log("service/deleteListing")
  		return this._http.delete('/deleteListing/'+listingid).map(Response=>Response.json()).toPromise()
  	}

  	getAllListing(){
  		return this._http.get('/getAllListing').map(Response=>Response.json()).toPromise()
  	}

}