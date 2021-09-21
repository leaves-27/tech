// 订阅者
// 订阅管理器

/**
 * 在编译模板期间生成订阅者，并将其添加到订阅管理器，然后在数据更新后，订阅管理器的通知方法通知各个订阅者更新自己的视图数据
 * 订阅者：保存了生成时的上下文组件实例，订阅的属性及更新视图的方法.
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