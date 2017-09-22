import { Component, OnInit } from '@angular/core';
import { BikeService } from './../bike.service'
import { Router } from '@angular/router'

class Listing{
  constructor(public title:string="", public location:string="", 
  	public desc:string="", public price:number=1){}
}

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
	currentUser: string=""
	listings: Listing[]=[]
	allListings: Listing[]=[]
	searchTerm:string=""

  constructor(private _bikeService:BikeService, private _router:Router) { }
  	getAllListing(){
  		console.log("in getAllListing in component")
	  	this._bikeService.getAllListing()
	  	.then((data)=>{
	  		console.log(data)
			this.allListings=data;
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
  		}else{
  			this._router.navigateByUrl('/')  			
  		}
  	})
  	.catch((err)=>{
  		console.log("catch err")
  	})
  	this.getAllListing()

  }

  searchListing(){
    this.listings = this.allListings.filter((listing)=>{
      return listing.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || listing.location.toLowerCase().includes(this.searchTerm.toLowerCase());
    })
  }

}
