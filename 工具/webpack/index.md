# webpack解析过程：
解析配置参数，用获取的最终配置参数开始初始化Comiler对象。然后加载所有配置的插件，让所有插件可以监听webpack构建生命周期的事件节点。之后，便开始进行编译。编译完成后，即将编译得到的代码块列表输出到文件系统中。

## 编译过程:
从入口文件开始解析文件，然后调用相应loader对模块进行转换，接着找出当前文件所有的依赖文件，递归进行解析。在递归完成后，根据每个文件的最终结果以及entry配置生成代码块，并将代码块加入输入列表中。

# webpack的生命周期:
1.entryOption: 在entry配置项处理过之后
2.afterPlugins: 插件初始化完成后
3.afterResolvers: 解析器安装完成之后
4.environment: 环境准备好之后
5.run: 开始读取记录列表之前
6.compile: 一个新的编译完成后
7.compilation: 一个编译完成后
8.emit: 资源生成后系统目录之前
9.done: 完成

# tapable:

注：
https://www.webpackjs.com/api/
https://segmentfault.com/a/1190000017890529?utm_source=tag-newest#articleHeader2
https://www.cnblogs.com/cherryvenus/p/9945193.html
https://www.jianshu.com/p/273e1c9904d2
https://alienzhou.github.io/webpack-internal-plugin-relation/




