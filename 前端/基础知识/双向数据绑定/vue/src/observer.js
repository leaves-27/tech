// 数据监听器: 
//    每个属性值都有一个订阅管理器将订阅者添加到订阅管理器。有N多订阅管理器
//    
// 编译器: 
//   如何将在编译阶段生成的订阅者添加到对应的订阅管理器.根据对应的key

// 订阅管理器
// 订阅者

// 
// 

import Dep from './dep'
import Deps from './deps';
/**
 * @description - 监听数据变化，并给相应数据生成相应的订阅管理器。在数据发生变化时，让数据对应订阅管理器通知其相关订阅者更新数据。
 * @param { Object } data - 对象
 * @param { String } key - 对象属性
 * @param { String } val - 对象值
*/
var tempKey = '';
export function defineReactive(data, key, val) {
  tempKey = tempKey ? `${tempKey}.${key}` : key;
  observe(val); // 递归遍历所有子属性的值, 直到其不为对象类型
  // 生成对应的订阅管理器
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
        dep.notify(); // 如果数据变化，通知所有订阅者
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