import { Component, OnInit } from '@angular/core';
import { BikeService } from './../bike.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-mylisting',
  templateUrl: './mylisting.component.html',
  styleUrls: ['./mylisting.component.css']
})
export class MylistingComponent implements OnInit {
	newListing: object = {title:"", desc:"", imgsrc:"", price:1, location:""}
	listings: object[]=[]
	currentUser: string=""

  
  constructor(private _bikeService:BikeService, private _router:Router) { }
  	
  	getMyListing(){
  		console.log("in getMyListing in component")
	  	this._bikeService.getMyListing()
	  	.then((data)=>{
	  		console.log(data)
			this.listings=data;
	  	})
	  	.catch((err)=>{
	  		console.log("catch err")
	  	})

  	}




  ngOnInit() {
  	this._bikeService.currentUser()
  	.then((data)=>{
  		console.log(data)
  		if (data){
  			this.currentUser=data
  			this.getMyListing()
  		}else{
  			this._router.navigateByUrl('/')  			
  		}
  	})
  	.catch((err)=>{
  		console.log("catch err")
  	})


  }

  createListing(){
  	this._bikeService.createListing(this.newListing)
  	.then((data)=>{
   		console.log("regEvent:then")
  		console.log(data)
  		this.newListing={title:"", desc:"", imgsrc:"", price:1, location:""}
  		this.getMyListing()	
  	})
  	.catch((err)=>{
  		console.log("catch err")
  		console.log(err)
  	})
  }

  editListing(listing){
  	this._bikeService.editListing(listing)
  	.then((data)=>{
  		console.log("component/editListing")
  		this.getMyListing()	
  		
  	})  		
  	.catch((err)=>{
  		console.log("catch err")
  		console.log(err)
  	})  	
  }



  deleteEvent(listingid){
  	console.log("deleteEvent")
  	this._bikeService.deleteListing(listingid)
  	.then((data)=>{
  		console.log("component/deleteListing")
  		this.getMyListing()	
  		
  	})  		
  	.catch((err)=>{
  		console.log("catch err")
  		console.log(err)
  	})  	
  }






}
