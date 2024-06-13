# 前端历史梳理
  架构：MVC、MVVM、单向数据流、微前端
  脚手架: 常见脚手架(vue-cli、create-react-app、angular-cli) ----- 脚手架的搭建 
  模块化标准：amd/cmd/umd/shimup ------ commonjs ---- es6 ---- es7 ----- es8 ---- 
  预编译语言：
    Jquery、VUE、React、underscore、loash、CoffeScript、Dart、TypeScript、Flow、Angular
    Ejs、Handlebars、Jade

  JS语法版本：es5、es6、es7
  打包工具：grunt -------- gulp------ webpack ------ vite(rollup和esbuild)
  
  web: html、css、js、BOM、DOM、http、编码
    语法: 超文本结构的定义、样式的定义
    解析原理: dom树、css结构树、渲染树、布局、绘制。
    执行原理: 

## 常见脚手架
### 自定义脚手架
开发服务器: 
热更新
打包编译：url-loader、file-loader、css-loader
目录结构：src、dist、webpack.config
## 常见框架：uniapp、flutter、reactNative、mpvue、remax、taro、umi(dva、soga)、express、koa、egg、midway、nextjs、vue、react、angluar、three.js、d3.js、tensorFlow.js

## 常见构建打包工具
vite：roullup、esbuild
webpack：webpack-server：live-reload、HMR(热重载)    

## 基础
### html
### css
块级格式化
行内格式化

### js
基本类型：数字、字符串、布尔、undefined、null、Map、Set

变量：var、let、const
表达式：加减乘除(数学表达式)、字符串的拼接(字符串表达式)、或与非（逻辑表达式）、比较表达式、三元表达式、条件、循环（for/in、for/of、do/while、switch/case）
方法：function
类：
模块：
#### es6:
#### ts:

### BOM
  浏览器信息: navigator
  当前URL: location
  历史记录：history
  屏幕：Screen.屏幕、窗口、文档
  定时器：setTimeout、setInterval、request
  数据存储：cookie、localStorage、sessionStorage

### DOM
#### DOM对象的访问、增加、删除、更新
  访问包含其属性和方法、事件的访问  

#### 事件传播机制  

## 开发、测试、部署的角度
  书写工具: Eclipse、Sublime、Webstorm、Vscode
    错误检查工具(eslint): 定义一套规则，提前发现书写错误。
    代码格式化工具(prettier)：统一书写风格
  
  调试工具: 
    语法、逻辑调试：Firebug调试器、chrome开发者、vscode内嵌调试器、Vconsole、eruda
    请求：fidder、charles

  测试工具: mocha、jest、chai
  文档工具: jsdoc
  部署工具: pm2

  版本管理工具：git、svn
  包管理工具：npm、pnpm、cnpm、yarn