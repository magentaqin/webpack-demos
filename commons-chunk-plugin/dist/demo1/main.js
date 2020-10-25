webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

const a = 'Module 1'

module.exports = a

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)
__webpack_require__(2)
console.log('demo1/index')

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const a = __webpack_require__(0)

const b = 'Module 2'

module.exports = b

/***/ })
],[1]);