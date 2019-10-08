# 内置插件：
1.CommonsChunkPlugin（详见：https://github.com/liangklfangl/commonsChunkPlugin_Config）
  作用：将公有代码单独打包
  
##情况一：多入口文件时，把引用多次的模块单独打包
##情况二：将公共业务模块与类库或框架分开打包
##情况三：将公用业务代码打包到类库包中。

2.OccurrenceOrderPlugin：根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小
3.HotModuleReplacementPlugin:
4.NoErrorsPlugin：用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误

详细参见：
  https://segmentfault.com/a/1190000005106383
  
# 第三方插件
1.webpack-merge:
2.extract-text-webpack-plugin:
3.webpack-dev-middleware:
4.webpack-bundle-analyzer:

