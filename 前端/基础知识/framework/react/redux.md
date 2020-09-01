# 参考文章
http://camsong.github.io/redux-in-chinese/docs/introduction/Ecosystem.html
http://blog.kazaff.me/2015/10/08/[%E8%AF%91]%E5%85%A8%E6%A0%88Redux%E5%AE%9E%E6%88%98/?utm_source=tuicool&utm_medium=referral

应用redux的文章
http://www.jianshu.com/p/14933fd9c312
http://www.tuicool.com/articles/7FZreu2

# Redux产生的动机
通过限制更新发生的时间和方式，Redux试图让state的变化变得可预测

# Redux 三大基本原则
1.单一数据源
2.State 是只读的
3.使用纯函数来执行修改

# action及action创建函数
  action用来描述发生了什么事情的动作
  action创建函数用来标识发生某件事情

  在实际应用中，应先仔细考虑以下两点
  1.该应用会产生哪些动作类型
  2.该动作可能的值。//注意其与state的区别，state是保存动作产生的所有可能值的引用

  action的拆分：

# reducer
  接受旧state结构对象,和action.返回新的state.即根据原来的state和action生成新的state结构对象.

  在实际应用考虑，应先仔细考虑考虑state可能的结构

  reducer的拆分：

# store ：
  store来源：使用redux的createStore根据reducer生成的state结构对象生成。
  即store是用来将reducer和action链接起来。

  使用dispatch来发起action和然后利用store中匹配到的action对dispatch发起的action进行响应。

  store有三个常用的方法:
  getState:获取state结构对象
  subscribe:监听state的改变。
  dispatch:发起action
  
# 应用流程

1.容器和数据挂钩；
2.容器集合组件，并把action传给组件
3.数据层注入reduces，


# 剩余问题
1.网络请求和一些业务逻辑是否应该在组件的render里面处理


