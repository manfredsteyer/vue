(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav {\r\n    color: black;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-bottom: 1px black solid;\r\n    margin-bottom: 20px;\r\n}\r\n\r\na, a:visited, a:active {\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    color: black;\r\n    text-decoration: underline;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\r\n      <sidebar-cmp></sidebar-cmp>\r\n  </div>\r\n  <div class=\"main-panel\">\r\n      <navbar-cmp></navbar-cmp>\r\n      <div id=\"content\" class=\"content\">\r\n        <!-- Web Components go here -->\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var state_service_1 = __webpack_require__(/*! ./state.service */ "./src/app/state.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(stateService) {
        this.stateService = stateService;
        this.config = {
            "client-a": {
                loaded: false,
                path: 'client-a/main.bundle.js',
                element: 'client-a'
            },
            "client-b": {
                loaded: false,
                path: 'client-b/main.bundle.js',
                element: 'client-b'
            },
            "client-c": {
                loaded: false,
                path: 'client-c/main.bundle.js',
                element: 'flight-booking'
            },
            "client-d": {
                loaded: false,
                path: 'client-d/main.bundle.js',
                element: ''
            },
            "client-e": {
                loaded: false,
                path: 'client-e/main.js',
                element: 'booking-list'
            }
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.load('client-a');
        this.load('client-b');
        this.load('client-c');
        this.load('client-d');
        this.load('client-e');
    };
    AppComponent.prototype.load = function (name) {
        var _this = this;
        var configItem = this.config[name];
        if (configItem.loaded)
            return;
        var content = document.getElementById('content');
        var script = document.createElement('script');
        script.src = configItem.path;
        content.appendChild(script);
        if (configItem.element) {
            var element_1 = document.createElement(configItem.element);
            content.appendChild(element_1);
            element_1.addEventListener('message', function (msg) { return _this.handleMessage(msg); });
            element_1.setAttribute('state', 'init');
            script.onerror = function () { return console.error("error loading " + configItem.path); };
            this.stateService.registerClient(element_1);
        }
    };
    AppComponent.prototype.handleMessage = function (msg) {
        console.debug('shell received message: ', msg.detail);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [state_service_1.StateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var navbar_component_1 = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var sidebar_component_1 = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                sidebar_component_1.SidebarComponent,
                navbar_component_1.NavbarComponent
            ],
            imports: [
                platform_browser_1.BrowserModule
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar bar1\"></span>\r\n                <span class=\"icon-bar bar2\"></span>\r\n                <span class=\"icon-bar bar3\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Flight42</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"ti-panel\"></i>\r\n                        <p>Stats</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"ti-bell\"></i>\r\n                            <p class=\"notification\">5</p>\r\n                            <p>Notifications</p>\r\n                            <b class=\"caret\"></b>\r\n                      </a>\r\n                      <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Notification 1</a></li>\r\n                        <li><a href=\"#\">Notification 2</a></li>\r\n                        <li><a href=\"#\">Notification 3</a></li>\r\n                        <li><a href=\"#\">Notification 4</a></li>\r\n                        <li><a href=\"#\">Another notification</a></li>\r\n                      </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <i class=\"ti-settings\"></i>\r\n                        <p>Settings</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.sidebarToggle = function () {
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar-cmp',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html")
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"sidebar-wrapper\">\r\n    <div class=\"logo\">\r\n        <a class=\"simple-text\">\r\n            <div class=\"logo-img\">\r\n                <img src=\"../../assets/img/angular2-logo.png\" alt=\"\">\r\n            </div>\r\n            Flight42\r\n        </a>\r\n    </div>\r\n    <ul class=\"nav\">\r\n        <li>\r\n            <a href=\"#\">\r\n                <i class=\"ti-home\"></i>\r\n                <p>Home</p>\r\n            </a>\r\n        </li>\r\n\r\n        <li>\r\n            <a href=\"#/client-a/page1\">\r\n                <i class=\"ti-arrow-top-right\"></i>\r\n                <p>Flights</p>\r\n            </a>\r\n        </li>\r\n\r\n        <li>\r\n            <a href=\"#/client-b/page1\">\r\n                <i class=\"ti-user\"></i>\r\n                <p>Passengers</p>\r\n            </a>\r\n        </li>\r\n\r\n        <li>\r\n            <a href=\"#/booking/payment\">\r\n                <i class=\"ti-user\"></i>\r\n                <p>Payment</p>\r\n            </a>\r\n        </li>\r\n\r\n        <li routerLinkActive=\"active\">\r\n            <a (click)=\"sendState()\">\r\n                <i class=\"ti-close\"></i>\r\n                <p>Send State</p>\r\n            </a>\r\n            </li>\r\n\r\n        <!--\r\n            <li routerLinkActive=\"active\">\r\n            <a>\r\n                <i class=\"ti-shopping-cart\"></i>\r\n                <p>Basket</p>\r\n            </a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n            <a>\r\n                <i class=\"ti-close\"></i>\r\n                <p>Hide Basket</p>\r\n            </a>\r\n            </li>\r\n        -->\r\n        \r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var state_service_1 = __webpack_require__(/*! ./../state.service */ "./src/app/state.service.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(stateService) {
        this.stateService = stateService;
    }
    SidebarComponent.prototype.sendState = function () {
        this.stateService.setState('Info from Shell');
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar-cmp',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [state_service_1.StateService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "./src/app/state.service.ts":
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var StateService = /** @class */ (function () {
    function StateService() {
        this.state$ = new rxjs_1.Subject();
        this.clients = [];
    }
    StateService.prototype.registerClient = function (client) {
        this.clients.push(client);
    };
    StateService.prototype.setState = function (state) {
        for (var _i = 0, _a = this.clients; _i < _a.length; _i++) {
            var client = _a[_i];
            client.setAttribute('state', state);
        }
    };
    StateService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());
exports.StateService = StateService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Manfred\Documents\artikel\vue_react_angular\sample\shell\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map