webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mylisting_mylisting_component__ = __webpack_require__("../../../../../src/app/mylisting/mylisting.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__index_index_component__["a" /* IndexComponent */]
    },
    {
        path: 'browse',
        component: __WEBPACK_IMPORTED_MODULE_2__browse_browse_component__["a" /* BrowseComponent */]
    },
    {
        path: 'index',
        component: __WEBPACK_IMPORTED_MODULE_3__index_index_component__["a" /* IndexComponent */]
    },
    {
        path: 'listings',
        component: __WEBPACK_IMPORTED_MODULE_4__mylisting_mylisting_component__["a" /* MylistingComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> Bicycle Marketplace </h1>\n<div>\n<a [routerLink]=\"['browse']\"> Browse </a> |\n<a [routerLink]=\"['listings']\"> My Listings </a> |\n<a (click)=\"logOut()\" [routerLink]=\"['']\" > Logout </a>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_bikeService, _router) {
        this._bikeService = _bikeService;
        this._router = _router;
    }
    AppComponent.prototype.logOut = function () {
        var _this = this;
        this._bikeService.logOut()
            .then(function (data) {
            console.log(data);
            _this._router.navigateByUrl('/');
        })
            .catch(function (err) {
            console.log("catch err");
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mylisting_mylisting_component__ = __webpack_require__("../../../../../src/app/mylisting/mylisting.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_8__browse_browse_component__["a" /* BrowseComponent */],
            __WEBPACK_IMPORTED_MODULE_9__mylisting_mylisting_component__["a" /* MylistingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__bike_service__["a" /* BikeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bike.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BikeService = (function () {
    function BikeService(_http) {
        this._http = _http;
    }
    BikeService.prototype.regUser = function (user) {
        return this._http.post('/registering', user).map(function (Response) { return Response.json(); }).toPromise();
    };
    BikeService.prototype.logUser = function (user) {
        return this._http.post('/login', user).map(function (Response) { return Response.json(); }).toPromise();
    };
    BikeService.prototype.currentUser = function () {
        return this._http.get('/getUser').map(function (Response) { return Response.json(); }).toPromise();
    };
    BikeService.prototype.createListing = function (listing) {
        return this._http.post('/creatingList', listing).map(function (Response) { return Response.json(); }).toPromise();
    };
    BikeService.prototype.getMyListing = function () {
        return this._http.get('/getMyListing').map(function (Response) { return Response.json(); }).toPromise();
    };
    BikeService.prototype.logOut = function () {
        console.log("logOut2");
        return this._http.get('/logOut').map(function (Response) { return Response.json(); }).toPromise();
    };
    BikeService.prototype.editListing = function (listing) {
        return this._http.put('/editListing', listing).map(function (Response) { return Response.json(); }).toPromise();
    };
    BikeService.prototype.deleteListing = function (listingid) {
        console.log("service/deleteListing");
        return this._http.delete('/deleteListing/' + listingid).map(function (Response) { return Response.json(); }).toPromise();
    };
    BikeService.prototype.getAllListing = function () {
        return this._http.get('/getAllListing').map(function (Response) { return Response.json(); }).toPromise();
    };
    return BikeService;
}());
BikeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], BikeService);

var _a;
//# sourceMappingURL=bike.service.js.map

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left, .right, .middle{\n\tdisplay: inline-block;\n}\n\n.left{\n\twidth:200px;\n}\n\n.middle{\n\twidth:300px;\n}\n\n.listing{\n\tdisplay: block;\n\tmargin: 5px auto;\n\tborder: 2px solid black;\n\twidth: 800px;\n\tpadding:10px;\n}\n\n.inside{\n\tborder: 2px solid black;\n\t\tpadding:10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> Search  <input type=\"text\" name=\"search\"\n\t\t[(ngModel)]=\"searchTerm\"\n\t\t#search = \"ngModel\"\n\t\t(keyup)=\"searchListing()\"> </h2>\n\n<div class=\"listing\">\n\t<div class=\"inside\" *ngFor=\" let listing of listings\">\n\t\t<div class=\"left\">\n\t\t\t<p> Image </p>\n\n\t\t</div>\n\t\t<div class=\"middle\">\n\t\t\t<h1>{{listing.title}}  </h1>\n\t\t\t<p>{{listing.desc}}</p>\n\t\t</div>\n\n\t\t<div class = \"right\">\n\t\t\t<h1> $ {{listing.price}} </h1>\n\t\t\t\t<p>{{ listing.location}}</p>\n\t\t\t<P *ngIf=\"currentUser==listing._user\"><button  (click)=\"contact()\"> CONTACT </button></P>\n\t\t\t<P *ngIf=\"currentUser!=listing._user\"><button (click)=\"deleteEvent(listing._id)\"> DELETE </button></P>\n\t\t</div>\n\n\t</div>\n"

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Listing = (function () {
    function Listing(title, location, desc, price) {
        if (title === void 0) { title = ""; }
        if (location === void 0) { location = ""; }
        if (desc === void 0) { desc = ""; }
        if (price === void 0) { price = 1; }
        this.title = title;
        this.location = location;
        this.desc = desc;
        this.price = price;
    }
    return Listing;
}());
var BrowseComponent = (function () {
    function BrowseComponent(_bikeService, _router) {
        this._bikeService = _bikeService;
        this._router = _router;
        this.currentUser = "";
        this.listings = [];
        this.allListings = [];
        this.searchTerm = "";
    }
    BrowseComponent.prototype.getAllListing = function () {
        var _this = this;
        console.log("in getAllListing in component");
        this._bikeService.getAllListing()
            .then(function (data) {
            console.log(data);
            _this.allListings = data;
            _this.listings = data;
        })
            .catch(function (err) {
            console.log("catch err");
        });
    };
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bikeService.currentUser()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.currentUser = data;
            }
            else {
                _this._router.navigateByUrl('/');
            }
        })
            .catch(function (err) {
            console.log("catch err");
        });
        this.getAllListing();
    };
    BrowseComponent.prototype.searchListing = function () {
        var _this = this;
        this.listings = this.allListings.filter(function (listing) {
            return listing.title.toLowerCase().includes(_this.searchTerm.toLowerCase()) || listing.location.toLowerCase().includes(_this.searchTerm.toLowerCase());
        });
    };
    return BrowseComponent;
}());
BrowseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-browse',
        template: __webpack_require__("../../../../../src/app/browse/browse.component.html"),
        styles: [__webpack_require__("../../../../../src/app/browse/browse.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], BrowseComponent);

var _a, _b;
//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login, #reg{\n\tdisplay: inline-block;\n\tborder:2px solid grey;\n\tpadding:5px;\n\tvertical-align: top;\n}\n#reg{\n\twidth: 55%;\n}\n#login{\n\twidth:35%;\n}\n\nbutton{\n\twidth: 100px;\n\theight:30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> Bike of the day!</h2>\n\t<div>\n\t\tTitle.......\n\t</div>\n <p *ngIf=\"error\"> {{error}} </p>\n<div id=\"login\">\n\t<form (submit)=\"loginEvent()\" #loginForm=\"ngForm\">\n\t<table>\n    <tr>\n        <td> *Email: </td>\n        <td> <input type=\"email\" name=\"email2\"    \n            required\n            pattern=\"[A-Za-z0-9.+_-]+@[a-zA-Z0-9.+_-]+\\.[a-zA-Z]+\"\n            [(ngModel)]=\"user.email\" \n            #email2=\"ngModel\" > </td>\n        <td *ngIf=\"email2.invalid\"> Email is required </td>\n    </tr>\n\n\n\n\n    <tr>\n        <td> *Password: </td>\n        <td> <input type=\"password\" name=\"password2\"\n            required\n            minlength=\"16\" \n            [(ngModel)]=\"user.password\" \n            #password2=\"ngModel\" > </td>\n        <td *ngIf=\"password2.invalid\"> Password is required </td>\n    </tr>\n<tr><td></td><td>\n\t<button type=\"submit\" [disabled]=\"!(loginForm.valid)\"> Login </button>\n</td></tr>\n\n</table>\n</form>\n</div>\n\n\n<div id=\"reg\">\n\t<form (submit)=\"regEvent()\" #regForm=\"ngForm\">\n\t<table>\n    <tr>\n        <td> *First Name: </td>\n        <td> <input type=\"text\" name=\"firstname\" \n            required\n            minlength=\"2\" \n            [(ngModel)]=\"newUser.firstname\" \n            #firstname=\"ngModel\" > </td>\n        <td *ngIf=\" firstname.invalid\"> First name is required and at least 2 characters long </td>\n\n    </tr>\n\n    <tr>\n        <td> *Last Name: </td>\n        <td> <input type=\"text\" name=\"lastname\"\n            required\n            minlength=\"2\" \n            [(ngModel)]=\"newUser.lastname\" \n            #lastname=\"ngModel\" > </td>\n        <td *ngIf=\"lastname.invalid\"> Last name is required and at least 2 characters long </td>\n    </tr>\n\n\n    <tr>\n        <td> *Email: </td>\n        <td> <input type=\"email\" name=\"email\"    \n            required\n            pattern=\"[A-Za-z0-9.+_-]+@[a-zA-Z0-9.+_-]+\\.[a-zA-Z]+\"\n            [(ngModel)]=\"newUser.email\" \n            #email=\"ngModel\" > </td>\n        <td *ngIf=\"email.invalid\"> Email is required </td>\n    </tr>\n\n\n    <tr>\n        <td> *Password: </td>\n        <td> <input type=\"password\" name=\"password\"\n            required\n            minlength=\"16\" \n            [(ngModel)]=\"newUser.password\" \n            #password=\"ngModel\" > </td>\n        <td *ngIf=\"password.invalid\"> Password is required </td>\n    </tr>\n\n\n    <tr>\n        <td> *Password confirmation: </td>\n        <td> <input type=\"password\" name=\"cfmpwd\" \n            required\n            minlength=\"16\" \n            [(ngModel)]=\"newUser.cfmpwd\" \n            #cfmpwd=\"ngModel\" > </td>\n        <td *ngIf=\"cfmpwd.invalid\"> Confirmed password is required </td>\n        <td *ngIf=\"cfmpwd.valid && newUser.cfmpwd!==newUser.password\"> Not the same password </td>\n    </tr><tr><td></td><td>\n     <button type=\"submit\" [disabled]=\"!(regForm.valid && user.pwd === user.cfmpwd)\"> \n Register </button> </td></tr>\n</table>\n\n\n\n  </form>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = (function () {
    function IndexComponent(_bikeService, _router) {
        this._bikeService = _bikeService;
        this._router = _router;
        this.user = { email: "", password: "" };
        this.newUser = { firstname: "", lastname: "", email: "", password: "" };
        this.error = "";
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bikeService.currentUser()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this._router.navigate(['browse']);
            }
        })
            .catch(function (err) {
            console.log("catch err");
        });
    };
    IndexComponent.prototype.regEvent = function () {
        var _this = this;
        this._bikeService.regUser(this.newUser)
            .then(function (data) {
            console.log("regEvent:then");
            console.log(data);
            if (typeof (data) === "string") {
                _this.error = data;
            }
            else {
                _this.newUser = { firstname: "", lastname: "", email: "", password: "" };
                _this._router.navigate(['browse']);
            }
        })
            .catch(function (err) {
            console.log("catch err");
            console.log(err);
        });
    };
    IndexComponent.prototype.loginEvent = function () {
        var _this = this;
        this._bikeService.logUser(this.user)
            .then(function (data) {
            console.log("logEvent:then");
            console.log(data);
            if (typeof (data) === "string") {
                _this.error = data;
            }
            else {
                _this.user = { email: "", password: "" };
                _this._router.navigate(['browse']);
            }
        })
            .catch(function (err) {
            console.log("catch err");
            console.log(err);
        });
        this.user = { email: "", password: "" };
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], IndexComponent);

var _a, _b;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/mylisting/mylisting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left, .right, .middle{\n\tdisplay: inline-block;\n}\n\n.left{\n\twidth:200px;\n}\n\n.middle{\n\twidth:300px;\n}\n\n.listing{\n\tdisplay: block;\n\tmargin: 5px auto;\n\tborder: 2px solid black;\n\twidth: 800px;\n\tpadding:10px;\n}\n\n.inside{\n\tborder: 2px solid black;\n\t\tpadding:10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mylisting/mylisting.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"listing\"> \n\t<form (submit)=\"createListing()\" #createForm=\"ngForm\">\n\t<h2> Create Listing </h2>\n\t<div class=\"inside\">\n\t\t<div class=\"left\">\n\t\t\t<p> Image Upload </p>\n\n\t\t\t<input type=\"text\" \n\t\t\tname=\"imgsrc\"\n\t\t\trequired\n\t\t\t[(ngModel)]=\"newListing.imgsrc\"\n\t\t\t#imgsrc =\"ngModel\">\n\t\t</div>\n\t\t<div class=\"middle\">\n\t\t\t<p> Title </p>\n\t\t\t<p><input type=\"text\" \n\t\t\tname=\"title\"\n\t\t\trequired\n\t\t\t[(ngModel)]=\"newListing.title\"\n\t\t\t#title =\"ngModel\"></p>\n\t\t\t<p> Description </p>\n\t\t\t<textarea\n\t\t\tname=\"desc\"\n\t\t\trequired\n\t\t\t[(ngModel)]=\"newListing.desc\"\n\t\t\t#desc =\"ngModel\"></textarea>\n\t\t</div>\n\t\t<div class = \"right\">\n\t\t\t<p> Price </p>\n\t\t\t<p><input type=\"number\" \n\t\t\tname=\"price\"\n\t\t\trequired\n\t\t\t[(ngModel)]=\"newListing.price\"\n\t\t\t#price =\"ngModel\"></p>\n\t\t\t<p> Location </p>\n\t\t\t<p><input type=\"text\" \n\t\t\tname=\"location\"\n\t\t\trequired\n\t\t\t[(ngModel)]=\"newListing.location\"\n\t\t\t#location =\"ngModel\"></p>\n\t\t\t<P><button type=\"submit\" [disabled]=\"!(createForm.valid)\"> CREATE </button></P>\n\t\t</div>\n\t</div>\n\t</form>\n</div>\n\n\n\n<div class=\"listing\">\n\t<h2> Edit/Delete Listings </h2>\n\t<div class=\"inside\" *ngFor=\" let listing of listings\">\n\t\t<form (submit)=\"editListing(listing)\" #editForm=\"ngForm\">\n\t\t<div class=\"left\">\n\t\t\t<p> Image Upload </p>\n\n\t\t\t<input type=\"text\" \n\t\t\tname=\"imgsrc2\"\n\t\t\trequired\n\t\t\t[(ngModel)]=\"listing.imgsrc\"\n\t\t\t#imgsrc2 =\"ngModel\">\n\t\t</div>\n\t\t<div class=\"middle\">\n\t\t\t<p> Title </p>\n\t\t\t<p><input type=\"text\" \n\t\t\tname=\"title2\"\n\t\t\trequired\n\t\t\t[(ngModel)]=\"listing.title\"\n\t\t\t#title2 =\"ngModel\"></p>\n\t\t\t<p> Description </p>\n\t\t\t<textarea\n\t\t\tname=\"desc2\"\n\t\t\trequired\n\t\t\t[(ngModel)]=\"listing.desc\"\n\t\t\t#desc2 =\"ngModel\"></textarea>\n\t\t</div>\n\t\t<div class = \"right\">\n\t\t\t<p> Price </p>\n\t\t\t<p><input type=\"number\" \n\t\t\tname=\"price2\"\n\t\t\trequired\n\t\t\t[(ngModel)]=\"listing.price\"\n\t\t\t#price2 =\"ngModel\"></p>\n\t\t\t<p> Location </p>\n\t\t\t<p><input type=\"text\" \n\t\t\tname=\"location2\"\n\t\t\trequired\n\t\t\t[(ngModel)]=\"listing.location\"\n\t\t\t#location2 =\"ngModel\"></p>\n\t\t\t<P><button type=\"submit\" [disabled]=\"!(editForm.valid)\"> EDIT </button></P>\n\t\t\t<P><button (click)=\"deleteEvent(listing._id)\"> DELETE </button></P>\n\t\t</div>\n\t</form>\n\t</div>\n\n</div>\t\n"

/***/ }),

/***/ "../../../../../src/app/mylisting/mylisting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MylistingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MylistingComponent = (function () {
    function MylistingComponent(_bikeService, _router) {
        this._bikeService = _bikeService;
        this._router = _router;
        this.newListing = { title: "", desc: "", imgsrc: "", price: 1, location: "" };
        this.listings = [];
        this.currentUser = "";
    }
    MylistingComponent.prototype.getMyListing = function () {
        var _this = this;
        console.log("in getMyListing in component");
        this._bikeService.getMyListing()
            .then(function (data) {
            console.log(data);
            _this.listings = data;
        })
            .catch(function (err) {
            console.log("catch err");
        });
    };
    MylistingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bikeService.currentUser()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.currentUser = data;
                _this.getMyListing();
            }
            else {
                _this._router.navigateByUrl('/');
            }
        })
            .catch(function (err) {
            console.log("catch err");
        });
    };
    MylistingComponent.prototype.createListing = function () {
        var _this = this;
        this._bikeService.createListing(this.newListing)
            .then(function (data) {
            console.log("regEvent:then");
            console.log(data);
            _this.newListing = { title: "", desc: "", imgsrc: "", price: 1, location: "" };
            _this.getMyListing();
        })
            .catch(function (err) {
            console.log("catch err");
            console.log(err);
        });
    };
    MylistingComponent.prototype.editListing = function (listing) {
        var _this = this;
        this._bikeService.editListing(listing)
            .then(function (data) {
            console.log("component/editListing");
            _this.getMyListing();
        })
            .catch(function (err) {
            console.log("catch err");
            console.log(err);
        });
    };
    MylistingComponent.prototype.deleteEvent = function (listingid) {
        var _this = this;
        console.log("deleteEvent");
        this._bikeService.deleteListing(listingid)
            .then(function (data) {
            console.log("component/deleteListing");
            _this.getMyListing();
        })
            .catch(function (err) {
            console.log("catch err");
            console.log(err);
        });
    };
    return MylistingComponent;
}());
MylistingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mylisting',
        template: __webpack_require__("../../../../../src/app/mylisting/mylisting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mylisting/mylisting.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], MylistingComponent);

var _a, _b;
//# sourceMappingURL=mylisting.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map