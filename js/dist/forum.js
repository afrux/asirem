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

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/DiscussionListItem */ "flarum/forum/components/DiscussionListItem");
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionHero */ "flarum/forum/components/DiscussionHero");
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/WelcomeHero */ "flarum/forum/components/WelcomeHero");
/* harmony import */ var flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/UserCard */ "flarum/forum/components/UserCard");
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_tags_components_TagHero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/tags/components/TagHero */ "flarum/tags/components/TagHero");
/* harmony import */ var flarum_tags_components_TagHero__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagHero__WEBPACK_IMPORTED_MODULE_5__);






app.initializers.add('sycho/flarum-asirem', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (vnode) {
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
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'infoItems', function (items) {
    if (!items.has('tags')) return;
    var tags = items.get('tags');
    items.remove('tags');
    items.add('tags', tags, -99999);
  });
  [flarum_tags_components_TagHero__WEBPACK_IMPORTED_MODULE_5___default.a && flarum_tags_components_TagHero__WEBPACK_IMPORTED_MODULE_5___default.a.prototype || null, flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_4___default.a.prototype].map(function (prototype) {
    if (!prototype) {
      return;
    }

    Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(prototype, 'view', function (vnode) {
      if (prototype === flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_4___default.a.prototype && !this.attrs.className.includes('Hero')) {
        return;
      }

      vnode.children.push(m("svg", {
        width: "1440",
        height: "320",
        className: "Asirem-forumWaves"
      }, m("path", {
        d: "M0,32L10.9,69.3C21.8,107,44,181,65,224C87.3,267,109,277,131,250.7C152.7,224,175,160,196,128C218.2,96,240,96,262,117.3C283.6,139,305,181,327,181.3C349.1,181,371,139,393,112C414.5,85,436,75,458,69.3C480,64,502,64,524,101.3C545.5,139,567,213,589,234.7C610.9,256,633,224,655,186.7C676.4,149,698,107,720,90.7C741.8,75,764,85,785,106.7C807.3,128,829,160,851,144C872.7,128,895,64,916,42.7C938.2,21,960,43,982,80C1003.6,117,1025,171,1047,176C1069.1,181,1091,139,1113,122.7C1134.5,107,1156,117,1178,133.3C1200,149,1222,171,1244,165.3C1265.5,160,1287,128,1309,112C1330.9,96,1353,96,1375,117.3C1396.4,139,1418,181,1429,202.7L1440,224L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z"
      })));
    });
  });
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

/***/ "flarum/forum/components/DiscussionHero":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionHero']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionHero'];

/***/ }),

/***/ "flarum/forum/components/DiscussionListItem":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionListItem']" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionListItem'];

/***/ }),

/***/ "flarum/forum/components/UserCard":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserCard']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/UserCard'];

/***/ }),

/***/ "flarum/forum/components/WelcomeHero":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/WelcomeHero']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/WelcomeHero'];

/***/ }),

/***/ "flarum/tags/components/TagHero":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['tags/components/TagHero']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/components/TagHero'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map