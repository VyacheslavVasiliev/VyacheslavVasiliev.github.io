(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Xc9":
/*!**************************************************!*\
  !*** ./src/app/features/header/header.module.ts ***!
  \**************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "WaYh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\development\test\src\main.ts */"zUnb");


/***/ }),

/***/ "0cVi":
/*!****************************************************************************!*\
  !*** ./src/app/features/connection/pipe/filter-services-by-string.pipe.ts ***!
  \****************************************************************************/
/*! exports provided: FilterServicesByStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterServicesByStringPipe", function() { return FilterServicesByStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterServicesByStringPipe {
    transform(services = [], filterString) {
        if (filterString === undefined) {
            throw new Error('filterServicesByString requires a string to filter');
        }
        return services.filter(service => service.name.toLowerCase().includes(filterString.toLocaleLowerCase()));
    }
}
FilterServicesByStringPipe.ɵfac = function FilterServicesByStringPipe_Factory(t) { return new (t || FilterServicesByStringPipe)(); };
FilterServicesByStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterServicesByString", type: FilterServicesByStringPipe, pure: true });


/***/ }),

/***/ "2aYK":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/user.reducers.ts ***!
  \*************************************************/
/*! exports provided: userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.actions */ "mYIz");
/* harmony import */ var _state_user_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/user.state */ "yH09");


const userReducer = (state = _state_user_state__WEBPACK_IMPORTED_MODULE_1__["InitialUserState"], action) => {
    switch (action.type) {
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["EUserActions"].SET_USERS: {
            return Object.assign(Object.assign({}, state), { users: action.payload });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["EUserActions"].SET_ACTIVE_USER: {
            const userIndex = state.users.indexOf(action.payload);
            return Object.assign(Object.assign({}, state), { activeUserIndex: userIndex });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["EUserActions"].SET_ACTIVE_USER_SERVICES: {
            return Object.assign(Object.assign({}, state), { users: state.users.map((user, index) => {
                    if (index === state.activeUserIndex) {
                        return Object.assign(Object.assign({}, user), { services: action.payload });
                    }
                    return user;
                }) });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["EUserActions"].CHANGE_ACTIVE_USER: {
            return Object.assign(Object.assign({}, state), { users: state.users.map((user, index) => {
                    if (index === state.activeUserIndex) {
                        return action.payload;
                    }
                    return user;
                }) });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "2ifB":
/*!***********************************************************************************!*\
  !*** ./src/app/features/connection/components/connection/connection.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionComponent", function() { return ConnectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users-list/users-list.component */ "ai7G");
/* harmony import */ var _connected_services_connected_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connected-services/connected-services.component */ "SDJv");
/* harmony import */ var _available_services_available_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../available-services/available-services.component */ "MVMG");




class ConnectionComponent {
}
ConnectionComponent.ɵfac = function ConnectionComponent_Factory(t) { return new (t || ConnectionComponent)(); };
ConnectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectionComponent, selectors: [["app-connection"]], decls: 6, vars: 0, consts: [[1, "connection"], [1, "connection__cell", "connection__cell--user-list"], [1, "connection__cell", "connection__cell--services"], [1, "connection__connected-services"]], template: function ConnectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-users-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-connected-services", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-available-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_1__["UsersListComponent"], _connected_services_connected_services_component__WEBPACK_IMPORTED_MODULE_2__["ConnectedServicesComponent"], _available_services_available_services_component__WEBPACK_IMPORTED_MODULE_3__["AvailableServicesComponent"]], styles: [".connection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  max-width: 850px;\n  margin: 0 auto;\n}\n.connection__cell[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  border-radius: 6px;\n}\n.connection__cell--user-list[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 33%;\n}\n.connection__cell--services[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  width: 66%;\n}\n.connection__connected-services[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbm5lY3Rpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUFGRjtBQUlFO0VDVEEsc0JBQUE7RUFDQSxrQkFBQTtBRFFGO0FBR0k7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQUROO0FBSUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFGTjtBQU1FO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBSkoiLCJmaWxlIjoiY29ubmVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvbWl4aW5zXCI7XHJcblxyXG4uY29ubmVjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAmX19jZWxsIHtcclxuICAgIEBpbmNsdWRlIGNlbGwoKTtcclxuXHJcbiAgICAmLS11c2VyLWxpc3Qge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgfVxyXG5cclxuICAgICYtLXNlcnZpY2Vze1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgIHdpZHRoOiA2NiU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jb25uZWN0ZWQtc2VydmljZXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufSIsIkBtaXhpbiBjZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5AbWl4aW4gZHJvcEZvY3VzIHtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogYmxhY2sgYXV0byAxcHg7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "7VtJ":
/*!*****************************************************************!*\
  !*** ./src/app/features/connection/pipe/services-price.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: ServicesPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPricePipe", function() { return ServicesPricePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ServicesPricePipe {
    transform(services = []) {
        return services.reduce((price, service) => service.connectionDate ? (price + service.price) : price, 0);
    }
}
ServicesPricePipe.ɵfac = function ServicesPricePipe_Factory(t) { return new (t || ServicesPricePipe)(); };
ServicesPricePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "servicesPrice", type: ServicesPricePipe, pure: true });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "B8n2":
/*!***********************************************************************!*\
  !*** ./src/app/shared/form/components/checkbox/checkbox.component.ts ***!
  \***********************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CheckboxComponent {
    constructor() {
        this.checkboxFc = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("");
    }
    get fC() {
        return this.checkboxFc;
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["app-checkbox"]], inputs: { checkboxFc: "checkboxFc" }, decls: 3, vars: 1, consts: [["type", "checkbox", 1, "checkbox", 3, "formControl"], [1, "checkbox__fake"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.fC);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "CbSU":
/*!**************************************!*\
  !*** ./src/app/mockData/SERVICES.ts ***!
  \**************************************/
/*! exports provided: SERVICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICES", function() { return SERVICES; });
const SERVICES = [
    {
        name: "Какое-то имя",
        price: 100,
    },
    {
        name: "Еще одно имя",
        price: 1000,
        connectionDate: new Date()
    },
    {
        name: "Очередное имя",
        price: 0,
    },
    {
        name: "Стандартное имя",
        price: 10,
    },
    {
        name: "Именное имя",
        price: 5000,
        connectionDate: new Date(),
    },
];


/***/ }),

/***/ "Fumy":
/*!**************************************************!*\
  !*** ./src/app/store/selectors/user.selector.ts ***!
  \**************************************************/
/*! exports provided: selectUsers, selectActiveUser, selectActiveUserServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUsers", function() { return selectUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectActiveUser", function() { return selectActiveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectActiveUserServices", function() { return selectActiveUserServices; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectUsersState = (state) => state.users;
const selectUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUsersState, (state) => state.users);
const selectActiveUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUsersState, (state) => state.users[state.activeUserIndex]);
const selectActiveUserServices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUsersState, (state) => state.users[state.activeUserIndex].services);


/***/ }),

/***/ "HLeU":
/*!******************************************!*\
  !*** ./src/app/features/header/index.ts ***!
  \******************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.module */ "+Xc9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return _header_module__WEBPACK_IMPORTED_MODULE_0__["HeaderModule"]; });




/***/ }),

/***/ "LTal":
/*!********************************************************************!*\
  !*** ./src/app/features/connection/pipe/services-quantity.pipe.ts ***!
  \********************************************************************/
/*! exports provided: ServicesQuantityPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesQuantityPipe", function() { return ServicesQuantityPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ServicesQuantityPipe {
    transform(services = []) {
        return services.reduce((quantity, service) => service.connectionDate ? ++quantity : quantity, 0);
    }
}
ServicesQuantityPipe.ɵfac = function ServicesQuantityPipe_Factory(t) { return new (t || ServicesQuantityPipe)(); };
ServicesQuantityPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "servicesQuantity", type: ServicesQuantityPipe, pure: true });


/***/ }),

/***/ "MVMG":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/connection/components/available-services/available-services.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AvailableServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableServicesComponent", function() { return AvailableServicesComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.memoize */ "uyHG");
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/store/selectors/user.selector */ "Fumy");
/* harmony import */ var _app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/store/actions/user.actions */ "mYIz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-search.service */ "T8XF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_form_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/form/components/button/button.component */ "SXoD");
/* harmony import */ var _pipe_filter_services_by_string_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipe/filter-services-by-string.pipe */ "0cVi");










function AvailableServicesComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u043D\u0435\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AvailableServicesComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AvailableServicesComponent_li_5_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const service_r2 = ctx.$implicit; const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.selectService(_r4.checked, service_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", service_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", service_r2.price, " \u0440\u0443\u0431");
} }
class AvailableServicesComponent {
    constructor(_store, _userSearchService, cdr) {
        this._store = _store;
        this._userSearchService = _userSearchService;
        this.cdr = cdr;
        this.serviceSearch = "";
        // Сервисы
        this._services = [];
        this._selectedServices = new Set();
        // Подписки
        this._servicesSubsription = null;
        this._searchSubsription = null;
        this._availableServicesFilter = lodash_memoize__WEBPACK_IMPORTED_MODULE_1___default()((services) => services.filter(services => !services.connectionDate));
    }
    get avaliableServices() {
        return this._availableServicesFilter(this._services);
    }
    get isDisabledButton() {
        return !this.avaliableServices.length || !this._selectedServices.size;
    }
    ngOnInit() {
        this._servicesSubsription = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_app_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_2__["selectActiveUserServices"])).subscribe((services) => {
            this._services = services;
            this._selectedServices.clear();
            this.cdr.detectChanges();
        });
        this._searchSubsription = this._userSearchService.searchSubject$.subscribe((serviceSearch) => {
            this.serviceSearch = serviceSearch;
            this.cdr.detectChanges();
        });
    }
    selectService(isSelect, service) {
        if (isSelect) {
            this._selectedServices.add(service);
        }
        else {
            this._selectedServices.delete(service);
        }
    }
    click() {
        const newSelectedServices = this._services.map(service => {
            if (this._selectedServices.has(service)) {
                return Object.assign(Object.assign({}, service), { connectionDate: new Date() });
            }
            return service;
        });
        this._store.dispatch(new _app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["SetActiveUserServices"](newSelectedServices));
        this._selectedServices.clear();
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this._servicesSubsription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this._searchSubsription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
AvailableServicesComponent.ɵfac = function AvailableServicesComponent_Factory(t) { return new (t || AvailableServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_search_service__WEBPACK_IMPORTED_MODULE_5__["UserSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
AvailableServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AvailableServicesComponent, selectors: [["app-available-services"]], decls: 10, vars: 7, consts: [[1, "available-services__title"], ["class", "available-services__empty", 4, "ngIf"], [1, "available-services__list"], [4, "ngFor", "ngForOf"], [1, "available-services__button-wrapper"], [1, "available-services__button", 3, "styleType", "disabled", "click"], [1, "available-services__empty"], [1, "available-services__label"], ["type", "checkbox", 1, "available-services__checkbox", 3, "change"], ["checkbox", ""], [1, "available-services__price"]], template: function AvailableServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AvailableServicesComponent_p_3_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AvailableServicesComponent_li_5_Template, 7, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "filterServicesByString");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AvailableServicesComponent_Template_app_button_click_8_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.avaliableServices.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 4, ctx.avaliableServices, ctx.serviceSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("styleType", "confirm")("disabled", ctx.isDisabledButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_form_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"]], pipes: [_pipe_filter_services_by_string_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterServicesByStringPipe"]], styles: [".available-services__title[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 0;\n  font-size: 18px;\n}\n.available-services__empty[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.available-services__list[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 14px;\n  padding: 0;\n  list-style: none;\n}\n.available-services__label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  cursor: pointer;\n}\n.available-services__price[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.available-services__checkbox[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.available-services__button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.available-services__button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGF2YWlsYWJsZS1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFFQSxlQUFBO0FBREo7QUFJRTtFQUNFLG1CQUFBO0FBRko7QUFLRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtBQUxKO0FBUUU7RUFDRSxpQkFBQTtBQU5KO0FBU0U7RUFDRSxpQkFBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0FBUko7QUFXRTtFQUNFLGlCQUFBO0FBVEoiLCJmaWxlIjoiYXZhaWxhYmxlLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YWlsYWJsZS1zZXJ2aWNlcyB7XHJcbiAgJl9fdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fZW1wdHkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB9XHJcblxyXG4gICZfX2xpc3Qge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fcHJpY2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gICZfX2J1dHRvbi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ "O7Gj":
/*!***********************************!*\
  !*** ./src/app/mockData/USERS.ts ***!
  \***********************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony import */ var _SERVICES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SERVICES */ "CbSU");

const USERS = [
    {
        name: "Эншпиль Раиса Ивановна",
        pseudonym: "",
        email: "",
        phone: "",
        notifications: false,
        notificationsType: 'email',
        services: _SERVICES__WEBPACK_IMPORTED_MODULE_0__["SERVICES"].map(service => (Object.assign({}, service))),
    },
    {
        name: "Джугашвили Екатерина Андреева",
        pseudonym: "",
        email: "",
        phone: "",
        notifications: false,
        notificationsType: 'email',
        services: _SERVICES__WEBPACK_IMPORTED_MODULE_0__["SERVICES"].map(service => (Object.assign({}, service))),
    },
    {
        name: "Иванов Петр Николаевич",
        pseudonym: "",
        email: "",
        phone: "",
        notifications: false,
        notificationsType: 'email',
        services: _SERVICES__WEBPACK_IMPORTED_MODULE_0__["SERVICES"].map(service => (Object.assign({}, service))),
    },
];


/***/ }),

/***/ "Q+c0":
/*!*****************************************************!*\
  !*** ./src/app/pages/index/index-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IndexRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRoutingModule", function() { return IndexRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.component */ "sqmE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"] }
];
class IndexRoutingModule {
}
IndexRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IndexRoutingModule });
IndexRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function IndexRoutingModule_Factory(t) { return new (t || IndexRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IndexRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "SDJv":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/connection/components/connected-services/connected-services.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ConnectedServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedServicesComponent", function() { return ConnectedServicesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/store/actions/user.actions */ "mYIz");
/* harmony import */ var _app_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/store/selectors/user.selector */ "Fumy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-search.service */ "T8XF");
/* harmony import */ var _shared_form_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/form/components/input/input.component */ "xIQh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_form_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/form/components/button/button.component */ "SXoD");
/* harmony import */ var _pipe_filter_services_by_string_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipe/filter-services-by-string.pipe */ "0cVi");











function ConnectedServicesComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u043D\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ConnectedServicesComponent_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConnectedServicesComponent_ul_8_li_1_Template_app_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const service_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r4.removeServiceConnect(service_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 4, service_r3.connectionDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", service_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", service_r3.price, " \u0440\u0443\u0431 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("styleType", "reject");
} }
function ConnectedServicesComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ConnectedServicesComponent_ul_8_li_1_Template, 9, 7, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "filterServicesByString");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r1.connectedServices, ctx_r1.servicesSearch.value));
} }
class ConnectedServicesComponent {
    constructor(_store, _userSearchService, cdr) {
        this._store = _store;
        this._userSearchService = _userSearchService;
        this.cdr = cdr;
        this.servicesSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        this.connectedServices = [];
        this._activeUserServices = [];
        this._servicesSubsription = null;
        this._searchSubsription = null;
    }
    dropSearch() {
        this.servicesSearch.setValue("");
    }
    removeServiceConnect(connectedService) {
        const newServices = this._activeUserServices.map(service => {
            if (service === connectedService) {
                const unconnectedService = Object.assign({}, service);
                delete unconnectedService.connectionDate;
                return unconnectedService;
            }
            return service;
        });
        this._store.dispatch(new _app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["SetActiveUserServices"](newServices));
    }
    _connnectedServicesFilter(services = []) {
        return services.filter((service) => service.connectionDate);
    }
    ngOnInit() {
        this._servicesSubsription = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_app_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_3__["selectActiveUserServices"])).subscribe((services) => {
            this._activeUserServices = services;
            this.connectedServices = this._connnectedServicesFilter(services);
            this.cdr.detectChanges();
        });
        /* Здесь мы подписываемся на изменения в поисковой строке отдавая информацию Subject'у из сервиса поиска.
          Subject же передает данные об изменении в поисковой строке другим компонентам, которые подписаны на него.
          -----------------------------------------------
          Проще и правильнее было бы использовать @Output() и @Input(), и не париться с Subject'ом */
        this._searchSubsription = this.servicesSearch.valueChanges.subscribe(this._userSearchService.searchSubject$);
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this._searchSubsription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this._servicesSubsription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
ConnectedServicesComponent.ɵfac = function ConnectedServicesComponent_Factory(t) { return new (t || ConnectedServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_search_service__WEBPACK_IMPORTED_MODULE_5__["UserSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
ConnectedServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ConnectedServicesComponent, selectors: [["app-connected-services"]], decls: 9, vars: 5, consts: [[1, "connected-services__title"], [1, "connected-services__input-wrapper"], [1, "connected-services__input", 3, "inputFc", "type", "placeholder"], ["aria-label", "\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u043E\u0435 \u043F\u043E\u043B\u0435", 1, "connected-services__clear-btn", 3, "click"], ["class", "connected-services__empty", 4, "ngIf"], ["class", "connected-services__list", 4, "ngIf"], [1, "connected-services__empty"], [1, "connected-services__list"], ["class", "connected-services__item", 4, "ngFor", "ngForOf"], [1, "connected-services__item"], [1, "connected-services__date"], [1, "connected-services__price"], [1, "connected-services__delete", 3, "styleType", "click"]], template: function ConnectedServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConnectedServicesComponent_Template_button_click_5_listener() { return ctx.dropSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ConnectedServicesComponent_p_7_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ConnectedServicesComponent_ul_8_Template, 3, 4, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputFc", ctx.servicesSearch)("type", "text")("placeholder", "\u041F\u043E\u0438\u0441\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.connectedServices.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.connectedServices.length);
    } }, directives: [_shared_form_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_form_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"]], pipes: [_pipe_filter_services_by_string_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterServicesByStringPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".connected-services__title[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 12px;\n  padding: 0;\n  font-size: 18px;\n}\n.connected-services__empty[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  margin-bottom: 12px;\n}\n.connected-services__input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  margin-bottom: 10px;\n}\n.connected-services__clear-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 30px;\n  height: 100%;\n  background-color: transparent;\n  border: none;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.connected-services__clear-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.connected-services__clear-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: black auto 1px;\n}\n.connected-services__list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.connected-services__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.connected-services__item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.connected-services__date[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.connected-services__price[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbm5lY3RlZC1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUVBLGVBQUE7QUFISjtBQU1FO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUpKO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUVBLGVBQUE7QUFUSjtBQ3BCRTtFQUNFLGFBQUE7QURzQko7QUNuQkU7RUFDRSx1QkFBQTtBRHFCSjtBQVFFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUFSSjtBQVNJO0VBQ0UsZ0JBQUE7QUFQTjtBQVdFO0VBQ0UsaUJBQUE7QUFUSjtBQVlFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVZKIiwiZmlsZSI6ImNvbm5lY3RlZC1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvbWl4aW5zXCI7XHJcblxyXG4uY29ubmVjdGVkLXNlcnZpY2VzIHtcclxuICAmX190aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAmX19lbXB0eSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB9XHJcblxyXG4gICZfX2lucHV0LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gICZfX2NsZWFyLWJ0biB7ICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIFxyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIEBpbmNsdWRlIGRyb3BGb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJl9fbGlzdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2RhdGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAmX19wcmljZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn0iLCJAbWl4aW4gY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuQG1peGluIGRyb3BGb2N1cyB7XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IGJsYWNrIGF1dG8gMXB4O1xuICB9XG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ "SUcA":
/*!***********************************************************************!*\
  !*** ./src/app/layouts/common-layout/common-layout-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CommonLayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLayoutRoutingModule", function() { return CommonLayoutRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-layout.component */ "Wdt6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _common_layout_component__WEBPACK_IMPORTED_MODULE_1__["CommonLayoutComponent"] }
];
class CommonLayoutRoutingModule {
}
CommonLayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CommonLayoutRoutingModule });
CommonLayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CommonLayoutRoutingModule_Factory(t) { return new (t || CommonLayoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CommonLayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "SXoD":
/*!*******************************************************************!*\
  !*** ./src/app/shared/form/components/button/button.component.ts ***!
  \*******************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class ButtonComponent {
    constructor() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = "button";
        this.disabled = false;
        this._styleType = "common";
        this.dinamicStyle = {
            'button--reject': false,
            'button--confirm': false
        };
    }
    get styleType() {
        return this._styleType;
    }
    set styleType(value) {
        this._styleType = value;
        this.dinamicStyle = {
            'button--reject': this._styleType === "reject",
            'button--confirm': this._styleType === "confirm"
        };
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { type: "type", disabled: "disabled", styleType: "styleType" }, outputs: { click: "click" }, ngContentSelectors: _c0, decls: 2, vars: 4, consts: [[1, "button", 3, "type", "disabled", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.click.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.dinamicStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("disabled", ctx.disabled);
    } }, styles: [".button[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  min-height: 28px;\n  min-width: 28px;\n  background-color: transparent;\n  border: 1px solid gray;\n  border-radius: 10px;\n  color: black;\n  cursor: pointer;\n}\n.button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.button[_ngcontent-%COMP%]:focus-visible {\n  outline: black auto 1px;\n}\n.button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: default;\n}\n.button--reject[_ngcontent-%COMP%] {\n  border: 1px solid #d32f2f;\n  background-color: #ffcdd2;\n}\n.button--confirm[_ngcontent-%COMP%] {\n  border: 1px solid #43A047;\n  background-color: #C8E6C9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJ1dHRvbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBRUEsZUFBQTtBQUxGO0FDSEU7RUFDRSxhQUFBO0FES0o7QUNGRTtFQUNFLHVCQUFBO0FESUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFGSjtBQUtFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQUhKIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvbWl4aW5zXCI7XHJcblxyXG4uYnV0dG9uIHtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG5cclxuICBtaW4taGVpZ2h0OiAyOHB4O1xyXG4gIG1pbi13aWR0aDogMjhweDtcclxuICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIFxyXG4gIGNvbG9yOiBibGFjaztcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBAaW5jbHVkZSBkcm9wRm9jdXMoKTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjY1O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgJi0tcmVqZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICAjZDMyZjJmOyAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyO1xyXG4gIH1cclxuXHJcbiAgJi0tY29uZmlybSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAgIzQzQTA0NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEU2Qzk7XHJcbiAgfVxyXG59IiwiQG1peGluIGNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbkBtaXhpbiBkcm9wRm9jdXMge1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiBibGFjayBhdXRvIDFweDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/store/actions/user.actions */ "mYIz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(_store) {
        this._store = _store;
    }
    ngOnInit() {
        this._store.dispatch(new _app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["ReceiveUsers"]());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "T8XF":
/*!*********************************************************************!*\
  !*** ./src/app/features/connection/services/user-search.service.ts ***!
  \*********************************************************************/
/*! exports provided: UserSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchService", function() { return UserSearchService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserSearchService {
    constructor() {
        this.searchSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
}
UserSearchService.ɵfac = function UserSearchService_Factory(t) { return new (t || UserSearchService)(); };
UserSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserSearchService, factory: UserSearchService.ɵfac });


/***/ }),

/***/ "WaYh":
/*!***********************************************************************!*\
  !*** ./src/app/features/header/components/header/header.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return { exact: true }; };
class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 4, consts: [[1, "header"], [1, "header__nav"], [1, "header__list"], [1, "header__item"], ["routerLink", "/", "routerLinkActive", "header__link--current", 1, "header__link", 3, "routerLinkActiveOptions"], ["routerLink", "/settings", "routerLinkActive", "header__link--current", 1, "header__link", 3, "routerLinkActiveOptions"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border-top: 1px solid #aaa;\n  border-bottom: 1px solid #aaa;\n}\n.header__nav[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header__list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  margin: -1px 0;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n}\n.header__link[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-right: none;\n  display: block;\n  text-align: center;\n  padding: 15px;\n  min-width: 200px;\n  background-color: #fff;\n  color: black;\n}\n.header__link--current[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.header__item[_ngcontent-%COMP%]:last-child   .header__link[_ngcontent-%COMP%] {\n  border-right: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FBRko7QUFJSTtFQUNFLGdCQUFBO0FBRk47QUFTSTtFQUNFLDZCQUFBO0FBUE4iLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcclxuXHJcbiAgJl9fbmF2IHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19saXN0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IC0xcHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9fbGluayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAmLS1jdXJyZW50IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICRzZWxmOiAmO1xyXG5cclxuICAmX19pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgI3skc2VsZn1fX2xpbmsge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Wdt6":
/*!******************************************************************!*\
  !*** ./src/app/layouts/common-layout/common-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: CommonLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLayoutComponent", function() { return CommonLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _features_header_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/header/components/header/header.component */ "WaYh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CommonLayoutComponent {
}
CommonLayoutComponent.ɵfac = function CommonLayoutComponent_Factory(t) { return new (t || CommonLayoutComponent)(); };
CommonLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonLayoutComponent, selectors: [["app-common-layout"]], decls: 2, vars: 0, consts: [[1, "layout__header"]], template: function CommonLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_features_header_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".layout__header[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb21tb24tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiY29tbW9uLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXRfX2hlYWRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "XCCR":
/*!**********************************************!*\
  !*** ./src/app/store/effects/user.effect.ts ***!
  \**********************************************/
/*! exports provided: UserEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffect", function() { return UserEffect; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user.actions */ "mYIz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_mockData_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/mockData/mock.service */ "i/je");







class UserEffect {
    constructor(_actions$, _mockService) {
        this._actions$ = _actions$;
        this._mockService = _mockService;
        this.receiveUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["EUserActions"].RECEIVE_USERS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this._mockService.getUsers()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((users) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["SetUsers"](users)))));
        this.saveUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["EUserActions"].SAVE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ payload }) => this._mockService.saveUser(payload))), { dispatch: false });
    }
}
UserEffect.ɵfac = function UserEffect_Factory(t) { return new (t || UserEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_app_mockData_mock_service__WEBPACK_IMPORTED_MODULE_5__["MockService"])); };
UserEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserEffect, factory: UserEffect.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_pages_index_index_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/index/index.module */ "lOnp");
/* harmony import */ var _app_layouts_common_layout_common_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/layouts/common-layout/common-layout.module */ "woxX");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _app_store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/store/reducers/app.reducers */ "hlJG");
/* harmony import */ var _app_store_effects_user_effect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/store/effects/user.effect */ "XCCR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            // Стандатные модули ангуляра
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            // Модули страниц (/pages)
            _app_pages_index_index_module__WEBPACK_IMPORTED_MODULE_6__["IndexModule"],
            _app_layouts_common_layout_common_layout_module__WEBPACK_IMPORTED_MODULE_7__["CommonLayoutModule"],
            // Настройка глобального стора
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_app_store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_10__["appReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_app_store_effects_user_effect__WEBPACK_IMPORTED_MODULE_11__["UserEffect"]]),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__["StoreDevtoolsModule"].instrument() : [],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [
        // Стандатные модули ангуляра
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        // Модули страниц (/pages)
        _app_pages_index_index_module__WEBPACK_IMPORTED_MODULE_6__["IndexModule"],
        _app_layouts_common_layout_common_layout_module__WEBPACK_IMPORTED_MODULE_7__["CommonLayoutModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__["StoreDevtoolsModule"]] }); })();


/***/ }),

/***/ "ai7G":
/*!***********************************************************************************!*\
  !*** ./src/app/features/connection/components/users-list/users-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/store/actions/user.actions */ "mYIz");
/* harmony import */ var _app_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/store/selectors/user.selector */ "Fumy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipe_services_quantity_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipe/services-quantity.pipe */ "LTal");
/* harmony import */ var _pipe_services_price_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipe/services-price.pipe */ "7VtJ");








const _c0 = function (a0) { return { "users-list__user--active": a0 }; };
function UsersListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersListComponent_li_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.setActiveUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "servicesQuantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "servicesPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, user_r1 === _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, ctx_r0.aciveUser$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u0423\u0441\u043B\u0443\u0433: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 7, user_r1.services), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u0430\u0431 \u043F\u043B\u0430\u0442\u0430: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 9, user_r1.services), " \u0440\u0443\u0431");
} }
class UsersListComponent {
    constructor(_store) {
        this._store = _store;
        this.users$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_app_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_2__["selectUsers"]));
        this.aciveUser$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_app_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_2__["selectActiveUser"]));
    }
    setActiveUser(user) {
        this._store.dispatch(new _app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["SetActiveUser"](user));
    }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
UsersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["app-users-list"]], decls: 3, vars: 3, consts: [[1, "users-list"], ["class", "users-list__item", 4, "ngFor", "ngForOf"], [1, "users-list__item"], ["role", "button", 1, "users-list__user", 3, "click"], [1, "users-list__title"], [1, "users-list__info"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UsersListComponent_li_1_Template, 12, 13, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.users$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _pipe_services_quantity_pipe__WEBPACK_IMPORTED_MODULE_5__["ServicesQuantityPipe"], _pipe_services_price_pipe__WEBPACK_IMPORTED_MODULE_6__["ServicesPricePipe"]], styles: [".users-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.users-list__item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.users-list__item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.users-list__user[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  padding: 10px 15px;\n  cursor: pointer;\n  border: 1px solid black;\n}\n.users-list__user--active[_ngcontent-%COMP%] {\n  border: 1px solid #aaa;\n  background-color: #f4f4f4;\n}\n.users-list__title[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 0;\n  font-size: 16px;\n}\n.users-list__info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxnQkFBQTtBQUNOO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBREo7QUFFSTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7QUFBTjtBQUlFO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUVBLGVBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFKSiIsImZpbGUiOiJ1c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzLWxpc3Qge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdXNlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICYtLWFjdGl2ZSB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAmX19pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "dRWl":
/*!**********************************************************!*\
  !*** ./src/app/features/connection/connection.module.ts ***!
  \**********************************************************/
/*! exports provided: ConnectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionModule", function() { return ConnectionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_connection_connection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connection/connection.component */ "2ifB");
/* harmony import */ var _components_connected_services_connected_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/connected-services/connected-services.component */ "SDJv");
/* harmony import */ var _components_available_services_available_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/available-services/available-services.component */ "MVMG");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "ai7G");
/* harmony import */ var _services_user_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user-search.service */ "T8XF");
/* harmony import */ var _pipe_filter_services_by_string_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe/filter-services-by-string.pipe */ "0cVi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipe_services_quantity_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/services-quantity.pipe */ "LTal");
/* harmony import */ var _pipe_services_price_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/services-price.pipe */ "7VtJ");
/* harmony import */ var _app_shared_form_form_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/form/form.module */ "kcqd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class ConnectionModule {
}
ConnectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: ConnectionModule });
ConnectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function ConnectionModule_Factory(t) { return new (t || ConnectionModule)(); }, providers: [_services_user_search_service__WEBPACK_IMPORTED_MODULE_5__["UserSearchService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _app_shared_form_form_module__WEBPACK_IMPORTED_MODULE_10__["FormModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ConnectionModule, { declarations: [
        // Компоненты features
        _components_connected_services_connected_services_component__WEBPACK_IMPORTED_MODULE_2__["ConnectedServicesComponent"],
        _components_available_services_available_services_component__WEBPACK_IMPORTED_MODULE_3__["AvailableServicesComponent"],
        _components_connection_connection_component__WEBPACK_IMPORTED_MODULE_1__["ConnectionComponent"],
        _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"],
        // Пайпы
        _pipe_filter_services_by_string_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterServicesByStringPipe"],
        _pipe_services_quantity_pipe__WEBPACK_IMPORTED_MODULE_8__["ServicesQuantityPipe"],
        _pipe_services_price_pipe__WEBPACK_IMPORTED_MODULE_9__["ServicesPricePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _app_shared_form_form_module__WEBPACK_IMPORTED_MODULE_10__["FormModule"]], exports: [_components_connection_connection_component__WEBPACK_IMPORTED_MODULE_1__["ConnectionComponent"]] }); })();


/***/ }),

/***/ "gfq5":
/*!**********************************************!*\
  !*** ./src/app/features/connection/index.ts ***!
  \**********************************************/
/*! exports provided: ConnectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connection_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection.module */ "dRWl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectionModule", function() { return _connection_module__WEBPACK_IMPORTED_MODULE_0__["ConnectionModule"]; });




/***/ }),

/***/ "hlJG":
/*!************************************************!*\
  !*** ./src/app/store/reducers/app.reducers.ts ***!
  \************************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _user_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.reducers */ "2aYK");

const appReducer = {
    users: _user_reducers__WEBPACK_IMPORTED_MODULE_0__["userReducer"],
};


/***/ }),

/***/ "i/je":
/*!******************************************!*\
  !*** ./src/app/mockData/mock.service.ts ***!
  \******************************************/
/*! exports provided: MockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockService", function() { return MockService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _USERS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./USERS */ "O7Gj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MockService {
    getUsers() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_USERS__WEBPACK_IMPORTED_MODULE_1__["USERS"]);
    }
    saveUser(user) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            var _a;
            let savedUsers = [];
            try {
                savedUsers = JSON.parse((_a = localStorage.getItem("users")) !== null && _a !== void 0 ? _a : "[]");
            }
            catch (e) { }
            const savedUserIndex = savedUsers.findIndex(({ name }) => name === user.name);
            if (savedUserIndex >= 0) {
                savedUsers.splice(savedUserIndex, 1, user);
            }
            else {
                savedUsers.push(user);
            }
            localStorage.setItem("users", JSON.stringify(savedUsers));
            subscriber.next(true);
            subscriber.complete();
        });
    }
}
MockService.ɵfac = function MockService_Factory(t) { return new (t || MockService)(); };
MockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MockService, factory: MockService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kcqd":
/*!********************************************!*\
  !*** ./src/app/shared/form/form.module.ts ***!
  \********************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/input/input.component */ "xIQh");
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ "B8n2");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/button/button.component */ "SXoD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class FormModule {
}
FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FormModule });
FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function FormModule_Factory(t) { return new (t || FormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FormModule, { declarations: [_components_input_input_component__WEBPACK_IMPORTED_MODULE_1__["InputComponent"],
        _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"],
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]], exports: [_components_input_input_component__WEBPACK_IMPORTED_MODULE_1__["InputComponent"],
        _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"],
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]] }); })();


/***/ }),

/***/ "lOnp":
/*!*********************************************!*\
  !*** ./src/app/pages/index/index.module.ts ***!
  \*********************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.component */ "sqmE");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-routing.module */ "Q+c0");
/* harmony import */ var _app_features_connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/features/connection */ "gfq5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class IndexModule {
}
IndexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: IndexModule });
IndexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function IndexModule_Factory(t) { return new (t || IndexModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _index_routing_module__WEBPACK_IMPORTED_MODULE_2__["IndexRoutingModule"],
            _app_features_connection__WEBPACK_IMPORTED_MODULE_3__["ConnectionModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](IndexModule, { declarations: [_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _index_routing_module__WEBPACK_IMPORTED_MODULE_2__["IndexRoutingModule"],
        _app_features_connection__WEBPACK_IMPORTED_MODULE_3__["ConnectionModule"]], exports: [_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"]] }); })();


/***/ }),

/***/ "mYIz":
/*!***********************************************!*\
  !*** ./src/app/store/actions/user.actions.ts ***!
  \***********************************************/
/*! exports provided: EUserActions, ReceiveUsers, SaveUser, SetUsers, SetActiveUser, SetActiveUserServices, ChangeActiveUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUserActions", function() { return EUserActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveUsers", function() { return ReceiveUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUser", function() { return SaveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUsers", function() { return SetUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveUser", function() { return SetActiveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveUserServices", function() { return SetActiveUserServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeActiveUser", function() { return ChangeActiveUser; });
var EUserActions;
(function (EUserActions) {
    EUserActions["RECEIVE_USERS"] = "RECEIVE_USERS";
    EUserActions["SAVE_USER"] = "SAVE_USER";
    EUserActions["SET_USERS"] = "SET_USERS";
    EUserActions["SET_ACTIVE_USER"] = "SET_ACTIVE_USER";
    EUserActions["SET_ACTIVE_USER_SERVICES"] = "SET_ACTIVE_USER_SERVICES";
    EUserActions["CHANGE_ACTIVE_USER"] = "CHANGE_ACTIVE_USER";
})(EUserActions || (EUserActions = {}));
class ReceiveUsers {
    constructor() {
        this.type = EUserActions.RECEIVE_USERS;
    }
}
class SaveUser {
    constructor(payload) {
        this.payload = payload;
        this.type = EUserActions.SAVE_USER;
    }
    ;
}
class SetUsers {
    constructor(payload) {
        this.payload = payload;
        this.type = EUserActions.SET_USERS;
    }
    ;
}
class SetActiveUser {
    constructor(payload) {
        this.payload = payload;
        this.type = EUserActions.SET_ACTIVE_USER;
    }
    ;
}
class SetActiveUserServices {
    constructor(payload) {
        this.payload = payload;
        this.type = EUserActions.SET_ACTIVE_USER_SERVICES;
    }
    ;
}
class ChangeActiveUser {
    constructor(payload) {
        this.payload = payload;
        this.type = EUserActions.CHANGE_ACTIVE_USER;
    }
    ;
}


/***/ }),

/***/ "sqmE":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _features_connection_components_connection_connection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/connection/components/connection/connection.component */ "2ifB");


class IndexComponent {
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 1, vars: 0, template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-connection");
    } }, directives: [_features_connection_components_connection_connection_component__WEBPACK_IMPORTED_MODULE_1__["ConnectionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/layouts/common-layout/common-layout.component */ "Wdt6");





const routes = [
    // CommonLayoutComponent - стандартная обертка для модулей страниц
    { path: '', component: _app_layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_2__["CommonLayoutComponent"], children: [
            { path: 'settings', loadChildren: () => __webpack_require__.e(/*! import() | app-pages-settings-settings-module */ "app-pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ~/app/pages/settings/settings.module */ "yPrK")).then(m => m.SettingsModule) },
            { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ~/app/pages/index/index.module */ "lOnp")).then(m => m.IndexModule) },
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "woxX":
/*!***************************************************************!*\
  !*** ./src/app/layouts/common-layout/common-layout.module.ts ***!
  \***************************************************************/
/*! exports provided: CommonLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLayoutModule", function() { return CommonLayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-layout.component */ "Wdt6");
/* harmony import */ var _app_features_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/features/header */ "HLeU");
/* harmony import */ var _common_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-layout-routing.module */ "SUcA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CommonLayoutModule {
}
CommonLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CommonLayoutModule });
CommonLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function CommonLayoutModule_Factory(t) { return new (t || CommonLayoutModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _common_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommonLayoutRoutingModule"],
            _app_features_header__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CommonLayoutModule, { declarations: [_common_layout_component__WEBPACK_IMPORTED_MODULE_1__["CommonLayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _common_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommonLayoutRoutingModule"],
        _app_features_header__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"]], exports: [_common_layout_component__WEBPACK_IMPORTED_MODULE_1__["CommonLayoutComponent"]] }); })();


/***/ }),

/***/ "xIQh":
/*!*****************************************************************!*\
  !*** ./src/app/shared/form/components/input/input.component.ts ***!
  \*****************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class InputComponent {
    constructor() {
        this.type = "text";
        this.placeholder = "";
        this.inputFc = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("");
    }
    get fC() {
        return this.inputFc;
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], inputs: { type: "type", placeholder: "placeholder", inputFc: "inputFc" }, decls: 1, vars: 3, consts: [[1, "input", 3, "type", "formControl", "placeholder"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.type)("formControl", ctx.fC)("placeholder", ctx.placeholder);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]], styles: [".input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 30px;\n  border: 2px solid gray;\n  border-radius: 4px;\n  font-size: 14px;\n  padding: 5px;\n}\n.input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: black;\n}\n.input[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n}\n.input.ng-invalid[_ngcontent-%COMP%] {\n  border-color: #e53935;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxzQkFBQTtBQUZKO0FBS0U7RUFDRSxxQkFBQTtBQUhKIiwiZmlsZSI6ImlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIH1cclxuXHJcbiAgJi5uZy1pbnZhbGlkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2U1MzkzNTtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "yH09":
/*!*******************************************!*\
  !*** ./src/app/store/state/user.state.ts ***!
  \*******************************************/
/*! exports provided: InitialUserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialUserState", function() { return InitialUserState; });
const InitialUserState = {
    users: [],
    activeUserIndex: 0,
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map