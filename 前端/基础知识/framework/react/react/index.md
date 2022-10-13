# hook和Redux的区别
hook解决状态和逻辑的复用，Redux解决状态的复用，但是其在多个组件间共享了状态，而hook并不共享状态。

# 副作用
副作用可以理解为在组件或页面渲染后需要执行的一些操作。常见的有：数据获取、添加监听器以及手动操作更改DOM。

# context
  解决的问题：当前组件的作用域内有一些数据需要共享。
  注：若仅仅是为了避免层层传递一些数据，请使用组合组件，尽量减少使用使用Context。

## 参考文献
https://zh-hans.reactjs.org/docs/hooks-intro.html
