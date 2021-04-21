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

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/admin/components/ExtensionPage.js":
/*!***********************************************!*\
  !*** ./src/admin/components/ExtensionPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtensionPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);







var ExtensionPage = /*#__PURE__*/function (_FlarumExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ExtensionPage, _FlarumExtensionPage);

  function ExtensionPage() {
    return _FlarumExtensionPage.apply(this, arguments) || this;
  }

  var _proto = ExtensionPage.prototype;

  _proto.oninit = function oninit() {
    app.current.data.extension = this.extension.extra['flarum-extension'].title;
  };

  _proto.header = function header() {
    var topItems = this.topItems();
    topItems.get('version').attrs.className += " UiKit-Label";
    return m("div", {
      className: "ExtensionPage-header AdminHeader"
    }, m("div", {
      className: "AdminHeader-container"
    }, m("span", {
      className: "AdminHeader-icon",
      style: this.extension.icon
    }, this.extension.icon ? flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(this.extension.icon.name) : ''), m("div", {
      className: "AdminHeader-info"
    }, m("h2", {
      className: "AdminHeader-title"
    }, this.extension.extra['flarum-extension'].title), m("div", {
      className: "AdminHeader-description helpText"
    }, this.extension.description)), m("div", {
      className: "ExtensionPage-headerTopItems"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2___default()(topItems.toArray())))));
  };

  _proto.view = function view() {
    var _this = this;

    if (!this.extension) return null;
    var sections = this.sections();
    var infoItems = this.infoItems();
    this.activeSection = this.activeSection || 'content';

    if (sections.items['permissions']) {
      sections.items['permissions'].content[0] = sections.items['permissions'].content[0].children[1].children;
    }

    return m("div", {
      className: 'ExtensionPage ' + this.className()
    }, this.header(), m("div", {
      className: "ExtensionPage-body"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "ExtensionPage-headerItems"
    }, m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
      state: this.isEnabled(),
      onchange: this.toggle.bind(this, this.extension.id)
    }, this.isEnabled(this.extension.id) ? app.translator.trans('core.admin.extension.enabled') : app.translator.trans('core.admin.extension.disabled')), m("aside", {
      className: "ExtensionInfo"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2___default()(infoItems.toArray())))), m("div", {
      className: "ExtensionPage-sections-nav"
    }, Object.keys(sections.items).map(function (section) {
      return m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "Button ExtensionPage-sections-nav-item",
        onclick: function onclick() {
          return _this.activeSection = section;
        }
      }, section);
    })), m("div", {
      className: "ExtensionPage-sections"
    }, Object.keys(sections.items).map(function (sectionKey) {
      return m("div", {
        className: ["ExtensionPage-section", _this.activeSection === sectionKey ? 'ExtensionPage-section--active' : ''].join(' ')
      }, sections.items[sectionKey].content);
    })))));
  };

  _proto.content = function content(original) {
    if (!this.isEnabled()) {
      return m("div", {
        className: "Asirem-infobox"
      }, app.translator.trans('core.admin.extension.enable_to_see'));
    }

    return original();
  };

  return ExtensionPage;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/ExtensionsPage.js":
/*!************************************************!*\
  !*** ./src/admin/components/ExtensionsPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtensionsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/AdminPage */ "flarum/admin/components/AdminPage");
/* harmony import */ var flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_utils_getCategorizedExtensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/utils/getCategorizedExtensions */ "flarum/admin/utils/getCategorizedExtensions");
/* harmony import */ var flarum_admin_utils_getCategorizedExtensions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_getCategorizedExtensions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/components/ExtensionsWidget */ "flarum/admin/components/ExtensionsWidget");
/* harmony import */ var flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/admin/utils/isExtensionEnabled */ "flarum/admin/utils/isExtensionEnabled");
/* harmony import */ var flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6__);








var ExtensionsPage = /*#__PURE__*/function (_AdminPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ExtensionsPage, _AdminPage);

  function ExtensionsPage() {
    return _AdminPage.apply(this, arguments) || this;
  }

  var _proto = ExtensionsPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _AdminPage.prototype.oninit.call(this, vnode);

    this.extensions = app.categorizedExtensions || flarum_admin_utils_getCategorizedExtensions__WEBPACK_IMPORTED_MODULE_2___default()();
  };

  _proto.headerInfo = function headerInfo() {
    return {
      className: 'Asirem-ExtensionsPage',
      icon: 'fas fa-puzzle-piece',
      title: app.translator.trans('sycho-asirem.admin.extensions'),
      description: 'List of all installed extensions.'
    };
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", {
      className: "Asirem-ExtensionCategories"
    }, m("div", {
      className: "Asirem-ExtensionCategories-container"
    }, Object.keys(this.extensions).map(function (category) {
      return m("div", {
        className: "Asirem-ExtensionCategory"
      }, m("h3", {
        className: "Asirem-ExtensionCategory-title"
      }, app.categoryLabels && app.categoryLabels[category] || app.translator.trans("core.admin.nav.categories." + category)), m("div", {
        className: "Asirem-ExtensionCategory-container"
      }, _this.extensions[category].map(function (extension) {
        return m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: app.route('extension', {
            id: extension.id
          }),
          className: "Asirem-Extension"
        }, m("div", {
          className: "Asirem-Extension-icon"
        }, m("span", {
          className: "ExtensionListItem-icon ExtensionIcon",
          style: extension.icon
        }, extension.icon ? flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(extension.icon.name) : '')), m("div", {
          className: "Asirem-Extension-content"
        }, m("div", {
          className: "Asirem-Extension-title"
        }, m("div", {
          className: ["ExtensionListItem-Dot", "Asirem-Extension-state", flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5___default()(extension.id) ? 'enabled' : 'disabled'].join(' ')
        }), m("div", {
          className: "Asirem-Extension-title-value"
        }, extension.extra['flarum-extension'].title)), m("div", {
          className: "Asirem-Extension-details"
        }, m("div", {
          className: "Asirem-Extension-package"
        }, extension.name), m("div", {
          className: "Asirem-Extension-version"
        }, extension.version))));
      })));
    })));
  };

  return ExtensionsPage;
}(flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/AdminNav */ "flarum/admin/components/AdminNav");
/* harmony import */ var flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_AdminHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/AdminHeader */ "flarum/admin/components/AdminHeader");
/* harmony import */ var flarum_admin_components_AdminHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_AdminHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/SelectDropdown */ "flarum/common/components/SelectDropdown");
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/admin/components/DashboardPage */ "flarum/admin/components/DashboardPage");
/* harmony import */ var flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/admin/components/ExtensionsWidget */ "flarum/admin/components/ExtensionsWidget");
/* harmony import */ var flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/components/Navigation */ "flarum/common/components/Navigation");
/* harmony import */ var flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/admin/components/StatusWidget */ "flarum/admin/components/StatusWidget");
/* harmony import */ var flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! flarum/admin/components/PermissionsPage */ "flarum/admin/components/PermissionsPage");
/* harmony import */ var flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_ExtensionsPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/ExtensionsPage */ "./src/admin/components/ExtensionsPage.js");
/* harmony import */ var _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/ExtensionPage */ "./src/admin/components/ExtensionPage.js");



















app.initializers.add('sycho/flarum-asirem', function () {
  app.routes['extensions'] = {
    path: '/extensions',
    component: _components_ExtensionsPage__WEBPACK_IMPORTED_MODULE_17__["default"]
  };
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function () {
    var items = this.items();
    items.remove('search');
    items.remove('category-core');
    items.add('extensions', m(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: app.route('extensions'),
      icon: "fas fa-puzzle-piece",
      title: app.translator.trans('sycho-asirem.admin.extensions'),
      active: ['extension', 'extensions'].includes(app.current.data.routeName)
    }, m("span", null, app.translator.trans('sycho-asirem.admin.extensions')), app.current.data.extension ? m("span", {
      className: "Asirem-extensions-nav-current"
    }, app.current.data.extension) : []));
    return m(flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "AdminNav App-titleControl AdminNav-Main",
      buttonClassName: "Button"
    }, items.toArray().concat());
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, 'availableWidgets', function (items) {
    items.remove('extensions');
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_11___default.a.prototype, 'getBackButton', function (button) {
    button.attrs.className = button.attrs.className.replace('Button--icon', '');

    if (app.current.data.routeName === 'extension') {
      button.attrs.href = app.route('extensions');
      delete button.attrs.onclick;
      button.children = app.translator.trans('sycho-asirem.admin.extensions');
    } else {
      button.children = app.translator.trans('sycho-asirem.admin.header.go_back');
    }

    return button;
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_AdminHeader__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'view', function (original, vnode) {
    var _this = this;

    switch (this.attrs.className) {
      case 'DashboardPage-header':
        this.handleClearCache = flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_13___default.a.prototype.handleClearCache;

        this.controls = function () {
          return m(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_14___default.a, {
            label: app.translator.trans('core.admin.dashboard.tools_button'),
            icon: "fas fa-cog",
            buttonClassName: "Button",
            menuClassName: "Dropdown-menu--right"
          }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
            onclick: _this.handleClearCache.bind(_this)
          }, app.translator.trans('core.admin.dashboard.clear_cache_button')));
        };

        break;

      case 'Asirem-ExtensionsPage-header':
        this.controls = function () {
          var buttonGroup = flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_10___default.a.prototype.controlItems().toArray()[0].children;
          buttonGroup[0].attrs.menuClassName += ' Dropdown-menu--right';
          return buttonGroup;
        };

    }

    return m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default()(['AdminHeader', this.attrs.className])
    }, m("div", {
      className: "container AdminHeader-container"
    }, m("div", {
      className: "AdminHeader-icon"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(this.attrs.icon)), m("div", {
      className: "AdminHeader-info"
    }, m("h2", {
      className: "AdminHeader-title"
    }, vnode.children), m("div", {
      className: "AdminHeader-description"
    }, this.attrs.description)), m("div", {
      className: "AdminHeader-controls"
    }, this.controls && this.controls())));
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_13___default.a.prototype, 'content', function (original) {
    var items = this.items();
    var newVersionAvailable = app.data.updateAvailable;
    items.remove('tools');
    var icons = {
      'version-flarum': 'fas fa-comment',
      'version-php': 'fab fa-php',
      'version-mysql': 'fas fa-database'
    };
    Object.keys(items.items).map(function (key) {
      var item = items.get(key);
      item[0].tag = 'div';
      item[0].attrs.className = 'Asirem-StatusWidget-key';
      item[2] = m("div", {
        className: "Asirem-StatusWidget-value"
      }, item[2]);
      item[1] = m("div", {
        className: "Asirem-StatusWidget-content"
      }, [item[0], item[2]]);
      item[0] = m("div", {
        className: "Asirem-StatusWidget-icon"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(icons[key]));
      delete item[2];
    });

    if (newVersionAvailable) {
      items.get('version-flarum').push(m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
        className: "Asirem-StatusWidget-control Button Button--icon",
        icon: "fas fa-arrow-alt-circle-up",
        "aria-expanded": "true"
      }));
    }

    var content = [m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default()(items.toArray()))];

    if (newVersionAvailable) {
      content.push(m("div", {
        className: "Asirem-VersionUpdate"
      }, m(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_12___default.a, {
        type: "info",
        dismissible: false
      }, m("h3", null, app.translator.trans('sycho-asirem.admin.upgrade_alert.title', {
        version: newVersionAvailable
      })), m("p", null, app.translator.trans('sycho-asirem.admin.upgrade_alert.content', {
        discuss_link: m("a", {
          href: "https://discuss.flarum.org/t/blog"
        }, "https://discuss.flarum.org/t/blog")
      })))));
    }

    return content;
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_16___default.a.prototype, 'content', function (vnode) {
    /*vnode[0].children[0].children.map(groupNode => {
      if (!groupNode.children[0].attrs.group) return;
       groupNode.attrs.style = {"--group-color": groupNode.children[0].attrs.group.color()};
    });*/
    vnode[0].children[1].attrs.className += " Button--dashed";
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'oninit', _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_18__["default"].prototype.oninit);
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'header', _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_18__["default"].prototype.header);
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'view', _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_18__["default"].prototype.view);
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'content', _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_18__["default"].prototype.content);
}, -999999);

/***/ }),

/***/ "flarum/admin/components/AdminHeader":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/AdminHeader']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/AdminHeader'];

/***/ }),

/***/ "flarum/admin/components/AdminNav":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['admin/components/AdminNav']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/AdminNav'];

/***/ }),

/***/ "flarum/admin/components/AdminPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['admin/components/AdminPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/AdminPage'];

/***/ }),

/***/ "flarum/admin/components/DashboardPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/DashboardPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/DashboardPage'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/ExtensionsWidget":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionsWidget']" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionsWidget'];

/***/ }),

/***/ "flarum/admin/components/PermissionsPage":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/PermissionsPage']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/PermissionsPage'];

/***/ }),

/***/ "flarum/admin/components/StatusWidget":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/StatusWidget']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/StatusWidget'];

/***/ }),

/***/ "flarum/admin/utils/getCategorizedExtensions":
/*!*****************************************************************************!*\
  !*** external "flarum.core.compat['admin/utils/getCategorizedExtensions']" ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/utils/getCategorizedExtensions'];

/***/ }),

/***/ "flarum/admin/utils/isExtensionEnabled":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/utils/isExtensionEnabled']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/utils/isExtensionEnabled'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Alert'];

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

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/Navigation":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/Navigation']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Navigation'];

/***/ }),

/***/ "flarum/common/components/SelectDropdown":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/components/SelectDropdown']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/SelectDropdown'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/classList'];

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