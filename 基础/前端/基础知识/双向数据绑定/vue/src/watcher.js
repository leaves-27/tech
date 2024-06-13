/**
 * 在编译模板期间生成观察者，并将观察者添加到目标对象的观察列表，然后在目标对象变化后，目标对象调用自己的通知方法通知各个观察者，各个观察者然后调用自己的更新方法视图数据。
 * 观察者：自己的值、更新方法
*/
function Watcher(vm, exp, cb) {
  this.cb = cb; // 回调函数 ---
  this.vm = vm; // 当前组件实例
  this.exp = exp; // 当前属性
  this.value = this.get();  // 当前的值
}
 
Watcher.prototype = {
  update: function(){ // 更新当前值
    this.run();
  },
  run: function() {
    var value = this.vm.data[this.exp];
    var oldVal = this.value;
    if(value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  },
  get: function() {
      Dep.target = this;  // 缓存自己
      var value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
      Dep.target = null;  // 释放自己
      return value;
  }
};