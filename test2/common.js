(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "BLRO":
/*!*******************************************!*\
  !*** ./src/app/utils/getAddressString.ts ***!
  \*******************************************/
/*! exports provided: getAddressString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressString", function() { return getAddressString; });
function getAddressString(address) {
    return `${address.city} ${address.street} ${address.suite}`;
}


/***/ }),

/***/ "MZWI":
/*!*****************************************************!*\
  !*** ./src/app/pipe/address/address.pipe.module.ts ***!
  \*****************************************************/
/*! exports provided: AddressPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPipeModule", function() { return AddressPipeModule; });
/* harmony import */ var _address_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.pipe */ "tfwU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddressPipeModule {
}
AddressPipeModule.ɵfac = function AddressPipeModule_Factory(t) { return new (t || AddressPipeModule)(); };
AddressPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddressPipeModule });
AddressPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddressPipeModule, { declarations: [_address_pipe__WEBPACK_IMPORTED_MODULE_0__["AddressPipe"]], exports: [_address_pipe__WEBPACK_IMPORTED_MODULE_0__["AddressPipe"]] }); })();


/***/ }),

/***/ "j4PG":
/*!************************************************!*\
  !*** ./src/app/shared/loader/loader.module.ts ***!
  \************************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.component */ "o7am");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderModule {
}
LoaderModule.ɵfac = function LoaderModule_Factory(t) { return new (t || LoaderModule)(); };
LoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoaderModule });
LoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoaderModule, { declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_0__["LoaderComponent"]], exports: [_loader_component__WEBPACK_IMPORTED_MODULE_0__["LoaderComponent"]] }); })();


/***/ }),

/***/ "o7am":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoaderComponent {
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 0, consts: [[1, "loader"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loader[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get("https://jsonplaceholder.typicode.com/users")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([])));
    }
    getUserInfo(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])([
            this.http.get(`https://jsonplaceholder.typicode.com/users?id=${id}`),
            this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([users, tasks]) => ({ user: users[0], tasks })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null)));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tfwU":
/*!**********************************************!*\
  !*** ./src/app/pipe/address/address.pipe.ts ***!
  \**********************************************/
/*! exports provided: AddressPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPipe", function() { return AddressPipe; });
/* harmony import */ var _app_utils_getAddressString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/utils/getAddressString */ "BLRO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddressPipe {
    transform(address) {
        return Object(_app_utils_getAddressString__WEBPACK_IMPORTED_MODULE_0__["getAddressString"])(address);
    }
}
AddressPipe.ɵfac = function AddressPipe_Factory(t) { return new (t || AddressPipe)(); };
AddressPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "address", type: AddressPipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=common.js.map