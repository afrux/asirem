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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/components/TagsPage.js":
/*!******************************************!*\
  !*** ./src/forum/components/TagsPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagsPage; });
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_tags_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/tags/common/helpers/tagIcon */ "flarum/tags/common/helpers/tagIcon");
/* harmony import */ var flarum_tags_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_tags_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/tags/common/helpers/tagLabel */ "flarum/tags/common/helpers/tagLabel");
/* harmony import */ var flarum_tags_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_tags_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/tags/common/utils/sortTags */ "flarum/tags/common/utils/sortTags");
/* harmony import */ var flarum_tags_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7__);









var TagsPage = /*#__PURE__*/function () {
  function TagsPage() {}

  var _proto = TagsPage.prototype;

  _proto.view = function view() {
    if (this.loading) {
      return m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default.a, null);
    }

    var pinned = this.tags.filter(function (tag) {
      return tag.position() !== null;
    });
    var cloud = this.tags.filter(function (tag) {
      return tag.position() === null;
    });
    return m("div", {
      className: "Asirem-TagsPage"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.hero(), m("div", {
      className: "sideNavContainer container"
    }, m("nav", {
      className: "TagsPage-nav IndexPage-nav sideNav"
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.sidebarItems().toArray()))), m("div", {
      className: "TagsPage-content sideNavOffset"
    }, m("ul", {
      className: "Asirem-TagTiles"
    }, pinned.map(function (tag) {
      var lastPostedDiscussion = tag.lastPostedDiscussion();
      var children = flarum_tags_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7___default()(tag.children() || []);
      var tagIconNode = flarum_tags_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_5___default()(tag, {}, {
        useColor: false
      });
      delete tagIconNode.attrs.style.backgroundColor;
      return m("li", {
        className: 'Asirem-TagTile ' + (tag.color() ? 'colored' : ''),
        style: {
          '--tag-bg': tag.color()
        }
      }, m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "Asirem-TagTile-info",
        href: app.route.tag(tag)
      }, m("div", {
        className: "Asirem-TagTile-icon"
      }, tagIconNode), m("div", {
        className: "Asirem-TagTile-content"
      }, m("h3", {
        className: "Asirem-TagTile-name"
      }, tag.name()), m("p", {
        className: "Asirem-TagTile-description"
      }, tag.description()), children && children.length ? m("div", {
        className: "Asirem-TagTile-children"
      }, children.map(function (child) {
        return [m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: app.route.tag(child),
          className: "TagLabel"
        }, child.name()), ' '];
      })) : '', lastPostedDiscussion ? m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "Asirem-TagTile-lastPostedDiscussion",
        href: app.route.discussion(lastPostedDiscussion, lastPostedDiscussion.lastPostNumber())
      }, m("span", {
        className: "Asirem-TagTile-lastPostedDiscussion-title"
      }, lastPostedDiscussion.title()), flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default()(lastPostedDiscussion.lastPostedAt())) : m("span", {
        className: "Asirem-TagTile-lastPostedDiscussion"
      }))));
    })), cloud.length ? m("div", {
      className: "Asirem-TagCloud"
    }, cloud.map(function (tag) {
      return [flarum_tags_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_6___default()(tag, {
        link: true
      }), ' '];
    })) : '')));
  };

  return TagsPage;
}();



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../core/js/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionListItem */ "flarum/forum/components/DiscussionListItem");
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/tags/components/TagsPage */ "flarum/tags/components/TagsPage");
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_TagsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TagsPage */ "./src/forum/components/TagsPage.js");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_extensions_afrux_theme_base_forum_components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/extensions/afrux-theme-base/forum/components/Footer */ "flarum/extensions/afrux-theme-base/forum/components/Footer");
/* harmony import */ var flarum_extensions_afrux_theme_base_forum_components_Footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_extensions_afrux_theme_base_forum_components_Footer__WEBPACK_IMPORTED_MODULE_6__);







app.initializers.add('afrux-asirem', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'view', function (vnode) {
    var discussionListItemContent = vnode.children.find(function (e) {
      return e.tag === 'div' && e.attrs && e.attrs.className.includes("DiscussionListItem-content");
    });
    discussionListItemContent.children[0] = m("div", {
      className: "DiscussionListItem-author-container"
    }, [discussionListItemContent.children[0], discussionListItemContent.children[1]]);
    delete discussionListItemContent.children[1];
    discussionListItemContent.children[3] = m("div", {
      className: "DiscussionListItem-stats"
    }, discussionListItemContent.children[3]);

    if (this.attrs.discussion.tags() && this.attrs.discussion.tags()[0] && this.attrs.discussion.tags()[0].color()) {
      vnode.attrs.style = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        "--tag-color": this.attrs.discussion.tags()[0].color()
      }, vnode.attrs.style || {});
    }

    if (this.attrs.discussion.isUnread()) {
      vnode.attrs.className += ' DiscussionListItem--unread';
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'infoItems', function (items) {
    if (!items.has('excerpt')) {
      var firstPost = this.attrs.discussion.firstPost();

      if (firstPost) {
        var excerpt = Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_5__["truncate"])(firstPost.contentPlain(), 175);
        items.add('excerpt', m("div", null, excerpt), -100);
      }
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(flarum_extensions_afrux_theme_base_forum_components_Footer__WEBPACK_IMPORTED_MODULE_6___default.a.prototype, 'separator', function () {
    return m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1440",
      height: "288",
      className: "Asirem-footerWaves"
    }, m("path", {
      "fill-opacity": "1",
      d: "M0,224L18.5,186.7C36.9,149,74,75,111,58.7C147.7,43,185,85,222,112C258.5,139,295,149,332,154.7C369.2,160,406,160,443,149.3C480,139,517,117,554,101.3C590.8,85,628,75,665,96C701.5,117,738,171,775,165.3C812.3,160,849,96,886,101.3C923.1,107,960,181,997,218.7C1033.8,256,1071,256,1108,250.7C1144.6,245,1182,235,1218,202.7C1255.4,171,1292,117,1329,117.3C1366.2,117,1403,171,1422,197.3L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
    }));
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'view', _components_TagsPage__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.view);
});

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Link'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/extensions/afrux-theme-base/forum/components/Footer":
/*!********************************************************************************************!*\
  !*** external "flarum.core.compat['extensions/afrux-theme-base/forum/components/Footer']" ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extensions/afrux-theme-base/forum/components/Footer'];

/***/ }),

/***/ "flarum/forum/components/DiscussionListItem":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionListItem']" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionListItem'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/tags/common/helpers/tagIcon":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['tags/common/helpers/tagIcon']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/common/helpers/tagIcon'];

/***/ }),

/***/ "flarum/tags/common/helpers/tagLabel":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['tags/common/helpers/tagLabel']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/common/helpers/tagLabel'];

/***/ }),

/***/ "flarum/tags/common/utils/sortTags":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['tags/common/utils/sortTags']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/common/utils/sortTags'];

/***/ }),

/***/ "flarum/tags/components/TagsPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['tags/components/TagsPage']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/components/TagsPage'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map