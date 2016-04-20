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
			return parent.create(c);
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
						for (var i = 0; i <= elt.childNodes.length - 1; i++) {
							n_elt.append.push(this.reverseCreate(elt.childNodes.item(i)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImVzNi9qc2kuanMiLCJ2ZW5kb3IvSnNpL2VzNi9qc2kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFJLE1BQU0sUUFBUSxnQkFBUixDQUFOOztJQUVFOzs7QUFDTCxVQURLLFVBQ0wsR0FBYTt3QkFEUixZQUNROztnRUFEUix1QkFFRSxXQURNO0VBQWI7O2NBREs7OzBCQUtHLElBQUc7QUFDVixVQUFPLEtBQUssRUFBTCxDQUFRLEVBQVIsQ0FBUCxDQURVOzs7OzBCQUlILE9BQU07QUFDYixVQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBUCxDQURhOzs7OytCQUlELE9BQU07QUFDbEIsVUFBTyxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBUCxDQURrQjs7Ozt5QkFJWixRQUFRLEtBQUk7QUFDbEIscUNBbEJJLGtEQWtCZ0IsUUFBUSxLQUFLLEtBQWpDLENBRGtCOzs7OytCQUlOLEtBQUssT0FBTztBQUN4Qiw4QkF0Qkksd0RBc0JlLEtBQUssTUFBeEIsQ0FEd0I7QUFFeEIsVUFBTyxHQUFQLENBRndCOzs7OzhCQUtiLEtBQUssT0FBTztBQUN2Qiw4QkEzQkksdURBMkJjLEtBQUssTUFBdkIsQ0FEdUI7QUFFdkIsVUFBTyxHQUFQLENBRnVCOzs7OzBCQUtoQixRQUFRLEtBQUs7QUFDcEIsOEJBaENJLG1EQWdDVSxRQUFRLElBQXRCLENBRG9CO0FBRXBCLFVBQU8sTUFBUCxDQUZvQjs7OzswQkFLYixLQUFLLE9BQU87QUFDbkIsOEJBckNJLG1EQXFDVSxLQUFLLE1BQW5CLENBRG1CO0FBRW5CLFVBQU8sTUFBTSxVQUFOLENBRlk7Ozs7c0JBS2hCLEdBQUU7QUFDTCxVQUFPLE9BQU8sTUFBUCxDQUFjLENBQWQsQ0FBUCxDQURLOzs7O1FBekNEO0VBQW1COztBQThDekIsT0FBTyxPQUFQLEdBQWlCLElBQUksVUFBSixFQUFqQjs7Ozs7Ozs7Ozs7SUNoRE07QUFDTCxVQURLLEdBQ0wsQ0FBWSxHQUFaLEVBQWdCO3dCQURYLEtBQ1c7O0FBQ2YsTUFBSSxRQUFRLFNBQVIsRUFBbUI7QUFDdEIsU0FBTSxRQUFOLENBRHNCO0dBQXZCO0FBR0EsT0FBSyxHQUFMLEdBQVcsR0FBWCxDQUplO0FBS2YsT0FBSyxPQUFMLEdBQWUsSUFBSSxHQUFKLEVBQWYsQ0FMZTs7QUFPZixPQUFLLFFBQUwsR0FBZ0IsSUFBSSxHQUFKLEVBQWhCLENBUGU7QUFRZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQTZCLE9BQTdCLEVBUmU7QUFTZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQWxCLEVBQThCLFFBQTlCLEVBVGU7QUFVZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQTZCLE9BQTdCLEVBVmU7QUFXZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFFBQWxCLEVBQTRCLE1BQTVCLEVBWGU7QUFZZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQTZCLE9BQTdCLEVBWmU7QUFhZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLFVBQWhDLEVBYmU7QUFjZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQWxCLEVBQThCLFFBQTlCLEVBZGU7QUFlZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLGdCQUFsQixFQUFvQyxjQUFwQyxFQWZlO0FBZ0JmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsaUJBQWxCLEVBQXFDLGVBQXJDLEVBaEJlO0FBaUJmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsUUFBbEIsRUFBNEIsTUFBNUIsRUFqQmU7QUFrQmYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixPQUFsQixFQUEyQixLQUEzQixFQWxCZTtBQW1CZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLFVBQWhDLEVBbkJlO0FBb0JmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsV0FBbEIsRUFBK0IsU0FBL0IsRUFwQmU7QUFxQmYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixhQUFsQixFQUFpQyxXQUFqQyxFQXJCZTtBQXNCZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFdBQWxCLEVBQStCLFNBQS9CLEVBdEJlO0FBdUJmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsY0FBbEIsRUFBa0MsWUFBbEMsRUF2QmU7QUF3QmYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixjQUFsQixFQUFrQyxZQUFsQyxFQXhCZTtBQXlCZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLGFBQWxCLEVBQWlDLFdBQWpDLEVBekJlO0FBMEJmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsWUFBbEIsRUFBZ0MsVUFBaEMsRUExQmU7QUEyQmYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixhQUFsQixFQUFpQyxXQUFqQyxFQTNCZTtBQTRCZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQTZCLE9BQTdCLEVBNUJlO0FBNkJmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBbEIsRUFBOEIsUUFBOUIsRUE3QmU7QUE4QmYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQixFQUE4QixRQUE5QixFQTlCZTtBQStCZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQWxCLEVBQThCLFFBQTlCLEVBL0JlO0FBZ0NmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsY0FBbEIsRUFBa0MsWUFBbEMsRUFoQ2U7QUFpQ2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixhQUFsQixFQUFpQyxXQUFqQyxFQWpDZTtBQWtDZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLFVBQWhDLEVBbENlO0FBbUNmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsUUFBbEIsRUFBNEIsTUFBNUIsRUFuQ2U7QUFvQ2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixXQUFsQixFQUErQixTQUEvQixFQXBDZTtBQXFDZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLGFBQWxCLEVBQWlDLFdBQWpDLEVBckNlO0FBc0NmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsYUFBbEIsRUFBaUMsV0FBakMsRUF0Q2U7QUF1Q2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixZQUFsQixFQUFnQyxVQUFoQyxFQXZDZTtBQXdDZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLGFBQWxCLEVBQWlDLFdBQWpDLEVBeENlO0FBeUNmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsUUFBbEIsRUFBNEIsTUFBNUIsRUF6Q2U7QUEwQ2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQTFDZTtBQTJDZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLGFBQWxCLEVBQWlDLFdBQWpDLEVBM0NlO0FBNENmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsWUFBbEIsRUFBZ0MsVUFBaEMsRUE1Q2U7QUE2Q2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixXQUFsQixFQUErQixTQUEvQixFQTdDZTtBQThDZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQTZCLE9BQTdCLEVBOUNlO0FBK0NmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsU0FBbEIsRUFBNkIsT0FBN0IsRUEvQ2U7QUFnRGYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixXQUFsQixFQUErQixTQUEvQixFQWhEZTtBQWlEZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFdBQWxCLEVBQStCLFNBQS9CLEVBakRlO0FBa0RmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDLGdCQUF0QyxFQWxEZTtBQW1EZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLGNBQWxCLEVBQWtDLFlBQWxDLEVBbkRlO0FBb0RmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsV0FBbEIsRUFBK0IsU0FBL0IsRUFwRGU7QUFxRGYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixrQkFBbEIsRUFBc0MsZ0JBQXRDLEVBckRlO0FBc0RmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsV0FBbEIsRUFBK0IsU0FBL0IsRUF0RGU7QUF1RGYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixXQUFsQixFQUErQixTQUEvQixFQXZEZTtBQXdEZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFdBQWxCLEVBQStCLFNBQS9CLEVBeERlO0FBeURmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBbEIsRUFBOEIsUUFBOUIsRUF6RGU7QUEwRGYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQTFEZTtBQTJEZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLGtCQUFsQixFQUFzQyxnQkFBdEMsRUEzRGU7QUE0RGYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixjQUFsQixFQUFrQyxZQUFsQyxFQTVEZTtBQTZEZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFFBQWxCLEVBQTRCLE1BQTVCLEVBN0RlO0FBOERmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsU0FBbEIsRUFBNkIsT0FBN0IsRUE5RGU7QUErRGYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixjQUFsQixFQUFrQyxZQUFsQyxFQS9EZTtBQWdFZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQWxCLEVBQThCLFFBQTlCLEVBaEVlO0FBaUVmLE9BQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsZ0JBQWxCLEVBQW9DLGNBQXBDLEVBakVlO0VBQWhCOzs7Ozs7Ozs7Y0FESzs7cUJBMkVGLEtBQUk7QUFDTixVQUFPLEtBQUssR0FBTCxDQUFTLGNBQVQsQ0FBd0IsR0FBeEIsQ0FBUCxDQURNOzs7Ozs7Ozs7O3dCQVFELFFBQU87QUFDWixPQUFJLE1BQU0sS0FBSyxHQUFMLENBQVMsZ0JBQVQsQ0FBMEIsTUFBMUIsQ0FBTixDQURRO0FBRVosT0FBSSxJQUFJLE1BQUosR0FBYSxDQUFiLEVBQWdCO0FBQ25CLFdBQU8sR0FBUCxDQURtQjtJQUFwQixNQUdJO0FBQ0gsV0FBTyxJQUFQLENBREc7SUFISjs7Ozs7Ozs7Ozs7NkJBYVUsT0FBTztBQUNqQixVQUFPLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUCxDQURpQjs7Ozt5QkFJWCxHQUFFO0FBQ1IsT0FBSSxNQUFNLEtBQUssRUFBTCxDQUFRLENBQVIsQ0FBTixDQURJO0FBRVIsT0FBSSxRQUFRLElBQVIsRUFBYztBQUNqQixVQUFNLEtBQUssVUFBTCxDQUFnQixDQUFoQixDQUFOLENBRGlCO0lBQWxCO0FBR0EsVUFBTyxHQUFQLENBTFE7Ozs7Ozs7Ozs7Ozt5QkFjRixRQUFRLEtBQUssV0FBVztBQUM5QixPQUFJLElBQUksR0FBSixLQUFZLFNBQVosSUFBeUIsSUFBSSxVQUFKLEtBQW1CLFNBQW5CLEVBQStCO0FBQzNELFVBQU0sS0FBSyxNQUFMLENBQVksR0FBWixDQUFOLENBRDJEO0lBQTVEO0FBR0EsT0FBSSxRQUFPLHVEQUFQLElBQWlCLFFBQWpCLEVBQTJCO0FBQzlCLGFBQVMsS0FBSyxNQUFMLENBQVksTUFBWixDQUFULENBRDhCO0lBQS9COztBQUlBLE9BQUksV0FBVyxJQUFYLElBQW1CLFdBQVcsU0FBWCxFQUFzQjtBQUM1QyxRQUFJLE1BQU0sT0FBTyxXQUFQLENBQW1CLEdBQW5CLENBQU4sQ0FEd0M7QUFFNUMsUUFBSSxjQUFjLFNBQWQsRUFBeUI7QUFDNUIsV0FBTSxNQUFOLENBRDRCO0tBQTdCO0FBR0EsV0FBTyxHQUFQLENBTDRDO0lBQTdDO0FBT0EsU0FBTSxTQUFTLGtCQUFULENBZndCOzs7Ozs7Ozs7Ozs7K0JBd0JsQixLQUFLLE9BQU87QUFDeEIsT0FBSSxNQUFNLEdBQU4sS0FBYyxTQUFkLEVBQXlCO0FBQzVCLFlBQVEsS0FBSyxNQUFMLENBQVksS0FBWixDQUFSLENBRDRCO0lBQTdCO0FBR0EsT0FBSSxRQUFPLGlEQUFQLElBQWMsUUFBZCxFQUF3QjtBQUMzQixVQUFNLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBTixDQUQyQjtJQUE1Qjs7QUFJQSxPQUFJLFFBQVEsSUFBUixJQUFnQixRQUFRLFNBQVIsRUFBbUI7QUFDdEMsV0FBTyxJQUFJLFVBQUosQ0FBZSxZQUFmLENBQTRCLEtBQTVCLEVBQW1DLEdBQW5DLENBQVAsQ0FEc0M7SUFBdkM7O0FBSUEsU0FBTSxNQUFNLGtCQUFOLENBWmtCOzs7Ozs7Ozs7Ozs7OEJBcUJiLEtBQUssT0FBTztBQUN2QixPQUFJLE1BQU0sR0FBTixLQUFjLFNBQWQsRUFBeUI7QUFDNUIsWUFBUSxLQUFLLE1BQUwsQ0FBWSxLQUFaLENBQVIsQ0FENEI7SUFBN0I7QUFHQSxPQUFJLFFBQU8saURBQVAsSUFBYyxRQUFkLEVBQXdCO0FBQzNCLFVBQU0sS0FBSyxNQUFMLENBQVksR0FBWixDQUFOLENBRDJCO0lBQTVCOztBQUlBLE9BQUksUUFBUSxJQUFSLElBQWdCLFFBQVEsU0FBUixFQUFtQjtBQUN0QyxXQUFPLElBQUksVUFBSixDQUFlLFlBQWYsQ0FBNEIsS0FBNUIsRUFBbUMsSUFBSSxXQUFKLENBQTFDLENBRHNDO0lBQXZDOztBQUlBLFNBQU0sTUFBTSxrQkFBTixDQVppQjs7Ozs7Ozs7Ozs7OzBCQXFCaEIsUUFBUSxLQUFLO0FBQ3BCLE9BQUksSUFBSSxHQUFKLEtBQVksU0FBWixFQUF1QjtBQUMxQixVQUFNLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBTixDQUQwQjtJQUEzQjtBQUdBLE9BQUksUUFBTyx1REFBUCxJQUFpQixRQUFqQixFQUEyQjtBQUM5QixhQUFTLEtBQUssTUFBTCxDQUFZLE1BQVosQ0FBVCxDQUQ4QjtJQUEvQjs7QUFJQSxPQUFJLFdBQVcsSUFBWCxJQUFtQixXQUFXLFNBQVgsRUFBc0I7QUFDNUMsUUFBSSxPQUFPLFVBQVAsQ0FBa0IsTUFBbEIsS0FBNkIsQ0FBN0IsRUFBZ0M7QUFDbkMsWUFBTyxLQUFLLE1BQUwsQ0FBWSxNQUFaLEVBQW9CLEdBQXBCLENBQVAsQ0FEbUM7S0FBcEMsTUFHSTtBQUNILFlBQU8sT0FBTyxZQUFQLENBQW9CLEdBQXBCLEVBQXlCLE9BQU8sVUFBUCxDQUFoQyxDQURHO0tBSEo7SUFERDs7QUFTQSxTQUFNLFNBQVMsa0JBQVQsQ0FqQmM7Ozs7Ozs7Ozs7MEJBd0JiLEtBQUssT0FBTztBQUNuQixPQUFJLE1BQU0sR0FBTixLQUFjLFNBQWQsRUFBeUI7QUFDNUIsWUFBUSxLQUFLLE1BQUwsQ0FBWSxLQUFaLENBQVIsQ0FENEI7SUFBN0I7QUFHQSxPQUFJLFFBQU8saURBQVAsSUFBYyxRQUFkLEVBQXdCO0FBQzNCLFVBQU0sS0FBSyxNQUFMLENBQVksR0FBWixDQUFOLENBRDJCO0lBQTVCOztBQUlBLE9BQUksUUFBUSxJQUFSLElBQWdCLFFBQVEsU0FBUixFQUFtQjtBQUN0QyxRQUFJLFNBQVMsSUFBSSxVQUFKLENBRHlCO0FBRXRDLFdBQU8sT0FBTyxZQUFQLENBQW9CLEtBQXBCLEVBQTJCLEdBQTNCLENBQVAsQ0FGc0M7SUFBdkM7O0FBS0EsU0FBTSxNQUFNLGtCQUFOLENBYmE7Ozs7Ozs7Ozs7eUJBb0JiLEtBQUs7QUFDWCxPQUFJLFFBQU8saURBQVAsSUFBYyxRQUFkLEVBQXdCO0FBQzNCLFVBQU0sS0FBSyxNQUFMLENBQVksR0FBWixDQUFOLENBRDJCO0lBQTVCOztBQUlBLE9BQUksUUFBUSxJQUFSLElBQWdCLFFBQVEsU0FBUixFQUFtQjtBQUN0QyxXQUFPLElBQUksVUFBSixDQUFlLFdBQWYsQ0FBMkIsR0FBM0IsQ0FBUCxDQURzQztJQUF2Qzs7QUFJQSxVQUFPLEtBQVAsQ0FUVzs7Ozs7Ozs7O3dCQWVOLEtBQUs7QUFDVixPQUFJLFFBQU8saURBQVAsSUFBYyxRQUFkLEVBQXdCO0FBQzNCLFVBQU0sS0FBSyxNQUFMLENBQVksR0FBWixDQUFOLENBRDJCO0lBQTVCOztBQUlBLE9BQUksUUFBUSxJQUFSLElBQWdCLFFBQVEsU0FBUixFQUFtQjtBQUN0QyxXQUFNLElBQUksU0FBSixFQUFjO0FBQ25CLFNBQUksV0FBSixDQUFnQixJQUFJLFNBQUosQ0FBaEIsQ0FEbUI7S0FBcEI7O0FBSUEsV0FBTyxHQUFQLENBTHNDO0lBQXZDOzs7Ozs7Ozs7OzJCQWFRLFNBQVE7QUFDaEIsVUFBTyxLQUFLLEdBQUwsQ0FBUyxjQUFULENBQXdCLE9BQXhCLENBQVAsQ0FEZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFtQlYsR0FBRztBQUNULE9BQUksTUFBTSxJQUFOLENBREs7QUFFVCxPQUFJLEVBQUUsVUFBRixLQUFpQixTQUFqQixFQUE0QjtBQUMvQixVQUFNLEtBQUssUUFBTCxDQUFjLEVBQUUsT0FBRixDQUFwQixDQUQrQjtJQUFoQyxNQUdJOztBQUVILFFBQUksQ0FBQyxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLEVBQUUsR0FBRixDQUFsQixFQUEwQjtBQUM3QixVQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLEVBQUUsR0FBRixFQUFPLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsRUFBRSxHQUFGLENBQS9DLEVBRDZCO0tBQTlCO0FBR0EsVUFBTSxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLEVBQUUsR0FBRixDQUFqQixDQUF3QixTQUF4QixFQUFOOzs7QUFMRyxRQVFBLEVBQUUsSUFBRixLQUFXLFNBQVgsRUFDSDtBQUNDLFVBQUksSUFBSSxHQUFKLElBQVcsRUFBRSxJQUFGLEVBQ2Y7O0FBRUMsVUFBSSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEdBQWxCLENBQUosRUFBNEI7QUFDM0IsV0FBSSxnQkFBSixDQUFxQixLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEdBQWxCLENBQXJCLEVBQTZDLEVBQUUsSUFBRixDQUFPLEdBQVAsQ0FBN0MsRUFEMkI7T0FBNUIsTUFHSTtBQUNILGVBQU8sR0FBUDtBQUNDLGFBQUssU0FBTDtBQUNDLGFBQUksT0FBSixHQUFjLEVBQUUsSUFBRixDQUFPLEdBQVAsQ0FBZCxDQUREO0FBRUMsZUFGRDtBQURELGFBSU0sV0FBTDtBQUNDLGFBQUksWUFBSixDQUFpQixPQUFqQixFQUF5QixFQUFFLElBQUYsQ0FBTyxHQUFQLENBQXpCLEVBREQ7QUFFQyxlQUZEO0FBSkQ7QUFRRSxhQUFJLFlBQUosQ0FBaUIsR0FBakIsRUFBcUIsRUFBRSxJQUFGLENBQU8sR0FBUCxDQUFyQixFQUREO0FBRUMsZUFGRDtBQVBELFFBREc7T0FISjtNQUhEO0tBRkQ7Ozs7QUFSRyxRQWtDQyxFQUFFLFVBQUYsS0FBaUIsU0FBakIsRUFBNEI7QUFDL0IsU0FBSSxTQUFKLEdBQWdCLEVBQUUsVUFBRixDQURlO0tBQWhDOzs7QUFsQ0csUUF1Q0MsRUFBRSxNQUFGLEtBQWEsU0FBYixFQUF3QjtBQUMzQixVQUFLLElBQUksRUFBSixJQUFVLEVBQUUsTUFBRixFQUFVO0FBQ3hCLFlBQU0sS0FBSyxNQUFMLENBQVksR0FBWixFQUFpQixFQUFFLE1BQUYsQ0FBUyxFQUFULENBQWpCLEVBQStCLElBQS9CLENBQU4sQ0FEd0I7TUFBekI7S0FERDs7O0FBdkNHLFFBOENDLEVBQUUsS0FBRixLQUFZLFNBQVosRUFBc0I7QUFDekIsU0FBSSxXQUFKLENBQWdCLEtBQUssUUFBTCxDQUFjLEVBQUUsS0FBRixDQUE5QixFQUR5QjtLQUExQjs7QUFJQSxRQUFJLEVBQUUsWUFBRixLQUFtQixTQUFuQixJQUFnQyxPQUFPLEVBQUUsWUFBRixLQUFtQixVQUExQixFQUFzQztBQUN6RSxPQUFFLFlBQUYsQ0FBZSxHQUFmLEVBRHlFO0tBQTFFO0lBckREOztBQTBEQSxVQUFPLEdBQVAsQ0E1RFM7Ozs7Z0NBK0RJLEtBQUs7QUFDbEIsT0FBSSxLQUFLLEdBQUwsQ0FEYztBQUVsQixPQUFHO0FBQ0YsVUFBTSxJQUFJLEtBQUosR0FBWSx3QkFBWixDQUFxQyxFQUFyQyxDQUFOLENBREU7SUFBSCxDQUdBLE9BQU0sQ0FBTixFQUFRO0FBQ1AsUUFBSSxRQUFRLEtBQUssR0FBTCxDQUFTLFdBQVQsRUFBUixDQURHO0FBRVAsUUFBSSxNQUFNLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBTixDQUZHO0FBR1AsVUFBTSxVQUFOLENBQWlCLEtBQUssR0FBTCxDQUFTLG9CQUFULENBQThCLEtBQTlCLEVBQXFDLElBQXJDLENBQTBDLENBQTFDLENBQWpCLEVBSE87QUFJUCxVQUFNLE1BQU0sd0JBQU4sQ0FBK0IsRUFBL0IsQ0FBTixDQUpPO0lBQVI7QUFNQSxVQUFPLEdBQVAsQ0FYa0I7Ozs7Z0NBY0wsS0FBSTtBQUNqQixPQUFJLFFBQVEsRUFBUixDQURhOztBQUdqQixPQUFJLElBQUksUUFBSixLQUFpQixPQUFqQixFQUEwQjtBQUM3QixVQUFNLFVBQU4sR0FBbUIsSUFBbkIsQ0FENkI7QUFFN0IsVUFBTSxPQUFOLEdBQWdCLElBQUksU0FBSixDQUZhO0lBQTlCLE1BSUk7QUFDSCxVQUFNLEdBQU4sR0FBWSxJQUFJLFFBQUosQ0FBYSxXQUFiLEVBQVosQ0FERzs7QUFHSCxRQUFJLElBQUksVUFBSixLQUFtQixTQUFuQixFQUE4QjtBQUNqQyxTQUFJLElBQUksVUFBSixDQUFlLE1BQWYsR0FBdUIsQ0FBdkIsRUFBMEI7QUFDN0IsWUFBTSxJQUFOLEdBQWEsRUFBYixDQUQ2QjtBQUU3QixXQUFLLElBQUksSUFBSSxJQUFJLFVBQUosQ0FBZSxNQUFmLEdBQXdCLENBQXhCLEVBQTJCLEtBQUssQ0FBTCxFQUFRLEdBQWhELEVBQXFEO0FBQ3BELGFBQU0sSUFBTixDQUFXLElBQUksVUFBSixDQUFlLElBQWYsQ0FBb0IsQ0FBcEIsRUFBdUIsSUFBdkIsQ0FBWCxHQUEwQyxJQUFJLFVBQUosQ0FBZSxJQUFmLENBQW9CLENBQXBCLEVBQXVCLEtBQXZCLENBRFU7T0FBckQ7TUFGRDtLQUREOztBQVNBLFFBQUksSUFBSSxVQUFKLEtBQW1CLFNBQW5CLEVBQThCO0FBQ2pDLFNBQUksSUFBSSxVQUFKLENBQWUsTUFBZixHQUF1QixDQUF2QixFQUEwQjtBQUM3QixZQUFNLE1BQU4sR0FBZSxFQUFmLENBRDZCO0FBRTdCLFdBQUssSUFBSSxJQUFJLENBQUosRUFBTyxLQUFLLElBQUksVUFBSixDQUFlLE1BQWYsR0FBd0IsQ0FBeEIsRUFBMkIsR0FBaEQsRUFBcUQ7QUFDcEQsYUFBTSxNQUFOLENBQWEsSUFBYixDQUFrQixLQUFLLGFBQUwsQ0FBbUIsSUFBSSxVQUFKLENBQWUsSUFBZixDQUFvQixDQUFwQixDQUFuQixDQUFsQixFQURvRDtPQUFyRDtNQUZEO0tBREQ7SUFoQkQ7O0FBMEJBLFVBQU8sS0FBUCxDQTdCaUI7Ozs7MENBZ0NNLEtBQUk7QUFDM0IsVUFBTyxLQUFLLGFBQUwsQ0FBbUIsS0FBSyxhQUFMLENBQW1CLEdBQW5CLENBQW5CLENBQVAsQ0FEMkI7Ozs7UUFuWXZCOzs7QUF3WU4sT0FBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBKc2kgPSByZXF1aXJlKFwiSnNpL2VzNi9qc2kuanNcIik7XG5cbmNsYXNzIEpzaV9jb21wYXQgZXh0ZW5kcyBKc2l7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoZG9jdW1lbnQpO1xuXHR9XG5cblx0ZG9jZWxpZChpZCl7XG5cdFx0cmV0dXJuIHRoaXMuaWQoaWQpO1xuXHR9XG5cblx0ZG9jZWxlcShxdWVyeSl7XG5cdFx0cmV0dXJuIHRoaXMucXVlcnkocXVlcnkpO1xuXHR9XG5cblx0ZG9jZWxlcUZpcnN0KHF1ZXJ5KXtcblx0XHRyZXR1cm4gdGhpcy5xdWVyeUZpcnN0KHF1ZXJ5KTtcblx0fVxuXG5cdGFwcGVuZChwYXJlbnQsIGVsdCl7XG5cdFx0cmV0dXJuIHN1cGVyLmFwcGVuZChwYXJlbnQsIGVsdCwgdHJ1ZSk7XG5cdH1cblxuXHRhcHBlbmRCZWZvcmUoZWx0LCBuX2VsdCkge1xuXHRcdHN1cGVyLmFwcGVuZEJlZm9yZShlbHQsIG5fZWx0KTtcblx0XHRyZXR1cm4gZWx0O1xuXHR9XG5cblx0YXBwZW5kQWZ0ZXIoZWx0LCBuX2VsdCkge1xuXHRcdHN1cGVyLmFwcGVuZEFmdGVyKGVsdCwgbl9lbHQpO1xuXHRcdHJldHVybiBlbHQ7XG5cdH1cblxuXHRwcmVwZW5kKHBhcmVudCwgZWx0KSB7XG5cdFx0c3VwZXIucHJlcGVuZChwYXJlbnQsIGVsdCk7XG5cdFx0cmV0dXJuIHBhcmVudDtcblx0fVxuXG5cdHJlcGxhY2UoZWx0LCBuX2VsdCkge1xuXHRcdHN1cGVyLnJlcGxhY2UoZWx0LCBuX2VsdCk7XG5cdFx0cmV0dXJuIG5fZWx0LnBhcmVudE5vZGU7XG5cdH1cblxuXHRlbHQoYyl7XG5cdFx0cmV0dXJuIHBhcmVudC5jcmVhdGUoYyk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgSnNpX2NvbXBhdCgpOyIsImNsYXNzIEpzaXtcblx0Y29uc3RydWN0b3IoZG9jKXtcblx0XHRpZiAoZG9jID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGRvYyA9IGRvY3VtZW50O1xuXHRcdH1cblx0XHR0aGlzLmRvYyA9IGRvYztcblx0XHR0aGlzLmNyZWF0ZWQgPSBuZXcgTWFwKCk7XG5cblx0XHR0aGlzLmVsdEV2ZW50ID0gbmV3IE1hcCgpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNsaWNrJywgJ2NsaWNrJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uY2hhbmdlJywgJ2NoYW5nZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmZvY3VzJywgJ2ZvY3VzJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uYmx1cicsICdibHVyJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ua2V5dXAnLCAna2V5dXAnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25rZXlwcmVzcycsICdrZXlwcmVzcycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnN1Ym1pdCcsICdzdWJtaXQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25hbmltYXRpb25lbmQnLCAnYW5pbWF0aW9uZW5kJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29udHJhbnNpdGlvbmVuZCcsICd0cmFuc2l0aW9uZW5kJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uY29weScsICdjb3B5Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uY3V0JywgJ2N1dCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRibGNsaWNrJywgJ2RibGNsaWNrJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uaW52YWxpZCcsICdpbnZhbGlkJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2Vkb3duJywgJ21vdXNlZG93bicpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNldXAnLCAnbW91c2V1cCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlZW50ZXInLCAnbW91c2VlbnRlcicpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlbGVhdmUnLCAnbW91c2VsZWF2ZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlbW92ZScsICdtb3VzZW1vdmUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZW91dCcsICdtb3VzZW91dCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlb3ZlcicsICdtb3VzZW92ZXInKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25wYXN0ZScsICdwYXN0ZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnJlc2l6ZScsICdyZXNpemUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25zY3JvbGwnLCAnc2Nyb2xsJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uc2VsZWN0JywgJ3NlbGVjdCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRvdWNoc3RhcnQnLCAndG91Y2hzdGFydCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRvdWNobW92ZScsICd0b3VjaG1vdmUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb250b3VjaGVuZCcsICd0b3VjaGVuZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWcnLCAnZHJhZycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdlbmQnLCAnZHJhZ2VuZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdlbnRlcicsICdkcmFnZW50ZXInKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnbGVhdmUnLCAnZHJhZ2xlYXZlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZ292ZXInLCAnZHJhZ292ZXInKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnc3RhcnQnLCAnZHJhZ3N0YXJ0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZHJvcCcsICdkcm9wJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uaW5wdXQnLCAnaW5wdXQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25sb2Fkc3RhcnQnLCAnbG9hZHN0YXJ0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucHJvZ3Jlc3MnLCAncHJvZ3Jlc3MnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25zdXNwZW5kJywgJ3N1c3BlbmQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25hYm9ydCcsICdhYm9ydCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmVycm9yJywgJ2Vycm9yJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZW1wdGllZCcsICdlbXB0aWVkJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uc3RhbGxlZCcsICdzdGFsbGVkJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubG9hZGVkbWV0YWRhdGEnLCAnbG9hZGVkbWV0YWRhdGEnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25sb2FkZWRkYXRhJywgJ2xvYWRlZGRhdGEnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25jYW5wbGF5JywgJ2NhbnBsYXknKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25jYW5wbGF5dGhyb3VnaCcsICdjYW5wbGF5dGhyb3VnaCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnBsYXlpbmcnLCAncGxheWluZycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbndhaXRpbmcnLCAnd2FpdGluZycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnNlZWtpbmcnLCAnc2Vla2luZycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnNlZWtlZCcsICdzZWVrZWQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25lbmRlZCcsICdlbmRlZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmR1cmF0aW9uY2hhbmdlJywgJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29udGltZXVwZGF0ZScsICd0aW1ldXBkYXRlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucGxheScsICdwbGF5Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucGF1c2UnLCAncGF1c2UnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25yYXRlY2hhbmdlJywgJ3JhdGVjaGFuZ2UnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25yZXNpemUnLCAncmVzaXplJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29udm9sdW1lY2hhbmdlJywgJ3ZvbHVtZWNoYW5nZScpO1xuXG5cdH1cblxuXHQvKipcblx0KiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBzaG9yY3V0XG5cdCogQHBhcmFtIHtzdHJpbmd9IGlkIHRoZSBlbGVtZW50IGlkXG5cdCogQHJldHVybiB7b2JqZWN0fSBET01FbGVtZW50XG5cdCovXG5cdGlkKGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKGlkKTtcblx0fVxuXHQvKipcblx0KiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsIHNob3JjdXRcblx0KiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHNlbGVjdG9yXG5cdCogQHJldHVybiB7RE9NTm9kZUxpc3R9XG5cdCovXG5cdHF1ZXJ5KHF1ZXJ5KSB7XG5cdFx0bGV0IHJlcyA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpO1xuXHRcdGlmIChyZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Igc2hvcmN1dFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgc2VsZWN0b3Jcblx0KiBAcmV0dXJuIHtET01FbGVtZW50fVxuXHQqL1xuXHRxdWVyeUZpcnN0KHF1ZXJ5KSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuXHR9XG5cblx0c2VsZWN0KHEpe1xuXHRcdGxldCByZXMgPSB0aGlzLmlkKHEpO1xuXHRcdGlmIChyZXMgPT09IG51bGwpIHtcblx0XHRcdHJlcyA9IHRoaXMucXVlcnlGaXJzdChxKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcztcblx0fVxuXG5cdC8qKlxuXHQqIGFwcGVuZCBhbiBlbGVtZW50IHRvIGEgcGFyZW50XG5cdCogQHBhcmFtIHtET01FbGVtZW50fHN0cmluZ30gcGFyZW50IHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcblx0KiBAcGFyYW0ge0RPTUVsZW1lbnR8b2JqZWN0fSBlbHQgb3IgdGVtcGxhdGUgb2JqZWN0IHRvIGFwcGVuZCB0byBwYXJlbnRcblx0KiBAcmV0dXJuIHtET01FbGVtZW50fSBvYmplY3Rcblx0Ki9cblx0YXBwZW5kKHBhcmVudCwgZWx0LCBnZXRQYXJlbnQpIHtcblx0XHRpZiAoZWx0LnRhZyAhPT0gdW5kZWZpbmVkIHx8IGVsdC5pc1RleHROb2RlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRlbHQgPSB0aGlzLmNyZWF0ZShlbHQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuXHRcdFx0cGFyZW50ID0gdGhpcy5zZWxlY3QocGFyZW50KTtcblx0XHR9XG5cblx0XHRpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRsZXQgcmVzID0gcGFyZW50LmFwcGVuZENoaWxkKGVsdCk7XG5cdFx0XHRpZiAoZ2V0UGFyZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmVzID0gcGFyZW50O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlcztcblx0XHR9XG5cdFx0dGhyb3cgcGFyZW50ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuXHR9XG5cblx0LyoqXG5cdCogYXBwZW5kIGFuIGVsZW1lbnQgYmVmb3JlIGFub3RoZXJcblx0KiBAcGFyYW0gZWx0IG1peGVkIHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcblx0KiBAcGFyYW0gbl9lbHQgbWl4ZWQgRE9NRWxlbWVudCBvciB0ZW1wbGF0ZSBvYmplY3QgdG8gYXBwZW5kIHRvIHBhcmVudFxuXHQqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcblx0Ki9cblx0YXBwZW5kQmVmb3JlKGVsdCwgbl9lbHQpIHtcblx0XHRpZiAobl9lbHQudGFnICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG5fZWx0ID0gdGhpcy5jcmVhdGUobl9lbHQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuXHRcdFx0ZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcblx0XHR9XG5cblx0XHRpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gZWx0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5fZWx0LCBlbHQpO1xuXHRcdH1cblxuXHRcdHRocm93IGVsdCArICcgY2Fubm90IGJlIGZvdW5kJztcblx0fVxuXG5cdC8qKlxuXHQqIGFwcGVuZCBhbiBlbGVtZW50IGFmdGVyIGFub3RoZXJcblx0KiBAcGFyYW0gZWx0IG1peGVkIHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcblx0KiBAcGFyYW0gbl9lbHQgbWl4ZWQgRE9NRWxlbWVudCBvciB0ZW1wbGF0ZSBvYmplY3QgdG8gYXBwZW5kIHRvIHBhcmVudFxuXHQqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcblx0Ki9cblx0YXBwZW5kQWZ0ZXIoZWx0LCBuX2VsdCkge1xuXHRcdGlmIChuX2VsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bl9lbHQgPSB0aGlzLmNyZWF0ZShuX2VsdCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuXHRcdH1cblxuXHRcdGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBlbHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobl9lbHQsIGVsdC5uZXh0U2libGluZyk7XG5cdFx0fVxuXG5cdFx0dGhyb3cgZWx0ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuXHR9XG5cblx0LyoqXG5cdCogYXBwZW5kIGFuIGVsZW1lbnQgdG8gYSBwYXJlbnQgYXMgaXRzIGZpcnN0IGNoaWxkXG5cdCogQHBhcmFtIHBhcmVudCBtaXhlZCB0aGUgZWxlbWVudCB0byBhcHBlbmQgdG8gb3IgaXRzIGlkXG5cdCogQHBhcmFtIGVsdCBtaXhlZCBET01FbGVtZW50IG9yIHRlbXBsYXRlIG9iamVjdCB0byBhcHBlbmQgdG8gcGFyZW50XG5cdCogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuXHQqL1xuXHRwcmVwZW5kKHBhcmVudCwgZWx0KSB7XG5cdFx0aWYgKGVsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZWx0ID0gdGhpcy5jcmVhdGUoZWx0KTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBwYXJlbnQgIT0gJ29iamVjdCcpIHtcblx0XHRcdHBhcmVudCA9IHRoaXMuc2VsZWN0KHBhcmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcmVudCAhPT0gbnVsbCAmJiBwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5hcHBlbmQocGFyZW50LCBlbHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHBhcmVudC5pbnNlcnRCZWZvcmUoZWx0LCBwYXJlbnQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhyb3cgcGFyZW50ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuXHR9XG5cblx0LyoqXG5cdCogcmVwbGFjZSBhbiBlbGVtZW50XG5cdCogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuXHQqL1xuXHRyZXBsYWNlKGVsdCwgbl9lbHQpIHtcblx0XHRpZiAobl9lbHQudGFnICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG5fZWx0ID0gdGhpcy5jcmVhdGUobl9lbHQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuXHRcdFx0ZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcblx0XHR9XG5cblx0XHRpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRsZXQgcGFyZW50ID0gZWx0LnBhcmVudE5vZGU7XG5cdFx0XHRyZXR1cm4gcGFyZW50LnJlcGxhY2VDaGlsZChuX2VsdCwgZWx0KTtcblx0XHR9XG5cblx0XHR0aHJvdyBlbHQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG5cdH1cblxuXHQvKlxuXHQqIGRlc3Ryb3kgYSBEb20gZWxlbWVudFxuXHQqIEBwYXJhbSBlbHQgbWl4ZWQgaWQgb2YgdGhlIGVsZW1lbnQgb3IgZWxlbWVudCBpdHNlbGZcblx0Ki9cblx0cmVtb3ZlKGVsdCkge1xuXHRcdGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuXHRcdH1cblxuXHRcdGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBlbHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbHQpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBlbXB0eSBEb20gZWxlbWVudCBmcm9tIGl0J3MgY2hpbGRyZW4uXG5cdCovXG5cdGVtcHR5KGVsdCkge1xuXHRcdGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuXHRcdH1cblxuXHRcdGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHdoaWxlKGVsdC5sYXN0Q2hpbGQpe1xuXHRcdFx0XHRlbHQucmVtb3ZlQ2hpbGQoZWx0Lmxhc3RDaGlsZCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbHQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogY3JlYXRlIGEgdGV4dCBub2RlXG5cdCogQHBhcmFtIGNvbnRlbnQgc3RyaW5nIHRoZSBjb250ZW50IG9mIHRoZSB0ZXh0IG5vZGVcblx0Ki9cblx0dGV4dE5vZGUoY29udGVudCl7XG5cdFx0cmV0dXJuIHRoaXMuZG9jLmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXHR9XG5cblx0LyoqXG5cdCogY3JlYXRlIGFuIGVsZW1lbnQgZnJvbSBhIHRlbXBsYXRlIG9iamVjdFxuXHQqIEBwYXJhbSBjIG9iamVjdCB0aGUgdGVtcGxhdGUgb2JqZWN0IHRvIGJlIGNyZWF0ZWRcblx0KiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG5cdCo8ZXhlbXBsZT5cblx0Kntcblx0Klx0XCJ0YWdcIjpcInR5cGUgb2YgZWxlbWVudFwiLFxuXHQqXHRcImF0dHJcIjp7XG5cdCpcdFx0XCJhdHRyaWJ1dGUxXCI6XCJ2YWx1ZSBvZiBhdHRyIDFcIixcblx0Klx0XHRcIi4uLlwiOlwiLi4uXCJcblx0Klx0fSxcblx0Klx0XCJpbm5lclwiOlwidGhlIHRleHQgY29udGVudCBvZiB0aGUgbm9kZVwiXG5cdCp9XG5cdCo8L2V4ZW1wbGU+XG5cdCovXG5cdGNyZWF0ZShjKSB7XG5cdFx0bGV0IGVsdCA9IG51bGw7XG5cdFx0aWYgKGMuaXNUZXh0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnRleHROb2RlKGMuY29udGVudCk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHQvLyBjaGVjayBpZiB0aGUgZWxlbWVudCB0YWcgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkIHRvIGNsb25lIGl0XG5cdFx0XHRpZiAoIXRoaXMuY3JlYXRlZC5oYXMoYy50YWcpKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlZC5zZXQoYy50YWcsIHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoYy50YWcpKTtcblx0XHRcdH1cblx0XHRcdGVsdCA9IHRoaXMuY3JlYXRlZC5nZXQoYy50YWcpLmNsb25lTm9kZSgpO1xuXHRcdFx0XG5cdFx0XHQvLyBjcmVhdGUgZWxlbWVudCBhdHRyaWJ1dGVcblx0XHRcdGlmKGMuYXR0ciAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IobGV0IGtleSBpbiBjLmF0dHIpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBoYW5kbGUgZWxlbWVudCBldmVudCBvciBjZXJ0YWluIHNwZWNpZmljIGF0dHJpYnV0ZVxuXHRcdFx0XHRcdGlmICh0aGlzLmVsdEV2ZW50LmhhcyhrZXkpKSB7XG5cdFx0XHRcdFx0XHRlbHQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmVsdEV2ZW50LmdldChrZXkpLCBjLmF0dHJba2V5XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0XHRzd2l0Y2goa2V5KXtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnY2hlY2tlZCc6XG5cdFx0XHRcdFx0XHRcdFx0ZWx0LmNoZWNrZWQgPSBjLmF0dHJba2V5XTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnY2xhc3NOYW1lJzpcblx0XHRcdFx0XHRcdFx0XHRlbHQuc2V0QXR0cmlidXRlKCdjbGFzcycsYy5hdHRyW2tleV0pO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdGVsdC5zZXRBdHRyaWJ1dGUoa2V5LGMuYXR0cltrZXldKTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gaW4gc29tZSBjYXNlIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gZm9yY2UgaW5uZXJIVE1MIHZhbHVlLCBcblx0XHRcdC8vIC8hXFwgVEhJUyBJUyBCQUFBQUFBRCAhXG5cdFx0XHRpZiAoYy5pbm5lckZvcmNlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZWx0LmlubmVySFRNTCA9IGMuaW5uZXJGb3JjZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXBwZW5kIGVsZW1lbnRzIGlmIHRoZXJlIGFyZSBzb21lIFxuXHRcdFx0aWYgKGMuYXBwZW5kICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Zm9yIChsZXQgYXAgaW4gYy5hcHBlbmQpIHtcblx0XHRcdFx0XHRlbHQgPSB0aGlzLmFwcGVuZChlbHQsIGMuYXBwZW5kW2FwXSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gY3JlYXRlIGlubmVyIHRleHQgY29udGVudCBub2RlIGFuZCBhcHBlbmQgaXRcblx0XHRcdGlmIChjLmlubmVyICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0XHRlbHQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0Tm9kZShjLmlubmVyKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjLmluaXRDYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjLmluaXRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjLmluaXRDYWxsYmFjayhlbHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBlbHQ7XG5cdH1cblxuXHRlbHRGcm9tU3RyaW5nKGVsdCkge1xuXHRcdGxldCBlbCA9IGVsdDtcblx0XHR0cnl7XG5cdFx0XHRlbHQgPSBuZXcgUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoZWwpO1xuXHRcdH1cblx0XHRjYXRjaChlKXtcblx0XHRcdGxldCByYW5nZSA9IHRoaXMuZG9jLmNyZWF0ZVJhbmdlKCk7XG5cdFx0XHRsZXQgZGl2ID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRyYW5nZS5zZWxlY3ROb2RlKHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpLml0ZW0oMCkpO1xuXHRcdFx0ZWx0ID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGVsKTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsdDtcblx0fVxuXG5cdHJldmVyc2VDcmVhdGUoZWx0KXtcblx0XHRsZXQgbl9lbHQgPSB7fTtcblxuXHRcdGlmIChlbHQubm9kZU5hbWUgPT09ICcjdGV4dCcpIHtcblx0XHRcdG5fZWx0LmlzVGV4dE5vZGUgPSB0cnVlO1xuXHRcdFx0bl9lbHQuY29udGVudCA9IGVsdC5ub2RlVmFsdWU7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRuX2VsdC50YWcgPSBlbHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdFxuXHRcdFx0aWYgKGVsdC5hdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKGVsdC5hdHRyaWJ1dGVzLmxlbmd0aCA+MCkge1xuXHRcdFx0XHRcdG5fZWx0LmF0dHIgPSB7fTtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gZWx0LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRcdG5fZWx0LmF0dHJbZWx0LmF0dHJpYnV0ZXMuaXRlbShpKS5uYW1lXSA9IGVsdC5hdHRyaWJ1dGVzLml0ZW0oaSkudmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmIChlbHQuY2hpbGROb2RlcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmIChlbHQuY2hpbGROb2Rlcy5sZW5ndGggPjApIHtcblx0XHRcdFx0XHRuX2VsdC5hcHBlbmQgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSBlbHQuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0XHRcdG5fZWx0LmFwcGVuZC5wdXNoKHRoaXMucmV2ZXJzZUNyZWF0ZShlbHQuY2hpbGROb2Rlcy5pdGVtKGkpKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5fZWx0O1xuXHR9XG5cblx0cmV2ZXJzZUNyZWF0ZUZyb21TdHJpbmcoZWx0KXtcblx0XHRyZXR1cm4gdGhpcy5yZXZlcnNlQ3JlYXRlKHRoaXMuZWx0RnJvbVN0cmluZyhlbHQpKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpzaTsiXX0=