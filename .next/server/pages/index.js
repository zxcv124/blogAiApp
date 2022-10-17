(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/AdjacentPostCard.jsx":
/*!*****************************************!*\
  !*** ./components/AdjacentPostCard.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\AdjacentPostCard.jsx";






const AdjacentPostCard = ({
  post,
  position
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72",
    style: {
      backgroundImage: `url('${post.featuredImage.url}')`
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      className: "text-white text-shadow font-semibold text-xs",
      children: moment__WEBPACK_IMPORTED_MODULE_1___default()(post.createdAt).format('MMM DD, YYYY')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      className: "text-white text-shadow font-semibold text-2xl text-center",
      children: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/post/${post.slug}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
      className: "z-10 cursor-pointer absolute w-full h-full"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 39
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined), position === 'LEFT' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 left-4 rounded-full",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6 text-white w-full",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M10 19l-7-7m0 0l7-7m-7 7h18"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }, undefined), position === 'RIGHT' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 right-4 rounded-full",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6 text-white w-full",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M14 5l7 7m0 0l-7 7m7-7H3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }, undefined)]
}, void 0, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdjacentPostCard);

/***/ }),

/***/ "./components/Author.jsx":
/*!*******************************!*\
  !*** ./components/Author.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./util.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\Author.jsx";





const Author = ({
  author
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
  className: "text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "absolute left-0 right-0 -top-14",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      unoptimized: true,
      loader: _util__WEBPACK_IMPORTED_MODULE_2__.grpahCMSImageLoader,
      alt: author.name,
      height: "100px",
      width: "100px",
      className: "align-middle rounded-full",
      src: author.photo.url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
    className: "text-white mt-4 mb-4 text-xl font-bold",
    children: author.name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
    className: "text-white text-ls",
    children: author.bio
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Author);

/***/ }),

/***/ "./components/Categories.jsx":
/*!***********************************!*\
  !*** ./components/Categories.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./services/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\Categories.jsx";





const Categories = () => {
  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_services__WEBPACK_IMPORTED_MODULE_2__.getCategories)().then(newCategories => {
      setCategories(newCategories);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "bg-white shadow-lg rounded-lg p-8 pb-12 mb-8",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
      className: "text-xl mb-8 font-semibold border-b pb-4",
      children: "Categories"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), categories.map((category, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/category/${category.slug}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        className: `cursor-pointer block ${index === categories.length - 1 ? 'border-b-0' : 'border-b'} pb-3 mb-3`,
        children: category.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, undefined)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

/***/ }),

/***/ "./components/Comments.jsx":
/*!*********************************!*\
  !*** ./components/Comments.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./services/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\Comments.jsx";







const Comments = ({
  slug
}) => {
  const {
    0: comments,
    1: setComments
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_services__WEBPACK_IMPORTED_MODULE_3__.getComments)(slug).then(result => {
      setComments(result);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: comments.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "bg-white shadow-lg rounded-lg p-8 pb-12 mb-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
        className: "text-xl mb-8 font-semibold border-b pb-4",
        children: [comments.length, ' ', "Comments"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, undefined), comments.map((comment, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "border-b border-gray-100 mb-4 pb-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          className: "mb-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            className: "font-semibold",
            children: comment.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 19
          }, undefined), ' ', "on", ' ', moment__WEBPACK_IMPORTED_MODULE_1___default()(comment.createdAt).format('MMM DD, YYYY')]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          className: "whitespace-pre-line text-gray-600 w-full",
          children: html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(comment.comment)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, undefined)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);

/***/ }),

/***/ "./components/CommentsForm.jsx":
/*!*************************************!*\
  !*** ./components/CommentsForm.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./services/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\CommentsForm.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CommentsForm = ({
  slug
}) => {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: localStorage,
    1: setLocalStorage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: showSuccessMessage,
    1: setShowSuccessMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: null,
    email: null,
    comment: null,
    storeData: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email')
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = e => {
    const {
      target
    } = e;

    if (target.type === 'checkbox') {
      setFormData(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [target.name]: target.checked
      }));
    } else {
      setFormData(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [target.name]: target.value
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const {
      name,
      email,
      comment,
      storeData
    } = formData;

    if (!name || !email || !comment) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    (0,_services__WEBPACK_IMPORTED_MODULE_1__.submitComment)(commentObj).then(res => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = '';
          formData.email = '';
        }

        formData.comment = '';
        setFormData(prevState => _objectSpread(_objectSpread({}, prevState), formData));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "bg-white shadow-lg rounded-lg p-8 pb-12 mb-8",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
      className: "text-xl mb-8 font-semibold border-b pb-4",
      children: "Leave a Reply"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "grid grid-cols-1 gap-4 mb-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
        value: formData.comment,
        onChange: onInputChange,
        className: "p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700",
        name: "comment",
        placeholder: "Comment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "text",
        value: formData.name,
        onChange: onInputChange,
        className: "py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700",
        placeholder: "Name",
        name: "name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "email",
        value: formData.email,
        onChange: onInputChange,
        className: "py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700",
        placeholder: "Email",
        name: "email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "grid grid-cols-1 gap-4 mb-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          checked: formData.storeData,
          onChange: onInputChange,
          type: "checkbox",
          id: "storeData",
          name: "storeData",
          value: "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          className: "text-gray-500 cursor-pointer",
          htmlFor: "storeData",
          children: " Save my name, email in this browser for the next time I comment."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: "text-xs text-red-500",
      children: "All fields are mandatory"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "mt-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        type: "button",
        onClick: handlePostSubmission,
        className: "transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer",
        children: "Post Comment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined), showSuccessMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: "text-xl float-right font-semibold mt-3 text-green-500",
        children: "Comment submitted for review"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 32
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentsForm);

/***/ }),

/***/ "./components/FeaturedPostCard.jsx":
/*!*****************************************!*\
  !*** ./components/FeaturedPostCard.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\FeaturedPostCard.jsx";






const FeaturedPostCard = ({
  post
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
  className: "relative h-72",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72",
    style: {
      backgroundImage: `url('${post.featuredImage.url}')`
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      className: "text-white mb-4 text-shadow font-semibold text-xs",
      children: moment__WEBPACK_IMPORTED_MODULE_1___default()(post.createdAt).format('MMM DD, YYYY')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      className: "text-white mb-4 text-shadow font-semibold text-2xl text-center",
      children: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "flex items-center absolute bottom-5 w-full justify-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        unoptimized: true,
        alt: post.author.name,
        height: "30px",
        width: "30px",
        className: "align-middle drop-shadow-lg rounded-full",
        src: post.author.photo.url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 10
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "inline align-middle text-white text-shadow ml-2 font-medium",
        children: post.author.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: `/post/${post.slug}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      className: "cursor-pointer absolute w-full h-full"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 39
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedPostCard);

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./services/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\Header.jsx";





const Header = () => {
  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_services__WEBPACK_IMPORTED_MODULE_2__.getCategories)().then(newCategories => {
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
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "hidden md:float-left md:contents",
        children: categories.map((category, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `/category/${category.slug}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: "md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer",
            children: category.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 67
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\Layout.jsx";





const Layout = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined), children]
}, void 0, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/Loader.jsx":
/*!*******************************!*\
  !*** ./components/Loader.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\Loader.jsx";



const Loader = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
  className: "text-center",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
    type: "button",
    className: "inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed",
    disabled: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
      className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), "Loading"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./components/PostCard.jsx":
/*!*********************************!*\
  !*** ./components/PostCard.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./util.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\PostCard.jsx";







const PostCard = ({
  post
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
  className: "bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "relative overflow-hidden shadow-md pb-80 mb-6",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
      src: post.featuredImage.url,
      alt: "",
      className: "object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
    className: "transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `/post/${post.slug}`,
      children: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "block lg:flex text-center items-center justify-center mb-8 w-full",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        unoptimized: true,
        loader: _util__WEBPACK_IMPORTED_MODULE_4__.grpahCMSImageLoader,
        alt: post.author.name,
        height: "30px",
        width: "30px",
        className: "align-middle rounded-full",
        src: post.author.photo.url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
        className: "inline align-middle text-gray-700 ml-2 font-medium text-lg",
        children: post.author.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "font-medium text-gray-700",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-6 w-6 inline mr-2 text-pink-500",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        className: "align-middle",
        children: moment__WEBPACK_IMPORTED_MODULE_2___default()(post.createdAt).format('MMM DD, YYYY')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
    className: "text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8",
    children: post.excerpt
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "text-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `/post/${post.slug}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        className: "transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer",
        children: "Continue Reading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCard);

/***/ }),

/***/ "./components/PostDetail.jsx":
/*!***********************************!*\
  !*** ./components/PostDetail.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\PostDetail.jsx";





const PostDetail = ({
  post
}) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
          children: text
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 25
        }, undefined);
      }

      if (obj.italic) {
        modifiedText = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("em", {
          children: text
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }, undefined);
      }

      if (obj.underline) {
        modifiedText = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("u", {
          children: text
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, undefined);
      }
    }

    switch (type) {
      case 'heading-three':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          className: "text-xl font-semibold mb-4",
          children: modifiedText.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: item
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 102
          }, undefined))
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 16
        }, undefined);

      case 'paragraph':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "mb-8",
          children: modifiedText.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: item
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 79
          }, undefined))
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 16
        }, undefined);

      case 'heading-four':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
          className: "text-md font-semibold mb-4",
          children: modifiedText.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: item
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 102
          }, undefined))
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 16
        }, undefined);

      case 'image':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          alt: obj.title,
          height: obj.height,
          width: obj.width,
          src: obj.src
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined);

      default:
        return modifiedText;
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "relative overflow-hidden shadow-md mb-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: post.featuredImage.url,
          alt: "",
          className: "object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "px-4 lg:px-0",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex items-center mb-8 w-full",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              alt: post.author.name,
              height: "30px",
              width: "30px",
              className: "align-middle rounded-full",
              src: post.author.photo.url
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              className: "inline align-middle text-gray-700 ml-2 font-medium text-lg",
              children: post.author.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "font-medium text-gray-700",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6 inline mr-2 text-pink-500",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              className: "align-middle",
              children: moment__WEBPACK_IMPORTED_MODULE_1___default()(post.createdAt).format('MMM DD, YYYY')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
          className: "mb-8 text-3xl font-semibold",
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined), post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
          return getContentFragment(index, children, typeObj, typeObj.type);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostDetail);

/***/ }),

/***/ "./components/PostWidget.jsx":
/*!***********************************!*\
  !*** ./components/PostWidget.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./util.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./services/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\components\\PostWidget.jsx";








const PostWidget = ({
  categories,
  slug
}) => {
  const {
    0: relatedPosts,
    1: setRelatedPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (slug) {
      (0,_services__WEBPACK_IMPORTED_MODULE_5__.getSimilarPosts)(categories, slug).then(result => {
        setRelatedPosts(result);
      });
    } else {
      (0,_services__WEBPACK_IMPORTED_MODULE_5__.getRecentPosts)().then(result => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "bg-white shadow-lg rounded-lg p-8 pb-12 mb-8",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
      className: "text-xl mb-8 font-semibold border-b pb-4",
      children: slug ? 'Related Posts' : 'Recent Posts'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), relatedPosts.map((post, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "flex items-center w-full mb-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "w-16 flex-none",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          loader: _util__WEBPACK_IMPORTED_MODULE_4__.grpahCMSImageLoader,
          alt: post.title,
          height: "60px",
          width: "60px",
          unoptimized: true,
          className: "align-middle rounded-full",
          src: post.featuredImage.url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "flex-grow ml-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-gray-500 font-xs",
          children: moment__WEBPACK_IMPORTED_MODULE_2___default()(post.createdAt).format('MMM DD, YYYY')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: `/post/${post.slug}`,
          className: "text-md",
          children: post.title
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostWidget);

/***/ }),

/***/ "./components/index.jsx":
/*!******************************!*\
  !*** ./components/index.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCard": () => (/* reexport safe */ _PostCard__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "PostDetail": () => (/* reexport safe */ _PostDetail__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Layout": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Categories": () => (/* reexport safe */ _Categories__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Author": () => (/* reexport safe */ _Author__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "PostWidget": () => (/* reexport safe */ _PostWidget__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "AdjacentPostCard": () => (/* reexport safe */ _AdjacentPostCard__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "FeaturedPostCard": () => (/* reexport safe */ _FeaturedPostCard__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "Comments": () => (/* reexport safe */ _Comments__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "CommentsForm": () => (/* reexport safe */ _CommentsForm__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "Loader": () => (/* reexport safe */ _Loader__WEBPACK_IMPORTED_MODULE_10__.default)
/* harmony export */ });
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostCard */ "./components/PostCard.jsx");
/* harmony import */ var _PostDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostDetail */ "./components/PostDetail.jsx");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./components/Layout.jsx");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categories */ "./components/Categories.jsx");
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Author */ "./components/Author.jsx");
/* harmony import */ var _PostWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostWidget */ "./components/PostWidget.jsx");
/* harmony import */ var _AdjacentPostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdjacentPostCard */ "./components/AdjacentPostCard.jsx");
/* harmony import */ var _FeaturedPostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FeaturedPostCard */ "./components/FeaturedPostCard.jsx");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Comments */ "./components/Comments.jsx");
/* harmony import */ var _CommentsForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommentsForm */ "./components/CommentsForm.jsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Loader */ "./components/Loader.jsx");












/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _sections_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sections/index */ "./sections/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.jsx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./services/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\pages\\index.js";




function Home({
  posts
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "container mx-auto px-10 mb-8",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_sections_index__WEBPACK_IMPORTED_MODULE_0__.FeaturedPosts, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "lg:col-span-8 col-span-1",
        children: posts.map((post, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.PostCard, {
          post: post.node
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "lg:col-span-4 col-span-1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "lg:sticky relative top-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.PostWidget, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Categories, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
} // Fetch data at build time

async function getStaticProps() {
  const posts = (await (0,_services__WEBPACK_IMPORTED_MODULE_2__.getPosts)()) || [];
  return {
    props: {
      posts
    }
  };
}

/***/ }),

/***/ "./sections/AdjacentPosts.jsx":
/*!************************************!*\
  !*** ./sections/AdjacentPosts.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.jsx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./services/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\sections\\AdjacentPosts.jsx";






const AdjacentPosts = ({
  createdAt,
  slug
}) => {
  const {
    0: adjacentPost,
    1: setAdjacentPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: dataLoaded,
    1: setDataLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_services__WEBPACK_IMPORTED_MODULE_2__.getAdjacentPosts)(createdAt, slug).then(result => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [slug]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8",
    children: dataLoaded && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [adjacentPost.previous && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: `${adjacentPost.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.AdjacentPostCard, {
          post: adjacentPost.previous,
          position: "LEFT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, undefined), adjacentPost.next && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: `${adjacentPost.previous ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.AdjacentPostCard, {
          post: adjacentPost.next,
          position: "RIGHT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdjacentPosts);

/***/ }),

/***/ "./sections/FeaturedPosts.jsx":
/*!************************************!*\
  !*** ./sections/FeaturedPosts.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.jsx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./services/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\dede\\project_graphql_blog-main\\sections\\FeaturedPosts.jsx";






const responsive = {
  superLargeDesktop: {
    breakpoint: {
      max: 4000,
      min: 1024
    },
    items: 5
  },
  desktop: {
    breakpoint: {
      max: 1024,
      min: 768
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 768,
      min: 640
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 640,
      min: 0
    },
    items: 1
  }
};

const FeaturedPosts = () => {
  const {
    0: featuredPosts,
    1: setFeaturedPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: dataLoaded,
    1: setDataLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_services__WEBPACK_IMPORTED_MODULE_4__.getFeaturedPosts)().then(result => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6 text-white w-full",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M10 19l-7-7m0 0l7-7m-7 7h18"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);

  const customRightArrow = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6 text-white w-full",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M14 5l7 7m0 0l-7 7m7-7H3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "mb-8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default()), {
      infinite: true,
      customLeftArrow: customLeftArrow,
      customRightArrow: customRightArrow,
      responsive: responsive,
      itemClass: "px-4",
      children: dataLoaded && featuredPosts.map((post, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.FeaturedPostCard, {
        post: post
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedPosts);

/***/ }),

/***/ "./sections/index.js":
/*!***************************!*\
  !*** ./sections/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdjacentPosts": () => (/* reexport safe */ _AdjacentPosts__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "FeaturedPosts": () => (/* reexport safe */ _FeaturedPosts__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _AdjacentPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdjacentPosts */ "./sections/AdjacentPosts.jsx");
/* harmony import */ var _FeaturedPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturedPosts */ "./sections/FeaturedPosts.jsx");



/***/ }),

/***/ "./services/index.js":
/*!***************************!*\
  !*** ./services/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPosts": () => (/* binding */ getPosts),
/* harmony export */   "getCategories": () => (/* binding */ getCategories),
/* harmony export */   "getPostDetails": () => (/* binding */ getPostDetails),
/* harmony export */   "getSimilarPosts": () => (/* binding */ getSimilarPosts),
/* harmony export */   "getAdjacentPosts": () => (/* binding */ getAdjacentPosts),
/* harmony export */   "getCategoryPost": () => (/* binding */ getCategoryPost),
/* harmony export */   "getFeaturedPosts": () => (/* binding */ getFeaturedPosts),
/* harmony export */   "submitComment": () => (/* binding */ submitComment),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "getRecentPosts": () => (/* binding */ getRecentPosts)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const graphqlAPI = "https://api-ap-northeast-1.hygraph.com/v2/cl9b8udcg3khg01ue7457fe0n/master";
const getPosts = async () => {
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query);
  return result.postsConnection.edges;
};
const getCategories = async () => {
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;
  const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query);
  return result.categories;
};
const getPostDetails = async slug => {
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;
  const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query, {
    slug
  });
  return result.post;
};
const getSimilarPosts = async (categories, slug) => {
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query, {
    slug,
    categories
  });
  return result.posts;
};
const getAdjacentPosts = async (createdAt, slug) => {
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query, {
    slug,
    createdAt
  });
  return {
    next: result.next[0],
    previous: result.previous[0]
  };
};
const getCategoryPost = async slug => {
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query, {
    slug
  });
  return result.postsConnection.edges;
};
const getFeaturedPosts = async () => {
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;
  const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query);
  return result.posts;
};
const submitComment = async obj => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  });
  return result.json();
};
const getComments = async slug => {
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;
  const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query, {
    slug
  });
  return result.comments;
};
const getRecentPosts = async () => {
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query);
  return result.posts;
};

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grpahCMSImageLoader": () => (/* binding */ grpahCMSImageLoader)
/* harmony export */ });
const grpahCMSImageLoader = ({
  src
}) => src;

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-react-parser");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUV2aUIsSUFBQUE7QUFBRixHQUFwQixDQUE1QjtBQUVBLFNBQU95QixNQUFNLENBQUNGLFFBQWQ7QUFDRCxDQWRNO0FBZ0JBLE1BQU0wRCxjQUFjLEdBQUcsWUFBWTtBQUN4QyxRQUFNc2QsS0FBSyxHQUFHeU8sZ0RBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWRFO0FBZUEsUUFBTXZ2QixNQUFNLEdBQUcsTUFBTXN2Qix3REFBTyxDQUFDRSxVQUFELEVBQWExTyxLQUFiLENBQTVCO0FBRUEsU0FBTzlnQixNQUFNLENBQUMrdEIsS0FBZDtBQUNELENBbkJNOzs7Ozs7Ozs7Ozs7Ozs7QUM1T0EsTUFBTXR2QixtQkFBbUIsR0FBRyxDQUFDO0FBQUV5RSxFQUFBQTtBQUFGLENBQUQsS0FBYUEsR0FBekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVAsMkdBQStDOzs7Ozs7Ozs7OztBQ0EvQyx5R0FBOEM7Ozs7Ozs7Ozs7OztBQ0E5Qzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy8uL2NvbXBvbmVudHMvQWRqYWNlbnRQb3N0Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy8uL2NvbXBvbmVudHMvQXV0aG9yLmpzeCIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vY29tcG9uZW50cy9DYXRlZ29yaWVzLmpzeCIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vY29tcG9uZW50cy9Db21tZW50cy5qc3giLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy8uL2NvbXBvbmVudHMvQ29tbWVudHNGb3JtLmpzeCIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vY29tcG9uZW50cy9GZWF0dXJlZFBvc3RDYXJkLmpzeCIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vY29tcG9uZW50cy9IZWFkZXIuanN4Iiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvLi9jb21wb25lbnRzL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy8uL2NvbXBvbmVudHMvTG9hZGVyLmpzeCIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy8uL2NvbXBvbmVudHMvUG9zdERldGFpbC5qc3giLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy8uL2NvbXBvbmVudHMvUG9zdFdpZGdldC5qc3giLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy8uL2NvbXBvbmVudHMvaW5kZXguanN4Iiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvLi9zZWN0aW9ucy9BZGphY2VudFBvc3RzLmpzeCIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vc2VjdGlvbnMvRmVhdHVyZWRQb3N0cy5qc3giLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy8uL3NlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvLi9zZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vdXRpbC5qcyIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvZXh0ZXJuYWwgXCJodG1sLXJlYWN0LXBhcnNlclwiIiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9ncmFwaGNtcy1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vZ3JhcGhjbXMtYmxvZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2dyYXBoY21zLWJsb2cvaWdub3JlZHxFOlxcZGVkZVxccHJvamVjdF9ncmFwaHFsX2Jsb2ctbWFpblxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQWRqYWNlbnRQb3N0Q2FyZCA9ICh7IHBvc3QsIHBvc2l0aW9uIH0pID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJvdW5kZWQtbGcgYmctY2VudGVyIGJnLW5vLXJlcGVhdCBiZy1jb3ZlciBzaGFkb3ctbWQgaW5saW5lLWJsb2NrIHctZnVsbCBoLTcyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3Bvc3QuZmVhdHVyZWRJbWFnZS51cmx9JylgIH19IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByb3VuZGVkLWxnIGJnLWNlbnRlciBiZy1ncmFkaWVudC10by1iIG9wYWNpdHktNTAgZnJvbS1ncmF5LTQwMCB2aWEtZ3JheS03MDAgdG8tYmxhY2sgdy1mdWxsIGgtNzJcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLWxnIHAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNoYWRvdyBmb250LXNlbWlib2xkIHRleHQteHNcIj57bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ01NTSBERCwgWVlZWScpfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zaGFkb3cgZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bCB0ZXh0LWNlbnRlclwiPntwb3N0LnRpdGxlfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWd9YH0+PHNwYW4gY2xhc3NOYW1lPVwiei0xMCBjdXJzb3ItcG9pbnRlciBhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsXCIgLz48L0xpbms+XG4gICAge3Bvc2l0aW9uID09PSAnTEVGVCcgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBhcnJvdy1idG4gYm90dG9tLTUgdGV4dC1jZW50ZXIgcHktMyBjdXJzb3ItcG9pbnRlciBiZy1waW5rLTYwMCBsZWZ0LTQgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC13aGl0ZSB3LWZ1bGxcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0xMCAxOWwtNy03bTAgMGw3LTdtLTcgN2gxOFwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICB7cG9zaXRpb24gPT09ICdSSUdIVCcgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBhcnJvdy1idG4gYm90dG9tLTUgdGV4dC1jZW50ZXIgcHktMyBjdXJzb3ItcG9pbnRlciBiZy1waW5rLTYwMCByaWdodC00IHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGUgdy1mdWxsXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMTQgNWw3IDdtMCAwbC03IDdtNy03SDNcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRqYWNlbnRQb3N0Q2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCB7IGdycGFoQ01TSW1hZ2VMb2FkZXIgfSBmcm9tICcuLi91dGlsJztcblxuY29uc3QgQXV0aG9yID0gKHsgYXV0aG9yIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0yMCBtYi04IHAtMTIgcmVsYXRpdmUgcm91bmRlZC1sZyBiZy1ibGFjayBiZy1vcGFjaXR5LTIwXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMCAtdG9wLTE0XCI+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgICAgbG9hZGVyPXtncnBhaENNU0ltYWdlTG9hZGVyfVxuICAgICAgICBhbHQ9e2F1dGhvci5uYW1lfVxuICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgIHdpZHRoPVwiMTAwcHhcIlxuICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgc3JjPXthdXRob3IucGhvdG8udXJsfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtdC00IG1iLTQgdGV4dC14bCBmb250LWJvbGRcIj57YXV0aG9yLm5hbWV9PC9oMz5cbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbHNcIj57YXV0aG9yLmJpb308L3A+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5jb25zdCBDYXRlZ29yaWVzID0gKCkgPT4ge1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDYXRlZ29yaWVzKCkudGhlbigobmV3Q2F0ZWdvcmllcykgPT4ge1xuICAgICAgc2V0Q2F0ZWdvcmllcyhuZXdDYXRlZ29yaWVzKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTggcGItMTIgbWItOFwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgbWItOCBmb250LXNlbWlib2xkIGJvcmRlci1iIHBiLTRcIj5DYXRlZ29yaWVzPC9oMz5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgIDxMaW5rIGtleT17aW5kZXh9IGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyIGJsb2NrICR7KGluZGV4ID09PSBjYXRlZ29yaWVzLmxlbmd0aCAtIDEpID8gJ2JvcmRlci1iLTAnIDogJ2JvcmRlci1iJ30gcGItMyBtYi0zYH0+e2NhdGVnb3J5Lm5hbWV9PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5cbmltcG9ydCB7IGdldENvbW1lbnRzIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5jb25zdCBDb21tZW50cyA9ICh7IHNsdWcgfSkgPT4ge1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENvbW1lbnRzKHNsdWcpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgc2V0Q29tbWVudHMocmVzdWx0KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTggcGItMTIgbWItOFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTggZm9udC1zZW1pYm9sZCBib3JkZXItYiBwYi00XCI+XG4gICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RofVxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIENvbW1lbnRzXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwIG1iLTQgcGItNFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57Y29tbWVudC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICBvblxuICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgIHttb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZJyl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLWxpbmUgdGV4dC1ncmF5LTYwMCB3LWZ1bGxcIj57cGFyc2UoY29tbWVudC5jb21tZW50KX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdWJtaXRDb21tZW50IH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5jb25zdCBDb21tZW50c0Zvcm0gPSAoeyBzbHVnIH0pID0+IHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2NhbFN0b3JhZ2UsIHNldExvY2FsU3RvcmFnZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Nob3dTdWNjZXNzTWVzc2FnZSwgc2V0U2hvd1N1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IG5hbWU6IG51bGwsIGVtYWlsOiBudWxsLCBjb21tZW50OiBudWxsLCBzdG9yZURhdGE6IGZhbHNlIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9jYWxTdG9yYWdlKHdpbmRvdy5sb2NhbFN0b3JhZ2UpO1xuICAgIGNvbnN0IGluaXRhbEZvcm1EYXRhID0ge1xuICAgICAgbmFtZTogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJyksXG4gICAgICBlbWFpbDogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpLFxuICAgICAgc3RvcmVEYXRhOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKSB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJyksXG4gICAgfTtcbiAgICBzZXRGb3JtRGF0YShpbml0YWxGb3JtRGF0YSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbklucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHNldEZvcm1EYXRhKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgW3RhcmdldC5uYW1lXTogdGFyZ2V0LmNoZWNrZWQsXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZvcm1EYXRhKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgW3RhcmdldC5uYW1lXTogdGFyZ2V0LnZhbHVlLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3N0U3VibWlzc2lvbiA9ICgpID0+IHtcbiAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgY29tbWVudCwgc3RvcmVEYXRhIH0gPSBmb3JtRGF0YTtcbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsIHx8ICFjb21tZW50KSB7XG4gICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29tbWVudE9iaiA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIGNvbW1lbnQsXG4gICAgICBzbHVnLFxuICAgIH07XG5cbiAgICBpZiAoc3RvcmVEYXRhKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIG5hbWUpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgZW1haWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbmFtZScpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2VtYWlsJyk7XG4gICAgfVxuXG4gICAgc3VibWl0Q29tbWVudChjb21tZW50T2JqKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmNyZWF0ZUNvbW1lbnQpIHtcbiAgICAgICAgICBpZiAoIXN0b3JlRGF0YSkge1xuICAgICAgICAgICAgZm9ybURhdGEubmFtZSA9ICcnO1xuICAgICAgICAgICAgZm9ybURhdGEuZW1haWwgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybURhdGEuY29tbWVudCA9ICcnO1xuICAgICAgICAgIHNldEZvcm1EYXRhKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgc2V0U2hvd1N1Y2Nlc3NNZXNzYWdlKHRydWUpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd1N1Y2Nlc3NNZXNzYWdlKGZhbHNlKTtcbiAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtOCBwYi0xMiBtYi04XCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtYi04IGZvbnQtc2VtaWJvbGQgYm9yZGVyLWIgcGItNFwiPkxlYXZlIGEgUmVwbHk8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC00IG1iLTRcIj5cbiAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtmb3JtRGF0YS5jb21tZW50fSBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gY2xhc3NOYW1lPVwicC00IG91dGxpbmUtbm9uZSB3LWZ1bGwgcm91bmRlZC1sZyBoLTQwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGJnLWdyYXktMTAwIHRleHQtZ3JheS03MDBcIiBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiQ29tbWVudFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBnYXAtNCBtYi00XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5uYW1lfSBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gY2xhc3NOYW1lPVwicHktMiBweC00IG91dGxpbmUtbm9uZSB3LWZ1bGwgcm91bmRlZC1sZyBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfSBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gY2xhc3NOYW1lPVwicHktMiBweC00IG91dGxpbmUtbm9uZSB3LWZ1bGwgcm91bmRlZC1sZyBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBtYi00XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IGNoZWNrZWQ9e2Zvcm1EYXRhLnN0b3JlRGF0YX0gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic3RvcmVEYXRhXCIgbmFtZT1cInN0b3JlRGF0YVwiIHZhbHVlPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgY3Vyc29yLXBvaW50ZXJcIiBodG1sRm9yPVwic3RvcmVEYXRhXCI+IFNhdmUgbXkgbmFtZSwgZW1haWwgaW4gdGhpcyBicm93c2VyIGZvciB0aGUgbmV4dCB0aW1lIEkgY29tbWVudC48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwXCI+QWxsIGZpZWxkcyBhcmUgbWFuZGF0b3J5PC9wPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVQb3N0U3VibWlzc2lvbn0gY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZSBob3ZlcjpiZy1pbmRpZ28tOTAwIGlubGluZS1ibG9jayBiZy1waW5rLTYwMCB0ZXh0LWxnIGZvbnQtbWVkaXVtIHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlIHB4LTggcHktMyBjdXJzb3ItcG9pbnRlclwiPlBvc3QgQ29tbWVudDwvYnV0dG9uPlxuICAgICAgICB7c2hvd1N1Y2Nlc3NNZXNzYWdlICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZmxvYXQtcmlnaHQgZm9udC1zZW1pYm9sZCBtdC0zIHRleHQtZ3JlZW4tNTAwXCI+Q29tbWVudCBzdWJtaXR0ZWQgZm9yIHJldmlldzwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBGZWF0dXJlZFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC03MlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcm91bmRlZC1sZyBiZy1jZW50ZXIgYmctbm8tcmVwZWF0IGJnLWNvdmVyIHNoYWRvdy1tZCBpbmxpbmUtYmxvY2sgdy1mdWxsIGgtNzJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7cG9zdC5mZWF0dXJlZEltYWdlLnVybH0nKWAgfX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJvdW5kZWQtbGcgYmctY2VudGVyIGJnLWdyYWRpZW50LXRvLWIgb3BhY2l0eS01MCBmcm9tLWdyYXktNDAwIHZpYS1ncmF5LTcwMCB0by1ibGFjayB3LWZ1bGwgaC03MlwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJvdW5kZWQtbGcgcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTQgdGV4dC1zaGFkb3cgZm9udC1zZW1pYm9sZCB0ZXh0LXhzXCI+e21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVknKX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTQgdGV4dC1zaGFkb3cgZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bCB0ZXh0LWNlbnRlclwiPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgYm90dG9tLTUgdy1mdWxsIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICA8SW1hZ2VcbiAgICAgICAgICB1bm9wdGltaXplZFxuICAgICAgICAgIGFsdD17cG9zdC5hdXRob3IubmFtZX1cbiAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcbiAgICAgICAgICB3aWR0aD1cIjMwcHhcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSBkcm9wLXNoYWRvdy1sZyByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIHNyYz17cG9zdC5hdXRob3IucGhvdG8udXJsfVxuICAgICAgICAvPiBcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGFsaWduLW1pZGRsZSB0ZXh0LXdoaXRlIHRleHQtc2hhZG93IG1sLTIgZm9udC1tZWRpdW1cIj57cG9zdC5hdXRob3IubmFtZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWd9YH0+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbFwiIC8+PC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkUG9zdENhcmQ7XG4gIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENhdGVnb3JpZXMoKS50aGVuKChuZXdDYXRlZ29yaWVzKSA9PiB7XG4gICAgICBzZXRDYXRlZ29yaWVzKG5ld0NhdGVnb3JpZXMpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTEwIG1iLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgdy1mdWxsIGlubGluZS1ibG9jayBib3JkZXItYmx1ZS00MDAgcHktOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmZsb2F0LWxlZnQgYmxvY2tcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZm9udC1ib2xkIHRleHQtNHhsIHRleHQtd2hpdGVcIj5BSSBJbmZvPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsb2F0LWxlZnQgbWQ6Y29udGVudHNcIj5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0gaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LnNsdWd9YH0+PHNwYW4gY2xhc3NOYW1lPVwibWQ6ZmxvYXQtcmlnaHQgbXQtMiBhbGlnbi1taWRkbGUgdGV4dC13aGl0ZSBtbC00IGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXJcIj57Y2F0ZWdvcnkubmFtZX08L3NwYW4+PC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDw+XG4gICAgPEhlYWRlciAvPlxuICAgIHtjaGlsZHJlbn1cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMb2FkZXIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWJhc2UgbGVhZGluZy02IGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1yb3NlLTYwMCBob3ZlcjpiZy1yb3NlLTUwMCBmb2N1czpib3JkZXItcm9zZS03MDAgYWN0aXZlOmJnLXJvc2UtNzAwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwIGN1cnNvci1ub3QtYWxsb3dlZFwiXG4gICAgICBkaXNhYmxlZD1cIlwiXG4gICAgPlxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gLW1sLTEgbXItMyBoLTUgdy01IHRleHQtd2hpdGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwib3BhY2l0eS0yNVwiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCI0XCIgLz5cbiAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwib3BhY2l0eS03NVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQgMTJhOCA4IDAgMDE4LThWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmg0em0yIDUuMjkxQTcuOTYyIDcuOTYyIDAgMDE0IDEySDBjMCAzLjA0MiAxLjEzNSA1LjgyNCAzIDcuOTM4bDMtMi42NDd6XCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgTG9hZGluZ1xuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBncnBhaENNU0ltYWdlTG9hZGVyIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGcgcC0wIGxnOnAtOCBwYi0xMiBtYi04XCI+XG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIHBiLTgwIG1iLTZcIj5cbiAgICAgIDxpbWcgc3JjPXtwb3N0LmZlYXR1cmVkSW1hZ2UudXJsfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJvYmplY3QtdG9wIGFic29sdXRlIGgtODAgdy1mdWxsIG9iamVjdC1jb3ZlciAgc2hhZG93LWxnIHJvdW5kZWQtdC1sZyBsZzpyb3VuZGVkLWxnXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxoMSBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMCB0ZXh0LWNlbnRlciBtYi04IGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcGluay02MDAgdGV4dC0zeGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7cG9zdC5zbHVnfWB9Pntwb3N0LnRpdGxlfTwvTGluaz5cbiAgICA8L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbGc6ZmxleCB0ZXh0LWNlbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItOCB3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNCBsZzptYi0wIHctZnVsbCBsZzp3LWF1dG8gbXItOCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgICAgICBsb2FkZXI9e2dycGFoQ01TSW1hZ2VMb2FkZXJ9XG4gICAgICAgICAgYWx0PXtwb3N0LmF1dGhvci5uYW1lfVxuICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxuICAgICAgICAgIHdpZHRoPVwiMzBweFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgc3JjPXtwb3N0LmF1dGhvci5waG90by51cmx9XG4gICAgICAgIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBhbGlnbi1taWRkbGUgdGV4dC1ncmF5LTcwMCBtbC0yIGZvbnQtbWVkaXVtIHRleHQtbGdcIj57cG9zdC5hdXRob3IubmFtZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTYgdy02IGlubGluZSBtci0yIHRleHQtcGluay01MDBcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk04IDdWM204IDRWM20tOSA4aDEwTTUgMjFoMTRhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJ6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPnttb21lbnQocG9zdC5jcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERELCBZWVlZJyl9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LWdyYXktNzAwIGZvbnQtbm9ybWFsIHB4LTQgbGc6cHgtMjAgbWItOFwiPlxuICAgICAge3Bvc3QuZXhjZXJwdH1cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7cG9zdC5zbHVnfWB9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBpbmxpbmUtYmxvY2sgYmctcGluay02MDAgdGV4dC1sZyBmb250LW1lZGl1bSByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSBweC04IHB5LTMgY3Vyc29yLXBvaW50ZXJcIj5Db250aW51ZSBSZWFkaW5nPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBQb3N0RGV0YWlsID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGdldENvbnRlbnRGcmFnbWVudCA9IChpbmRleCwgdGV4dCwgb2JqLCB0eXBlKSA9PiB7XG4gICAgbGV0IG1vZGlmaWVkVGV4dCA9IHRleHQ7XG5cbiAgICBpZiAob2JqKSB7XG4gICAgICBpZiAob2JqLmJvbGQpIHtcbiAgICAgICAgbW9kaWZpZWRUZXh0ID0gKDxiIGtleT17aW5kZXh9Pnt0ZXh0fTwvYj4pO1xuICAgICAgfVxuXG4gICAgICBpZiAob2JqLml0YWxpYykge1xuICAgICAgICBtb2RpZmllZFRleHQgPSAoPGVtIGtleT17aW5kZXh9Pnt0ZXh0fTwvZW0+KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9iai51bmRlcmxpbmUpIHtcbiAgICAgICAgbW9kaWZpZWRUZXh0ID0gKDx1IGtleT17aW5kZXh9Pnt0ZXh0fTwvdT4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnaGVhZGluZy10aHJlZSc6XG4gICAgICAgIHJldHVybiA8aDMga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTRcIj57bW9kaWZpZWRUZXh0Lm1hcCgoaXRlbSwgaSkgPT4gPFJlYWN0LkZyYWdtZW50IGtleT17aX0+e2l0ZW19PC9SZWFjdC5GcmFnbWVudD4pfTwvaDM+O1xuICAgICAgY2FzZSAncGFyYWdyYXBoJzpcbiAgICAgICAgcmV0dXJuIDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1iLThcIj57bW9kaWZpZWRUZXh0Lm1hcCgoaXRlbSwgaSkgPT4gPFJlYWN0LkZyYWdtZW50IGtleT17aX0+e2l0ZW19PC9SZWFjdC5GcmFnbWVudD4pfTwvcD47XG4gICAgICBjYXNlICdoZWFkaW5nLWZvdXInOlxuICAgICAgICByZXR1cm4gPGg0IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1zZW1pYm9sZCBtYi00XCI+e21vZGlmaWVkVGV4dC5tYXAoKGl0ZW0sIGkpID0+IDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PntpdGVtfTwvUmVhY3QuRnJhZ21lbnQ+KX08L2g0PjtcbiAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgYWx0PXtvYmoudGl0bGV9XG4gICAgICAgICAgICBoZWlnaHQ9e29iai5oZWlnaHR9XG4gICAgICAgICAgICB3aWR0aD17b2JqLndpZHRofVxuICAgICAgICAgICAgc3JjPXtvYmouc3JjfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbW9kaWZpZWRUZXh0O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIGxnOnAtOCBwYi0xMiBtYi04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1tZCBtYi02XCI+XG4gICAgICAgICAgPGltZyBzcmM9e3Bvc3QuZmVhdHVyZWRJbWFnZS51cmx9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm9iamVjdC10b3AgaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXIgIHNoYWRvdy1sZyByb3VuZGVkLXQtbGcgbGc6cm91bmRlZC1sZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgbGc6cHgtMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItOCB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGxnOm1iLTAgbGc6dy1hdXRvIG1yLTggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QuYXV0aG9yLm5hbWV9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuYXV0aG9yLnBob3RvLnVybH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lIGFsaWduLW1pZGRsZSB0ZXh0LWdyYXktNzAwIG1sLTIgZm9udC1tZWRpdW0gdGV4dC1sZ1wiPntwb3N0LmF1dGhvci5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNiB3LTYgaW5saW5lIG1yLTIgdGV4dC1waW5rLTUwMFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTggN1YzbTggNFYzbS05IDhoMTBNNSAyMWgxNGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+e21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVknKX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItOCB0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICB7cG9zdC5jb250ZW50LnJhdy5jaGlsZHJlbi5tYXAoKHR5cGVPYmosIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHR5cGVPYmouY2hpbGRyZW4ubWFwKChpdGVtLCBpdGVtaW5kZXgpID0+IGdldENvbnRlbnRGcmFnbWVudChpdGVtaW5kZXgsIGl0ZW0udGV4dCwgaXRlbSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29udGVudEZyYWdtZW50KGluZGV4LCBjaGlsZHJlbiwgdHlwZU9iaiwgdHlwZU9iai50eXBlKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdERldGFpbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgZ3JwYWhDTVNJbWFnZUxvYWRlciB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgZ2V0U2ltaWxhclBvc3RzLCBnZXRSZWNlbnRQb3N0cyB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuY29uc3QgUG9zdFdpZGdldCA9ICh7IGNhdGVnb3JpZXMsIHNsdWcgfSkgPT4ge1xuICBjb25zdCBbcmVsYXRlZFBvc3RzLCBzZXRSZWxhdGVkUG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNsdWcpIHtcbiAgICAgIGdldFNpbWlsYXJQb3N0cyhjYXRlZ29yaWVzLCBzbHVnKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgc2V0UmVsYXRlZFBvc3RzKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0UmVjZW50UG9zdHMoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgc2V0UmVsYXRlZFBvc3RzKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtzbHVnXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtOCBwYi0xMiBtYi04XCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtYi04IGZvbnQtc2VtaWJvbGQgYm9yZGVyLWIgcGItNFwiPntzbHVnID8gJ1JlbGF0ZWQgUG9zdHMnIDogJ1JlY2VudCBQb3N0cyd9PC9oMz5cbiAgICAgIHtyZWxhdGVkUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBtYi00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGZsZXgtbm9uZVwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGxvYWRlcj17Z3JwYWhDTVNJbWFnZUxvYWRlcn1cbiAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBoZWlnaHQ9XCI2MHB4XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI2MHB4XCJcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5mZWF0dXJlZEltYWdlLnVybH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgbWwtNFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBmb250LXhzXCI+e21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVknKX08L3A+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWd9YH0gY2xhc3NOYW1lPVwidGV4dC1tZFwiIGtleT17aW5kZXh9Pntwb3N0LnRpdGxlfTwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RXaWRnZXQ7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBvc3RDYXJkIH0gZnJvbSAnLi9Qb3N0Q2FyZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBvc3REZXRhaWwgfSBmcm9tICcuL1Bvc3REZXRhaWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXlvdXQgfSBmcm9tICcuL0xheW91dCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhdGVnb3JpZXMgfSBmcm9tICcuL0NhdGVnb3JpZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBdXRob3IgfSBmcm9tICcuL0F1dGhvcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBvc3RXaWRnZXQgfSBmcm9tICcuL1Bvc3RXaWRnZXQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBZGphY2VudFBvc3RDYXJkIH0gZnJvbSAnLi9BZGphY2VudFBvc3RDYXJkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmVhdHVyZWRQb3N0Q2FyZCB9IGZyb20gJy4vRmVhdHVyZWRQb3N0Q2FyZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbW1lbnRzIH0gZnJvbSAnLi9Db21tZW50cyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbW1lbnRzRm9ybSB9IGZyb20gJy4vQ29tbWVudHNGb3JtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGVyIH0gZnJvbSAnLi9Mb2FkZXInO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCB7IEZlYXR1cmVkUG9zdHMgfSBmcm9tICcuLi9zZWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBQb3N0Q2FyZCwgQ2F0ZWdvcmllcywgUG9zdFdpZGdldCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwb3N0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0xMCBtYi04XCI+XG4gICAgICA8RmVhdHVyZWRQb3N0cyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0xMiBnYXAtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi04IGNvbC1zcGFuLTFcIj5cbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFBvc3RDYXJkIGtleT17aW5kZXh9IHBvc3Q9e3Bvc3Qubm9kZX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tNCBjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpzdGlja3kgcmVsYXRpdmUgdG9wLThcIj5cbiAgICAgICAgICAgIDxQb3N0V2lkZ2V0IC8+XG4gICAgICAgICAgICA8Q2F0ZWdvcmllcyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBGZXRjaCBkYXRhIGF0IGJ1aWxkIHRpbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSAoYXdhaXQgZ2V0UG9zdHMoKSkgfHwgW107XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdHMgfSxcbiAgfTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFkamFjZW50UG9zdENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCB7IGdldEFkamFjZW50UG9zdHMgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbmNvbnN0IEFkamFjZW50UG9zdHMgPSAoeyBjcmVhdGVkQXQsIHNsdWcgfSkgPT4ge1xuICBjb25zdCBbYWRqYWNlbnRQb3N0LCBzZXRBZGphY2VudFBvc3RdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkYXRhTG9hZGVkLCBzZXREYXRhTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFkamFjZW50UG9zdHMoY3JlYXRlZEF0LCBzbHVnKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHNldEFkamFjZW50UG9zdChyZXN1bHQpO1xuICAgICAgc2V0RGF0YUxvYWRlZCh0cnVlKTtcbiAgICB9KTtcbiAgfSwgW3NsdWddKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtOCBnYXAtMTIgbWItOFwiPlxuICAgICAge2RhdGFMb2FkZWQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIHthZGphY2VudFBvc3QucHJldmlvdXMgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2FkamFjZW50UG9zdC5uZXh0ID8gJ2NvbC1zcGFuLTEgbGc6Y29sLXNwYW4tNCcgOiAnY29sLXNwYW4tMSBsZzpjb2wtc3Bhbi04J30gYWRqYWNlbnQtcG9zdCByb3VuZGVkLWxnIHJlbGF0aXZlIGgtNzJgfT5cbiAgICAgICAgICAgICAgPEFkamFjZW50UG9zdENhcmQgcG9zdD17YWRqYWNlbnRQb3N0LnByZXZpb3VzfSBwb3NpdGlvbj1cIkxFRlRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YWRqYWNlbnRQb3N0Lm5leHQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2FkamFjZW50UG9zdC5wcmV2aW91cyA/ICdjb2wtc3Bhbi0xIGxnOmNvbC1zcGFuLTQnIDogJ2NvbC1zcGFuLTEgbGc6Y29sLXNwYW4tOCd9IGFkamFjZW50LXBvc3Qgcm91bmRlZC1sZyByZWxhdGl2ZSBoLTcyYH0+XG4gICAgICAgICAgICAgIDxBZGphY2VudFBvc3RDYXJkIHBvc3Q9e2FkamFjZW50UG9zdC5uZXh0fSBwb3NpdGlvbj1cIlJJR0hUXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkamFjZW50UG9zdHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XG5pbXBvcnQgJ3JlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzJztcblxuaW1wb3J0IHsgRmVhdHVyZWRQb3N0Q2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ2V0RmVhdHVyZWRQb3N0cyB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgc3VwZXJMYXJnZURlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAxMDI0IH0sXG4gICAgaXRlbXM6IDUsXG4gIH0sXG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA3NjggfSxcbiAgICBpdGVtczogMyxcbiAgfSxcbiAgdGFibGV0OiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDc2OCwgbWluOiA2NDAgfSxcbiAgICBpdGVtczogMixcbiAgfSxcbiAgbW9iaWxlOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDY0MCwgbWluOiAwIH0sXG4gICAgaXRlbXM6IDEsXG4gIH0sXG59O1xuXG5jb25zdCBGZWF0dXJlZFBvc3RzID0gKCkgPT4ge1xuICBjb25zdCBbZmVhdHVyZWRQb3N0cywgc2V0RmVhdHVyZWRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRhTG9hZGVkLCBzZXREYXRhTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEZlYXR1cmVkUG9zdHMoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHNldEZlYXR1cmVkUG9zdHMocmVzdWx0KTtcbiAgICAgIHNldERhdGFMb2FkZWQodHJ1ZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjdXN0b21MZWZ0QXJyb3cgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBhcnJvdy1idG4gbGVmdC0wIHRleHQtY2VudGVyIHB5LTMgY3Vyc29yLXBvaW50ZXIgYmctcGluay02MDAgcm91bmRlZC1mdWxsXCI+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGUgdy1mdWxsXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTEwIDE5bC03LTdtMCAwbDctN20tNyA3aDE4XCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IGN1c3RvbVJpZ2h0QXJyb3cgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBhcnJvdy1idG4gcmlnaHQtMCB0ZXh0LWNlbnRlciBweS0zIGN1cnNvci1wb2ludGVyIGJnLXBpbmstNjAwIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlIHctZnVsbFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0xNCA1bDcgN20wIDBsLTcgN203LTdIM1wiIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgPENhcm91c2VsIGluZmluaXRlIGN1c3RvbUxlZnRBcnJvdz17Y3VzdG9tTGVmdEFycm93fSBjdXN0b21SaWdodEFycm93PXtjdXN0b21SaWdodEFycm93fSByZXNwb25zaXZlPXtyZXNwb25zaXZlfSBpdGVtQ2xhc3M9XCJweC00XCI+XG4gICAgICAgIHtkYXRhTG9hZGVkICYmIGZlYXR1cmVkUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxGZWF0dXJlZFBvc3RDYXJkIGtleT17aW5kZXh9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkUG9zdHM7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFkamFjZW50UG9zdHMgfSBmcm9tICcuL0FkamFjZW50UG9zdHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGZWF0dXJlZFBvc3RzIH0gZnJvbSAnLi9GZWF0dXJlZFBvc3RzJztcbiIsImltcG9ydCB7IHJlcXVlc3QsIGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XG5cbmNvbnN0IGdyYXBocWxBUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUkFQSENNU19FTkRQT0lOVDtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGdxbGBcbiAgICBxdWVyeSBNeVF1ZXJ5IHtcbiAgICAgIHBvc3RzQ29ubmVjdGlvbiB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBjdXJzb3JcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgICAgIGJpb1xuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHBob3RvIHtcbiAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgZXhjZXJwdFxuICAgICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KGdyYXBocWxBUEksIHF1ZXJ5KTtcblxuICByZXR1cm4gcmVzdWx0LnBvc3RzQ29ubmVjdGlvbi5lZGdlcztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGdxbGBcbiAgICBxdWVyeSBHZXRHYXRlZ29yaWVzIHtcbiAgICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgfVxuICAgIH1cbiAgYDtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KGdyYXBocWxBUEksIHF1ZXJ5KTtcblxuICByZXR1cm4gcmVzdWx0LmNhdGVnb3JpZXM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdERldGFpbHMgPSBhc3luYyAoc2x1ZykgPT4ge1xuICBjb25zdCBxdWVyeSA9IGdxbGBcbiAgICBxdWVyeSBHZXRQb3N0RGV0YWlscygkc2x1ZyA6IFN0cmluZyEpIHtcbiAgICAgIHBvc3Qod2hlcmU6IHtzbHVnOiAkc2x1Z30pIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgZXhjZXJwdFxuICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBhdXRob3J7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGJpb1xuICAgICAgICAgIHBob3RvIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgc2x1Z1xuICAgICAgICBjb250ZW50IHtcbiAgICAgICAgICByYXdcbiAgICAgICAgfVxuICAgICAgICBjYXRlZ29yaWVzIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgc2x1Z1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoZ3JhcGhxbEFQSSwgcXVlcnksIHsgc2x1ZyB9KTtcblxuICByZXR1cm4gcmVzdWx0LnBvc3Q7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2ltaWxhclBvc3RzID0gYXN5bmMgKGNhdGVnb3JpZXMsIHNsdWcpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBncWxgXG4gICAgcXVlcnkgR2V0UG9zdERldGFpbHMoJHNsdWc6IFN0cmluZyEsICRjYXRlZ29yaWVzOiBbU3RyaW5nIV0pIHtcbiAgICAgIHBvc3RzKFxuICAgICAgICB3aGVyZToge3NsdWdfbm90OiAkc2x1ZywgQU5EOiB7Y2F0ZWdvcmllc19zb21lOiB7c2x1Z19pbjogJGNhdGVnb3JpZXN9fX1cbiAgICAgICAgbGFzdDogM1xuICAgICAgKSB7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICBzbHVnXG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KGdyYXBocWxBUEksIHF1ZXJ5LCB7IHNsdWcsIGNhdGVnb3JpZXMgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdC5wb3N0cztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBZGphY2VudFBvc3RzID0gYXN5bmMgKGNyZWF0ZWRBdCwgc2x1ZykgPT4ge1xuICBjb25zdCBxdWVyeSA9IGdxbGBcbiAgICBxdWVyeSBHZXRBZGphY2VudFBvc3RzKCRjcmVhdGVkQXQ6IERhdGVUaW1lISwkc2x1ZzpTdHJpbmchKSB7XG4gICAgICBuZXh0OnBvc3RzKFxuICAgICAgICBmaXJzdDogMVxuICAgICAgICBvcmRlckJ5OiBjcmVhdGVkQXRfQVNDXG4gICAgICAgIHdoZXJlOiB7c2x1Z19ub3Q6ICRzbHVnLCBBTkQ6IHtjcmVhdGVkQXRfZ3RlOiAkY3JlYXRlZEF0fX1cbiAgICAgICkge1xuICAgICAgICB0aXRsZVxuICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgc2x1Z1xuICAgICAgfVxuICAgICAgcHJldmlvdXM6cG9zdHMoXG4gICAgICAgIGZpcnN0OiAxXG4gICAgICAgIG9yZGVyQnk6IGNyZWF0ZWRBdF9ERVNDXG4gICAgICAgIHdoZXJlOiB7c2x1Z19ub3Q6ICRzbHVnLCBBTkQ6IHtjcmVhdGVkQXRfbHRlOiAkY3JlYXRlZEF0fX1cbiAgICAgICkge1xuICAgICAgICB0aXRsZVxuICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgc2x1Z1xuICAgICAgfVxuICAgIH1cbiAgYDtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KGdyYXBocWxBUEksIHF1ZXJ5LCB7IHNsdWcsIGNyZWF0ZWRBdCB9KTtcblxuICByZXR1cm4geyBuZXh0OiByZXN1bHQubmV4dFswXSwgcHJldmlvdXM6IHJlc3VsdC5wcmV2aW91c1swXSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5UG9zdCA9IGFzeW5jIChzbHVnKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICAgIHF1ZXJ5IEdldENhdGVnb3J5UG9zdCgkc2x1ZzogU3RyaW5nISkge1xuICAgICAgcG9zdHNDb25uZWN0aW9uKHdoZXJlOiB7Y2F0ZWdvcmllc19zb21lOiB7c2x1ZzogJHNsdWd9fSkge1xuICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgY3Vyc29yXG4gICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICBhdXRob3Ige1xuICAgICAgICAgICAgICBiaW9cbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBwaG90byB7XG4gICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIGV4Y2VycHRcbiAgICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGVnb3JpZXMge1xuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdChncmFwaHFsQVBJLCBxdWVyeSwgeyBzbHVnIH0pO1xuXG4gIHJldHVybiByZXN1bHQucG9zdHNDb25uZWN0aW9uLmVkZ2VzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEZlYXR1cmVkUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICAgIHF1ZXJ5IEdldENhdGVnb3J5UG9zdCgpIHtcbiAgICAgIHBvc3RzKHdoZXJlOiB7ZmVhdHVyZWRQb3N0OiB0cnVlfSkge1xuICAgICAgICBhdXRob3Ige1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBwaG90byB7XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgdGl0bGVcbiAgICAgICAgc2x1Z1xuICAgICAgICBjcmVhdGVkQXRcbiAgICAgIH1cbiAgICB9ICAgXG4gIGA7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdChncmFwaHFsQVBJLCBxdWVyeSk7XG5cbiAgcmV0dXJuIHJlc3VsdC5wb3N0cztcbn07XG5cbmV4cG9ydCBjb25zdCBzdWJtaXRDb21tZW50ID0gYXN5bmMgKG9iaikgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnL2FwaS9jb21tZW50cycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoc2x1ZykgPT4ge1xuICBjb25zdCBxdWVyeSA9IGdxbGBcbiAgICBxdWVyeSBHZXRDb21tZW50cygkc2x1ZzpTdHJpbmchKSB7XG4gICAgICBjb21tZW50cyh3aGVyZToge3Bvc3Q6IHtzbHVnOiRzbHVnfX0pe1xuICAgICAgICBuYW1lXG4gICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICBjb21tZW50XG4gICAgICB9XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoZ3JhcGhxbEFQSSwgcXVlcnksIHsgc2x1ZyB9KTtcblxuICByZXR1cm4gcmVzdWx0LmNvbW1lbnRzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlY2VudFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGdxbGBcbiAgICBxdWVyeSBHZXRQb3N0RGV0YWlscygpIHtcbiAgICAgIHBvc3RzKFxuICAgICAgICBvcmRlckJ5OiBjcmVhdGVkQXRfQVNDXG4gICAgICAgIGxhc3Q6IDNcbiAgICAgICkge1xuICAgICAgICB0aXRsZVxuICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgc2x1Z1xuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdChncmFwaHFsQVBJLCBxdWVyeSk7XG5cbiAgcmV0dXJuIHJlc3VsdC5wb3N0cztcbn07XG4iLCJleHBvcnQgY29uc3QgZ3JwYWhDTVNJbWFnZUxvYWRlciA9ICh7IHNyYyB9KSA9PiBzcmM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZXF1ZXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0bWwtcmVhY3QtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsIkxpbmsiLCJBZGphY2VudFBvc3RDYXJkIiwicG9zdCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwiZmVhdHVyZWRJbWFnZSIsInVybCIsImNyZWF0ZWRBdCIsImZvcm1hdCIsInRpdGxlIiwic2x1ZyIsIkltYWdlIiwiZ3JwYWhDTVNJbWFnZUxvYWRlciIsIkF1dGhvciIsImF1dGhvciIsIm5hbWUiLCJwaG90byIsImJpbyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0Q2F0ZWdvcmllcyIsIkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInRoZW4iLCJuZXdDYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsImxlbmd0aCIsInBhcnNlIiwiZ2V0Q29tbWVudHMiLCJDb21tZW50cyIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJyZXN1bHQiLCJjb21tZW50Iiwic3VibWl0Q29tbWVudCIsIkNvbW1lbnRzRm9ybSIsImVycm9yIiwic2V0RXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJzZXRMb2NhbFN0b3JhZ2UiLCJzaG93U3VjY2Vzc01lc3NhZ2UiLCJzZXRTaG93U3VjY2Vzc01lc3NhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJzdG9yZURhdGEiLCJ3aW5kb3ciLCJpbml0YWxGb3JtRGF0YSIsImdldEl0ZW0iLCJvbklucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiLCJwcmV2U3RhdGUiLCJjaGVja2VkIiwidmFsdWUiLCJoYW5kbGVQb3N0U3VibWlzc2lvbiIsImNvbW1lbnRPYmoiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInJlcyIsImNyZWF0ZUNvbW1lbnQiLCJzZXRUaW1lb3V0IiwiRmVhdHVyZWRQb3N0Q2FyZCIsIkhlYWRlciIsIkxheW91dCIsImNoaWxkcmVuIiwiTG9hZGVyIiwiUG9zdENhcmQiLCJleGNlcnB0IiwiUG9zdERldGFpbCIsImdldENvbnRlbnRGcmFnbWVudCIsInRleHQiLCJvYmoiLCJtb2RpZmllZFRleHQiLCJib2xkIiwiaXRhbGljIiwidW5kZXJsaW5lIiwiaXRlbSIsImkiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsImNvbnRlbnQiLCJyYXciLCJ0eXBlT2JqIiwiaXRlbWluZGV4IiwiZ2V0U2ltaWxhclBvc3RzIiwiZ2V0UmVjZW50UG9zdHMiLCJQb3N0V2lkZ2V0IiwicmVsYXRlZFBvc3RzIiwic2V0UmVsYXRlZFBvc3RzIiwiZGVmYXVsdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsIndhcm4iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJGZWF0dXJlZFBvc3RzIiwiZ2V0UG9zdHMiLCJIb21lIiwicG9zdHMiLCJub2RlIiwiZ2V0U3RhdGljUHJvcHMiLCJnZXRBZGphY2VudFBvc3RzIiwiQWRqYWNlbnRQb3N0cyIsImFkamFjZW50UG9zdCIsInNldEFkamFjZW50UG9zdCIsImRhdGFMb2FkZWQiLCJzZXREYXRhTG9hZGVkIiwicHJldmlvdXMiLCJDYXJvdXNlbCIsImdldEZlYXR1cmVkUG9zdHMiLCJyZXNwb25zaXZlIiwic3VwZXJMYXJnZURlc2t0b3AiLCJicmVha3BvaW50IiwiaXRlbXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwiZmVhdHVyZWRQb3N0cyIsInNldEZlYXR1cmVkUG9zdHMiLCJjdXN0b21MZWZ0QXJyb3ciLCJjdXN0b21SaWdodEFycm93IiwicmVxdWVzdCIsImdxbCIsImdyYXBocWxBUEkiLCJORVhUX1BVQkxJQ19HUkFQSENNU19FTkRQT0lOVCIsInBvc3RzQ29ubmVjdGlvbiIsImVkZ2VzIiwiZ2V0UG9zdERldGFpbHMiLCJnZXRDYXRlZ29yeVBvc3QiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==