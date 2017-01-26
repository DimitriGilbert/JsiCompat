(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JsiCompat = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jsi = require("@dimitrigilbert/jsi");

var JsiCompat = function (_Jsi) {
	_inherits(JsiCompat, _Jsi);

	function JsiCompat(doc) {
		_classCallCheck(this, JsiCompat);

		return _possibleConstructorReturn(this, (JsiCompat.__proto__ || Object.getPrototypeOf(JsiCompat)).call(this, doc));
	}

	_createClass(JsiCompat, [{
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
			return _get(JsiCompat.prototype.__proto__ || Object.getPrototypeOf(JsiCompat.prototype), "append", this).call(this, parent, elt, true);
		}
	}, {
		key: "appendBefore",
		value: function appendBefore(elt, n_elt) {
			_get(JsiCompat.prototype.__proto__ || Object.getPrototypeOf(JsiCompat.prototype), "appendBefore", this).call(this, elt, n_elt);
			return elt;
		}
	}, {
		key: "appendAfter",
		value: function appendAfter(elt, n_elt) {
			_get(JsiCompat.prototype.__proto__ || Object.getPrototypeOf(JsiCompat.prototype), "appendAfter", this).call(this, elt, n_elt);
			return elt;
		}
	}, {
		key: "prepend",
		value: function prepend(parent, elt) {
			_get(JsiCompat.prototype.__proto__ || Object.getPrototypeOf(JsiCompat.prototype), "prepend", this).call(this, parent, elt);
			return parent;
		}
	}, {
		key: "replace",
		value: function replace(elt, n_elt) {
			_get(JsiCompat.prototype.__proto__ || Object.getPrototypeOf(JsiCompat.prototype), "replace", this).call(this, elt, n_elt);
			return n_elt.parentNode;
		}
	}, {
		key: "elt",
		value: function elt(c) {
			return _get(JsiCompat.prototype.__proto__ || Object.getPrototypeOf(JsiCompat.prototype), "create", this).call(this, c);
		}
	}]);

	return JsiCompat;
}(Jsi);

module.exports = JsiCompat;

},{"@dimitrigilbert/jsi":3}],2:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Jsi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
        * @param {object} c the template object to be created
        * @return {object} DOMElement
        *       <pre>
        *       {
        *	        "tag":"type of element",
        *	        "attr":{
        *		        "attribute1":"value of attr 1",
        *		        "...":"..."
        *	        },
        *	        "inner":"the text content of the node"
        *       }
        *       </pre>
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


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
var Jsi = require('./dist/Jsi.js');
module.exports = Jsi;

},{"./dist/Jsi.js":2}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvanNpLmpzIiwibm9kZV9tb2R1bGVzL0BkaW1pdHJpZ2lsYmVydC9qc2kvZGlzdC9ub2RlX21vZHVsZXMvQGRpbWl0cmlnaWxiZXJ0L2pzaS9kaXN0L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGRpbWl0cmlnaWxiZXJ0L2pzaS9kaXN0L25vZGVfbW9kdWxlcy9AZGltaXRyaWdpbGJlcnQvanNpL2Rpc3QvZXM2L2pzaS5qcyIsIm5vZGVfbW9kdWxlcy9AZGltaXRyaWdpbGJlcnQvanNpL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSSxNQUFNLFFBQVEscUJBQVIsQ0FBVjs7SUFFTSxTOzs7QUFDTCxvQkFBWSxHQUFaLEVBQWdCO0FBQUE7O0FBQUEsK0dBQ1QsR0FEUztBQUVmOzs7OzBCQUVPLEUsRUFBRztBQUNWLFVBQU8sS0FBSyxFQUFMLENBQVEsRUFBUixDQUFQO0FBQ0E7OzswQkFFTyxLLEVBQU07QUFDYixVQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBUDtBQUNBOzs7K0JBRVksSyxFQUFNO0FBQ2xCLFVBQU8sS0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQVA7QUFDQTs7O3lCQUVNLE0sRUFBUSxHLEVBQUk7QUFDbEIsdUhBQW9CLE1BQXBCLEVBQTRCLEdBQTVCLEVBQWlDLElBQWpDO0FBQ0E7OzsrQkFFWSxHLEVBQUssSyxFQUFPO0FBQ3hCLHNIQUFtQixHQUFuQixFQUF3QixLQUF4QjtBQUNBLFVBQU8sR0FBUDtBQUNBOzs7OEJBRVcsRyxFQUFLLEssRUFBTztBQUN2QixxSEFBa0IsR0FBbEIsRUFBdUIsS0FBdkI7QUFDQSxVQUFPLEdBQVA7QUFDQTs7OzBCQUVPLE0sRUFBUSxHLEVBQUs7QUFDcEIsaUhBQWMsTUFBZCxFQUFzQixHQUF0QjtBQUNBLFVB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aWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEpzaSA9IHJlcXVpcmUoXCJAZGltaXRyaWdpbGJlcnQvanNpXCIpO1xuXG5jbGFzcyBKc2lDb21wYXQgZXh0ZW5kcyBKc2l7XG5cdGNvbnN0cnVjdG9yKGRvYyl7XG5cdFx0c3VwZXIoZG9jKTtcblx0fVxuXG5cdGRvY2VsaWQoaWQpe1xuXHRcdHJldHVybiB0aGlzLmlkKGlkKTtcblx0fVxuXG5cdGRvY2VsZXEocXVlcnkpe1xuXHRcdHJldHVybiB0aGlzLnF1ZXJ5KHF1ZXJ5KTtcblx0fVxuXG5cdGRvY2VsZXFGaXJzdChxdWVyeSl7XG5cdFx0cmV0dXJuIHRoaXMucXVlcnlGaXJzdChxdWVyeSk7XG5cdH1cblxuXHRhcHBlbmQocGFyZW50LCBlbHQpe1xuXHRcdHJldHVybiBzdXBlci5hcHBlbmQocGFyZW50LCBlbHQsIHRydWUpO1xuXHR9XG5cblx0YXBwZW5kQmVmb3JlKGVsdCwgbl9lbHQpIHtcblx0XHRzdXBlci5hcHBlbmRCZWZvcmUoZWx0LCBuX2VsdCk7XG5cdFx0cmV0dXJuIGVsdDtcblx0fVxuXG5cdGFwcGVuZEFmdGVyKGVsdCwgbl9lbHQpIHtcblx0XHRzdXBlci5hcHBlbmRBZnRlcihlbHQsIG5fZWx0KTtcblx0XHRyZXR1cm4gZWx0O1xuXHR9XG5cblx0cHJlcGVuZChwYXJlbnQsIGVsdCkge1xuXHRcdHN1cGVyLnByZXBlbmQocGFyZW50LCBlbHQpO1xuXHRcdHJldHVybiBwYXJlbnQ7XG5cdH1cblxuXHRyZXBsYWNlKGVsdCwgbl9lbHQpIHtcblx0XHRzdXBlci5yZXBsYWNlKGVsdCwgbl9lbHQpO1xuXHRcdHJldHVybiBuX2VsdC5wYXJlbnROb2RlO1xuXHR9XG5cblx0ZWx0KGMpe1xuXHRcdHJldHVybiBzdXBlci5jcmVhdGUoYyk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKc2lDb21wYXQ7IiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBKc2l7XG4gICAgY29uc3RydWN0b3IoZG9jKXtcbiAgICAgICAgaWYgKGRvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkb2MgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvYyA9IGRvYztcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHRoaXMuZWx0RXZlbnQgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNsaWNrJywgJ2NsaWNrJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNoYW5nZScsICdjaGFuZ2UnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZm9jdXMnLCAnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uYmx1cicsICdibHVyJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmtleXVwJywgJ2tleXVwJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmtleXByZXNzJywgJ2tleXByZXNzJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnN1Ym1pdCcsICdzdWJtaXQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uYW5pbWF0aW9uZW5kJywgJ2FuaW1hdGlvbmVuZCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb250cmFuc2l0aW9uZW5kJywgJ3RyYW5zaXRpb25lbmQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uY29weScsICdjb3B5Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmN1dCcsICdjdXQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZGJsY2xpY2snLCAnZGJsY2xpY2snKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uaW52YWxpZCcsICdpbnZhbGlkJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlZG93bicsICdtb3VzZWRvd24nKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2V1cCcsICdtb3VzZXVwJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlZW50ZXInLCAnbW91c2VlbnRlcicpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZWxlYXZlJywgJ21vdXNlbGVhdmUnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2Vtb3ZlJywgJ21vdXNlbW92ZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZW91dCcsICdtb3VzZW91dCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZW92ZXInLCAnbW91c2VvdmVyJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnBhc3RlJywgJ3Bhc3RlJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnJlc2l6ZScsICdyZXNpemUnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uc2Nyb2xsJywgJ3Njcm9sbCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25zZWxlY3QnLCAnc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRvdWNoc3RhcnQnLCAndG91Y2hzdGFydCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb250b3VjaG1vdmUnLCAndG91Y2htb3ZlJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRvdWNoZW5kJywgJ3RvdWNoZW5kJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWcnLCAnZHJhZycpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnZW5kJywgJ2RyYWdlbmQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZ2VudGVyJywgJ2RyYWdlbnRlcicpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnbGVhdmUnLCAnZHJhZ2xlYXZlJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdvdmVyJywgJ2RyYWdvdmVyJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdzdGFydCcsICdkcmFnc3RhcnQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZHJvcCcsICdkcm9wJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmlucHV0JywgJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmxvYWRzdGFydCcsICdsb2Fkc3RhcnQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ucHJvZ3Jlc3MnLCAncHJvZ3Jlc3MnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uc3VzcGVuZCcsICdzdXNwZW5kJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmFib3J0JywgJ2Fib3J0Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmVycm9yJywgJ2Vycm9yJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmVtcHRpZWQnLCAnZW1wdGllZCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25zdGFsbGVkJywgJ3N0YWxsZWQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ubG9hZGVkbWV0YWRhdGEnLCAnbG9hZGVkbWV0YWRhdGEnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ubG9hZGVkZGF0YScsICdsb2FkZWRkYXRhJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNhbnBsYXknLCAnY2FucGxheScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25jYW5wbGF5dGhyb3VnaCcsICdjYW5wbGF5dGhyb3VnaCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25wbGF5aW5nJywgJ3BsYXlpbmcnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ud2FpdGluZycsICd3YWl0aW5nJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnNlZWtpbmcnLCAnc2Vla2luZycpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25zZWVrZWQnLCAnc2Vla2VkJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmVuZGVkJywgJ2VuZGVkJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmR1cmF0aW9uY2hhbmdlJywgJ2R1cmF0aW9uY2hhbmdlJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRpbWV1cGRhdGUnLCAndGltZXVwZGF0ZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25wbGF5JywgJ3BsYXknKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ucGF1c2UnLCAncGF1c2UnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ucmF0ZWNoYW5nZScsICdyYXRlY2hhbmdlJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnJlc2l6ZScsICdyZXNpemUnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29udm9sdW1lY2hhbmdlJywgJ3ZvbHVtZWNoYW5nZScpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBzaG9yY3V0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgdGhlIGVsZW1lbnQgaWRcbiAgICAqIEByZXR1cm4ge29iamVjdH0gRE9NRWxlbWVudFxuICAgICovXG4gICAgaWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsIHNob3JjdXRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgc2VsZWN0b3JcbiAgICAqIEByZXR1cm4ge0RPTU5vZGVMaXN0fVxuICAgICovXG4gICAgcXVlcnkocXVlcnkpIHtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpO1xuICAgICAgICBpZiAocmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIHNob3JjdXRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgc2VsZWN0b3JcbiAgICAqIEByZXR1cm4ge0RPTUVsZW1lbnR9XG4gICAgKi9cbiAgICBxdWVyeUZpcnN0KHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBzZWxlY3QocSl7XG4gICAgICAgIGxldCByZXMgPSB0aGlzLmlkKHEpO1xuICAgICAgICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLnF1ZXJ5Rmlyc3QocSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGFwcGVuZCBhbiBlbGVtZW50IHRvIGEgcGFyZW50XG4gICAgKiBAcGFyYW0ge0RPTUVsZW1lbnR8c3RyaW5nfSBwYXJlbnQgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIG9yIGl0cyBpZFxuICAgICogQHBhcmFtIHtET01FbGVtZW50fG9iamVjdH0gZWx0IG9yIHRlbXBsYXRlIG9iamVjdCB0byBhcHBlbmQgdG8gcGFyZW50XG4gICAgKiBAcmV0dXJuIHtET01FbGVtZW50fSBvYmplY3RcbiAgICAqL1xuICAgIGFwcGVuZChwYXJlbnQsIGVsdCwgZ2V0UGFyZW50KSB7XG4gICAgICAgIGlmIChlbHQudGFnICE9PSB1bmRlZmluZWQgfHwgZWx0LmlzVGV4dE5vZGUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIGVsdCA9IHRoaXMuY3JlYXRlKGVsdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJlbnQgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IHRoaXMuc2VsZWN0KHBhcmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gcGFyZW50LmFwcGVuZENoaWxkKGVsdCk7XG4gICAgICAgICAgICBpZiAoZ2V0UGFyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXMgPSBwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IHBhcmVudCArICcgY2Fubm90IGJlIGZvdW5kJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGFwcGVuZCBhbiBlbGVtZW50IGJlZm9yZSBhbm90aGVyXG4gICAgKiBAcGFyYW0gZWx0IG1peGVkIHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcbiAgICAqIEBwYXJhbSBuX2VsdCBtaXhlZCBET01FbGVtZW50IG9yIHRlbXBsYXRlIG9iamVjdCB0byBhcHBlbmQgdG8gcGFyZW50XG4gICAgKiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG4gICAgKi9cbiAgICBhcHBlbmRCZWZvcmUoZWx0LCBuX2VsdCkge1xuICAgICAgICBpZiAobl9lbHQudGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5fZWx0ID0gdGhpcy5jcmVhdGUobl9lbHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuX2VsdCwgZWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGVsdCArICcgY2Fubm90IGJlIGZvdW5kJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGFwcGVuZCBhbiBlbGVtZW50IGFmdGVyIGFub3RoZXJcbiAgICAqIEBwYXJhbSBlbHQgbWl4ZWQgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIG9yIGl0cyBpZFxuICAgICogQHBhcmFtIG5fZWx0IG1peGVkIERPTUVsZW1lbnQgb3IgdGVtcGxhdGUgb2JqZWN0IHRvIGFwcGVuZCB0byBwYXJlbnRcbiAgICAqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcbiAgICAqL1xuICAgIGFwcGVuZEFmdGVyKGVsdCwgbl9lbHQpIHtcbiAgICAgICAgaWYgKG5fZWx0LnRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuX2VsdCA9IHRoaXMuY3JlYXRlKG5fZWx0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobl9lbHQsIGVsdC5uZXh0U2libGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBlbHQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhcHBlbmQgYW4gZWxlbWVudCB0byBhIHBhcmVudCBhcyBpdHMgZmlyc3QgY2hpbGRcbiAgICAqIEBwYXJhbSBwYXJlbnQgbWl4ZWQgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIG9yIGl0cyBpZFxuICAgICogQHBhcmFtIGVsdCBtaXhlZCBET01FbGVtZW50IG9yIHRlbXBsYXRlIG9iamVjdCB0byBhcHBlbmQgdG8gcGFyZW50XG4gICAgKiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG4gICAgKi9cbiAgICBwcmVwZW5kKHBhcmVudCwgZWx0KSB7XG4gICAgICAgIGlmIChlbHQudGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsdCA9IHRoaXMuY3JlYXRlKGVsdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJlbnQgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IHRoaXMuc2VsZWN0KHBhcmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kKHBhcmVudCwgZWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5pbnNlcnRCZWZvcmUoZWx0LCBwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBwYXJlbnQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZXBsYWNlIGFuIGVsZW1lbnRcbiAgICAqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcbiAgICAqL1xuICAgIHJlcGxhY2UoZWx0LCBuX2VsdCkge1xuICAgICAgICBpZiAobl9lbHQudGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5fZWx0ID0gdGhpcy5jcmVhdGUobl9lbHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGVsdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5yZXBsYWNlQ2hpbGQobl9lbHQsIGVsdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBlbHQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG4gICAgfVxuXG4gICAgLypcbiAgICAqIGRlc3Ryb3kgYSBEb20gZWxlbWVudFxuICAgICogQHBhcmFtIGVsdCBtaXhlZCBpZCBvZiB0aGUgZWxlbWVudCBvciBlbGVtZW50IGl0c2VsZlxuICAgICovXG4gICAgcmVtb3ZlKGVsdCkge1xuICAgICAgICBpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbHQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBlbXB0eSBEb20gZWxlbWVudCBmcm9tIGl0J3MgY2hpbGRyZW4uXG4gICAgKi9cbiAgICBlbXB0eShlbHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aGlsZShlbHQubGFzdENoaWxkKXtcbiAgICAgICAgICAgICAgICBlbHQucmVtb3ZlQ2hpbGQoZWx0Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBlbHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNyZWF0ZSBhIHRleHQgbm9kZVxuICAgICogQHBhcmFtIGNvbnRlbnQgc3RyaW5nIHRoZSBjb250ZW50IG9mIHRoZSB0ZXh0IG5vZGVcbiAgICAqL1xuICAgIHRleHROb2RlKGNvbnRlbnQpe1xuICAgICAgICByZXR1cm4gdGhpcy5kb2MuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjcmVhdGUgYW4gZWxlbWVudCBmcm9tIGEgdGVtcGxhdGUgb2JqZWN0XG4gICAgKiBAcGFyYW0ge29iamVjdH0gYyB0aGUgdGVtcGxhdGUgb2JqZWN0IHRvIGJlIGNyZWF0ZWRcbiAgICAqIEByZXR1cm4ge29iamVjdH0gRE9NRWxlbWVudFxuICAgICogICAgICAgPHByZT5cbiAgICAqICAgICAgIHtcbiAgICAqXHQgICAgICAgIFwidGFnXCI6XCJ0eXBlIG9mIGVsZW1lbnRcIixcbiAgICAqXHQgICAgICAgIFwiYXR0clwiOntcbiAgICAqXHRcdCAgICAgICAgXCJhdHRyaWJ1dGUxXCI6XCJ2YWx1ZSBvZiBhdHRyIDFcIixcbiAgICAqXHRcdCAgICAgICAgXCIuLi5cIjpcIi4uLlwiXG4gICAgKlx0ICAgICAgICB9LFxuICAgICpcdCAgICAgICAgXCJpbm5lclwiOlwidGhlIHRleHQgY29udGVudCBvZiB0aGUgbm9kZVwiXG4gICAgKiAgICAgICB9XG4gICAgKiAgICAgICA8L3ByZT5cbiAgICAqL1xuICAgIGNyZWF0ZShjKSB7XG4gICAgICAgIGxldCBlbHQgPSBudWxsO1xuICAgICAgICBpZiAoYy5pc1RleHROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsdCA9IHRoaXMudGV4dE5vZGUoYy5jb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGVsZW1lbnQgdGFnIGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZCB0byBjbG9uZSBpdFxuICAgICAgICAgICAgaWYgKCF0aGlzLmNyZWF0ZWQuaGFzKGMudGFnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZC5zZXQoYy50YWcsIHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoYy50YWcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsdCA9IHRoaXMuY3JlYXRlZC5nZXQoYy50YWcpLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjcmVhdGUgZWxlbWVudCBhdHRyaWJ1dGVcbiAgICAgICAgICAgIGlmKGMuYXR0ciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGMuYXR0cilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBlbGVtZW50IGV2ZW50IG9yIGNlcnRhaW4gc3BlY2lmaWMgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsdEV2ZW50LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmVsdEV2ZW50LmdldChrZXkpLCBjLmF0dHJba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWx0LmNoZWNrZWQgPSBjLmF0dHJba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWx0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLGMuYXR0cltrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWx0LnNldEF0dHJpYnV0ZShrZXksYy5hdHRyW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbiBzb21lIGNhc2UgeW91IHdhbnQgdG8gYmUgYWJsZSB0byBmb3JjZSBpbm5lckhUTUwgdmFsdWUsIFxuICAgICAgICAgICAgLy8gLyFcXCBUSElTIElTIEJBQUFBQUFEICFcbiAgICAgICAgICAgIGlmIChjLmlubmVyRm9yY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGVsdC5pbm5lckhUTUwgPSBjLmlubmVyRm9yY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFwcGVuZCBlbGVtZW50cyBpZiB0aGVyZSBhcmUgc29tZSBcbiAgICAgICAgICAgIGlmIChjLmFwcGVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYXAgaW4gYy5hcHBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWx0ID0gdGhpcy5hcHBlbmQoZWx0LCBjLmFwcGVuZFthcF0sIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY3JlYXRlIGlubmVyIHRleHQgY29udGVudCBub2RlIGFuZCBhcHBlbmQgaXRcbiAgICAgICAgICAgIGlmIChjLmlubmVyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGVsdC5hcHBlbmRDaGlsZCh0aGlzLnRleHROb2RlKGMuaW5uZXIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGMuaW5pdENhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGMuaW5pdENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYy5pbml0Q2FsbGJhY2soZWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbHQ7XG4gICAgfVxuXG4gICAgZWx0RnJvbVN0cmluZyhlbHQpIHtcbiAgICAgICAgbGV0IGVsID0gZWx0O1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBlbHQgPSBuZXcgUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoZWwpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpe1xuICAgICAgICAgICAgbGV0IHJhbmdlID0gdGhpcy5kb2MuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgIGxldCBkaXYgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGUodGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIikuaXRlbSgwKSk7XG4gICAgICAgICAgICBlbHQgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoZWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbHQ7XG4gICAgfVxuXG4gICAgcmV2ZXJzZUNyZWF0ZShlbHQpe1xuICAgICAgICBsZXQgbl9lbHQgPSB7fTtcblxuICAgICAgICBpZiAoZWx0Lm5vZGVOYW1lID09PSAnI3RleHQnKSB7XG4gICAgICAgICAgICBuX2VsdC5pc1RleHROb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5fZWx0LmNvbnRlbnQgPSBlbHQubm9kZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBuX2VsdC50YWcgPSBlbHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGVsdC5hdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWx0LmF0dHJpYnV0ZXMubGVuZ3RoID4wKSB7XG4gICAgICAgICAgICAgICAgICAgIG5fZWx0LmF0dHIgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGVsdC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuX2VsdC5hdHRyW2VsdC5hdHRyaWJ1dGVzLml0ZW0oaSkubmFtZV0gPSBlbHQuYXR0cmlidXRlcy5pdGVtKGkpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZWx0LmNoaWxkTm9kZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChlbHQuY2hpbGROb2Rlcy5sZW5ndGggPjApIHtcbiAgICAgICAgICAgICAgICAgICAgbl9lbHQuYXBwZW5kID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGVsdC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbl9lbHQuYXBwZW5kLnB1c2godGhpcy5yZXZlcnNlQ3JlYXRlKGVsdC5jaGlsZE5vZGVzLml0ZW0oaSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuX2VsdDtcbiAgICB9XG5cbiAgICByZXZlcnNlQ3JlYXRlRnJvbVN0cmluZyhlbHQpe1xuICAgICAgICByZXR1cm4gdGhpcy5yZXZlcnNlQ3JlYXRlKHRoaXMuZWx0RnJvbVN0cmluZyhlbHQpKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSnNpOyIsInZhciBKc2kgPSByZXF1aXJlKCcuL2Rpc3QvSnNpLmpzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEpzaTtcbiJdfQ==
