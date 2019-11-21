# 优化方法的入手角度：
1.拆分:
2.抽离:
  即将一些不常变更的静态依赖从构建逻辑中抽离出去(例如:常见工具库及框架库)。
3.多核:
4.缓存:

## 抽离使用方案:
1.使用webpack-dll-plugin:即将不常变更的静态依赖单独打包，然后在业务打包中直接引用打好的包依赖。
2.Externals:即将不常变更的静态依赖使用CDN的方式去引用，而不用在打包流程中去构建。

## 拆分:

# 官方建议：
## 和具体环境无关(开发/测试/线上)
1.更新构建工具及其依赖库版本(较新的版本能够建立更高效的模块树以及提高解析速度)。具体涉及到的更新项:
  (1)更新webpack到4.x。
  (2)更新nodejs到最新版本。
  (3)更新包管理器到最新版本(一般为npm或yarn)。
  
2.loader和plugin:
  (1)减少loader和plugin的使用(每个额外的 loader/plugin 都有其启动时间)。
  (2)仅对必要的模块使用loader(避免文件检索时间)。具体做法：通过loader的配置项include和exclude来实现。
  
3.使用动态链接库: 使用 DllPlugin 将更改不频繁的代码进行单独编译。这将改善引用程序的编译速度.
4.减少编译的整体大小: 
  (1)使用更少/更小的库。-------------------------- 使用webpack分析工具进行分析。
  (2)移除不使用的代码。--------------------------- 删除注释。
  (3)只编译你当前正在开发部分的代码 ---------------- 业务代码拆分。
  (4)在多页面应用程序中以 async 模式使用 CommonsChunksPlugin。
  
5.使用多进程: 将非常消耗资源的loaders转存到worker pool中。
6.对解析配置进行优化(提高解析速度)。
  (1)减少resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles 中类目数量(他们会增加文件系统调用的次数).
  (2)如果你不使用symlinks（例如 npm link 或者 yarn link），可以设置 resolve.symlinks: false.
  (3)如果你使用自定义resolve plugin 规则，并且没有指定 context 上下文，可以设置 resolve.cacheWithContext: false.
  
7.持久化缓存。----------------主要针对二次编译——————------
## 仅对开发环境
1.在内存中编译:即，使编译仅在内存中进行，并不写入磁盘来提高速度。
2.devtool:调试代码。推荐使用：cheap-module-eval-source-map。
3.避免在生产环境下才会用到的工具。
 (1)UglifyJsPlugin
 (2)ExtractTextPlugin
 (3)[hash]/[chunkhash]
 (4)AggressiveSplittingPlugin
 (5)AggressiveMergingPlugin
 (6)ModuleConcatenationPlugin
 
4.最小化入口chunk。即在代码块生成到文件系统前减少入口代码块的体积，即使用CommonsChunkPlugin插件。
5.增量编译(即仅对修改进行编译)。具体做法：使用webpack的监听模式。---------主要针对二次编译——————--

## 线上环境：
1.去掉Source maps.
2.多个编译时，使用parallel-webpack和cache-loader。

# 其他:
1.选用更高效的loader/plugin:
(1)使用fast-sass-loader代替sass-loader(fast-sass-loader可以并行地处理sass,在提交构建之前会先组织好代码，速度也会快一些)
(2)代码压缩用ParallelUglifyPlugin代替自带的UglifyJsPlugin插件(自带的JS压缩插件是单线程执行的,而ParallelUglifyPlugin则会开启多个子进程)
2.避免在生产环境下的工具:


注：
https://mp.weixin.qq.com/s/nTOGVMsXi7rSyknyn8shtw
https://www.webpackjs.com/guides/build-performance/
https://www.cnblogs.com/joyco773/p/9049760.html
