(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Jsi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jsi = require("Jsi/es6/jsi.js");

var Jsi_compat = function (_Jsi) {
	_inherits(Jsi_compat, _Jsi);

	function Jsi_compat() {
		_classCallCheck(this, Jsi_compat);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Jsi_compat).call(this, document));
	}

	_createClass(Jsi_compat, [{
		key: "docelid",
		value: function docelid(id) {
			return this.id(id);
		}
	}, {
		key: "doceleq",
		value: function doceleq(query) {
			return this.query(query);
		}
	}, {
		key: "doceleqFirst",
		value: function doceleqFirst(query) {
			return this.queryFirst(query);
		}
	}, {
		key: "append",
		value: function append(parent, elt) {
			return _get(Object.getPrototypeOf(Jsi_compat.prototype), "append", this).call(this, parent, elt, true);
		}
	}, {
		key: "appendBefore",
		value: function appendBefore(elt, n_elt) {
			_get(Object.getPrototypeOf(Jsi_compat.prototype), "appendBefore", this).call(this, elt, n_elt);
			return elt;
		}
	}, {
		key: "appendAfter",
		value: function appendAfter(elt, n_elt) {
			_get(Object.getPrototypeOf(Jsi_compat.prototype), "appendAfter", this).call(this, elt, n_elt);
			return elt;
		}
	}, {
		key: "prepend",
		value: function prepend(parent, elt) {
			_get(Object.getPrototypeOf(Jsi_compat.prototype), "prepend", this).call(this, parent, elt);
			return parent;
		}
	}, {
		key: "replace",
		value: function replace(elt, n_elt) {
			_get(Object.getPrototypeOf(Jsi_compat.prototype), "replace", this).call(this, elt, n_elt);
			return n_elt.parentNode;
		}
	}, {
		key: "elt",
		value: function elt(c) {
			return _get(Object.getPrototypeOf(Jsi_compat.prototype), "create", this).call(this, c);
		}
	}]);

	return Jsi_compat;
}(Jsi);

module.exports = new Jsi_compat();

},{"Jsi/es6/jsi.js":2}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jsi = function () {
	function Jsi(doc) {
		_classCallCheck(this, Jsi);

		if (doc === undefined) {
			doc = document;
		}
		this.doc = doc;
		this.created = new Map();

		this.eltEvent = new Map();
		this.eltEvent.set('onclick', 'click');
		this.eltEvent.set('onchange', 'change');
		this.eltEvent.set('onfocus', 'focus');
		this.eltEvent.set('onblur', 'blur');
		this.eltEvent.set('onkeyup', 'keyup');
		this.eltEvent.set('onkeypress', 'keypress');
		this.eltEvent.set('onsubmit', 'submit');
		this.eltEvent.set('onanimationend', 'animationend');
		this.eltEvent.set('ontransitionend', 'transitionend');
		this.eltEvent.set('oncopy', 'copy');
		this.eltEvent.set('oncut', 'cut');
		this.eltEvent.set('ondblclick', 'dblclick');
		this.eltEvent.set('oninvalid', 'invalid');
		this.eltEvent.set('onmousedown', 'mousedown');
		this.eltEvent.set('onmouseup', 'mouseup');
		this.eltEvent.set('onmouseenter', 'mouseenter');
		this.eltEvent.set('onmouseleave', 'mouseleave');
		this.eltEvent.set('onmousemove', 'mousemove');
		this.eltEvent.set('onmouseout', 'mouseout');
		this.eltEvent.set('onmouseover', 'mouseover');
		this.eltEvent.set('onpaste', 'paste');
		this.eltEvent.set('onresize', 'resize');
		this.eltEvent.set('onscroll', 'scroll');
		this.eltEvent.set('onselect', 'select');
		this.eltEvent.set('ontouchstart', 'touchstart');
		this.eltEvent.set('ontouchmove', 'touchmove');
		this.eltEvent.set('ontouchend', 'touchend');
		this.eltEvent.set('ondrag', 'drag');
		this.eltEvent.set('ondragend', 'dragend');
		this.eltEvent.set('ondragenter', 'dragenter');
		this.eltEvent.set('ondragleave', 'dragleave');
		this.eltEvent.set('ondragover', 'dragover');
		this.eltEvent.set('ondragstart', 'dragstart');
		this.eltEvent.set('ondrop', 'drop');
		this.eltEvent.set('oninput', 'input');
		this.eltEvent.set('onloadstart', 'loadstart');
		this.eltEvent.set('onprogress', 'progress');
		this.eltEvent.set('onsuspend', 'suspend');
		this.eltEvent.set('onabort', 'abort');
		this.eltEvent.set('onerror', 'error');
		this.eltEvent.set('onemptied', 'emptied');
		this.eltEvent.set('onstalled', 'stalled');
		this.eltEvent.set('onloadedmetadata', 'loadedmetadata');
		this.eltEvent.set('onloadeddata', 'loadeddata');
		this.eltEvent.set('oncanplay', 'canplay');
		this.eltEvent.set('oncanplaythrough', 'canplaythrough');
		this.eltEvent.set('onplaying', 'playing');
		this.eltEvent.set('onwaiting', 'waiting');
		this.eltEvent.set('onseeking', 'seeking');
		this.eltEvent.set('onseeked', 'seeked');
		this.eltEvent.set('onended', 'ended');
		this.eltEvent.set('ondurationchange', 'durationchange');
		this.eltEvent.set('ontimeupdate', 'timeupdate');
		this.eltEvent.set('onplay', 'play');
		this.eltEvent.set('onpause', 'pause');
		this.eltEvent.set('onratechange', 'ratechange');
		this.eltEvent.set('onresize', 'resize');
		this.eltEvent.set('onvolumechange', 'volumechange');
	}

	/**
 * document.getElementById shorcut
 * @param {string} id the element id
 * @return {object} DOMElement
 */


	_createClass(Jsi, [{
		key: 'id',
		value: function id(_id) {
			return this.doc.getElementById(_id);
		}
		/**
  * document.querySelectorAll shorcut
  * @param {string} query the selector
  * @return {DOMNodeList}
  */

	}, {
		key: 'query',
		value: function query(_query) {
			var res = this.doc.querySelectorAll(_query);
			if (res.length > 0) {
				return res;
			} else {
				return null;
			}
		}

		/**
  * document.querySelector shorcut
  * @param {string} query the selector
  * @return {DOMElement}
  */

	}, {
		key: 'queryFirst',
		value: function queryFirst(query) {
			return this.doc.querySelector(query);
		}
	}, {
		key: 'select',
		value: function select(q) {
			var res = this.id(q);
			if (res === null) {
				res = this.queryFirst(q);
			}
			return res;
		}

		/**
  * append an element to a parent
  * @param {DOMElement|string} parent the element to append to or its id
  * @param {DOMElement|object} elt or template object to append to parent
  * @return {DOMElement} object
  */

	}, {
		key: 'append',
		value: function append(parent, elt, getParent) {
			if (elt.tag !== undefined || elt.isTextNode !== undefined) {
				elt = this.create(elt);
			}
			if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
				parent = this.select(parent);
			}

			if (parent !== null && parent !== undefined) {
				var res = parent.appendChild(elt);
				if (getParent !== undefined) {
					res = parent;
				}
				return res;
			}
			throw parent + ' cannot be found';
		}

		/**
  * append an element before another
  * @param elt mixed the element to append to or its id
  * @param n_elt mixed DOMElement or template object to append to parent
  * @return object DOMElement
  */

	}, {
		key: 'appendBefore',
		value: function appendBefore(elt, n_elt) {
			if (n_elt.tag !== undefined) {
				n_elt = this.create(n_elt);
			}
			if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
				elt = this.select(elt);
			}

			if (elt !== null && elt !== undefined) {
				return elt.parentNode.insertBefore(n_elt, elt);
			}

			throw elt + ' cannot be found';
		}

		/**
  * append an element after another
  * @param elt mixed the element to append to or its id
  * @param n_elt mixed DOMElement or template object to append to parent
  * @return object DOMElement
  */

	}, {
		key: 'appendAfter',
		value: function appendAfter(elt, n_elt) {
			if (n_elt.tag !== undefined) {
				n_elt = this.create(n_elt);
			}
			if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
				elt = this.select(elt);
			}

			if (elt !== null && elt !== undefined) {
				return elt.parentNode.insertBefore(n_elt, elt.nextSibling);
			}

			throw elt + ' cannot be found';
		}

		/**
  * append an element to a parent as its first child
  * @param parent mixed the element to append to or its id
  * @param elt mixed DOMElement or template object to append to parent
  * @return object DOMElement
  */

	}, {
		key: 'prepend',
		value: function prepend(parent, elt) {
			if (elt.tag !== undefined) {
				elt = this.create(elt);
			}
			if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
				parent = this.select(parent);
			}

			if (parent !== null && parent !== undefined) {
				if (parent.childNodes.length === 0) {
					return this.append(parent, elt);
				} else {
					return parent.insertBefore(elt, parent.firstChild);
				}
			}

			throw parent + ' cannot be found';
		}

		/**
  * replace an element
  * @return object DOMElement
  */

	}, {
		key: 'replace',
		value: function replace(elt, n_elt) {
			if (n_elt.tag !== undefined) {
				n_elt = this.create(n_elt);
			}
			if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
				elt = this.select(elt);
			}

			if (elt !== null && elt !== undefined) {
				var parent = elt.parentNode;
				return parent.replaceChild(n_elt, elt);
			}

			throw elt + ' cannot be found';
		}

		/*
  * destroy a Dom element
  * @param elt mixed id of the element or element itself
  */

	}, {
		key: 'remove',
		value: function remove(elt) {
			if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
				elt = this.select(elt);
			}

			if (elt !== null && elt !== undefined) {
				return elt.parentNode.removeChild(elt);
			}

			return false;
		}

		/**
  * empty Dom element from it's children.
  */

	}, {
		key: 'empty',
		value: function empty(elt) {
			if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
				elt = this.select(elt);
			}

			if (elt !== null && elt !== undefined) {
				while (elt.lastChild) {
					elt.removeChild(elt.lastChild);
				}

				return elt;
			}
		}

		/**
  * create a text node
  * @param content string the content of the text node
  */

	}, {
		key: 'textNode',
		value: function textNode(content) {
			return this.doc.createTextNode(content);
		}

		/**
  * create an element from a template object
  * @param c object the template object to be created
  * @return object DOMElement
  *<exemple>
  *{
  *	"tag":"type of element",
  *	"attr":{
  *		"attribute1":"value of attr 1",
  *		"...":"..."
  *	},
  *	"inner":"the text content of the node"
  *}
  *</exemple>
  */

	}, {
		key: 'create',
		value: function create(c) {
			var elt = null;
			if (c.isTextNode !== undefined) {
				elt = this.textNode(c.content);
			} else {
				// check if the element tag has already been created to clone it
				if (!this.created.has(c.tag)) {
					this.created.set(c.tag, this.doc.createElement(c.tag));
				}
				elt = this.created.get(c.tag).cloneNode();

				// create element attribute
				if (c.attr !== undefined) {
					for (var key in c.attr) {
						// handle element event or certain specific attribute
						if (this.eltEvent.has(key)) {
							elt.addEventListener(this.eltEvent.get(key), c.attr[key]);
						} else {
							switch (key) {
								case 'checked':
									elt.checked = c.attr[key];
									break;
								case 'className':
									elt.setAttribute('class', c.attr[key]);
									break;
								default:
									elt.setAttribute(key, c.attr[key]);
									break;
							}
						}
					}
				}

				// in some case you want to be able to force innerHTML value,
				// /!\ THIS IS BAAAAAAD !
				if (c.innerForce !== undefined) {
					elt.innerHTML = c.innerForce;
				}

				// append elements if there are some
				if (c.append !== undefined) {
					for (var ap in c.append) {
						elt = this.append(elt, c.append[ap], true);
					}
				}

				// create inner text content node and append it
				if (c.inner !== undefined) {
					elt.appendChild(this.textNode(c.inner));
				}

				if (c.initCallback !== undefined && typeof c.initCallback === 'function') {
					c.initCallback(elt);
				}
			}

			return elt;
		}
	}, {
		key: 'eltFromString',
		value: function eltFromString(elt) {
			var el = elt;
			try {
				elt = new Range().createContextualFragment(el);
			} catch (e) {
				var range = this.doc.createRange();
				var div = this.doc.createElement('div');
				range.selectNode(this.doc.getElementsByTagName("div").item(0));
				elt = range.createContextualFragment(el);
			}
			return elt;
		}
	}, {
		key: 'reverseCreate',
		value: function reverseCreate(elt) {
			var n_elt = {};

			if (elt.nodeName === '#text') {
				n_elt.isTextNode = true;
				n_elt.content = elt.nodeValue;
			} else {
				n_elt.tag = elt.nodeName.toLowerCase();

				if (elt.attributes !== undefined) {
					if (elt.attributes.length > 0) {
						n_elt.attr = {};
						for (var i = elt.attributes.length - 1; i >= 0; i--) {
							n_elt.attr[elt.attributes.item(i).name] = elt.attributes.item(i).value;
						}
					}
				}

				if (elt.childNodes !== undefined) {
					if (elt.childNodes.length > 0) {
						n_elt.append = [];
						for (var _i = 0; _i <= elt.childNodes.length - 1; _i++) {
							n_elt.append.push(this.reverseCreate(elt.childNodes.item(_i)));
						}
					}
				}
			}

			return n_elt;
		}
	}, {
		key: 'reverseCreateFromString',
		value: function reverseCreateFromString(elt) {
			return this.reverseCreate(this.eltFromString(elt));
		}
	}]);

	return Jsi;
}();

module.exports = Jsi;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvanNpLmpzIiwidmVuZG9yL0pzaS9lczYvanNpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSSxNQUFNLFFBQVEsZ0JBQVIsQ0FBTjs7SUFFRTs7O0FBQ0wsVUFESyxVQUNMLEdBQWE7d0JBRFIsWUFDUTs7Z0VBRFIsdUJBRUUsV0FETTtFQUFiOztjQURLOzswQkFLRyxJQUFHO0FBQ1YsVUFBTyxLQUFLLEVBQUwsQ0FBUSxFQUFSLENBQVAsQ0FEVTs7OzswQkFJSCxPQUFNO0FBQ2IsVUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQVAsQ0FEYTs7OzsrQkFJRCxPQUFNO0FBQ2xCLFVBQU8sS0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQVAsQ0FEa0I7Ozs7eUJBSVosUUFBUSxLQUFJO0FBQ2xCLHFDQWxCSSxrREFrQmdCLFFBQVEsS0FBSyxLQUFqQyxDQURrQjs7OzsrQkFJTixLQUFLLE9BQU87QUFDeEIsOEJBdEJJLHdEQXNCZSxLQUFLLE1BQXhCLENBRHdCO0FBRXhCLFVBQU8sR0FBUCxDQUZ3Qjs7Ozs4QkFLYixLQUFLLE9BQU87QUFDdkIsOEJBM0JJLHVEQTJCYyxLQUFLLE1BQXZCLENBRHVCO0FBRXZCLFVBQU8sR0FBUCxDQUZ1Qjs7OzswQkFLaEIsUUFBUSxLQUFLO0FBQ3BCLDhCQWhDSSxtREFnQ1UsUUFBUSxJQUF0QixDQURvQjtBQUVwQixVQUFPLE1BQVAsQ0FGb0I7Ozs7MEJBS2IsS0FBSyxPQUFPO0FBQ25CLDhCQXJDSSxtREFxQ1UsS0FBSyxNQUFuQixDQURtQjtBQUVuQixVQUFPLE1BQU0sVUFBTixDQUZZOzs7O3NCQUtoQixHQUFFO0FBQ0wscUNBMUNJLGtEQTBDZ0IsRUFBcEIsQ0FESzs7OztRQXpDRDtFQUFtQjs7QUE4Q3pCLE9BQU8sT0FBUCxHQUFpQixJQUFJLFVBQUosRUFBakI7Ozs7Ozs7Ozs7O0lDaERN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QXFEO0FBQ3BELGFBQU0sTUFBTixDQUFhLElBQWIsQ0FBa0IsS0FBSyxhQUFMLENBQW1CLElBQUksVUFBSixDQUFlLElBQWYsQ0FBb0IsRUFBcEIsQ0FBbkIsQ0FBbEIsRUFEb0Q7T0FBckQ7TUFGRDtLQUREO0lBaEJEOztBQTBCQSxVQUFPLEtBQVAsQ0E3QmlCOzs7OzBDQWdDTSxLQUFJO0FBQzNCLFVBQU8sS0FBSyxhQUFMLENBQW1CLEtBQUssYUFBTCxDQUFtQixHQUFuQixDQUFuQixDQUFQLENBRDJCOzs7O1FBbll2Qjs7O0FBd1lOLE9BQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgSnNpID0gcmVxdWlyZShcIkpzaS9lczYvanNpLmpzXCIpO1xuXG5jbGFzcyBKc2lfY29tcGF0IGV4dGVuZHMgSnNpe1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKGRvY3VtZW50KTtcblx0fVxuXG5cdGRvY2VsaWQoaWQpe1xuXHRcdHJldHVybiB0aGlzLmlkKGlkKTtcblx0fVxuXG5cdGRvY2VsZXEocXVlcnkpe1xuXHRcdHJldHVybiB0aGlzLnF1ZXJ5KHF1ZXJ5KTtcblx0fVxuXG5cdGRvY2VsZXFGaXJzdChxdWVyeSl7XG5cdFx0cmV0dXJuIHRoaXMucXVlcnlGaXJzdChxdWVyeSk7XG5cdH1cblxuXHRhcHBlbmQocGFyZW50LCBlbHQpe1xuXHRcdHJldHVybiBzdXBlci5hcHBlbmQocGFyZW50LCBlbHQsIHRydWUpO1xuXHR9XG5cblx0YXBwZW5kQmVmb3JlKGVsdCwgbl9lbHQpIHtcblx0XHRzdXBlci5hcHBlbmRCZWZvcmUoZWx0LCBuX2VsdCk7XG5cdFx0cmV0dXJuIGVsdDtcblx0fVxuXG5cdGFwcGVuZEFmdGVyKGVsdCwgbl9lbHQpIHtcblx0XHRzdXBlci5hcHBlbmRBZnRlcihlbHQsIG5fZWx0KTtcblx0XHRyZXR1cm4gZWx0O1xuXHR9XG5cblx0cHJlcGVuZChwYXJlbnQsIGVsdCkge1xuXHRcdHN1cGVyLnByZXBlbmQocGFyZW50LCBlbHQpO1xuXHRcdHJldHVybiBwYXJlbnQ7XG5cdH1cblxuXHRyZXBsYWNlKGVsdCwgbl9lbHQpIHtcblx0XHRzdXBlci5yZXBsYWNlKGVsdCwgbl9lbHQpO1xuXHRcdHJldHVybiBuX2VsdC5wYXJlbnROb2RlO1xuXHR9XG5cblx0ZWx0KGMpe1xuXHRcdHJldHVybiBzdXBlci5jcmVhdGUoYyk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgSnNpX2NvbXBhdCgpOyIsImNsYXNzIEpzaXtcblx0Y29uc3RydWN0b3IoZG9jKXtcblx0XHRpZiAoZG9jID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGRvYyA9IGRvY3VtZW50O1xuXHRcdH1cblx0XHR0aGlzLmRvYyA9IGRvYztcblx0XHR0aGlzLmNyZWF0ZWQgPSBuZXcgTWFwKCk7XG5cblx0XHR0aGlzLmVsdEV2ZW50ID0gbmV3IE1hcCgpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNsaWNrJywgJ2NsaWNrJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uY2hhbmdlJywgJ2NoYW5nZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmZvY3VzJywgJ2ZvY3VzJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uYmx1cicsICdibHVyJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ua2V5dXAnLCAna2V5dXAnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25rZXlwcmVzcycsICdrZXlwcmVzcycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnN1Ym1pdCcsICdzdWJtaXQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25hbmltYXRpb25lbmQnLCAnYW5pbWF0aW9uZW5kJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29udHJhbnNpdGlvbmVuZCcsICd0cmFuc2l0aW9uZW5kJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uY29weScsICdjb3B5Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uY3V0JywgJ2N1dCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRibGNsaWNrJywgJ2RibGNsaWNrJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uaW52YWxpZCcsICdpbnZhbGlkJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2Vkb3duJywgJ21vdXNlZG93bicpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNldXAnLCAnbW91c2V1cCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlZW50ZXInLCAnbW91c2VlbnRlcicpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlbGVhdmUnLCAnbW91c2VsZWF2ZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlbW92ZScsICdtb3VzZW1vdmUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZW91dCcsICdtb3VzZW91dCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlb3ZlcicsICdtb3VzZW92ZXInKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25wYXN0ZScsICdwYXN0ZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnJlc2l6ZScsICdyZXNpemUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25zY3JvbGwnLCAnc2Nyb2xsJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uc2VsZWN0JywgJ3NlbGVjdCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRvdWNoc3RhcnQnLCAndG91Y2hzdGFydCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRvdWNobW92ZScsICd0b3VjaG1vdmUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb250b3VjaGVuZCcsICd0b3VjaGVuZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWcnLCAnZHJhZycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdlbmQnLCAnZHJhZ2VuZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdlbnRlcicsICdkcmFnZW50ZXInKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnbGVhdmUnLCAnZHJhZ2xlYXZlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZ292ZXInLCAnZHJhZ292ZXInKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnc3RhcnQnLCAnZHJhZ3N0YXJ0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZHJvcCcsICdkcm9wJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uaW5wdXQnLCAnaW5wdXQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25sb2Fkc3RhcnQnLCAnbG9hZHN0YXJ0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucHJvZ3Jlc3MnLCAncHJvZ3Jlc3MnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25zdXNwZW5kJywgJ3N1c3BlbmQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25hYm9ydCcsICdhYm9ydCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmVycm9yJywgJ2Vycm9yJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZW1wdGllZCcsICdlbXB0aWVkJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uc3RhbGxlZCcsICdzdGFsbGVkJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubG9hZGVkbWV0YWRhdGEnLCAnbG9hZGVkbWV0YWRhdGEnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25sb2FkZWRkYXRhJywgJ2xvYWRlZGRhdGEnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25jYW5wbGF5JywgJ2NhbnBsYXknKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25jYW5wbGF5dGhyb3VnaCcsICdjYW5wbGF5dGhyb3VnaCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnBsYXlpbmcnLCAncGxheWluZycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbndhaXRpbmcnLCAnd2FpdGluZycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnNlZWtpbmcnLCAnc2Vla2luZycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnNlZWtlZCcsICdzZWVrZWQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25lbmRlZCcsICdlbmRlZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmR1cmF0aW9uY2hhbmdlJywgJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29udGltZXVwZGF0ZScsICd0aW1ldXBkYXRlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucGxheScsICdwbGF5Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucGF1c2UnLCAncGF1c2UnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25yYXRlY2hhbmdlJywgJ3JhdGVjaGFuZ2UnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25yZXNpemUnLCAncmVzaXplJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29udm9sdW1lY2hhbmdlJywgJ3ZvbHVtZWNoYW5nZScpO1xuXG5cdH1cblxuXHQvKipcblx0KiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBzaG9yY3V0XG5cdCogQHBhcmFtIHtzdHJpbmd9IGlkIHRoZSBlbGVtZW50IGlkXG5cdCogQHJldHVybiB7b2JqZWN0fSBET01FbGVtZW50XG5cdCovXG5cdGlkKGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKGlkKTtcblx0fVxuXHQvKipcblx0KiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsIHNob3JjdXRcblx0KiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHNlbGVjdG9yXG5cdCogQHJldHVybiB7RE9NTm9kZUxpc3R9XG5cdCovXG5cdHF1ZXJ5KHF1ZXJ5KSB7XG5cdFx0bGV0IHJlcyA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpO1xuXHRcdGlmIChyZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Igc2hvcmN1dFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgc2VsZWN0b3Jcblx0KiBAcmV0dXJuIHtET01FbGVtZW50fVxuXHQqL1xuXHRxdWVyeUZpcnN0KHF1ZXJ5KSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuXHR9XG5cblx0c2VsZWN0KHEpe1xuXHRcdGxldCByZXMgPSB0aGlzLmlkKHEpO1xuXHRcdGlmIChyZXMgPT09IG51bGwpIHtcblx0XHRcdHJlcyA9IHRoaXMucXVlcnlGaXJzdChxKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcztcblx0fVxuXG5cdC8qKlxuXHQqIGFwcGVuZCBhbiBlbGVtZW50IHRvIGEgcGFyZW50XG5cdCogQHBhcmFtIHtET01FbGVtZW50fHN0cmluZ30gcGFyZW50IHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcblx0KiBAcGFyYW0ge0RPTUVsZW1lbnR8b2JqZWN0fSBlbHQgb3IgdGVtcGxhdGUgb2JqZWN0IHRvIGFwcGVuZCB0byBwYXJlbnRcblx0KiBAcmV0dXJuIHtET01FbGVtZW50fSBvYmplY3Rcblx0Ki9cblx0YXBwZW5kKHBhcmVudCwgZWx0LCBnZXRQYXJlbnQpIHtcblx0XHRpZiAoZWx0LnRhZyAhPT0gdW5kZWZpbmVkIHx8IGVsdC5pc1RleHROb2RlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRlbHQgPSB0aGlzLmNyZWF0ZShlbHQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuXHRcdFx0cGFyZW50ID0gdGhpcy5zZWxlY3QocGFyZW50KTtcblx0XHR9XG5cblx0XHRpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRsZXQgcmVzID0gcGFyZW50LmFwcGVuZENoaWxkKGVsdCk7XG5cdFx0XHRpZiAoZ2V0UGFyZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmVzID0gcGFyZW50O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9XG5cdFx0dGhyb3cgcGFyZW50ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuXHR9XG5cblx0LyoqXG5cdCogYXBwZW5kIGFuIGVsZW1lbnQgYmVmb3JlIGFub3RoZXJcblx0KiBAcGFyYW0gZWx0IG1peGVkIHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcblx0KiBAcGFyYW0gbl9lbHQgbWl4ZWQgRE9NRWxlbWVudCBvciB0ZW1wbGF0ZSBvYmplY3QgdG8gYXBwZW5kIHRvIHBhcmVudFxuXHQqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcblx0Ki9cblx0YXBwZW5kQmVmb3JlKGVsdCwgbl9lbHQpIHtcblx0XHRpZiAobl9lbHQudGFnICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG5fZWx0ID0gdGhpcy5jcmVhdGUobl9lbHQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuXHRcdFx0ZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcblx0XHR9XG5cblx0XHRpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gZWx0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5fZWx0LCBlbHQpO1xuXHRcdH1cblxuXHRcdHRocm93IGVsdCArICcgY2Fubm90IGJlIGZvdW5kJztcblx0fVxuXG5cdC8qKlxuXHQqIGFwcGVuZCBhbiBlbGVtZW50IGFmdGVyIGFub3RoZXJcblx0KiBAcGFyYW0gZWx0IG1peGVkIHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcblx0KiBAcGFyYW0gbl9lbHQgbWl4ZWQgRE9NRWxlbWVudCBvciB0ZW1wbGF0ZSBvYmplY3QgdG8gYXBwZW5kIHRvIHBhcmVudFxuXHQqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcblx0Ki9cblx0YXBwZW5kQWZ0ZXIoZWx0LCBuX2VsdCkge1xuXHRcdGlmIChuX2VsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bl9lbHQgPSB0aGlzLmNyZWF0ZShuX2VsdCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuXHRcdH1cblxuXHRcdGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBlbHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobl9lbHQsIGVsdC5uZXh0U2libGluZyk7XG5cdFx0fVxuXG5cdFx0dGhyb3cgZWx0ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuXHR9XG5cblx0LyoqXG5cdCogYXBwZW5kIGFuIGVsZW1lbnQgdG8gYSBwYXJlbnQgYXMgaXRzIGZpcnN0IGNoaWxkXG5cdCogQHBhcmFtIHBhcmVudCBtaXhlZCB0aGUgZWxlbWVudCB0byBhcHBlbmQgdG8gb3IgaXRzIGlkXG5cdCogQHBhcmFtIGVsdCBtaXhlZCBET01FbGVtZW50IG9yIHRlbXBsYXRlIG9iamVjdCB0byBhcHBlbmQgdG8gcGFyZW50XG5cdCogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuXHQqL1xuXHRwcmVwZW5kKHBhcmVudCwgZWx0KSB7XG5cdFx0aWYgKGVsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZWx0ID0gdGhpcy5jcmVhdGUoZWx0KTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBwYXJlbnQgIT0gJ29iamVjdCcpIHtcblx0XHRcdHBhcmVudCA9IHRoaXMuc2VsZWN0KHBhcmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcmVudCAhPT0gbnVsbCAmJiBwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5hcHBlbmQocGFyZW50LCBlbHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHBhcmVudC5pbnNlcnRCZWZvcmUoZWx0LCBwYXJlbnQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhyb3cgcGFyZW50ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuXHR9XG5cblx0LyoqXG5cdCogcmVwbGFjZSBhbiBlbGVtZW50XG5cdCogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuXHQqL1xuXHRyZXBsYWNlKGVsdCwgbl9lbHQpIHtcblx0XHRpZiAobl9lbHQudGFnICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG5fZWx0ID0gdGhpcy5jcmVhdGUobl9lbHQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuXHRcdFx0ZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcblx0XHR9XG5cblx0XHRpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRsZXQgcGFyZW50ID0gZWx0LnBhcmVudE5vZGU7XG5cdFx0XHRyZXR1cm4gcGFyZW50LnJlcGxhY2VDaGlsZChuX2VsdCwgZWx0KTtcblx0XHR9XG5cblx0XHR0aHJvdyBlbHQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG5cdH1cblxuXHQvKlxuXHQqIGRlc3Ryb3kgYSBEb20gZWxlbWVudFxuXHQqIEBwYXJhbSBlbHQgbWl4ZWQgaWQgb2YgdGhlIGVsZW1lbnQgb3IgZWxlbWVudCBpdHNlbGZcblx0Ki9cblx0cmVtb3ZlKGVsdCkge1xuXHRcdGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuXHRcdH1cblxuXHRcdGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBlbHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbHQpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBlbXB0eSBEb20gZWxlbWVudCBmcm9tIGl0J3MgY2hpbGRyZW4uXG5cdCovXG5cdGVtcHR5KGVsdCkge1xuXHRcdGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuXHRcdH1cblxuXHRcdGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHdoaWxlKGVsdC5sYXN0Q2hpbGQpe1xuXHRcdFx0XHRlbHQucmVtb3ZlQ2hpbGQoZWx0Lmxhc3RDaGlsZCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbHQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogY3JlYXRlIGEgdGV4dCBub2RlXG5cdCogQHBhcmFtIGNvbnRlbnQgc3RyaW5nIHRoZSBjb250ZW50IG9mIHRoZSB0ZXh0IG5vZGVcblx0Ki9cblx0dGV4dE5vZGUoY29udGVudCl7XG5cdFx0cmV0dXJuIHRoaXMuZG9jLmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXHR9XG5cblx0LyoqXG5cdCogY3JlYXRlIGFuIGVsZW1lbnQgZnJvbSBhIHRlbXBsYXRlIG9iamVjdFxuXHQqIEBwYXJhbSBjIG9iamVjdCB0aGUgdGVtcGxhdGUgb2JqZWN0IHRvIGJlIGNyZWF0ZWRcblx0KiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG5cdCo8ZXhlbXBsZT5cblx0Kntcblx0Klx0XCJ0YWdcIjpcInR5cGUgb2YgZWxlbWVudFwiLFxuXHQqXHRcImF0dHJcIjp7XG5cdCpcdFx0XCJhdHRyaWJ1dGUxXCI6XCJ2YWx1ZSBvZiBhdHRyIDFcIixcblx0Klx0XHRcIi4uLlwiOlwiLi4uXCJcblx0Klx0fSxcblx0Klx0XCJpbm5lclwiOlwidGhlIHRleHQgY29udGVudCBvZiB0aGUgbm9kZVwiXG5cdCp9XG5cdCo8L2V4ZW1wbGU+XG5cdCovXG5cdGNyZWF0ZShjKSB7XG5cdFx0bGV0IGVsdCA9IG51bGw7XG5cdFx0aWYgKGMuaXNUZXh0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnRleHROb2RlKGMuY29udGVudCk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHQvLyBjaGVjayBpZiB0aGUgZWxlbWVudCB0YWcgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkIHRvIGNsb25lIGl0XG5cdFx0XHRpZiAoIXRoaXMuY3JlYXRlZC5oYXMoYy50YWcpKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlZC5zZXQoYy50YWcsIHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoYy50YWcpKTtcblx0XHRcdH1cblx0XHRcdGVsdCA9IHRoaXMuY3JlYXRlZC5nZXQoYy50YWcpLmNsb25lTm9kZSgpO1xuXHRcdFx0XG5cdFx0XHQvLyBjcmVhdGUgZWxlbWVudCBhdHRyaWJ1dGVcblx0XHRcdGlmKGMuYXR0ciAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IobGV0IGtleSBpbiBjLmF0dHIpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBoYW5kbGUgZWxlbWVudCBldmVudCBvciBjZXJ0YWluIHNwZWNpZmljIGF0dHJpYnV0ZVxuXHRcdFx0XHRcdGlmICh0aGlzLmVsdEV2ZW50LmhhcyhrZXkpKSB7XG5cdFx0XHRcdFx0XHRlbHQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmVsdEV2ZW50LmdldChrZXkpLCBjLmF0dHJba2V5XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0XHRzd2l0Y2goa2V5KXtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnY2hlY2tlZCc6XG5cdFx0XHRcdFx0XHRcdFx0ZWx0LmNoZWNrZWQgPSBjLmF0dHJba2V5XTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnY2xhc3NOYW1lJzpcblx0XHRcdFx0XHRcdFx0XHRlbHQuc2V0QXR0cmlidXRlKCdjbGFzcycsYy5hdHRyW2tleV0pO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdGVsdC5zZXRBdHRyaWJ1dGUoa2V5LGMuYXR0cltrZXldKTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gaW4gc29tZSBjYXNlIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gZm9yY2UgaW5uZXJIVE1MIHZhbHVlLCBcblx0XHRcdC8vIC8hXFwgVEhJUyBJUyBCQUFBQUFBRCAhXG5cdFx0XHRpZiAoYy5pbm5lckZvcmNlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZWx0LmlubmVySFRNTCA9IGMuaW5uZXJGb3JjZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXBwZW5kIGVsZW1lbnRzIGlmIHRoZXJlIGFyZSBzb21lIFxuXHRcdFx0aWYgKGMuYXBwZW5kICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Zm9yIChsZXQgYXAgaW4gYy5hcHBlbmQpIHtcblx0XHRcdFx0XHRlbHQgPSB0aGlzLmFwcGVuZChlbHQsIGMuYXBwZW5kW2FwXSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gY3JlYXRlIGlubmVyIHRleHQgY29udGVudCBub2RlIGFuZCBhcHBlbmQgaXRcblx0XHRcdGlmIChjLmlubmVyICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0XHRlbHQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0Tm9kZShjLmlubmVyKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjLmluaXRDYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjLmluaXRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjLmluaXRDYWxsYmFjayhlbHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBlbHQ7XG5cdH1cblxuXHRlbHRGcm9tU3RyaW5nKGVsdCkge1xuXHRcdGxldCBlbCA9IGVsdDtcblx0XHR0cnl7XG5cdFx0XHRlbHQgPSBuZXcgUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoZWwpO1xuXHRcdH1cblx0XHRjYXRjaChlKXtcblx0XHRcdGxldCByYW5nZSA9IHRoaXMuZG9jLmNyZWF0ZVJhbmdlKCk7XG5cdFx0XHRsZXQgZGl2ID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRyYW5nZS5zZWxlY3ROb2RlKHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpLml0ZW0oMCkpO1xuXHRcdFx0ZWx0ID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGVsKTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsdDtcblx0fVxuXG5cdHJldmVyc2VDcmVhdGUoZWx0KXtcblx0XHRsZXQgbl9lbHQgPSB7fTtcblxuXHRcdGlmIChlbHQubm9kZU5hbWUgPT09ICcjdGV4dCcpIHtcblx0XHRcdG5fZWx0LmlzVGV4dE5vZGUgPSB0cnVlO1xuXHRcdFx0bl9lbHQuY29udGVudCA9IGVsdC5ub2RlVmFsdWU7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRuX2VsdC50YWcgPSBlbHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdFxuXHRcdFx0aWYgKGVsdC5hdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKGVsdC5hdHRyaWJ1dGVzLmxlbmd0aCA+MCkge1xuXHRcdFx0XHRcdG5fZWx0LmF0dHIgPSB7fTtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gZWx0LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRcdG5fZWx0LmF0dHJbZWx0LmF0dHJpYnV0ZXMuaXRlbShpKS5uYW1lXSA9IGVsdC5hdHRyaWJ1dGVzLml0ZW0oaSkudmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmIChlbHQuY2hpbGROb2RlcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmIChlbHQuY2hpbGROb2Rlcy5sZW5ndGggPjApIHtcblx0XHRcdFx0XHRuX2VsdC5hcHBlbmQgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSBlbHQuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0XHRcdG5fZWx0LmFwcGVuZC5wdXNoKHRoaXMucmV2ZXJzZUNyZWF0ZShlbHQuY2hpbGROb2Rlcy5pdGVtKGkpKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5fZWx0O1xuXHR9XG5cblx0cmV2ZXJzZUNyZWF0ZUZyb21TdHJpbmcoZWx0KXtcblx0XHRyZXR1cm4gdGhpcy5yZXZlcnNlQ3JlYXRlKHRoaXMuZWx0RnJvbVN0cmluZyhlbHQpKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpzaTsiXX0=
