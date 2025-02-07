(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <!-- Brand/logo -->\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"../assets/images/logo.png\" alt=\"logo\" style=\"width:40px;border-radius:50%\">\n    </a>\n    <span class=\"user-name\" [innerHTML]=\"userName\"></span>\n    \n    <!-- Links -->\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link 1</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link 2</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link 3</a>\n      </li>\n    </ul>\n  </nav>\n</header>\n<router-outlet></router-outlet>\n<div class=\"loading\" *ngIf=\"loading\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/joke/components/joke-apis/joke-apis.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/joke/components/joke-apis/joke-apis.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\">\r\n    <h4 style=\"display:inline-block\" class=\"mr-5\">Joke APIs - <span [innerHTML]=\"apiTitle\"></span></h4>\r\n    <a href=\"https://rapidapi.com/LemmoTresto/api/joke3\" target=\"_blank\">Rapid Api website link</a>\r\n    <hr />\r\n    <!--- For Random Joke --->\r\n    <div [ngSwitch]=\"jokeAction\">\r\n        <div *ngSwitchCase=\"'randomJoke'\">\r\n            <div class=\"row randomJoke\">\r\n                <!-- Random Joke Section --->\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card text-center\">\r\n                        <div class=\"card-header\">\r\n                            <button style=\"float: left\" type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"clearCache()\">Clear cache</button>\r\n                            <b>Joke ID - </b><span [innerHTML]=\"randomJoke.randomJokeId\"></span>\r\n                            <i style=\"float:right\" class=\"fa fa-refresh\" aria-hidden=\"true\"\r\n                                (click)=\"tryJokeActions('get')\"></i>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-title\" [innerHTML]=\"randomJoke.randomJokeBody\"></p>\r\n                            <div class=\"loading\" *ngIf=\"loading\"></div>\r\n                        </div>\r\n                        <div class=\"card-footer text-muted\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <i class=\"fa fa-thumbs-up green\" aria-hidden=\"true\"></i>\r\n                                    <span [innerHTML]=\"randomJoke.randomJokeUpvote\"></span>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <i class=\"fa fa-thumbs-down red\" aria-hidden=\"true\"></i>\r\n                                    <span [innerHTML]=\"randomJoke.randomJokeDownvote\"></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--- Up vote / Down vote section -->\r\n                <div class=\"col-md-6 up-down-vote\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"card text-white bg-success mb-3\" style=\"max-width: 18rem;\">\r\n                                <div class=\"card-body\"\r\n                                    (click)=\"tryJokeActions('post', randomJoke.randomJokeId, true, false)\">\r\n                                    <p class=\"card-text text-center\"><i style=\"font-size: 80px\"\r\n                                            class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"card text-white bg-danger mb-3\" style=\"max-width: 18rem;\">\r\n                                <div class=\"card-body\"\r\n                                    (click)=\"tryJokeActions('post', randomJoke.randomJokeId, false, true)\">\r\n                                    <p class=\"card-text text-center\"><i style=\"font-size: 80px\"\r\n                                            class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\"></i></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"input-group mb-3\">\r\n                        <input [(ngModel)]=\"jokeId\" type=\"text\" class=\"form-control\" placeholder=\"Search by ID\"\r\n                            aria-label=\"Search by ID\" aria-describedby=\"basic-addon\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-primary\" type=\"button\"\r\n                                (click)=\"tryJokeActions('get', jokeId)\">Search</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Playing with concatMap/mergeMap/Promise-->\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h5 style=\"margin-right: 15px\">Different ways of combining multiple HTTP requests</h5>\r\n                        </div>\r\n                        <div class=\"card-body\" style=\"height:250px;overflow: auto\">\r\n                            <div class=\"\">\r\n                                <b style=\"margin-bottom: 15px;display: inline-block;margin-right:10px\">1) call random\r\n                                    joke API -> send joke id &\r\n                                    call up vote API -> send same joke id & call\r\n                                    down vote API </b>\r\n                                <button type=\"button\" class=\"btn btn-warning btn-sm mr-1\"\r\n                                    (click)=\"concatMap()\">concatMap</button>\r\n                                <button type=\"button\" class=\"btn btn-secondary btn-sm mr-1\"\r\n                                    (click)=\"promise()\">promise</button>\r\n                                <button type=\"button\" class=\"btn btn-dark btn-sm\"\r\n                                    (click)=\"asyncAwait()\">asyncAwait</button>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-body\">\r\n                                                <p><b>ID:</b> {{concatMapJokeApi.id}}</p>\r\n                                                <p><b>Up Vote:</b> {{concatMapJokeApi.upVote}}</p>\r\n                                                <p><b>Down Vote:</b> {{concatMapJokeApi.downVote}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-body\">\r\n                                                <p><b>ID:</b> {{concatMapUpVoteApi.id}}</p>\r\n                                                <p><b>Up Vote:</b> {{concatMapUpVoteApi.upVote}}</p>\r\n                                                <p><b>Down Vote:</b> {{concatMapUpVoteApi.downVote}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-body\">\r\n                                                <p><b>ID:</b> {{concatMapDownVoteApi.id}}</p>\r\n                                                <p><b>Up Vote:</b> {{concatMapDownVoteApi.upVote}}</p>\r\n                                                <p><b>Down Vote:</b> {{concatMapDownVoteApi.downVote}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\" [ngClass]=\"{'bg-success text-white' : concatMapCompleted}\">\r\n                                            <div class=\"card-body\">\r\n                                                Completed\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <hr />\r\n                            <div class=\"\">\r\n                                <b style=\"margin-bottom: 15px;display: inline-block;margin-right:10px\">2) call random\r\n                                    joke API -> send joke id &\r\n                                    call Both up vote API &\r\n                                    down vote API asynchronously</b>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                                    (click)=\"forkJoin()\">forkJoin</button>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-body\">\r\n                                                <p><b>ID:</b> {{forkJoinJokeApi.id}}</p>\r\n                                                <p><b>Up Vote:</b> {{forkJoinJokeApi.upVote}}</p>\r\n                                                <p><b>Down Vote:</b> {{forkJoinJokeApi.downVote}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-body\">\r\n                                                <p><b>ID:</b> {{forkJoinUpVoteApi.id}}</p>\r\n                                                <p><b>Up Vote:</b> {{forkJoinUpVoteApi.upVote}}</p>\r\n                                                <p><b>Down Vote:</b> {{forkJoinUpVoteApi.downVote}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-body\">\r\n                                                <p><b>ID:</b> {{forkJoinDownVoteApi.id}}</p>\r\n                                                <p><b>Up Vote:</b> {{forkJoinDownVoteApi.upVote}}</p>\r\n                                                <p><b>Down Vote:</b> {{forkJoinDownVoteApi.downVote}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\" [ngClass]=\"{'bg-success text-white' : forkJoinCompleted}\">\r\n                                            <div class=\"card-body\">\r\n                                                Completed\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <hr />\r\n                            <div class=\"\">\r\n                                <b style=\"margin-bottom: 15px;display: inline-block;margin-right:10px\">3) call random\r\n                                    joke API -> send joke id &\r\n                                    call up vote API -> send same joke id & call\r\n                                    down vote API</b>\r\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\"\r\n                                    (click)=\"mergeMap()\">mergeMap</button>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-body\">\r\n                                                <p><b>ID:</b> {{mergeMapJokeApi.id}}</p>\r\n                                                <p><b>Up Vote:</b> {{mergeMapJokeApi.upVote}}</p>\r\n                                                <p><b>Down Vote:</b> {{mergeMapJokeApi.downVote}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-body\">\r\n                                                <p><b>ID:</b> {{mergeMapUpVoteApi.id}}</p>\r\n                                                <p><b>Up Vote:</b> {{mergeMapUpVoteApi.upVote}}</p>\r\n                                                <p><b>Down Vote:</b> {{mergeMapUpVoteApi.downVote}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-body\">\r\n                                                <p><b>ID:</b> {{mergeMapDownVoteApi.id}}</p>\r\n                                                <p><b>Up Vote:</b> {{mergeMapDownVoteApi.upVote}}</p>\r\n                                                <p><b>Down Vote:</b> {{mergeMapDownVoteApi.downVote}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card\" [ngClass]=\"{'bg-success text-white' : mergeMapCompleted}\">\r\n                                            <div class=\"card-body\">\r\n                                                Completed\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- For Submit JOKE -->\r\n        <div *ngSwitchCase=\"'submitJoke'\">\r\n            <div class=\"card text-white bg-warning mb-3\" style=\"max-width:50%\">\r\n                <div class=\"card-header\">Submit a Joke</div>\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">\r\n                        <textarea [(ngModel)]=\"jokeContent\" class=\"form-control\" aria-label=\"With textarea\"></textarea>\r\n                    </h5>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger\"\r\n                        (click)=\"submitJoke(jokeContent)\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngSwitchDefault>Default Option</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/joke/components/joke/joke.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/joke/components/joke/joke.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\">\r\n    <h3>Joke Component API List</h3>\r\n    <hr />\r\n    <div class=\"card-deck\">\r\n        <div class=\"card border-info mb-3\" style=\"max-width: 18rem;\" [routerLink]=\"['/joke','randomJoke']\">\r\n            <div class=\"card-header\">Get A Random Joke</div>\r\n            <div class=\"card-body text-info\">\r\n                <h5 class=\"card-title\">Route Resolve test</h5>\r\n                <p class=\"card-text\">\r\n                    On click of this tile, Resolve is fired & on success, routing is activated and user is navigated to a\r\n                    new page containing a random joke.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\" [routerLink]=\"['/joke','submitJoke']\">\r\n            <div class=\"card-header\">Submit a Joke</div>\r\n            <div class=\"card-body text-dark\">\r\n                <h5 class=\"card-title\">POST Api test</h5>\r\n                <p class=\"card-text\">..........</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\">\r\n    <h3>Projects Component</h3>\r\n    <hr />\r\n    <div>\r\n        <div class=\"card-deck\">\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Crime Data</h5>\r\n                    <p class=\"card-text\">Crime data is great for safe neighbourhoods.</p>\r\n                    <a href=\"#\" class=\"btn btn-primary\">Explore</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Joke</h5>\r\n                    <p class=\"card-text\">This api allows you to submit, retrieve and vote for jokes</p>\r\n                    <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/joke']\">Explore</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_fount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-fount.component */ "./src/app/page-not-fount.component.ts");
/* harmony import */ var _projects_projects_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects-routing.module */ "./src/app/projects/projects-routing.module.ts");
/* harmony import */ var _something_went_wrong_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./something-went-wrong.component */ "./src/app/something-went-wrong.component.ts");




// modules


// routing modules
var routes = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full'
    }
], _projects_projects_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProjectsRouting"], [
    {
        path: 'error',
        component: _something_went_wrong_component__WEBPACK_IMPORTED_MODULE_5__["SomethingWentWrongComponent"]
    },
    {
        path: '**',
        component: _page_not_fount_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    }
]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);\n  height: 55px;\n  font-size: 16px;\n  font-family: sans-serif;\n}\nheader .user-name {\n  padding-right: 10px;\n  border-right: 1px solid #ffffff;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXFdvcmtzcGFjZVxcUmFwaWRBcGlBbmd1bGFyOC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRENJO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDk3NSk7XHJcbiAgICBoZWlnaHQgICAgICAgOiA1NXB4O1xyXG4gICAgZm9udC1zaXplICAgIDogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5ICA6IHNhbnMtc2VyaWY7XHJcblxyXG4gICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXItcmlnaHQgOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICBjb2xvciAgICAgICAgOiAjZmZmZmZmO1xyXG4gICAgfVxyXG59XHJcbiIsImhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDk3NSk7XG4gIGhlaWdodDogNTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbmhlYWRlciAudXNlci1uYW1lIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZmZmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/service/shared.service */ "./src/app/core/service/shared.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(sharedService, router) {
        var _this = this;
        this.sharedService = sharedService;
        this.router = router;
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.router.events.subscribe(function (event) {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]: {
                    _this.loading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationError"]: {
                    _this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getUserData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (res) {
            if (res) {
                var userData = res.data;
                _this.userName = userData.first_name + ' ' + userData.last_name;
            }
            else {
                _this.userName = '';
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _core_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_fount_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-fount.component */ "./src/app/page-not-fount.component.ts");
/* harmony import */ var _something_went_wrong_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./something-went-wrong.component */ "./src/app/something-went-wrong.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _projects_projects_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/projects.module */ "./src/app/projects/projects.module.ts");






// components



// modules


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _page_not_fount_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _something_went_wrong_component__WEBPACK_IMPORTED_MODULE_8__["SomethingWentWrongComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _projects_projects_module__WEBPACK_IMPORTED_MODULE_10__["ProjectsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/service/shared.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/service/shared.service.ts ***!
  \************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var SharedService = /** @class */ (function () {
    function SharedService(http) {
        this.http = http;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    SharedService.prototype.setUserData = function (data) {
        this.userData.next(data);
    };
    SharedService.prototype.getUserData = function () {
        return this.userData.asObservable();
    };
    SharedService.prototype.handleError = function (error) {
        var errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // Server-side errors
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    SharedService.prototype.userService = function () {
        var url = 'https://reqres.in/api/users/2';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SharedService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/core/service/user-resolver.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/service/user-resolver.service.ts ***!
  \*******************************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.service */ "./src/app/core/service/shared.service.ts");







var UserResolver = /** @class */ (function () {
    function UserResolver(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
    }
    UserResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.sharedService.userService()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            localStorage.setItem('userInfo', JSON.stringify(result));
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            localStorage.removeItem('userInfo');
            _this.sharedService.setUserData(null);
            _this.router.navigate(['/error']);
            var message = "Retrieval error: " + error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ userDate: null, error: message });
        }));
    };
    UserResolver.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
    ]; };
    UserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "./src/app/page-not-fount.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-fount.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h1>This is not the page you were looking for!</h1>\n    "
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/projects/joke/components/joke-apis/joke-apis.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/projects/joke/components/joke-apis/joke-apis.component.ts ***!
  \***************************************************************************/
/*! exports provided: JokeApisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokeApisComponent", function() { return JokeApisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_joke_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/joke-apis.service */ "./src/app/projects/joke/components/joke-apis/service/joke-apis.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var JokeApisComponent = /** @class */ (function () {
    function JokeApisComponent(router, activatedRoute, jokeApisService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.jokeApisService = jokeApisService;
        this.loading = false;
        this.apiTitle = '';
        this.jokeAction = '';
        this.randomJoke = {};
        this.concatMapJokeApi = {};
        this.concatMapUpVoteApi = {};
        this.concatMapDownVoteApi = {};
        this.forkJoinJokeApi = {};
        this.forkJoinUpVoteApi = {};
        this.forkJoinDownVoteApi = {};
        this.mergeMapJokeApi = {};
        this.mergeMapUpVoteApi = {};
        this.mergeMapDownVoteApi = {};
        this.concatMapCompleted = false;
        this.forkJoinCompleted = false;
        this.mergeMapCompleted = false;
    }
    JokeApisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap
            .subscribe(function (params) {
            var currentUrl = params.get('id');
            _this.trackJokeUrl(currentUrl);
        });
        this.activatedRoute.data
            .subscribe(function (data) {
            _this.populateJoke(data.jokeData);
        });
    };
    JokeApisComponent.prototype.clearCache = function () {
        this.jokeApisService.clearCache();
    };
    JokeApisComponent.prototype.trackJokeUrl = function (result) {
        var url = result;
        switch (url) {
            case 'randomJoke':
                this.jokeAction = 'randomJoke';
                this.apiTitle = 'Get a random Joke';
                break;
            case 'submitJoke':
                this.jokeAction = 'submitJoke';
                this.apiTitle = 'Submit a Joke';
                break;
        }
    };
    JokeApisComponent.prototype.tryJokeActions = function (type, id, upVote, downVote) {
        var _this = this;
        if (id === void 0) { id = ''; }
        if (upVote === void 0) { upVote = false; }
        if (downVote === void 0) { downVote = false; }
        this.loading = true;
        this.jokeApisService.tryJokeActions(type, id, upVote, downVote)
            .subscribe(function (res) {
            if (res) {
                _this.populateJoke(res);
                _this.loading = false;
            }
            else {
                _this.errorStatement();
            }
        }, function (error) {
            _this.errorStatement();
        });
    };
    JokeApisComponent.prototype.submitJoke = function (theJoke) {
        this.jokeApisService.submitJoke(theJoke)
            .subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    JokeApisComponent.prototype.populateJoke = function (apiData) {
        this.randomJoke.randomJokeId = apiData.id;
        this.randomJoke.randomJokeBody = apiData.content;
        this.randomJoke.randomJokeUpvote = apiData.upvotes;
        this.randomJoke.randomJokeDownvote = apiData.downvotes;
    };
    JokeApisComponent.prototype.errorStatement = function () {
        this.loading = false;
        this.randomJoke.randomJokeId = '000';
        this.randomJoke.randomJokeBody = 'Some Error Occured !!!';
        this.randomJoke.randomJokeUpvote = 0;
        this.randomJoke.randomJokeDownvote = 0;
    };
    /* concatMap starts */
    JokeApisComponent.prototype.concatMap = function () {
        var _this = this;
        this.concatMapCompleted = false;
        this.jokeApisService.tryJokeActions('get') // call 1st API
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.showCMJokeApiData(result);
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (randJoke) {
            return _this.jokeApisService.tryJokeActions('post', randJoke['id'], true, false); // call 2nd API
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (randJoke) {
            _this.showCMUpVoteApiData(randJoke);
            return _this.jokeApisService.tryJokeActions('post', randJoke['id'], false, true); // call 3rd API
        })).subscribe(function (res) {
            _this.showCMDownVoteApiData(res);
            _this.concatMapCompleted = true;
        }, function (error) {
            _this.concatMapCompleted = true;
            console.log(error);
        });
    };
    JokeApisComponent.prototype.showCMJokeApiData = function (result) {
        this.concatMapJokeApi.id = result.id;
        this.concatMapJokeApi.upVote = result.upvotes;
        this.concatMapJokeApi.downVote = result.downvotes;
    };
    JokeApisComponent.prototype.showCMUpVoteApiData = function (result) {
        this.concatMapUpVoteApi.id = result.id;
        this.concatMapUpVoteApi.upVote = result.upvotes;
        this.concatMapUpVoteApi.downVote = result.downvotes;
    };
    JokeApisComponent.prototype.showCMDownVoteApiData = function (result) {
        this.concatMapDownVoteApi.id = result.id;
        this.concatMapDownVoteApi.upVote = result.upvotes;
        this.concatMapDownVoteApi.downVote = result.downvotes;
    };
    /* concatMap ends */
    /* Promise Starts */
    JokeApisComponent.prototype.promise = function () {
        var _this = this;
        this.concatMapCompleted = false;
        var promise = new Promise(function (resolve, reject) {
            _this.jokeApisService.tryJokeActions('get') // call 1st API
                .toPromise()
                .then(function (result) {
                _this.showCMJokeApiData(result);
                _this.jokeApisService.tryJokeActions('post', result['id'], true, false) // call 2nd API
                    .toPromise()
                    .then(function (res) {
                    _this.showCMUpVoteApiData(res);
                    _this.jokeApisService.tryJokeActions('post', res['id'], false, true) // call 3rd API
                        .toPromise()
                        .then(function (sol) {
                        _this.showCMDownVoteApiData(sol);
                        _this.concatMapCompleted = true;
                        resolve();
                    }, function (error) {
                        reject(error);
                    });
                }, function (error) {
                    reject(error);
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    /* Promise Ends */
    /* asyncAwait Starts */
    JokeApisComponent.prototype.asyncAwait = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var randomJoke, upVote, downVote;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.concatMapCompleted = false;
                        return [4 /*yield*/, this.jokeApisService.tryJokeActions('get').toPromise()];
                    case 1:
                        randomJoke = _a.sent();
                        this.showCMJokeApiData(randomJoke);
                        return [4 /*yield*/, this.jokeApisService.tryJokeActions('post', randomJoke['id'], true, false).toPromise()];
                    case 2:
                        upVote = _a.sent();
                        this.showCMUpVoteApiData(upVote);
                        return [4 /*yield*/, this.jokeApisService.tryJokeActions('post', randomJoke['id'], false, true).toPromise()];
                    case 3:
                        downVote = _a.sent();
                        this.showCMDownVoteApiData(downVote);
                        this.concatMapCompleted = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /* asyncAwait Ends */
    /* forkJoin Starts */
    JokeApisComponent.prototype.forkJoin = function () {
        var _this = this;
        this.forkJoinCompleted = false;
        var upVote;
        var downVote;
        this.jokeApisService.tryJokeActions('get')
            .subscribe(function (res) {
            _this.showFJJokeApiData(res);
            upVote = _this.jokeApisService.tryJokeActions('post', res['id'], true, false);
            downVote = _this.jokeApisService.tryJokeActions('post', res['id'], false, true);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])([upVote, downVote]).subscribe(function (combinedRes) {
                var upVoteResult = combinedRes[0];
                var downVoteResult = combinedRes[1];
                _this.showFJUpVoteApiData(upVoteResult);
                _this.showFJDownVoteApiData(downVoteResult);
                _this.forkJoinCompleted = true;
            }, function (error) {
                _this.forkJoinCompleted = true;
                console.log(error);
            });
        });
    };
    JokeApisComponent.prototype.showFJJokeApiData = function (result) {
        this.forkJoinJokeApi.id = result.id;
        this.forkJoinJokeApi.upVote = result.upvotes;
        this.forkJoinJokeApi.downVote = result.downvotes;
    };
    JokeApisComponent.prototype.showFJUpVoteApiData = function (result) {
        this.forkJoinUpVoteApi.id = result.id;
        this.forkJoinUpVoteApi.upVote = result.upvotes;
        this.forkJoinUpVoteApi.downVote = result.downvotes;
    };
    JokeApisComponent.prototype.showFJDownVoteApiData = function (result) {
        this.forkJoinDownVoteApi.id = result.id;
        this.forkJoinDownVoteApi.upVote = result.upvotes;
        this.forkJoinDownVoteApi.downVote = result.downvotes;
    };
    /* forkJoin ends */
    /* mergeMap starts */
    JokeApisComponent.prototype.mergeMap = function () {
        var _this = this;
        this.mergeMapCompleted = false;
        this.jokeApisService.tryJokeActions('get') // call 1st API
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.showMMJokeApiData(result);
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (randJoke) {
            return _this.jokeApisService.tryJokeActions('post', randJoke['id'], true, false); // call 2nd API
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (randJoke) {
            _this.showMMUpVoteApiData(randJoke);
            return _this.jokeApisService.tryJokeActions('post', randJoke['id'], false, true); // call 3rd API
        })).subscribe(function (res) {
            _this.showMMDownVoteApiData(res);
            _this.mergeMapCompleted = true;
        }, function (error) {
            _this.mergeMapCompleted = true;
            console.log(error);
        });
    };
    JokeApisComponent.prototype.showMMJokeApiData = function (result) {
        this.mergeMapJokeApi.id = result.id;
        this.mergeMapJokeApi.upVote = result.upvotes;
        this.mergeMapJokeApi.downVote = result.downvotes;
    };
    JokeApisComponent.prototype.showMMUpVoteApiData = function (result) {
        this.mergeMapUpVoteApi.id = result.id;
        this.mergeMapUpVoteApi.upVote = result.upvotes;
        this.mergeMapUpVoteApi.downVote = result.downvotes;
    };
    JokeApisComponent.prototype.showMMDownVoteApiData = function (result) {
        this.mergeMapDownVoteApi.id = result.id;
        this.mergeMapDownVoteApi.upVote = result.upvotes;
        this.mergeMapDownVoteApi.downVote = result.downvotes;
    };
    JokeApisComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _service_joke_apis_service__WEBPACK_IMPORTED_MODULE_3__["JokeApisService"] }
    ]; };
    JokeApisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'joke-apis',
            template: __webpack_require__(/*! raw-loader!./joke-apis.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/joke/components/joke-apis/joke-apis.component.html"),
        })
        /*
            concatMap : 1) This works for pure sequential API calls. Only when first API subscription is completely
                           finished, next API call get subscribed.
                        2) If any API fails, rest of the subsequent API calls will be suspended & error will thrown
                           inside subscriber
                        3) If total 3 sequential API call is there & 2nd one fails, still 1st API response will be available instantly.
            mergeMap :  1) This works for asynchronous API calls. Starts emitting responses whenever any
                           one API call completes. If one fails, still completed one will emit response. But in below example
                           mergeMap is used to do sequestial API calls. So mergeMap & cancatMap is working almost in same manner.
                        2) If total 3 sequential API call is there & 2nd one fails, still 1st API response will be available instantly.
            forkJoin :  1) This works for asynchronous API calls. Provide response only when all API
                           calls are completed.
                        2) If one fails, complete subscription will fail.
                        3) If total 3 sequential API call is there & 2nd one fails, all of them will fail.
        */
    ], JokeApisComponent);
    return JokeApisComponent;
}());



/***/ }),

/***/ "./src/app/projects/joke/components/joke-apis/service/joke-apis-resolver.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/projects/joke/components/joke-apis/service/joke-apis-resolver.service.ts ***!
  \******************************************************************************************/
/*! exports provided: JokeApisResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokeApisResolverService", function() { return JokeApisResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _joke_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./joke-apis.service */ "./src/app/projects/joke/components/joke-apis/service/joke-apis.service.ts");




var JokeApisResolverService = /** @class */ (function () {
    function JokeApisResolverService(jokeApisService, router) {
        this.jokeApisService = jokeApisService;
        this.router = router;
    }
    JokeApisResolverService.prototype.resolve = function (route, state) {
        /* only if the user selects Random Joke, the api will be fired to get data before
           navigating to Random Joke page with resolver service. For others the resolver simply returns
           (for resolver error handling code, please refer to "user-resolver.service.ts")
        */
        var jokeId = route.params.id;
        if (jokeId === 'randomJoke') {
            return this.jokeApisService.randomJokeWithCaching('get');
        }
        else {
            return;
        }
    };
    JokeApisResolverService.ctorParameters = function () { return [
        { type: _joke_apis_service__WEBPACK_IMPORTED_MODULE_3__["JokeApisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    JokeApisResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], JokeApisResolverService);
    return JokeApisResolverService;
}());



/***/ }),

/***/ "./src/app/projects/joke/components/joke-apis/service/joke-apis.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/projects/joke/components/joke-apis/service/joke-apis.service.ts ***!
  \*********************************************************************************/
/*! exports provided: JokeApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokeApisService", function() { return JokeApisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var JokeApisService = /** @class */ (function () {
    function JokeApisService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-rapidapi-host': 'joke3.p.rapidapi.com',
                'x-rapidapi-key': 'be2b3e0d7cmshb5ad01829f9e0aep13bff7jsn4511e33d557e'
            })
        };
        this.theApi = 'https://joke3.p.rapidapi.com/v1/joke';
    }
    JokeApisService.prototype.handleError = function (error) {
        var errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // Server-side errors
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    JokeApisService.prototype.tryJokeActions = function (type, id, upvote, downvote) {
        var jokeId = id ? ('/' + id) : '';
        var upVote = upvote ? '/upvote' : '';
        var downVote = downvote ? '/downvote' : '';
        var url = this.theApi + ("" + jokeId) + upVote + downVote;
        if (type === 'get') {
            return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
        else if (type === 'post') {
            return this.http.post(url, {}, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
    };
    JokeApisService.prototype.submitJoke = function (theJoke) {
        var params = {
            content: theJoke,
            nsfw: false
        };
        return this.http.post(this.theApi, params, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // front end caching example
    JokeApisService.prototype.randomJokeWithCaching = function (type, id, upvote, downvote) {
        var jokeId = id ? ('/' + id) : '';
        var upVote = upvote ? '/upvote' : '';
        var downVote = downvote ? '/downvote' : '';
        var url = this.theApi + ("" + jokeId) + upVote + downVote;
        if (type === 'get') {
            if (!this.configs) {
                this.configs = this.http.get(url, this.httpOptions)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishReplay"])(1), // this tells Rx to cache the latest emitted
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), // and this tells Rx to keep the Observable alive as long as there are any Subscribers
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
            }
            return this.configs;
        }
    };
    // Clear configs
    JokeApisService.prototype.clearCache = function () {
        this.configs = null;
        alert('Cache removed !!!');
    };
    JokeApisService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    JokeApisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], JokeApisService);
    return JokeApisService;
}());



/***/ }),

/***/ "./src/app/projects/joke/components/joke/joke.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/projects/joke/components/joke/joke.component.ts ***!
  \*****************************************************************/
/*! exports provided: JokeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokeComponent", function() { return JokeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JokeComponent = /** @class */ (function () {
    function JokeComponent() {
    }
    JokeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'joke',
            template: __webpack_require__(/*! raw-loader!./joke.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/joke/components/joke/joke.component.html")
        })
    ], JokeComponent);
    return JokeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRouting", function() { return ProjectsRouting; });
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _joke_components_joke_joke_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joke/components/joke/joke.component */ "./src/app/projects/joke/components/joke/joke.component.ts");
/* harmony import */ var _joke_components_joke_apis_joke_apis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./joke/components/joke-apis/joke-apis.component */ "./src/app/projects/joke/components/joke-apis/joke-apis.component.ts");
/* harmony import */ var _core_service_user_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/service/user-resolver.service */ "./src/app/core/service/user-resolver.service.ts");
/* harmony import */ var _joke_components_joke_apis_service_joke_apis_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./joke/components/joke-apis/service/joke-apis-resolver.service */ "./src/app/projects/joke/components/joke-apis/service/joke-apis-resolver.service.ts");



// services


var ProjectsRouting = [
    { path: 'projects', component: _projects_component__WEBPACK_IMPORTED_MODULE_0__["ProjectsComponent"], resolve: { userDate: _core_service_user_resolver_service__WEBPACK_IMPORTED_MODULE_3__["UserResolver"] } },
    {
        path: 'joke',
        children: [
            { path: '', component: _joke_components_joke_joke_component__WEBPACK_IMPORTED_MODULE_1__["JokeComponent"] },
            { path: ':id', component: _joke_components_joke_apis_joke_apis_component__WEBPACK_IMPORTED_MODULE_2__["JokeApisComponent"], resolve: { jokeData: _joke_components_joke_apis_service_joke_apis_resolver_service__WEBPACK_IMPORTED_MODULE_4__["JokeApisResolverService"] } }
        ]
    }
];


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/service/shared.service */ "./src/app/core/service/shared.service.ts");




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(activatedRoute, sharedService) {
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data
            .subscribe(function (data) {
            _this.sharedService.setUserData(data.userDate);
        });
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
    ]; };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html")
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _joke_components_joke_joke_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./joke/components/joke/joke.component */ "./src/app/projects/joke/components/joke/joke.component.ts");
/* harmony import */ var _joke_components_joke_apis_joke_apis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./joke/components/joke-apis/joke-apis.component */ "./src/app/projects/joke/components/joke-apis/joke-apis.component.ts");








var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                _joke_components_joke_joke_component__WEBPACK_IMPORTED_MODULE_6__["JokeComponent"],
                _joke_components_joke_apis_joke_apis_component__WEBPACK_IMPORTED_MODULE_7__["JokeApisComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                _joke_components_joke_joke_component__WEBPACK_IMPORTED_MODULE_6__["JokeComponent"],
                _joke_components_joke_apis_joke_apis_component__WEBPACK_IMPORTED_MODULE_7__["JokeApisComponent"]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/something-went-wrong.component.ts":
/*!***************************************************!*\
  !*** ./src/app/something-went-wrong.component.ts ***!
  \***************************************************/
/*! exports provided: SomethingWentWrongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomethingWentWrongComponent", function() { return SomethingWentWrongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SomethingWentWrongComponent = /** @class */ (function () {
    function SomethingWentWrongComponent() {
    }
    SomethingWentWrongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<h2>Something Went Wrong !!!</h2>"
        })
    ], SomethingWentWrongComponent);
    return SomethingWentWrongComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Workspace\RapidApiAngular8\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map