# 应用的创建

可以使用以下三种方式来创建：
  JavaScript
  TypeScript
  Dart

# 运行原理

当加载事件触发时，执行ng的引导模块，在引导模块中，通过其元数据找到启动组件，然后根据启动组件载入相应内容。

# 架构
模块----组件-----模板

元数据

组件：依赖注入----服务 
组件-模板：数据绑定----指令


# 概况
类:
装饰器:

模块: 根模块、路由模块、
组件:
服务:

## 模块：定义一个模块的组成部分
@NgModule
声明：声明该模块所拥有的组件、指令和管道
导入：导入需要用到的模块（依赖模块）
公开：向外暴露的模块
提供者：
引导：声明用来启动该模块的部分


## 组件：
@Component
名称、模块、样式、imports、standalone
    模板：指令

## 服务：
@Injectable

    




