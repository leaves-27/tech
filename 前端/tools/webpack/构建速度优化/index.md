# 方法
1.更新构建工具及其依赖库版本(较新的版本能够建立更高效的模块树以及提高解析速度)。具体涉及到的更新项:
  (1)更新webpack到4.0。
  (2)更新nodejs到最新版本。
  (3)更新包管理器到最新版本(一般为npm或yarn)。
  
  注：模块树？
2.减少loader和plugin的使用(每个额外的 loader/plugin 都有其启动时间)。
3.仅对必要的模块使用loader(避免文件检索时间)。
  具体做法：通过loader的配置项include和exclude来实现.
4.对解析配置进行优化(提高解析速度).具体做法:
  (1)减少 resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles 中 items 数量(他们会增加文件系统调用的次数).
  (2)如果你不使用 symlinks（例如 npm link 或者 yarn link），可以设置 resolve.symlinks: false.
  (3)如果你使用自定义 resolve plugin 规则，并且没有指定 context 上下文，可以设置 resolve.cacheWithContext: false.
5.使用动态链接库。
6.使用多进程。
7.持久化缓存。
8.代码压缩用ParallelUglifyPlugin代替自带的 UglifyJsPlugin插件(自带的JS压缩插件是单线程执行的,而ParallelUglifyPlugin则会开启多个子进程)
10.使用fast-sass-loader代替sass-loader(fast-sass-loader可以并行地处理sass,在提交构建之前会先组织好代码，速度也会快一些)
11.使用ModuleConcatenationPlugin插件来加快JS执行速度
