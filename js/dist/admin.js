module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/components/PermissionsPage */ "flarum/admin/components/PermissionsPage");
/* harmony import */ var flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/admin/components/PermissionGrid */ "flarum/admin/components/PermissionGrid");
/* harmony import */ var flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_5__);






app.initializers.add('afrux-asirem', function (app) {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'content', function (vnode) {
    vnode[0].children[1].attrs.className += " Button--dashed";
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'oninit', function () {
    this.selectedScopes = Object.keys(this.scopeItems(true).items);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'view', function (original, vnode) {
    var _this = this;

    var scopes = this.scopeItems(true);
    return [m("div", {
      className: "Asirem-PermissionsPage-scopes"
    }, m("div", {
      className: "Asirem-PermissionsPage-scopes-title"
    }, "Scopes"), m("div", {
      className: "Asirem-PermissionsPage-scopes-controls"
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "Button",
      icon: "fas fa-eye",
      onclick: function onclick() {
        return _this.selectedScopes = Object.keys(scopes.items);
      }
    }, "Show All"), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "Button",
      icon: "fas fa-eye-slash",
      onclick: function onclick() {
        return _this.selectedScopes = ['global'];
      }
    }, "Hide All"), m(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
      label: app.translator.trans('afrux-asirem.admin.permissions.filter_scopes'),
      icon: "fas fa-tags",
      buttonClassName: "Button",
      menuClassName: "Dropdown-menu--right"
    }, Object.keys(scopes.items).map(function (key) {
      return m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        icon: _this.selectedScopes.includes(key) ? 'fas fa-check' : '',
        onclick: function onclick() {
          if (_this.selectedScopes.includes(key)) _this.selectedScopes = _this.selectedScopes.filter(function (scope) {
            return scope !== key;
          });else _this.selectedScopes.push(key);
        }
      }, scopes.get(key).label);
    })))), m("div", {
      className: "PermissionsPage-permissions-overflow"
    }, original(vnode))];
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'scopeItems', function (scopeItems, internal) {
    var _this2 = this;

    if (internal) return scopeItems;
    Object.keys(scopeItems.items).map(function (key) {
      if (!_this2.selectedScopes.includes(key)) {
        scopeItems.remove(key);
      }
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, ['oncreate', 'onupdate'], function (vnode) {
    $('.PermissionGrid-child .Button--text').removeClass('Button--text');
  });
}, -999999);

/***/ }),

/***/ "flarum/admin/components/PermissionGrid":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/PermissionGrid']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/PermissionGrid'];

/***/ }),

/***/ "flarum/admin/components/PermissionsPage":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/PermissionsPage']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/PermissionsPage'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map