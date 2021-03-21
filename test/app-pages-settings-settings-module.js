(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-settings-settings-module"],{

/***/ "/67r":
/*!****************************************************************!*\
  !*** ./src/app/features/settings-form/settings-form.module.ts ***!
  \****************************************************************/
/*! exports provided: SettingsFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsFormModule", function() { return SettingsFormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/settings-form/settings-form.component */ "Vo7A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_shared_form_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/form/form.module */ "kcqd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SettingsFormModule {
}
SettingsFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SettingsFormModule });
SettingsFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function SettingsFormModule_Factory(t) { return new (t || SettingsFormModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_shared_form_form_module__WEBPACK_IMPORTED_MODULE_3__["FormModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SettingsFormModule, { declarations: [_components_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_1__["SettingsFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_shared_form_form_module__WEBPACK_IMPORTED_MODULE_3__["FormModule"]], exports: [_components_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_1__["SettingsFormComponent"]] }); })();


/***/ }),

/***/ "75pU":
/*!************************************************!*\
  !*** ./node_modules/fast-memoize/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
// Main
//

function memoize (fn, options) {
  var cache = options && options.cache
    ? options.cache
    : cacheDefault

  var serializer = options && options.serializer
    ? options.serializer
    : serializerDefault

  var strategy = options && options.strategy
    ? options.strategy
    : strategyDefault

  return strategy(fn, {
    cache: cache,
    serializer: serializer
  })
}

//
// Strategy
//

function isPrimitive (value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean' // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic (fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function variadic (fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3)
  var cacheKey = serializer(args)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function assemble (fn, context, strategy, cache, serialize) {
  return strategy.bind(
    context,
    fn,
    cache,
    serialize
  )
}

function strategyDefault (fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyVariadic (fn, options) {
  var strategy = variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyMonadic (fn, options) {
  var strategy = monadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

//
// Serializer
//

function serializerDefault () {
  return JSON.stringify(arguments)
}

//
// Cache
//

function ObjectWithoutPrototypeCache () {
  this.cache = Object.create(null)
}

ObjectWithoutPrototypeCache.prototype.has = function (key) {
  return (key in this.cache)
}

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key]
}

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value
}

var cacheDefault = {
  create: function create () {
    return new ObjectWithoutPrototypeCache()
  }
}

//
// API
//

module.exports = memoize
module.exports.strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
}


/***/ }),

/***/ "HATU":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component */ "lkCc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsComponent"] }
];
class SettingsRoutingModule {
}
SettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Vo7A":
/*!********************************************************************************************!*\
  !*** ./src/app/features/settings-form/components/settings-form/settings-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SettingsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsFormComponent", function() { return SettingsFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/store/actions/user.actions */ "mYIz");
/* harmony import */ var _app_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/store/selectors/user.selector */ "Fumy");
/* harmony import */ var fast_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fast-memoize */ "75pU");
/* harmony import */ var fast_memoize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fast_memoize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_form_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/form/components/input/input.component */ "xIQh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_form_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/form/components/button/button.component */ "SXoD");











function SettingsFormComponent_span_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u043D\u0430 ", ctx_r2.settingForm.controls["pseudonym"].errors == null ? null : ctx_r2.settingForm.controls["pseudonym"].errors.maxlength.requiredLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
} }
function SettingsFormComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SettingsFormComponent_span_11_ng_container_1_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx_r0.hasError(ctx_r0.settingForm.controls["pseudonym"].errors == null ? null : ctx_r0.settingForm.controls["pseudonym"].errors.maxlength));
} }
function SettingsFormComponent_div_17_span_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u042D\u0442\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function SettingsFormComponent_div_17_span_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0447\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function SettingsFormComponent_div_17_span_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u043D\u0430 ", ctx_r7.settingForm.controls["email"].errors == null ? null : ctx_r7.settingForm.controls["email"].errors.maxlength.requiredLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
} }
function SettingsFormComponent_div_17_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SettingsFormComponent_div_17_span_7_ng_container_1_Template, 2, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SettingsFormComponent_div_17_span_7_ng_container_2_Template, 2, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SettingsFormComponent_div_17_span_7_ng_container_3_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx_r3.hasError(ctx_r3.settingForm.controls["email"].errors == null ? null : ctx_r3.settingForm.controls["email"].errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx_r3.hasError(ctx_r3.settingForm.controls["email"].errors == null ? null : ctx_r3.settingForm.controls["email"].errors.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx_r3.hasError(ctx_r3.settingForm.controls["email"].errors == null ? null : ctx_r3.settingForm.controls["email"].errors.maxlength));
} }
function SettingsFormComponent_div_17_span_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u042D\u0442\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function SettingsFormComponent_div_17_span_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0438\u0437 \u0447\u0438\u0441\u0435\u043B \u0438 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 89");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function SettingsFormComponent_div_17_span_14_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u043D\u0430 ", ctx_r10.settingForm.controls["phone"].errors == null ? null : ctx_r10.settingForm.controls["phone"].errors.maxlength.requiredLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
} }
function SettingsFormComponent_div_17_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SettingsFormComponent_div_17_span_14_ng_container_1_Template, 2, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SettingsFormComponent_div_17_span_14_ng_container_2_Template, 2, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SettingsFormComponent_div_17_span_14_ng_container_3_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx_r4.hasError(ctx_r4.settingForm.controls["phone"].errors == null ? null : ctx_r4.settingForm.controls["phone"].errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx_r4.hasError(ctx_r4.settingForm.controls["phone"].errors == null ? null : ctx_r4.settingForm.controls["phone"].errors.pattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx_r4.hasError(ctx_r4.settingForm.controls["phone"].errors == null ? null : ctx_r4.settingForm.controls["phone"].errors.maxlength));
} }
function SettingsFormComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SettingsFormComponent_div_17_span_7_Template, 4, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " \u0422\u0435\u043B\u0435\u0444\u043E\u043D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SettingsFormComponent_div_17_span_14_Template, 4, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputFc", ctx_r1.settingForm.controls["email"])("placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email")("type", "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.settingForm.controls["email"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputFc", ctx_r1.settingForm.controls["phone"])("placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D")("type", "tel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.settingForm.controls["phone"].errors);
} }
class SettingsFormComponent {
    constructor(_store) {
        this._store = _store;
        this.settingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: "", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(200)),
            pseudonym: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(200)),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^89\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            notificationsType: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](""),
            notifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false),
        });
        this._activeUser = null;
        this._activeUserSubscription = null;
        this._notificationsSubscribe = null;
        this._notificationsTypeSubscribe = null;
        // Функция создана для сравнения значений у формы и выбранного пользователя
        this.firstObjHasSameValuesWidthSecondObj = fast_memoize__WEBPACK_IMPORTED_MODULE_4___default()((firstObj, secondObj) => {
            const firstInnerObj = firstObj || {};
            const secondInnerObj = secondObj || {};
            return Object.entries(firstInnerObj).every(([key, value]) => secondInnerObj[key] === value);
        });
    }
    get isVisibleNotification() {
        return this.settingForm.value.notifications;
    }
    get isChangingForm() {
        return this.firstObjHasSameValuesWidthSecondObj(this.settingForm.value, this._activeUser);
    }
    ngOnInit() {
        this._activeUserSubscription = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_app_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_3__["selectActiveUser"])).subscribe((activeUser) => {
            this._activeUser = activeUser;
            this.settingForm.setValue({
                name: activeUser.name.slice(0, 200),
                pseudonym: activeUser.pseudonym,
                email: activeUser.email,
                phone: activeUser.phone,
                notifications: activeUser.notifications,
                notificationsType: activeUser.notificationsType,
            });
            this.disableNotificationField(activeUser.notificationsType);
            this.disableHiddenNotificatons(activeUser.notifications);
            typeof this.settingForm.controls["notifications"];
        });
        this._notificationsSubscribe = this.settingForm.controls["notifications"].valueChanges.subscribe((visibleNotifications) => {
            this.disableNotificationField(this.settingForm.controls["notificationsType"].value);
            this.disableHiddenNotificatons(visibleNotifications);
        });
        this._notificationsTypeSubscribe = this.settingForm.controls["notificationsType"].valueChanges.subscribe((notificationsType) => {
            this.disableNotificationField(notificationsType);
        });
    }
    disableNotificationField(notificationsType) {
        if (notificationsType === "email") {
            this.settingForm.controls["email"].enable();
            this.settingForm.controls["phone"].disable();
        }
        if (notificationsType === "phone") {
            this.settingForm.controls["email"].disable();
            this.settingForm.controls["phone"].enable();
        }
    }
    // Блокировка скрытых инпутов для отмены валидации невидимых клиенту полей
    disableHiddenNotificatons(isVisible) {
        if (!isVisible) {
            this.settingForm.controls["email"].disable();
            this.settingForm.controls["phone"].disable();
        }
    }
    resetForm(e) {
        var _a, _b, _c, _d, _e, _f;
        e.preventDefault();
        this.settingForm.reset({
            name: (_a = this._activeUser) === null || _a === void 0 ? void 0 : _a.name.slice(0, 200),
            pseudonym: (_b = this._activeUser) === null || _b === void 0 ? void 0 : _b.pseudonym,
            email: (_c = this._activeUser) === null || _c === void 0 ? void 0 : _c.email,
            phone: (_d = this._activeUser) === null || _d === void 0 ? void 0 : _d.phone,
            notificationsType: (_e = this._activeUser) === null || _e === void 0 ? void 0 : _e.notificationsType,
            notifications: (_f = this._activeUser) === null || _f === void 0 ? void 0 : _f.notifications,
        });
    }
    submitForm() {
        this._store.dispatch(new _app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["ChangeActiveUser"](Object.assign(Object.assign({}, this._activeUser), this.settingForm.value)));
        this._store.dispatch(new _app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["SaveUser"](Object.assign(Object.assign({}, this._activeUser), this.settingForm.value)));
        this.settingForm.markAsUntouched();
        this.settingForm.markAsPristine();
    }
    hasError(errorObj) {
        return Boolean(errorObj);
    }
    ngOnDestroy() {
        var _a, _b, _c;
        (_a = this._activeUserSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this._notificationsSubscribe) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this._notificationsTypeSubscribe) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
}
SettingsFormComponent.ɵfac = function SettingsFormComponent_Factory(t) { return new (t || SettingsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
SettingsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SettingsFormComponent, selectors: [["app-settings-form"]], decls: 25, vars: 14, consts: [[1, "settings-form", 3, "formGroup", "reset", "submit"], [1, "settings-form__main"], [1, "settings-form__input-wrapper"], [1, "settings-form__input-name"], [1, "settings-form__text-input", 3, "inputFc", "placeholder", "type"], [1, "settings-form__text-input"], [3, "inputFc", "placeholder"], ["class", "settings-form__error", 3, "ngSwitch", 4, "ngIf"], [1, "settings-form__notifications-check"], [1, "settings-form__label"], ["type", "checkbox", "formControlName", "notifications", 1, "settings-form__notifications"], ["class", "settings-form__notifications-body", 4, "ngIf"], [1, "settings-form__button-wrapper"], [3, "type", "styleType", "disabled"], [1, "settings-form__button-text"], [1, "settings-form__error", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "settings-form__notifications-body"], [1, "settings-form__input-name", "settings-form__input-name--label"], ["type", "radio", "formControlName", "notificationsType", "value", "email"], [3, "inputFc", "placeholder", "type"], ["type", "radio", "formControlName", "notificationsType", "value", "phone"]], template: function SettingsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("reset", function SettingsFormComponent_Template_form_reset_0_listener($event) { return ctx.resetForm($event); })("submit", function SettingsFormComponent_Template_form_submit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "fieldset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u0424\u0418\u041E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " \u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, SettingsFormComponent_span_11_Template, 2, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " \u041E\u043F\u043E\u0432\u0435\u0449\u0435\u043D\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, SettingsFormComponent_div_17_Template, 15, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "app-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "app-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.settingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputFc", ctx.settingForm.controls["name"])("placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F")("type", "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputFc", ctx.settingForm.controls["pseudonym"])("placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.settingForm.controls["pseudonym"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isVisibleNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "reset")("styleType", "reject")("disabled", ctx.isChangingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "submit")("styleType", "confirm")("disabled", ctx.isChangingForm || !ctx.settingForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _shared_form_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _shared_form_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"]], styles: [".settings-form[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  border-radius: 6px;\n  padding: 15px;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.settings-form__main[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 15px;\n  padding: 0;\n  border: none;\n}\n.settings-form__input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 5px;\n}\n.settings-form__input-wrapper[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.settings-form__notifications-check[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.settings-form__notifications[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.settings-form__notifications-body[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.settings-form__input-name[_ngcontent-%COMP%] {\n  width: 100px;\n  flex-shrink: 0;\n}\n.settings-form__input-name--label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.settings-form__text-input[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.settings-form__error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #d50000;\n}\n.settings-form__button-wrapper[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n}\n.settings-form__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.settings-form__button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNldHRpbmdzLWZvcm0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ0RFLHNCQUFBO0VBQ0Esa0JBQUE7RURHQSxhQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FBRkY7QUFJRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU1JO0VBQ0UsZ0JBQUE7QUFKTjtBQVFFO0VBQ0UsbUJBQUE7QUFOSjtBQVNFO0VBQ0Usc0JBQUE7QUFQSjtBQVVFO0VBQ0UsbUJBQUE7QUFSSjtBQVdFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFUSjtBQVVJO0VBQ0csZUFBQTtBQVJQO0FBWUU7RUFDRSxZQUFBO0FBVko7QUFhRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVhKO0FBY0U7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVpKO0FBZUU7RUFDRSxlQUFBO0FBYko7QUFnQkU7RUFDRSxlQUFBO0FBZEoiLCJmaWxlIjoic2V0dGluZ3MtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvbWl4aW5zXCI7XHJcblxyXG4uc2V0dGluZ3MtZm9ybSB7XHJcbiAgQGluY2x1ZGUgY2VsbCgpO1xyXG4gIFxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgXHJcbiAgJl9fbWFpbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19pbnB1dC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbm90aWZpY2F0aW9ucy1jaGVjayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbm90aWZpY2F0aW9ucyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgJl9fbm90aWZpY2F0aW9ucy1ib2R5IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAmX19pbnB1dC1uYW1lIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgJi0tbGFiZWwge1xyXG4gICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGV4dC1pbnB1dCB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG5cclxuICAmX19lcnJvciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjZDUwMDAwO1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufSIsIkBtaXhpbiBjZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5AbWl4aW4gZHJvcEZvY3VzIHtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogYmxhY2sgYXV0byAxcHg7XG4gIH1cbn0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "iGAD":
/*!*************************************************!*\
  !*** ./src/app/features/settings-form/index.ts ***!
  \*************************************************/
/*! exports provided: SettingsFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_form_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-form.module */ "/67r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsFormModule", function() { return _settings_form_module__WEBPACK_IMPORTED_MODULE_0__["SettingsFormModule"]; });




/***/ }),

/***/ "lkCc":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _features_settings_form_components_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/settings-form/components/settings-form/settings-form.component */ "Vo7A");


class SettingsComponent {
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 1, vars: 0, template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-settings-form");
    } }, directives: [_features_settings_form_components_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_1__["SettingsFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "yPrK":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component */ "lkCc");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-routing.module */ "HATU");
/* harmony import */ var _app_features_settings_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/features/settings-form */ "iGAD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SettingsModule {
}
SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function SettingsModule_Factory(t) { return new (t || SettingsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"],
            _app_features_settings_form__WEBPACK_IMPORTED_MODULE_3__["SettingsFormModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"],
        _app_features_settings_form__WEBPACK_IMPORTED_MODULE_3__["SettingsFormModule"]], exports: [_settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-pages-settings-settings-module.js.map