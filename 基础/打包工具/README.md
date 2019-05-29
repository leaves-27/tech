1.webpack的打包原理:
  将一切资源看成模块，通过对给定入口的依赖分析、编译和loader、插件的处理来实现对模块的打包。
  
2.webpack自定义loader:
  loader是一个暴露一个函数的node模块。返回值可以通过return或this.callback。
  
3.webpack自定义插件:
  自定义一个带apply属性的js函数对象。webpack在执行时会调用这个apply持有的方法。其会被传入一个compiler参数，它拥有Webpack环境所有的的配置信息。然后调用它的plugin方法,其第二个参数是个回调函数，其会注入一个compilation对象和callback方法供使用。