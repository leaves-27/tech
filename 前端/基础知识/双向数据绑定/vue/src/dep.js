// 订阅管理器

// 订阅者
// 主题

// 订阅
// 取消订阅
function Dep () {
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub) {
      this.subs.push(sub);
    },
    notify: function() {
      this.subs.forEach(function(sub) {
          sub.update();
      });
    }
};