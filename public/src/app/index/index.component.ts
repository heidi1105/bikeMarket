import { Component, OnInit } from '@angular/core';
import { BikeService } from './../bike.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	user : object={email:"", password:""}
	newUser: object={firstname:"", lastname:"",email:"", password:""}
	error: string=""



  constructor(private _bikeService:BikeService, private _router:Router) { }

  ngOnInit() {
  	this._bikeService.currentUser()
  	.then((data)=>{
  		console.log(data)
  		if (data){
  			this._router.navigate(['browse'])
  		}
  	})
  	.catch((err)=>{
  		console.log("catch err")
  	})
  }

  regEvent(){
  	this._bikeService.regUser(this.newUser)
  	.then((data)=>{
  		console.log("regEvent:then")
  		console.log(data)
  		if (typeof(data)==="string"){
  			this.error=data;
  		}else{
  			this.newUser={firstname:"", lastname:"",email:"", password:""}
  			this._router.navigate(['browse'])
  			}
  		})
  	.catch((err)=>{
  		console.log("catch err")
  		console.log(err)
  	})

  }


  loginEvent(){
  	this._bikeService.logUser(this.user)
  	.then((data)=>{
  		console.log("logEvent:then")
  		console.log(data)
  		if (typeof(data)==="string"){
  			this.error=data;
  		}else{
  			this.user={email:"", password:""}
  			this._router.navigate(['browse'])
  		}
  	})
	.catch((err)=>{
  		console.log("catch err")
  		console.log(err)
  	})
  	  this.user={email:"", password:""}
  }


}
