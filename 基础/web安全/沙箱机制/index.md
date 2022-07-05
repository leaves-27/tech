# 作用：
  解决不受信任的程序或代码对已有系统的安全产生影响的问题。具体来说就是防止第三方应用程序对自身代码的稳定运行造成影响。

# 原理
  其解决办法是为待执行的程序创建一个独立的执行环境，内部程序的执行不会影响到外部程序的运行。

# 具体方案：
  1.iframe: 
    (1)优点：浏览器天然提供，无需做其他什么事情。
    (2)缺点：主页面跟子页面的共享状态受到了束缚。

  2.快照沙箱:
    (1)获得纯粹window对象，然后使纯粹window对象变为应用window对象。
    (2)获得应用window对象，然后使应用window对象变为纯粹window对象。

  3.代理沙箱:
    使用Proxy对象对一个空对象进行代理。然后使用其get、set对象对代理对象进行监控。

# 参考文献
  简单沙箱实现：https://learnku.com/articles/59591
  简单沙箱的实现补充：https://zhuanlan.zhihu.com/p/428039764
  iframe: https://github.com/xitu/gold-miner/blob/master/article/2020/sandboxed-iframes.md
