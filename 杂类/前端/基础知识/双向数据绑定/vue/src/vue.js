
import { observe } from './observe';
import Compile from './compile';

function SelfVue (options) {
  var _self = this;
  this.data = options.data();
  this.methods = options.methods;

  Object.keys(this.data).forEach(function(key) {
    _self.proxyKeys(key);
  });

  observe(this.data);
  new Compile(options.el, this);
  options.mounted.call(this); // 所有事情处理好后执行mounted函数
}

SelfVue.prototype = {
  proxyKeys: function (key) {
    var self = this;
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function proxyGetter() {
        return self.data[key];
      },
      set: function proxySetter(newVal) {
        self.data[key] = newVal;
      }
    });
  }
}