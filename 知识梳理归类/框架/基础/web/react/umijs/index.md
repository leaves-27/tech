# 概述
umijs是一个以路由为基础，搭配各种插件进行应用扩展开发的框架。其内置了很多好用的插件。具体深入学习需从路由和插件的配置入手，大体的配置方式有三类环境变量配置、项目配置、运行时配置，而项目配置中又尤以umirc.ts配置文件中的路由配置和预置插件和插件列表为重要切入点，运行时配置尤以app.ts文件为切入点。

# 配置：有三种 
## package.json
## umirc.ts或umirc.js: 基础配置---即整个项目启动前的配置，包括了构建、压缩优化、开发等内容。
  详细配置参见：
## app.ts: 运行时配置---即项目启动后的运行配置，注册的插件很多在这里暴露了调用钩子。
  修改渲染节点、修改路由、路由切换时逻辑处理。
  详细配置参见：

## 环境变量配置：
  通过在.env文件或终端中输入命令进行的配置。
  详细配置参见：
  https://v3.umijs.org/zh-CN/docs/env-variables#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%88%97%E8%A1%A8

# 路由配置：配置式和约定式
1.配置式：通过umirc.ts 中的暴露对象的routes属性项来配置路由
2.约定式：通过pages目录下的目录结构生成路由
  动态路由：[]---可选动态路由[$]
  嵌套路由：

  全局路由：/src/pages/layouts/index.tsx ----- 不同的全局layout
  404路由：/src/pages/404.tsx
  权限路由：/src/wrappers/auth
  
# 插件的配置：有三种方式
 1.package.json文件的dependencies字段中。
 2.umirc.ts中暴露的对象的presets和plugins字段中，其值为数组。
 3.通过命令行中输入UMI_PRESETS和UMI_PLUGINS环境变量

## 相关术语和概念
  1.插件：扩展一个功能
  2.插件集：扩展一类业务。@umijs/preset-h5、@umijs/preset-vue 
  3.插件的id和key: id是插件路径的简化，key是id的进一步简化。

## 检查插件注册情况： 

## 插件开发：
  参见https://v3.umijs.org/zh-CN/guide/plugin-develop

## 其他
  Typescript
  React
  Antd
  AntdPro
  AntV

  ReactRouter

  PostCss

  Webpack
  Babel

# 缺陷
  不够灵活  

# issue
  1.插件的应用和更改
  2.React-router路由的用户权限认证


# 概介
  可扩展的企业级前端应用框架

# 可扩展
## 插件体系----围绕生命周期（源码---构建）

# 企业级----路由(配置式路由和约定式路由)
1.企业级：安全性、稳定性、最佳实践、约束能力

# issue 
1.源码：编码(html、css、js)---自动格式化(prettier)语法错误(eslint)---逻辑错误(mock)--调试（develop-tools、finder）
2.部署代码：构建（环境调整-优化-压缩）

