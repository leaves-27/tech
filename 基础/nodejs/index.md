# nodejs 和js的区别
nodejs是v8引擎的封装。
客户端js: v8是其中之一。

# nvm和n及其npm的区别
简述nvm和n是node本身的版本管理工具，而npm是node的依赖包的管理工具。但nvm和n在安装和系统支持情况及全局模块的管理方面又有所不同。具体如下：
1.n：
  (1)安装：使用n前必须保证已经装了node。因为其是node的一个模块(即一个npm包)，可以使用npm来安装。
  (2)系统支持情况：对任何系统都支持。
  (3)全局模块的管理：对npm的全局模块毫无作为，因此有可能在切换了 node 版本后发生npm的全局模块执行出错的问题。
2.nvm：
  (1)安装：使用前无需安装node。因为其非node的一个模块(即非一个npm包)，不可以使用npm来安装，需要使用其他的类似(wget或homebrew)包管理工具来安装。
  (2)系统支持情况：nvm不支持Windows。
  (3)nvm 的全局模块存在于各自版本的沙箱中，切换版本后需要重新安装，不同版本间也不存在任何冲突。

# 参考文献：
n和nvm的区别：https://blog.csdn.net/qq_34710578/article/details/94598428
V8引擎：https://zhuanlan.zhihu.com/p/491369553
nodejs: https://www.runoob.com/nodejs/nodejs-event.html

# 重要概念
事件循环
模块系统

# 其他
1.二进制流的操作：
2.文件的操作：
3.web服务器