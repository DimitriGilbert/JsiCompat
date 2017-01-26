var Jsi = require("@dimitrigilbert/jsi");

class JsiCompat extends Jsi{
	constructor(doc){
		super(doc);
	}

	docelid(id){
		return this.id(id);
	}

	doceleq(query){
		return this.query(query);
	}

	doceleqFirst(query){
		return this.queryFirst(query);
	}

	append(parent, elt){
		return super.append(parent, elt, true);
	}

	appendBefore(elt, n_elt) {
		super.appendBefore(elt, n_elt);
		return elt;
	}

	appendAfter(elt, n_elt) {
		super.appendAfter(elt, n_elt);
		return elt;
	}

	prepend(parent, elt) {
		super.prepend(parent, elt);
		return parent;
	}

	replace(elt, n_elt) {
		super.replace(elt, n_elt);
		return n_elt.parentNode;
	}

	elt(c){
		return super.create(c);
	}
}

module.exports = JsiCompat;