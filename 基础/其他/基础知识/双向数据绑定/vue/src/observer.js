import Dep from './dep'
import Deps from './deps';

var tempKey = '';
export function defineReactive(data, key, val) {
  tempKey = tempKey ? `${tempKey}.${key}` : key;
  observe(val); 
  var dep = new Dep();
  Deps[tempKey] = dep;
  tempKey = '';
   
  Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function(){
        return val;
      },
      set: function(newVal) {
        if (val === newVal) {
          return;
        }
        val = newVal;
        console.log('属性' + key + '已经被监听了，现在值为：“' + newVal.toString() + '”');
        dep.notify(); 
      }
  });
}
 
export function observe(data) {
  if (!data || typeof data !== 'object') {
      return;
  }
  Object.keys(data).forEach(function(key) {
      defineReactive(data, key, data[key]);
  });
};