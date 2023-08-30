// 发布订阅模式： 订阅者、发布者和订阅管理器
// 观察者模式： 观察者和目标对象

function Dep () { // 目标对象
    this.subs = []; // 观察者列表
}
Dep.prototype = {
    addSub: function(sub) { // 添加观察者
      this.subs.push(sub);
    },
    notify: function() { // 通知所有观察者
      this.subs.forEach(function(sub) {
          sub.update();
      });
    }
};