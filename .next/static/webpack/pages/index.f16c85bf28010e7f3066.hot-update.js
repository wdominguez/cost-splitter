webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_deductions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/deductions */ \"./components/deductions.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/wdominguez/repositories/personal/grocery-app/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Layout = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__Layout\",\n  componentId: \"sc-19oi6b3-0\"\n})([\"display:flex;flex-direction:column;padding:10px;\"]);\n_c = Layout;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__Form\",\n  componentId: \"sc-19oi6b3-1\"\n})([\"display:flex;flex-direction:column;width:300px;\"]);\n_c2 = Form;\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].input.withConfig({\n  displayName: \"pages__Input\",\n  componentId: \"sc-19oi6b3-2\"\n})([\"float:right;\"]);\n_c3 = Input;\nvar AddItemForm = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__AddItemForm\",\n  componentId: \"sc-19oi6b3-3\"\n})([\"flex-direction:row;\"]);\nvar InputButton = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__InputButton\",\n  componentId: \"sc-19oi6b3-4\"\n})([\"float:right;\"]);\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    Jerry: 0,\n    Wyatt: 0,\n    Lucas: 0\n  }),\n      indivTotals = _useState[0],\n      setIndivTotals = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      total = _useState2[0],\n      setTotal = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      tax = _useState3[0],\n      setTax = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var newIndivTotals = _objectSpread({}, indivTotals);\n\n    var keys = Object.keys(indivTotals);\n    keys.forEach(function (key) {\n      newIndivTotals[key] = (total + tax) / keys.length;\n    });\n    console.log('indivTotals: ', indivTotals);\n    setIndivTotals(newIndivTotals);\n  }, [total, tax]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(Layout, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h1\", {\n      children: \"Grocery Calculator\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(Form, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n        children: [\"Total (including tax):\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(Input, {\n          step: \"0.1\",\n          onChange: function onChange(event) {\n            return setTotal(event.target.value);\n          },\n          type: \"text\",\n          value: total,\n          placeholder: \"Enter Dollar Value\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n        children: [\"Tax:\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(Input, {\n          step: \"0.1\",\n          onChange: function onChange(event) {\n            return setTax(event.target.value);\n          },\n          type: \"text\",\n          value: tax,\n          placeholder: \"Enter Dollar Value\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_components_deductions__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      indivTotals: indivTotals,\n      setIndivTotals: setIndivTotals\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: Object.keys(indivTotals).map(function (name) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n          children: [name, \" Final Total: \", indivTotals[name]]\n        }, name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"YYpDexx5HxFy32HQzIsixcPGae8=\");\n\n_c4 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Layout\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"Input\");\n$RefreshReg$(_c4, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJMYXlvdXQiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiSW5wdXQiLCJpbnB1dCIsIkFkZEl0ZW1Gb3JtIiwiSW5wdXRCdXR0b24iLCJIb21lIiwidXNlU3RhdGUiLCJKZXJyeSIsIld5YXR0IiwiTHVjYXMiLCJpbmRpdlRvdGFscyIsInNldEluZGl2VG90YWxzIiwidG90YWwiLCJzZXRUb3RhbCIsInRheCIsInNldFRheCIsInVzZUVmZmVjdCIsIm5ld0luZGl2VG90YWxzIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0RBQVo7S0FBTUYsTTtBQU1OLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1REFBVjtNQUFNQyxJO0FBTU4sSUFBTUMsS0FBSyxHQUFHSCx5REFBTSxDQUFDSSxLQUFWO0FBQUE7QUFBQTtBQUFBLG9CQUFYO01BQU1ELEs7QUFJTixJQUFNRSxXQUFXLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkJBQWpCO0FBSUEsSUFBTUssV0FBVyxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9CQUFqQjs7QUFJQSxJQUFNTSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ3FCQyxzREFBUSxDQUFDO0FBQzdDQyxTQUFLLEVBQUUsQ0FEc0M7QUFFN0NDLFNBQUssRUFBRSxDQUZzQztBQUc3Q0MsU0FBSyxFQUFFO0FBSHNDLEdBQUQsQ0FEN0I7QUFBQSxNQUNWQyxXQURVO0FBQUEsTUFDR0MsY0FESDs7QUFBQSxtQkFPU0wsc0RBQVEsQ0FBQyxDQUFELENBUGpCO0FBQUEsTUFPVk0sS0FQVTtBQUFBLE1BT0hDLFFBUEc7O0FBQUEsbUJBUUtQLHNEQUFRLENBQUMsQ0FBRCxDQVJiO0FBQUEsTUFRVlEsR0FSVTtBQUFBLE1BUUxDLE1BUks7O0FBVWpCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxjQUFjLHFCQUFRUCxXQUFSLENBQXBCOztBQUNBLFFBQU1RLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlSLFdBQVosQ0FBYjtBQUNBUSxRQUFJLENBQUNFLE9BQUwsQ0FBYSxVQUFDQyxHQUFELEVBQVM7QUFDcEJKLG9CQUFjLENBQUNJLEdBQUQsQ0FBZCxHQUFzQixDQUFDVCxLQUFLLEdBQUdFLEdBQVQsSUFBZ0JJLElBQUksQ0FBQ0ksTUFBM0M7QUFDRCxLQUZEO0FBR0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJkLFdBQTdCO0FBQ0FDLGtCQUFjLENBQUNNLGNBQUQsQ0FBZDtBQUNELEdBUlEsRUFRTixDQUFDTCxLQUFELEVBQVFFLEdBQVIsQ0FSTSxDQUFUO0FBVUEsc0JBQ0UscUVBQUMsTUFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxJQUFEO0FBQUEsOEJBQ0U7QUFBQSw2Q0FDeUIsR0FEekIsZUFFRSxxRUFBQyxLQUFEO0FBQ0UsY0FBSSxFQUFDLEtBRFA7QUFFRSxrQkFBUSxFQUFFLGtCQUFDVyxLQUFEO0FBQUEsbUJBQVdaLFFBQVEsQ0FBQ1ksS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBbkI7QUFBQSxXQUZaO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxlQUFLLEVBQUVmLEtBSlQ7QUFLRSxxQkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVdFO0FBQUEsMkJBQ08sR0FEUCxlQUVFLHFFQUFDLEtBQUQ7QUFDRSxjQUFJLEVBQUMsS0FEUDtBQUVFLGtCQUFRLEVBQUUsa0JBQUNhLEtBQUQ7QUFBQSxtQkFBV1YsTUFBTSxDQUFDVSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFqQjtBQUFBLFdBRlo7QUFHRSxjQUFJLEVBQUMsTUFIUDtBQUlFLGVBQUssRUFBRWIsR0FKVDtBQUtFLHFCQUFXLEVBQUM7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBd0JFLHFFQUFDLDhEQUFEO0FBQVksaUJBQVcsRUFBRUosV0FBekI7QUFBc0Msb0JBQWMsRUFBRUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRixlQXlCRTtBQUFBLGdCQUNHUSxNQUFNLENBQUNELElBQVAsQ0FBWVIsV0FBWixFQUF5QmtCLEdBQXpCLENBQTZCLFVBQUNDLElBQUQ7QUFBQSw0QkFDNUI7QUFBQSxxQkFDR0EsSUFESCxvQkFDdUJuQixXQUFXLENBQUNtQixJQUFELENBRGxDO0FBQUEsV0FBUUEsSUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQ0QjtBQUFBLE9BQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1DRCxDQXZERDs7R0FBTXhCLEk7O01BQUFBLEk7QUF5RFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IERlZHVjdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9kZWR1Y3Rpb25zJ1xuXG5jb25zdCBMYXlvdXQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4O1xuYFxuXG5jb25zdCBGb3JtID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMwMHB4O1xuYFxuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgZmxvYXQ6IHJpZ2h0O1xuYFxuXG5jb25zdCBBZGRJdGVtRm9ybSA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gXG5cbmNvbnN0IElucHV0QnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgZmxvYXQ6IHJpZ2h0O1xuYFxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbaW5kaXZUb3RhbHMsIHNldEluZGl2VG90YWxzXSA9IHVzZVN0YXRlKHtcbiAgICBKZXJyeTogMCxcbiAgICBXeWF0dDogMCxcbiAgICBMdWNhczogMFxuICB9KVxuXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3RheCwgc2V0VGF4XSA9IHVzZVN0YXRlKDApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXdJbmRpdlRvdGFscyA9IHsgLi4uaW5kaXZUb3RhbHMgfVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhpbmRpdlRvdGFscylcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbmV3SW5kaXZUb3RhbHNba2V5XSA9ICh0b3RhbCArIHRheCkgLyBrZXlzLmxlbmd0aFxuICAgIH0pXG4gICAgY29uc29sZS5sb2coJ2luZGl2VG90YWxzOiAnLCBpbmRpdlRvdGFscylcbiAgICBzZXRJbmRpdlRvdGFscyhuZXdJbmRpdlRvdGFscylcbiAgfSwgW3RvdGFsLCB0YXhdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5Hcm9jZXJ5IENhbGN1bGF0b3I8L2gxPlxuICAgICAgPEZvcm0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgVG90YWwgKGluY2x1ZGluZyB0YXgpOnsnICd9XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBzdGVwPScwLjEnXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUb3RhbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBEb2xsYXIgVmFsdWUnXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgVGF4OnsnICd9XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBzdGVwPScwLjEnXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUYXgoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICB2YWx1ZT17dGF4fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIERvbGxhciBWYWx1ZSdcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxEZWR1Y3Rpb25zIGluZGl2VG90YWxzPXtpbmRpdlRvdGFsc30gc2V0SW5kaXZUb3RhbHM9e3NldEluZGl2VG90YWxzfSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAge09iamVjdC5rZXlzKGluZGl2VG90YWxzKS5tYXAoKG5hbWUpID0+IChcbiAgICAgICAgICA8cCBrZXk9e25hbWV9PlxuICAgICAgICAgICAge25hbWV9IEZpbmFsIFRvdGFsOiB7aW5kaXZUb3RhbHNbbmFtZV19XG4gICAgICAgICAgPC9wPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})