"use strict";
self["webpackHotUpdate_N_E"]("pages/category/[slug]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcnkvW3NsdWddLjVlZjA2ODRkYWRiYmFhMjNiNzBlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixrQkFBb0NKLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9LLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBRUFMLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkRSxJQUFBQSx3REFBYSxHQUFHSSxJQUFoQixDQUFxQixVQUFDQyxhQUFELEVBQW1CO0FBQ3RDRixNQUFBQSxhQUFhLENBQUNFLGFBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxtREFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDRTtBQUFNLHFCQUFTLEVBQUMsOENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FO0FBQUssaUJBQVMsRUFBQyxrQ0FBZjtBQUFBLGtCQUNHSCxVQUFVLENBQUNJLEdBQVgsQ0FBZSxVQUFDQyxRQUFELEVBQVdDLEtBQVg7QUFBQSw4QkFDZCw4REFBQyxrREFBRDtBQUFrQixnQkFBSSxzQkFBZUQsUUFBUSxDQUFDRSxJQUF4QixDQUF0QjtBQUFBLG1DQUFzRDtBQUFNLHVCQUFTLEVBQUMsK0VBQWhCO0FBQUEsd0JBQWlHRixRQUFRLENBQUNHO0FBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEQsYUFBV0YsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURjO0FBQUEsU0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0F6QkQ7O0dBQU1QOztLQUFBQTtBQTJCTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENhdGVnb3JpZXMoKS50aGVuKChuZXdDYXRlZ29yaWVzKSA9PiB7XG4gICAgICBzZXRDYXRlZ29yaWVzKG5ld0NhdGVnb3JpZXMpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTEwIG1iLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgdy1mdWxsIGlubGluZS1ibG9jayBib3JkZXItYmx1ZS00MDAgcHktOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmZsb2F0LWxlZnQgYmxvY2tcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZm9udC1ib2xkIHRleHQtNHhsIHRleHQtd2hpdGVcIj5BSSBJbmZvPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsb2F0LWxlZnQgbWQ6Y29udGVudHNcIj5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0gaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LnNsdWd9YH0+PHNwYW4gY2xhc3NOYW1lPVwibWQ6ZmxvYXQtcmlnaHQgbXQtMiBhbGlnbi1taWRkbGUgdGV4dC13aGl0ZSBtbC00IGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXJcIj57Y2F0ZWdvcnkubmFtZX08L3NwYW4+PC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiZ2V0Q2F0ZWdvcmllcyIsIkhlYWRlciIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidGhlbiIsIm5ld0NhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsImluZGV4Iiwic2x1ZyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9