# webpack学习参考文章
  https://zhuanlan.zhihu.com/p/20397902

  http://www.infoq.com/cn/articles/frontend-engineering-webpack

  http://www.infoq.com/cn/articles/react-and-webpack?utm_source=tuicool
  http://segmentfault.com/a/1190000003506497
  http://zhaoda.net/webpack-handbook/
  http://webpack.github.io/docs/list-of-loaders.html
  http://www.th7.cn/web/js/201507/109843.shtml
  https://segmentfault.com/a/1190000003506497
  http://blog.starkwang.com/2015/10/27/webpack/
  https://segmentfault.com/a/1190000003985802

## webpack的各大特色
  http://www.cnblogs.com/giveiris/p/5237080.html

# loader列表
  https://webpack.github.io/docs/list-of-loaders.html

# 使用webpack的理由
1.其同时支持目前存在的AMD、CommonJS模块以及挂在全局对象window上面的js的打包。//如何实现？
2.可以基于配置或者智能分析打包成多个文件，实现公共模块或者按需加载.//如何实现？
3.支持对静态资源CSS、图片等资源进行打包。//如何实现？
4.性能更快(开发时在内存中完成打包)，支持开发过程中的实时打包需求。//部署时的部署包如何来？
5.对sourcemap有很好的支持，易于调试。//怎么使用？
6.其使用的串联式模块加载器以及插件机制让其具有更好的灵活性和扩展性。

# 基本配置项解析
module.exports = {
  entry:[
    './app/main.js'
  ],
  output: {
    path: __dirname + '/assets/', //打包文件存放的绝对路径
    publicPath: "/assets/", //网站运行时的访问路径
    filename: 'bundle.js' //打包后的文件名
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['jsx?harmony']}
    ]
  }
};
# 使用webpack编译es6 + react的代码的配置：
  module: {
    loaders: [{
      query:{
        presets:["es2015","stage-0","react"],
        sourceMap:true
      }
    }]
  }

# CommonsChunkPlugin（详见：https://github.com/liangklfangl/commonsChunkPlugin_Config）
  作用：将公有代码单独打包
  
##情况一：多入口文件时，把引用多次的模块单独打包
##情况二：将公共业务模块与类库或框架分开打包
##情况三：将公用业务代码打包到类库包中。

# externals
作用：用来声明将哪些库不编译到输出的包中，而是通过其他方式引入(例如script的src方式)
# libraryTarget
作用：将输出的模块打包成那种标准的模块(可选的标准有amd、commonjs、umd等)
# library
作用：指定输出的模块require时的模块名
