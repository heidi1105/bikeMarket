import { Component } from '@angular/core';
import { BikeService } from './bike.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


	constructor(private _bikeService:BikeService, private _router:Router) { }


	logOut(){
	  	this._bikeService.logOut()
	  	.then((data)=>{
	  		console.log(data)
  			this._router.navigateByUrl('/')  
	  	})
	  	.catch((err)=>{
	  		console.log("catch err")
	  	})
	}
  
}
