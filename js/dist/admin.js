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

/***/ "../../core/js/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!*******************************************************************************************************************!*\
  !*** /home/samilyas/www/flarum/packages/core/js/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../../core/js/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!************************************************************************************************************!*\
  !*** /home/samilyas/www/flarum/packages/core/js/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../core/js/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*****************************************************************************************************!*\
  !*** /home/samilyas/www/flarum/packages/core/js/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!***********************************************************************************************************!*\
  !*** /home/samilyas/www/flarum/packages/core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "../../core/js/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../../core/js/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!************************************************************************************************************!*\
  !*** /home/samilyas/www/flarum/packages/core/js/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \************************************************************************************************************/
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

/***/ "./src/admin/components/ExtensionPage.js":
/*!***********************************************!*\
  !*** ./src/admin/components/ExtensionPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtensionPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
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
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
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

/***/ "./src/admin/components/GroupPermissions.js":
/*!**************************************************!*\
  !*** ./src/admin/components/GroupPermissions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupPermissions; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/PermissionGrid */ "flarum/admin/components/PermissionGrid");
/* harmony import */ var flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);





var GroupPermissions = /*#__PURE__*/function (_PermissionGrid) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GroupPermissions, _PermissionGrid);

  function GroupPermissions() {
    return _PermissionGrid.apply(this, arguments) || this;
  }

  var _proto = GroupPermissions.prototype;

  _proto.oninit = function oninit(vnode) {
    _PermissionGrid.prototype.oninit.call(this, vnode);
  };

  _proto.view = function view() {
    var _this = this;

    var group = this.attrs.group;
    var scopes = this.scopeItems();
    return m("div", {
      className: "GroupPermissions"
    }, m("div", {
      className: "GroupPermissions-container"
    }, m("div", {
      className: "GroupPermissions-header IconicText"
    }, m("div", {
      className: "GroupPermissions-header-icon IconicText-icon"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()(group.icon())), m("div", {
      className: "GroupPermissions-header-label IconicText-label"
    }, group.namePlural())), m("div", {
      className: "GroupPermissions-body"
    }, this.permissionItems().toArray().map(function (permissionGroup) {
      return m("div", {
        className: "GroupPermissions-permissionGroup"
      }, m("div", {
        className: "GroupPermissions-permissionGroup-label"
      }, m("div", {
        className: "GroupPermissions-permissionGroup-label-icon"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()(permissionGroup.icon)), m("div", {
        className: "GroupPermissions-permissionGroup-label-text"
      }, permissionGroup.label)), m("div", {
        className: "GroupPermissions-permissionGroup-items"
      }, permissionGroup.children.map(function (permission) {
        return m("div", {
          className: "GroupPermissions-permission"
        }, m("div", {
          className: "GroupPermissions-permission-label IconicText"
        }, m("div", {
          className: "GroupPermissions-permission-label-icon IconicText-icon"
        }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()(permission.icon)), m("div", {
          className: "GroupPermissions-permission-label-text IconicText-label"
        }, permission.label)), m("div", {
          className: "GroupPermissions-permission-control"
        }, _this.renderPermissionControl(permission)));
      })));
    }))));
  };

  _proto.renderPermissionControl = function renderPermissionControl(permission) {
    if (permission.setting) return permission.setting();else return m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2___default.a, null);
  };

  return GroupPermissions;
}(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/UploadImageButton.js":
/*!***************************************************!*\
  !*** ./src/admin/components/UploadImageButton.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadImageButton; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../core/js/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../../core/js/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../../core/js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../core/js/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);






var UploadImageButton = /*#__PURE__*/function (_Button) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(UploadImageButton, _Button);

  function UploadImageButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Button.call.apply(_Button, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "loading", false);

    return _this;
  }

  var _proto = UploadImageButton.prototype;

  _proto.view = function view(vnode) {
    this.attrs.loading = this.loading;
    this.attrs.className = (this.attrs.className || '') + ' Button';

    if (app.data.settings[this.attrs.setting]) {
      this.attrs.onclick = this.remove.bind(this);
      return m("div", {
        className: "UploadImageButton-container"
      }, m("div", {
        className: "UploadImageButton-image-container"
      }, m("img", {
        className: "UploadImageButton-image",
        src: app.forum.attribute(this.attrs.serializedName),
        alt: ""
      })), _Button.prototype.view.call(this, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vnode, {
        children: app.translator.trans('core.admin.upload_image.remove_button')
      })));
    } else {
      this.attrs.onclick = this.upload.bind(this);
    }

    return _Button.prototype.view.call(this, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vnode, {
      children: app.translator.trans('core.admin.upload_image.upload_button')
    }));
  }
  /**
   * Prompt the user to upload an image.
   */
  ;

  _proto.upload = function upload() {
    var _this2 = this;

    if (this.loading) return;
    var $input = $('<input type="file">');
    $input.appendTo('body').hide().click().on('change', function (e) {
      var body = new FormData();
      body.append(_this2.attrs.name, $(e.target)[0].files[0]);
      _this2.loading = true;
      m.redraw();
      app.request({
        method: 'POST',
        url: _this2.resourceUrl(),
        serialize: function serialize(raw) {
          return raw;
        },
        body: body
      }).then(_this2.success.bind(_this2), _this2.failure.bind(_this2));
    });
  }
  /**
   * Remove the logo.
   */
  ;

  _proto.remove = function remove() {
    this.loading = true;
    m.redraw();
    app.request({
      method: 'DELETE',
      url: this.resourceUrl()
    }).then(this.success.bind(this), this.failure.bind(this));
  };

  _proto.resourceUrl = function resourceUrl() {
    return app.forum.attribute('apiUrl') + '/' + this.attrs.routeName;
  }
  /**
   * After a successful upload/removal, reload the page.
   *
   * @param {Object} response
   * @protected
   */
  ;

  _proto.success = function success(response) {
    window.location.reload();
  }
  /**
   * If upload/removal fails, stop loading.
   *
   * @param {Object} response
   * @protected
   */
  ;

  _proto.failure = function failure(response) {
    this.loading = false;
    m.redraw();
  };

  return UploadImageButton;
}(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a);



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
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/SelectDropdown */ "flarum/common/components/SelectDropdown");
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/admin/components/DashboardPage */ "flarum/admin/components/DashboardPage");
/* harmony import */ var flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_admin_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/admin/components/HeaderSecondary */ "flarum/admin/components/HeaderSecondary");
/* harmony import */ var flarum_admin_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/admin/components/ExtensionsWidget */ "flarum/admin/components/ExtensionsWidget");
/* harmony import */ var flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! flarum/common/components/Navigation */ "flarum/common/components/Navigation");
/* harmony import */ var flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! flarum/admin/components/StatusWidget */ "flarum/admin/components/StatusWidget");
/* harmony import */ var flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var flarum_admin_components_EditGroupModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! flarum/admin/components/EditGroupModal */ "flarum/admin/components/EditGroupModal");
/* harmony import */ var flarum_admin_components_EditGroupModal__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_EditGroupModal__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! flarum/admin/components/PermissionsPage */ "flarum/admin/components/PermissionsPage");
/* harmony import */ var flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! flarum/admin/components/PermissionGrid */ "flarum/admin/components/PermissionGrid");
/* harmony import */ var flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! flarum/admin/components/UserListPage */ "flarum/admin/components/UserListPage");
/* harmony import */ var flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var flarum_common_components_GroupBadge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! flarum/common/components/GroupBadge */ "flarum/common/components/GroupBadge");
/* harmony import */ var flarum_common_components_GroupBadge__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_GroupBadge__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! flarum/common/models/Group */ "flarum/common/models/Group");
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_UploadImageButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/UploadImageButton */ "./src/admin/components/UploadImageButton.js");
/* harmony import */ var _components_ExtensionsPage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/ExtensionsPage */ "./src/admin/components/ExtensionsPage.js");
/* harmony import */ var _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/ExtensionPage */ "./src/admin/components/ExtensionPage.js");
/* harmony import */ var _components_GroupPermissions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/GroupPermissions */ "./src/admin/components/GroupPermissions.js");





























app.initializers.add('sycho-asirem', function (app) {
  app.routes['extensions'] = {
    path: '/extensions',
    component: _components_ExtensionsPage__WEBPACK_IMPORTED_MODULE_26__["default"]
  };
  app.extensionData["for"]('sycho-asirem').registerSetting(function () {
    return m("div", {
      className: "Form-group HeroImageForm"
    }, m("label", {
      "for": "sycho-asirem.welcome_hero_banner"
    }, app.translator.trans('sycho-asirem.admin.settings.hero_banner')), m(_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_25__["default"], {
      setting: "sycho-asirem.welcome_hero_banner",
      serializedName: "welcomeHeroBanner",
      routeName: "asirem_banner",
      name: "asirem_banner"
    }));
  }).registerSetting({
    setting: 'sycho-asirem.welcome_hero_banner_position',
    type: 'text',
    label: app.translator.trans('sycho-asirem.admin.settings.hero_banner_position')
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function () {
    var items = this.items();
    items.remove('search');
    items.remove('category-core');
    items.add('extensions', m(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: app.route('extensions'),
      icon: "fas fa-puzzle-piece",
      title: app.translator.trans('sycho-asirem.admin.extensions'),
      active: ['extension', 'extensions'].includes(app.current.data.routeName)
    }, m("span", null, app.translator.trans('sycho-asirem.admin.extensions')), app.current.data.extension ? m("span", {
      className: "Asirem-extensions-nav-current"
    }, app.current.data.extension) : []));
    return m(flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: "AdminNav App-titleControl AdminNav-Main",
      buttonClassName: "Button"
    }, items.toArray().concat());
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_10___default.a.prototype, 'availableWidgets', function (items) {
    items.remove('extensions');
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_14___default.a.prototype, 'getBackButton', function (button) {
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
        this.handleClearCache = flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_16___default.a.prototype.handleClearCache;

        this.controls = function () {
          return m(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_17___default.a, {
            label: app.translator.trans('core.admin.dashboard.tools_button'),
            icon: "fas fa-cog",
            buttonClassName: "Button",
            menuClassName: "Dropdown-menu--right"
          }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_18___default.a, {
            onclick: _this.handleClearCache.bind(_this)
          }, app.translator.trans('core.admin.dashboard.clear_cache_button')));
        };

        break;

      case 'Asirem-ExtensionsPage-header':
        this.controls = function () {
          var buttonGroup = flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_13___default.a.prototype.controlItems().toArray()[0].children;
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
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_16___default.a.prototype, 'content', function (original) {
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
      items.get('version-flarum').push(m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_18___default.a, {
        className: "Asirem-StatusWidget-control Button Button--icon",
        icon: "fas fa-arrow-alt-circle-up",
        "aria-expanded": "true"
      }));
    }

    var content = [m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7___default()(items.toArray()))];

    if (newVersionAvailable) {
      content.push(m("div", {
        className: "Asirem-VersionUpdate"
      }, m(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_15___default.a, {
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
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_PermissionsPage__WEBPACK_IMPORTED_MODULE_20___default.a.prototype, 'content', function (vnode) {
    var _this2 = this;

    /*vnode[0].children[0].children.map(groupNode => {
      if (!groupNode.children[0].attrs.group) return;
       groupNode.attrs.style = {"--group-color": groupNode.children[0].attrs.group.color()};
    });*/
    vnode[0].children[0].children = app.store.all('groups').filter(function (group) {
      return [flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_24___default.a.GUEST_ID, flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_24___default.a.MEMBER_ID].indexOf(group.id()) === -1;
    }).map(function (group) {
      return m(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_17___default.a, {
        label: [m(flarum_common_components_GroupBadge__WEBPACK_IMPORTED_MODULE_23___default.a, {
          group: group,
          className: "Group-icon",
          label: null
        }), m("span", {
          className: "Group-name"
        }, group.namePlural())],
        buttonClassName: "Button Group" // menuClassName="Dropdown-menu--right"

      }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_18___default.a, {
        icon: "fas fa-pencil-alt",
        onclick: function onclick() {
          return app.modal.show(flarum_admin_components_EditGroupModal__WEBPACK_IMPORTED_MODULE_19___default.a, {
            group: group
          });
        }
      }, app.translator.trans('sycho-asirem.admin.permissions.edit_group')), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_18___default.a, {
        icon: "fas fa-key",
        onclick: function onclick() {
          return _this2.permissionUI = {
            prespective: 'group',
            group: group
          };
        }
      }, app.translator.trans('sycho-asirem.admin.permissions.edit_group_permissions')));
    });
    vnode[0].children[1].attrs.className += " Button--dashed";
    vnode[1] = this.permissionUI && this.permissionUI.prespective === 'group' && m(_components_GroupPermissions__WEBPACK_IMPORTED_MODULE_28__["default"], {
      group: this.permissionUI.group
    }) || vnode[1];
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_21___default.a.prototype, 'oninit', function () {
    this.selectedScopes = Object.keys(this.scopeItems(true).items);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_21___default.a.prototype, 'view', function (original, vnode) {
    var _this3 = this;

    var scopes = this.scopeItems(true);
    return [m("div", {
      className: "Asirem-PermissionsPage-scopes"
    }, m("div", {
      className: "Asirem-PermissionsPage-scopes-title"
    }, "Scopes"), m("div", {
      className: "Asirem-PermissionsPage-scopes-controls"
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_18___default.a, {
      className: "Button",
      icon: "fas fa-eye",
      onclick: function onclick() {
        return _this3.selectedScopes = Object.keys(scopes.items);
      }
    }, "Show All"), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_18___default.a, {
      className: "Button",
      icon: "fas fa-eye-slash",
      onclick: function onclick() {
        return _this3.selectedScopes = ['global'];
      }
    }, "Hide All"), m(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_17___default.a, {
      label: app.translator.trans('sycho-asirem.admin.permissions.filter_scopes'),
      icon: "fas fa-tags",
      buttonClassName: "Button",
      menuClassName: "Dropdown-menu--right"
    }, Object.keys(scopes.items).map(function (key) {
      return m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_18___default.a, {
        icon: _this3.selectedScopes.includes(key) ? 'fas fa-check' : '',
        onclick: function onclick() {
          if (_this3.selectedScopes.includes(key)) _this3.selectedScopes = _this3.selectedScopes.filter(function (scope) {
            return scope !== key;
          });else _this3.selectedScopes.push(key);
        }
      }, scopes.get(key).label);
    })))), m("div", {
      className: "PermissionsPage-permissions-overflow"
    }, original(vnode))];
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_21___default.a.prototype, 'scopeItems', function (scopeItems, internal) {
    var _this4 = this;

    if (internal) return scopeItems;
    Object.keys(scopeItems.items).map(function (key) {
      if (!_this4.selectedScopes.includes(key)) {
        scopeItems.remove(key);
      }
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_21___default.a.prototype, ['oncreate', 'onupdate'], function (vnode) {
    $('.PermissionGrid-child .Button--text').removeClass('Button--text');
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_22___default.a.prototype, 'columns', function (columns) {
    columns.add('avatar', {
      name: flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-user-circle'),
      //app.translator.trans('sycho-asirem.admin.users.grid.columns.avatar.title'),
      content: function content(user) {
        return flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(user, {
          className: 'UserListPage-grid-avatar'
        });
      }
    }, 95);
    columns.remove('username');
    columns.add('username', {
      name: app.translator.trans('core.admin.users.grid.columns.username.title'),
      content: function content(user) {
        var displayName = flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_6___default()(user);
        var username_ = user.username();
        console.log(displayName, username_);

        if (username_ === displayName.text) {
          return username_;
        }

        return [username_, ' (', displayName, ')'];
      }
    }, 90);
    var joinDate = columns.get('joinDate');
    joinDate.name = [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-clock'), ' ', joinDate.name];
    var emailAddress = columns.get('emailAddress');
    emailAddress.name = [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('far fa-envelope'), ' ', emailAddress.name];
    columns.add('profileLink', {
      name: '',
      //app.translator.trans('sycho-asirem.admin.users.grid.columns.profile_link.title'),
      content: function content(user) {
        return m("a", {
          className: "Button Button--icon UserList-profileLinkBtn",
          href: app.forum.attribute('baseUrl') + "/u/" + user.slug()
        }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-link'));
      }
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_22___default.a.prototype, 'onupdate', function (vnode) {
    this.$('.UserList-emailIconBtn').removeClass('Button--text');
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_22___default.a.prototype, 'content', function (vnode) {
    vnode[0] = m("div", {
      className: "UserListPage-stat-container"
    }, m("div", {
      "class": "UserListPage-totalUsers UserListPage-stat"
    }, m("div", {
      className: "UserListPage-stat-value"
    }, this.userCount), m("div", {
      className: "UserListPage-stat-key"
    }, app.translator.trans('core.admin.users.total_users', {
      count: 0
    })[0].replace(': ', ''))));
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_11___default.a.prototype, 'items', function (items) {
    items.get('help').attrs.className = 'Button Button--link';
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_12___default.a.prototype, 'oninit', _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_27__["default"].prototype.oninit);
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_12___default.a.prototype, 'header', _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_27__["default"].prototype.header);
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_12___default.a.prototype, 'view', _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_27__["default"].prototype.view);
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_12___default.a.prototype, 'content', _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_27__["default"].prototype.content);
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

/***/ "flarum/admin/components/EditGroupModal":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/EditGroupModal']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/EditGroupModal'];

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

/***/ "flarum/admin/components/HeaderSecondary":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/HeaderSecondary']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/HeaderSecondary'];

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

/***/ "flarum/admin/components/StatusWidget":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/StatusWidget']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/StatusWidget'];

/***/ }),

/***/ "flarum/admin/components/UserListPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/UserListPage']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/UserListPage'];

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

/***/ "flarum/common/components/GroupBadge":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/GroupBadge']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/GroupBadge'];

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

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/avatar'];

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

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/models/Group":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/models/Group']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/Group'];

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