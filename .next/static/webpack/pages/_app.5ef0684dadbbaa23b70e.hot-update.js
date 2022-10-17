"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./services/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\Header.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var Header = function Header() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      categories = _useState[0],
      setCategories = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_services__WEBPACK_IMPORTED_MODULE_2__.getCategories)().then(function (newCategories) {
      setCategories(newCategories);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "container mx-auto px-10 mb-8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "border-b w-full inline-block border-blue-400 py-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "md:float-left block",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: "cursor-pointer font-bold text-4xl text-white",
            children: "AI Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "hidden md:float-left md:contents",
        children: categories.map(function (category, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/category/".concat(category.slug),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              className: "md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer",
              children: category.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 67
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(Header, "+ijgB8ROEl0Dkz53OTIi8GynN6s=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41ZWYwNjg0ZGFkYmJhYTIzYjcwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7OztBQUVBLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsa0JBQW9DSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPSyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUVBTCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZEUsSUFBQUEsd0RBQWEsR0FBR0ksSUFBaEIsQ0FBcUIsVUFBQ0MsYUFBRCxFQUFtQjtBQUN0Q0YsTUFBQUEsYUFBYSxDQUFDRSxhQUFELENBQWI7QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsbURBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFBTSxxQkFBUyxFQUFDLDhDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUFLLGlCQUFTLEVBQUMsa0NBQWY7QUFBQSxrQkFDR0gsVUFBVSxDQUFDSSxHQUFYLENBQWUsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYO0FBQUEsOEJBQ2QsOERBQUMsa0RBQUQ7QUFBa0IsZ0JBQUksc0JBQWVELFFBQVEsQ0FBQ0UsSUFBeEIsQ0FBdEI7QUFBQSxtQ0FBc0Q7QUFBTSx1QkFBUyxFQUFDLCtFQUFoQjtBQUFBLHdCQUFpR0YsUUFBUSxDQUFDRztBQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRELGFBQVdGLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYztBQUFBLFNBQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBekJEOztHQUFNUDs7S0FBQUE7QUEyQk4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDYXRlZ29yaWVzKCkudGhlbigobmV3Q2F0ZWdvcmllcykgPT4ge1xuICAgICAgc2V0Q2F0ZWdvcmllcyhuZXdDYXRlZ29yaWVzKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0xMCBtYi04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIHctZnVsbCBpbmxpbmUtYmxvY2sgYm9yZGVyLWJsdWUtNDAwIHB5LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbG9hdC1sZWZ0IGJsb2NrXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZvbnQtYm9sZCB0ZXh0LTR4bCB0ZXh0LXdoaXRlXCI+QUkgSW5mbzwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbG9hdC1sZWZ0IG1kOmNvbnRlbnRzXCI+XG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17aW5kZXh9IGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9PjxzcGFuIGNsYXNzTmFtZT1cIm1kOmZsb2F0LXJpZ2h0IG10LTIgYWxpZ24tbWlkZGxlIHRleHQtd2hpdGUgbWwtNCBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyXCI+e2NhdGVnb3J5Lm5hbWV9PC9zcGFuPjwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImdldENhdGVnb3JpZXMiLCJIZWFkZXIiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInRoZW4iLCJuZXdDYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsInNsdWciLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==