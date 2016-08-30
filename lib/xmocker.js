import util from './util';

export default class XMocker {
  constructor(options) {
    if (util.isObject(options)) {
      if (util.isHTMLElement(options.el)) {
        this.root = el;
      }
      if (util.isString(options.el)) {
        this.root = document.querySelector(el);
      }
      this.data = options.data;
    }

    this.root = this.root || document.body;
    this.data = this.data || this.root.getAttribute('x-data');

    if (this.root.hasAttribute('x-mock')) {
      __traversal.call(this);
    }
  }
}
