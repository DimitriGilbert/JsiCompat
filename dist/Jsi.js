(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Jsi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jsi = require("@dimitrigilbert/jsi/es6/jsi.js");

var Jsi_compat = function (_Jsi) {
	_inherits(Jsi_compat, _Jsi);

	function Jsi_compat() {
		_classCallCheck(this, Jsi_compat);

		return _possibleConstructorReturn(this, (Jsi_compat.__proto__ || Object.getPrototypeOf(Jsi_compat)).call(this, document));
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
			return _get(Jsi_compat.prototype.__proto__ || Object.getPrototypeOf(Jsi_compat.prototype), "append", this).call(this, parent, elt, true);
		}
	}, {
		key: "appendBefore",
		value: function appendBefore(elt, n_elt) {
			_get(Jsi_compat.prototype.__proto__ || Object.getPrototypeOf(Jsi_compat.prototype), "appendBefore", this).call(this, elt, n_elt);
			return elt;
		}
	}, {
		key: "appendAfter",
		value: function appendAfter(elt, n_elt) {
			_get(Jsi_compat.prototype.__proto__ || Object.getPrototypeOf(Jsi_compat.prototype), "appendAfter", this).call(this, elt, n_elt);
			return elt;
		}
	}, {
		key: "prepend",
		value: function prepend(parent, elt) {
			_get(Jsi_compat.prototype.__proto__ || Object.getPrototypeOf(Jsi_compat.prototype), "prepend", this).call(this, parent, elt);
			return parent;
		}
	}, {
		key: "replace",
		value: function replace(elt, n_elt) {
			_get(Jsi_compat.prototype.__proto__ || Object.getPrototypeOf(Jsi_compat.prototype), "replace", this).call(this, elt, n_elt);
			return n_elt.parentNode;
		}
	}, {
		key: "elt",
		value: function elt(c) {
			return _get(Jsi_compat.prototype.__proto__ || Object.getPrototypeOf(Jsi_compat.prototype), "create", this).call(this, c);
		}
	}]);

	return Jsi_compat;
}(Jsi);

module.exports = new Jsi_compat();

},{"@dimitrigilbert/jsi/es6/jsi.js":2}],2:[function(require,module,exports){
class Jsi{
    constructor(doc){
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
    id(id) {
        return this.doc.getElementById(id);
    }
    /**
    * document.querySelectorAll shorcut
    * @param {string} query the selector
    * @return {DOMNodeList}
    */
    query(query) {
        let res = this.doc.querySelectorAll(query);
        if (res.length > 0) {
            return res;
        }
        else{
            return null;
        }
    }

    /**
    * document.querySelector shorcut
    * @param {string} query the selector
    * @return {DOMElement}
    */
    queryFirst(query) {
        return this.doc.querySelector(query);
    }

    select(q){
        let res = this.id(q);
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
    append(parent, elt, getParent) {
        if (elt.tag !== undefined || elt.isTextNode !== undefined ) {
            elt = this.create(elt);
        }
        if (typeof parent != 'object') {
            parent = this.select(parent);
        }

        if (parent !== null && parent !== undefined) {
            let res = parent.appendChild(elt);
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
    appendBefore(elt, n_elt) {
        if (n_elt.tag !== undefined) {
            n_elt = this.create(n_elt);
        }
        if (typeof elt != 'object') {
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
    appendAfter(elt, n_elt) {
        if (n_elt.tag !== undefined) {
            n_elt = this.create(n_elt);
        }
        if (typeof elt != 'object') {
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
    prepend(parent, elt) {
        if (elt.tag !== undefined) {
            elt = this.create(elt);
        }
        if (typeof parent != 'object') {
            parent = this.select(parent);
        }

        if (parent !== null && parent !== undefined) {
            if (parent.childNodes.length === 0) {
                return this.append(parent, elt);
            }
            else{
                return parent.insertBefore(elt, parent.firstChild);
            }
        }

        throw parent + ' cannot be found';
    }

    /**
    * replace an element
    * @return object DOMElement
    */
    replace(elt, n_elt) {
        if (n_elt.tag !== undefined) {
            n_elt = this.create(n_elt);
        }
        if (typeof elt != 'object') {
            elt = this.select(elt);
        }

        if (elt !== null && elt !== undefined) {
            let parent = elt.parentNode;
            return parent.replaceChild(n_elt, elt);
        }

        throw elt + ' cannot be found';
    }

    /*
    * destroy a Dom element
    * @param elt mixed id of the element or element itself
    */
    remove(elt) {
        if (typeof elt != 'object') {
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
    empty(elt) {
        if (typeof elt != 'object') {
            elt = this.select(elt);
        }

        if (elt !== null && elt !== undefined) {
            while(elt.lastChild){
                elt.removeChild(elt.lastChild);
            }

            return elt;
        }
    }

    /**
    * create a text node
    * @param content string the content of the text node
    */
    textNode(content){
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
    create(c) {
        let elt = null;
        if (c.isTextNode !== undefined) {
            elt = this.textNode(c.content);
        }
        else{
            // check if the element tag has already been created to clone it
            if (!this.created.has(c.tag)) {
                this.created.set(c.tag, this.doc.createElement(c.tag));
            }
            elt = this.created.get(c.tag).cloneNode();
            
            // create element attribute
            if(c.attr !== undefined)
            {
                for(let key in c.attr)
                {
                    // handle element event or certain specific attribute
                    if (this.eltEvent.has(key)) {
                        elt.addEventListener(this.eltEvent.get(key), c.attr[key]);
                    }
                    else{
                        switch(key){
                        case 'checked':
                            elt.checked = c.attr[key];
                            break;
                        case 'className':
                            elt.setAttribute('class',c.attr[key]);
                            break;
                        default:
                            elt.setAttribute(key,c.attr[key]);
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
                for (let ap in c.append) {
                    elt = this.append(elt, c.append[ap], true);
                }
            }
            
            // create inner text content node and append it
            if (c.inner !== undefined){
                elt.appendChild(this.textNode(c.inner));
            }

            if (c.initCallback !== undefined && typeof c.initCallback === 'function') {
                c.initCallback(elt);
            }
        }

        return elt;
    }

    eltFromString(elt) {
        let el = elt;
        try{
            elt = new Range().createContextualFragment(el);
        }
        catch(e){
            let range = this.doc.createRange();
            let div = this.doc.createElement('div');
            range.selectNode(this.doc.getElementsByTagName("div").item(0));
            elt = range.createContextualFragment(el);
        }
        return elt;
    }

    reverseCreate(elt){
        let n_elt = {};

        if (elt.nodeName === '#text') {
            n_elt.isTextNode = true;
            n_elt.content = elt.nodeValue;
        }
        else{
            n_elt.tag = elt.nodeName.toLowerCase();
            
            if (elt.attributes !== undefined) {
                if (elt.attributes.length >0) {
                    n_elt.attr = {};
                    for (let i = elt.attributes.length - 1; i >= 0; i--) {
                        n_elt.attr[elt.attributes.item(i).name] = elt.attributes.item(i).value;
                    }
                }
            }
            
            if (elt.childNodes !== undefined) {
                if (elt.childNodes.length >0) {
                    n_elt.append = [];
                    for (let i = 0; i <= elt.childNodes.length - 1; i++) {
                        n_elt.append.push(this.reverseCreate(elt.childNodes.item(i)));
                    }
                }
            }
        }

        return n_elt;
    }

    reverseCreateFromString(elt){
        return this.reverseCreate(this.eltFromString(elt));
    }
}

module.exports = Jsi;
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvanNpLmpzIiwibm9kZV9tb2R1bGVzL0BkaW1pdHJpZ2lsYmVydC9qc2kvZXM2L2pzaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBLElBQUksTUFBTSxRQUFRLGdDQUFSLENBQVY7O0lBRU0sVTs7O0FBQ0wsdUJBQWE7QUFBQTs7QUFBQSxpSEFDTixRQURNO0FBRVo7Ozs7MEJBRU8sRSxFQUFHO0FBQ1YsVUFBTyxLQUFLLEVBQUwsQ0FBUSxFQUFSLENBQVA7QUFDQTs7OzBCQUVPLEssRUFBTTtBQUNiLFVBQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFQO0FBQ0E7OzsrQkFFWSxLLEVBQU07QUFDbEIsVUFBTyxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBUDtBQUNBOzs7eUJBRU0sTSxFQUFRLEcsRUFBSTtBQUNsQix5SEFBb0IsTUFBcEIsRUFBNEIsR0FBNUIsRUFBaUMsSUFBakM7QUFDQTs7OytCQUVZLEcsRUFBSyxLLEVBQU87QUFDeEIsd0hBQW1CLEdBQW5CLEVBQXdCLEtBQXhCO0FBQ0EsVUFBTyxHQUFQO0FBQ0E7Ozs4QkFFVyxHLEVBQUssSyxFQUFPO0FBQ3ZCLHVIQUFrQixHQUFsQixFQUF1QixLQUF2QjtBQUNBLFVBQU8sR0FBUDtBQUNBOzs7MEJBRU8sTSxFQUFRLEcsRUFBSztBQUNwQixtSEFBYyxNQUFkLEVBQXNCLEdBQXRCO0FBQ0EsVUFBTyxNQUFQO0FBQ0E7OzswQkFFTyxHLEVBQUssSyxFQUFPO0FBQ25CLG1IQUFjLEdBQWQsRUFBbUIsS0FBbkI7QUFDQSxVQUFPLE1BQU0sVUFBYjtBQUNBOzs7c0JBRUcsQyxFQUFFO0FBQ0wseUhBQW9CLENBQXBCO0FBQ0E7Ozs7RUEzQ3VCLEc7O0FBOEN6QixPQUFPLE9BQVAsR0FBaUIsSUFBSSxVQUFKLEVBQWpCOzs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBKc2kgPSByZXF1aXJlKFwiQGRpbWl0cmlnaWxiZXJ0L2pzaS9lczYvanNpLmpzXCIpO1xuXG5jbGFzcyBKc2lfY29tcGF0IGV4dGVuZHMgSnNpe1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKGRvY3VtZW50KTtcblx0fVxuXG5cdGRvY2VsaWQoaWQpe1xuXHRcdHJldHVybiB0aGlzLmlkKGlkKTtcblx0fVxuXG5cdGRvY2VsZXEocXVlcnkpe1xuXHRcdHJldHVybiB0aGlzLnF1ZXJ5KHF1ZXJ5KTtcblx0fVxuXG5cdGRvY2VsZXFGaXJzdChxdWVyeSl7XG5cdFx0cmV0dXJuIHRoaXMucXVlcnlGaXJzdChxdWVyeSk7XG5cdH1cblxuXHRhcHBlbmQocGFyZW50LCBlbHQpe1xuXHRcdHJldHVybiBzdXBlci5hcHBlbmQocGFyZW50LCBlbHQsIHRydWUpO1xuXHR9XG5cblx0YXBwZW5kQmVmb3JlKGVsdCwgbl9lbHQpIHtcblx0XHRzdXBlci5hcHBlbmRCZWZvcmUoZWx0LCBuX2VsdCk7XG5cdFx0cmV0dXJuIGVsdDtcblx0fVxuXG5cdGFwcGVuZEFmdGVyKGVsdCwgbl9lbHQpIHtcblx0XHRzdXBlci5hcHBlbmRBZnRlcihlbHQsIG5fZWx0KTtcblx0XHRyZXR1cm4gZWx0O1xuXHR9XG5cblx0cHJlcGVuZChwYXJlbnQsIGVsdCkge1xuXHRcdHN1cGVyLnByZXBlbmQocGFyZW50LCBlbHQpO1xuXHRcdHJldHVybiBwYXJlbnQ7XG5cdH1cblxuXHRyZXBsYWNlKGVsdCwgbl9lbHQpIHtcblx0XHRzdXBlci5yZXBsYWNlKGVsdCwgbl9lbHQpO1xuXHRcdHJldHVybiBuX2VsdC5wYXJlbnROb2RlO1xuXHR9XG5cblx0ZWx0KGMpe1xuXHRcdHJldHVybiBzdXBlci5jcmVhdGUoYyk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgSnNpX2NvbXBhdCgpOyIsImNsYXNzIEpzaXtcbiAgICBjb25zdHJ1Y3Rvcihkb2Mpe1xuICAgICAgICBpZiAoZG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRvYyA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9jID0gZG9jO1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5lbHRFdmVudCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uY2xpY2snLCAnY2xpY2snKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uY2hhbmdlJywgJ2NoYW5nZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25mb2N1cycsICdmb2N1cycpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25ibHVyJywgJ2JsdXInKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ua2V5dXAnLCAna2V5dXAnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ua2V5cHJlc3MnLCAna2V5cHJlc3MnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uc3VibWl0JywgJ3N1Ym1pdCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25hbmltYXRpb25lbmQnLCAnYW5pbWF0aW9uZW5kJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRyYW5zaXRpb25lbmQnLCAndHJhbnNpdGlvbmVuZCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25jb3B5JywgJ2NvcHknKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uY3V0JywgJ2N1dCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25kYmxjbGljaycsICdkYmxjbGljaycpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25pbnZhbGlkJywgJ2ludmFsaWQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2Vkb3duJywgJ21vdXNlZG93bicpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZXVwJywgJ21vdXNldXAnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2VlbnRlcicsICdtb3VzZWVudGVyJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlbGVhdmUnLCAnbW91c2VsZWF2ZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZW1vdmUnLCAnbW91c2Vtb3ZlJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlb3V0JywgJ21vdXNlb3V0Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlb3ZlcicsICdtb3VzZW92ZXInKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ucGFzdGUnLCAncGFzdGUnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ucmVzaXplJywgJ3Jlc2l6ZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25zY3JvbGwnLCAnc2Nyb2xsJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnNlbGVjdCcsICdzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29udG91Y2hzdGFydCcsICd0b3VjaHN0YXJ0Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRvdWNobW92ZScsICd0b3VjaG1vdmUnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29udG91Y2hlbmQnLCAndG91Y2hlbmQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZycsICdkcmFnJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdlbmQnLCAnZHJhZ2VuZCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnZW50ZXInLCAnZHJhZ2VudGVyJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdsZWF2ZScsICdkcmFnbGVhdmUnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZ292ZXInLCAnZHJhZ292ZXInKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZ3N0YXJ0JywgJ2RyYWdzdGFydCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25kcm9wJywgJ2Ryb3AnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uaW5wdXQnLCAnaW5wdXQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ubG9hZHN0YXJ0JywgJ2xvYWRzdGFydCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25wcm9ncmVzcycsICdwcm9ncmVzcycpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25zdXNwZW5kJywgJ3N1c3BlbmQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uYWJvcnQnLCAnYWJvcnQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZXJyb3InLCAnZXJyb3InKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZW1wdGllZCcsICdlbXB0aWVkJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnN0YWxsZWQnLCAnc3RhbGxlZCcpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25sb2FkZWRtZXRhZGF0YScsICdsb2FkZWRtZXRhZGF0YScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25sb2FkZWRkYXRhJywgJ2xvYWRlZGRhdGEnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uY2FucGxheScsICdjYW5wbGF5Jyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNhbnBsYXl0aHJvdWdoJywgJ2NhbnBsYXl0aHJvdWdoJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnBsYXlpbmcnLCAncGxheWluZycpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb253YWl0aW5nJywgJ3dhaXRpbmcnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uc2Vla2luZycsICdzZWVraW5nJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnNlZWtlZCcsICdzZWVrZWQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZW5kZWQnLCAnZW5kZWQnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29uZHVyYXRpb25jaGFuZ2UnLCAnZHVyYXRpb25jaGFuZ2UnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29udGltZXVwZGF0ZScsICd0aW1ldXBkYXRlJyk7XG4gICAgICAgIHRoaXMuZWx0RXZlbnQuc2V0KCdvbnBsYXknLCAncGxheScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25wYXVzZScsICdwYXVzZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb25yYXRlY2hhbmdlJywgJ3JhdGVjaGFuZ2UnKTtcbiAgICAgICAgdGhpcy5lbHRFdmVudC5zZXQoJ29ucmVzaXplJywgJ3Jlc2l6ZScpO1xuICAgICAgICB0aGlzLmVsdEV2ZW50LnNldCgnb252b2x1bWVjaGFuZ2UnLCAndm9sdW1lY2hhbmdlJyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkIHNob3JjdXRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCB0aGUgZWxlbWVudCBpZFxuICAgICogQHJldHVybiB7b2JqZWN0fSBET01FbGVtZW50XG4gICAgKi9cbiAgICBpZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgc2hvcmN1dFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBzZWxlY3RvclxuICAgICogQHJldHVybiB7RE9NTm9kZUxpc3R9XG4gICAgKi9cbiAgICBxdWVyeShxdWVyeSkge1xuICAgICAgICBsZXQgcmVzID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XG4gICAgICAgIGlmIChyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Igc2hvcmN1dFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBzZWxlY3RvclxuICAgICogQHJldHVybiB7RE9NRWxlbWVudH1cbiAgICAqL1xuICAgIHF1ZXJ5Rmlyc3QocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgIH1cblxuICAgIHNlbGVjdChxKXtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuaWQocSk7XG4gICAgICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMucXVlcnlGaXJzdChxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYXBwZW5kIGFuIGVsZW1lbnQgdG8gYSBwYXJlbnRcbiAgICAqIEBwYXJhbSB7RE9NRWxlbWVudHxzdHJpbmd9IHBhcmVudCB0aGUgZWxlbWVudCB0byBhcHBlbmQgdG8gb3IgaXRzIGlkXG4gICAgKiBAcGFyYW0ge0RPTUVsZW1lbnR8b2JqZWN0fSBlbHQgb3IgdGVtcGxhdGUgb2JqZWN0IHRvIGFwcGVuZCB0byBwYXJlbnRcbiAgICAqIEByZXR1cm4ge0RPTUVsZW1lbnR9IG9iamVjdFxuICAgICovXG4gICAgYXBwZW5kKHBhcmVudCwgZWx0LCBnZXRQYXJlbnQpIHtcbiAgICAgICAgaWYgKGVsdC50YWcgIT09IHVuZGVmaW5lZCB8fCBlbHQuaXNUZXh0Tm9kZSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgZWx0ID0gdGhpcy5jcmVhdGUoZWx0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5zZWxlY3QocGFyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZWx0KTtcbiAgICAgICAgICAgIGlmIChnZXRQYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcyA9IHBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgcGFyZW50ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYXBwZW5kIGFuIGVsZW1lbnQgYmVmb3JlIGFub3RoZXJcbiAgICAqIEBwYXJhbSBlbHQgbWl4ZWQgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIG9yIGl0cyBpZFxuICAgICogQHBhcmFtIG5fZWx0IG1peGVkIERPTUVsZW1lbnQgb3IgdGVtcGxhdGUgb2JqZWN0IHRvIGFwcGVuZCB0byBwYXJlbnRcbiAgICAqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcbiAgICAqL1xuICAgIGFwcGVuZEJlZm9yZShlbHQsIG5fZWx0KSB7XG4gICAgICAgIGlmIChuX2VsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbl9lbHQgPSB0aGlzLmNyZWF0ZShuX2VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZWx0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5fZWx0LCBlbHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZWx0ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYXBwZW5kIGFuIGVsZW1lbnQgYWZ0ZXIgYW5vdGhlclxuICAgICogQHBhcmFtIGVsdCBtaXhlZCB0aGUgZWxlbWVudCB0byBhcHBlbmQgdG8gb3IgaXRzIGlkXG4gICAgKiBAcGFyYW0gbl9lbHQgbWl4ZWQgRE9NRWxlbWVudCBvciB0ZW1wbGF0ZSBvYmplY3QgdG8gYXBwZW5kIHRvIHBhcmVudFxuICAgICogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuICAgICovXG4gICAgYXBwZW5kQWZ0ZXIoZWx0LCBuX2VsdCkge1xuICAgICAgICBpZiAobl9lbHQudGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5fZWx0ID0gdGhpcy5jcmVhdGUobl9lbHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuX2VsdCwgZWx0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGVsdCArICcgY2Fubm90IGJlIGZvdW5kJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGFwcGVuZCBhbiBlbGVtZW50IHRvIGEgcGFyZW50IGFzIGl0cyBmaXJzdCBjaGlsZFxuICAgICogQHBhcmFtIHBhcmVudCBtaXhlZCB0aGUgZWxlbWVudCB0byBhcHBlbmQgdG8gb3IgaXRzIGlkXG4gICAgKiBAcGFyYW0gZWx0IG1peGVkIERPTUVsZW1lbnQgb3IgdGVtcGxhdGUgb2JqZWN0IHRvIGFwcGVuZCB0byBwYXJlbnRcbiAgICAqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcbiAgICAqL1xuICAgIHByZXBlbmQocGFyZW50LCBlbHQpIHtcbiAgICAgICAgaWYgKGVsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWx0ID0gdGhpcy5jcmVhdGUoZWx0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5zZWxlY3QocGFyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBlbmQocGFyZW50LCBlbHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShlbHQsIHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IHBhcmVudCArICcgY2Fubm90IGJlIGZvdW5kJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlcGxhY2UgYW4gZWxlbWVudFxuICAgICogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuICAgICovXG4gICAgcmVwbGFjZShlbHQsIG5fZWx0KSB7XG4gICAgICAgIGlmIChuX2VsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbl9lbHQgPSB0aGlzLmNyZWF0ZShuX2VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gZWx0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LnJlcGxhY2VDaGlsZChuX2VsdCwgZWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGVsdCArICcgY2Fubm90IGJlIGZvdW5kJztcbiAgICB9XG5cbiAgICAvKlxuICAgICogZGVzdHJveSBhIERvbSBlbGVtZW50XG4gICAgKiBAcGFyYW0gZWx0IG1peGVkIGlkIG9mIHRoZSBlbGVtZW50IG9yIGVsZW1lbnQgaXRzZWxmXG4gICAgKi9cbiAgICByZW1vdmUoZWx0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsdCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGVtcHR5IERvbSBlbGVtZW50IGZyb20gaXQncyBjaGlsZHJlbi5cbiAgICAqL1xuICAgIGVtcHR5KGVsdCkge1xuICAgICAgICBpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdoaWxlKGVsdC5sYXN0Q2hpbGQpe1xuICAgICAgICAgICAgICAgIGVsdC5yZW1vdmVDaGlsZChlbHQubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVsdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogY3JlYXRlIGEgdGV4dCBub2RlXG4gICAgKiBAcGFyYW0gY29udGVudCBzdHJpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIHRleHQgbm9kZVxuICAgICovXG4gICAgdGV4dE5vZGUoY29udGVudCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNyZWF0ZSBhbiBlbGVtZW50IGZyb20gYSB0ZW1wbGF0ZSBvYmplY3RcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBjIHRoZSB0ZW1wbGF0ZSBvYmplY3QgdG8gYmUgY3JlYXRlZFxuICAgICogQHJldHVybiB7b2JqZWN0fSBET01FbGVtZW50XG4gICAgKiAgICAgICA8cHJlPlxuICAgICogICAgICAge1xuICAgICpcdCAgICAgICAgXCJ0YWdcIjpcInR5cGUgb2YgZWxlbWVudFwiLFxuICAgICpcdCAgICAgICAgXCJhdHRyXCI6e1xuICAgICpcdFx0ICAgICAgICBcImF0dHJpYnV0ZTFcIjpcInZhbHVlIG9mIGF0dHIgMVwiLFxuICAgICpcdFx0ICAgICAgICBcIi4uLlwiOlwiLi4uXCJcbiAgICAqXHQgICAgICAgIH0sXG4gICAgKlx0ICAgICAgICBcImlubmVyXCI6XCJ0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBub2RlXCJcbiAgICAqICAgICAgIH1cbiAgICAqICAgICAgIDwvcHJlPlxuICAgICovXG4gICAgY3JlYXRlKGMpIHtcbiAgICAgICAgbGV0IGVsdCA9IG51bGw7XG4gICAgICAgIGlmIChjLmlzVGV4dE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWx0ID0gdGhpcy50ZXh0Tm9kZShjLmNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgZWxlbWVudCB0YWcgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkIHRvIGNsb25lIGl0XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3JlYXRlZC5oYXMoYy50YWcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkLnNldChjLnRhZywgdGhpcy5kb2MuY3JlYXRlRWxlbWVudChjLnRhZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWx0ID0gdGhpcy5jcmVhdGVkLmdldChjLnRhZykuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50IGF0dHJpYnV0ZVxuICAgICAgICAgICAgaWYoYy5hdHRyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gYy5hdHRyKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVsZW1lbnQgZXZlbnQgb3IgY2VydGFpbiBzcGVjaWZpYyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWx0RXZlbnQuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsdC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZWx0RXZlbnQuZ2V0KGtleSksIGMuYXR0cltrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGtleSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2VkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHQuY2hlY2tlZCA9IGMuYXR0cltrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xhc3NOYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHQuc2V0QXR0cmlidXRlKCdjbGFzcycsYy5hdHRyW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHQuc2V0QXR0cmlidXRlKGtleSxjLmF0dHJba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGluIHNvbWUgY2FzZSB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIGZvcmNlIGlubmVySFRNTCB2YWx1ZSwgXG4gICAgICAgICAgICAvLyAvIVxcIFRISVMgSVMgQkFBQUFBQUQgIVxuICAgICAgICAgICAgaWYgKGMuaW5uZXJGb3JjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZWx0LmlubmVySFRNTCA9IGMuaW5uZXJGb3JjZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYXBwZW5kIGVsZW1lbnRzIGlmIHRoZXJlIGFyZSBzb21lIFxuICAgICAgICAgICAgaWYgKGMuYXBwZW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhcCBpbiBjLmFwcGVuZCkge1xuICAgICAgICAgICAgICAgICAgICBlbHQgPSB0aGlzLmFwcGVuZChlbHQsIGMuYXBwZW5kW2FwXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjcmVhdGUgaW5uZXIgdGV4dCBjb250ZW50IG5vZGUgYW5kIGFwcGVuZCBpdFxuICAgICAgICAgICAgaWYgKGMuaW5uZXIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgZWx0LmFwcGVuZENoaWxkKHRoaXMudGV4dE5vZGUoYy5pbm5lcikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYy5pbml0Q2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYy5pbml0Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjLmluaXRDYWxsYmFjayhlbHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsdDtcbiAgICB9XG5cbiAgICBlbHRGcm9tU3RyaW5nKGVsdCkge1xuICAgICAgICBsZXQgZWwgPSBlbHQ7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGVsdCA9IG5ldyBSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSl7XG4gICAgICAgICAgICBsZXQgcmFuZ2UgPSB0aGlzLmRvYy5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgbGV0IGRpdiA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZSh0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKS5pdGVtKDApKTtcbiAgICAgICAgICAgIGVsdCA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsdDtcbiAgICB9XG5cbiAgICByZXZlcnNlQ3JlYXRlKGVsdCl7XG4gICAgICAgIGxldCBuX2VsdCA9IHt9O1xuXG4gICAgICAgIGlmIChlbHQubm9kZU5hbWUgPT09ICcjdGV4dCcpIHtcbiAgICAgICAgICAgIG5fZWx0LmlzVGV4dE5vZGUgPSB0cnVlO1xuICAgICAgICAgICAgbl9lbHQuY29udGVudCA9IGVsdC5ub2RlVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIG5fZWx0LnRhZyA9IGVsdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZWx0LmF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChlbHQuYXR0cmlidXRlcy5sZW5ndGggPjApIHtcbiAgICAgICAgICAgICAgICAgICAgbl9lbHQuYXR0ciA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gZWx0LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5fZWx0LmF0dHJbZWx0LmF0dHJpYnV0ZXMuaXRlbShpKS5uYW1lXSA9IGVsdC5hdHRyaWJ1dGVzLml0ZW0oaSkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChlbHQuY2hpbGROb2RlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsdC5jaGlsZE5vZGVzLmxlbmd0aCA+MCkge1xuICAgICAgICAgICAgICAgICAgICBuX2VsdC5hcHBlbmQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZWx0LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuX2VsdC5hcHBlbmQucHVzaCh0aGlzLnJldmVyc2VDcmVhdGUoZWx0LmNoaWxkTm9kZXMuaXRlbShpKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5fZWx0O1xuICAgIH1cblxuICAgIHJldmVyc2VDcmVhdGVGcm9tU3RyaW5nKGVsdCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJldmVyc2VDcmVhdGUodGhpcy5lbHRGcm9tU3RyaW5nKGVsdCkpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKc2k7Il19
