webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _Topbar = __webpack_require__(217);
	
	var _Topbar2 = _interopRequireDefault(_Topbar);
	
	var _content = __webpack_require__(218);
	
	var _content2 = _interopRequireDefault(_content);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(_Topbar2.default, null), document.getElementById('degender-bar'));
	
	// import { Provider } from 'react-redux'
	// import store from './store'

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Topbar = function (_Component) {
	  _inherits(Topbar, _Component);
	
	  function Topbar() {
	    _classCallCheck(this, Topbar);
	
	    return _possibleConstructorReturn(this, (Topbar.__proto__ || Object.getPrototypeOf(Topbar)).apply(this, arguments));
	  }
	
	  _createClass(Topbar, [{
	    key: 'render',
	    value: function render() {
	      console.log(this.state);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'This page has been degendered'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'buttons' },
	          _react2.default.createElement(
	            'button',
	            { id: 'revert' },
	            'Revert'
	          ),
	          _react2.default.createElement(
	            'button',
	            { id: 'highPro' },
	            'Altered Pronouns'
	          ),
	          _react2.default.createElement(
	            'button',
	            { id: 'highAdj' },
	            'Altered Adjectives'
	          ),
	          _react2.default.createElement(
	            'button',
	            { id: 'highNone' },
	            'Altered Nouns'
	          ),
	          _react2.default.createElement(
	            'button',
	            { id: 'highAll' },
	            'All Altered Text'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Topbar;
	}(_react.Component);
	
	exports.default = Topbar;

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(219);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(216)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./content.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./content.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(215)();
	// imports
	
	
	// module
	exports.push([module.id, "#degender-bar {\n  background: linear-gradient(170deg, #89c8c9, #ef8594);\n  width: 100%;\n  padding: 1rem;\n  color: #333;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 500;\n  box-sizing: border-box;\n}\n\n#degender-bar h1 {\n  font-family: \"Telefon Black\", Sans-Serif;\n  padding: 0;\n  margin-top: 0;\n}\n\n#degender-bar.hide {\n  display: none;\n}\n\n#degender-bar .buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n#degender-bar button {\n  cursor: pointer;\n  background: #555;\n  border-radius: 4px;\n  color: #fff;\n  text-shadow: none;\n  border: 0!important;\n  font-size: 0.75rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  padding: 5px 15px;\n  box-shadow: none;\n  line-height: 1rem;\n  transition: background-color .2s ease;\n}\n\n#degender-bar button:hover {\n  background: #333;\n  border: 0;\n  transition: background-color .2s ease;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=content.js.map