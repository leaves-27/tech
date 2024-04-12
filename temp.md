# issue:
redux架构列举
dvajs架构理解
redux-saga架构列举

1.visual studio Code:
2.videojs:
3.shell:
4.思维导图:
5.markdown:
# 需要入门
## docker:
## jenkins:

# 需要深入
## linux:
## nginx:
## npm:
## git:
## vim: 编辑器
## lerna:
## vscode:
# gitlab CI/CD:

# 交互体验
1.界面: 有序。
2.交互顺畅: 
  (1)异常的提示引导
  (2)数据请求和本地平滑操作的平衡。

# 改进：
(1)效率提升:
  <1>流程规范化：
    产品需求熟悉(各组成员熟悉了解需求)----产品需求评审(提出异议，消化吸收)----熟悉需求---技术评审(接口,前端列出相应字段、服务端确认，确认后原则上不应该随便更改)----业务逻辑和视觉编写----开发联调----测试----修复bug----发布上线----修复bug。
  <2>项目拆分:
  <3>开发联调工具:

(2)体验提升: 
  <1>界面:
    1)UI还原度: 各页面的字体、间距的统一
    2)
  <2>交互
  1)请求数据请求中、请求异常、请求的数据为空的提示引导统一。
  2)跳转异常的提示引导
  3)网络请求和用户操作顺畅度的平衡:

  # 前端
  1.git/npm/webpack:
    (1)git: 开发和发布分支管理(项目分支、日常紧急维护分支)。
    (2)npm:
      <1>技术领域的包管理工具：apt-get、yum、brew
      <2>前端领域的各包管理工具：npm、yarn、pnpm
    (3)webpack: 插件。
      
  2.VSCode:
    (1)eslint配置
    (2)文件及其字段的快速查找
    
  3.router(路由)/view(视图)/state(数据管理)
    (1)router:
    (2)view: vue/react/angluar.
      <1>VUE:
        1>移动端：vant2: 
        2>PC端：element-ui/iView/Vue Admin/vue-material
        3>小程序：
      <2>React:
        1>移动端：
        2>PC端：
        3>小程序：Remax

      <3>可视化: 
        1>echarts:
        2>highcharts:
    (3)state:
    (4)Typescript:  
  4.nodejs/v8:
  5.代码调试工具:
    (1)服务端: inspect.
    (2)PC端: 各自浏览器自带的调试工具。
    (3)移动端: erdua/Vconsole。
    (4)混合应用：

  6.服务器：
    (1)nginx:
    (2)apache:
    (3)iis:  

  7.操作系统：
    (1)linux:
    (2)shell:
      <1>scp:
      <2>ping:

    (3)ssh:
    (4)vim:
    (5)docker:
  8.软件开发中的命名规范：https://blog.csdn.net/xiaoxunx/article/details/52691527
    (1)HTML:
    (2)CSS:
    (3)JS:   
  # issue
  1.变量的管理：每个作用域下的变量应该尽可能少(现实中由于项目成员的流失更换，导致的新成员对以前变量逻辑的不理解，且加之项目的压力，更不会去深入了解，而在原代码基础上重新声明重复的新变量导致变量失控)。
  2.对所有的包、库、项目应该添加详尽的说明文件。
    (1)说明文件的抽离集成。jsDoc及其对README文件的处理。
    (2)如何写好说明文件。

  # 参考文献
  基础教程：https://www.runoob.com/
  linux系统：https://blog.csdn.net/weixin_44685869/article/details/103937206
 

 # issue
css居中
React的生命周期及Hook对应的模拟方法
移动端的适配
项目的搭建注意事项
redux-soga

# 脚手架
开发服务器: 
热更新
打包编译：url-loader、file-loader、css-loader
目录结构：src、dist、webpack.config

# 常见脚手架
vue-cli
create-React-App

## 常见需要项
vite
webpack
webpack-server：live-reload、热重载
ts

vue
react
angluar

three.js
d3.js

# 前端历史梳理
  脚手架: 常见脚手架 ------- 寻找相关脚手架 ----- 脚手架的搭建 
    vue-cli(npm init vue@3)、create-react-app

  打包工具：grunt -------- gulp------ webpack ------ vite
  模块化标准：amd/cmd/umd/shimup ------ commonjs ---- es6
  
  预编译语言：
    jquery、underscore、CoffeScript、Dart、TypeScript、Flow、VUE、React、Angular
    Ejs、Handlebars、Jade、JSX、VUE
  
  JS语法版本：es5、es6  

  web: html、css、js、BOM、DOM、http、编码
    语法: 超文本结构的定义、样式的定义
    解析原理: dom树、css结构树、渲染树、布局、绘制。词法解析、
    执行原理: 

## 基础
### html
### css
### js
类型：数字、字符串、布尔、undefined、null、Map、Set
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

## 应用层基础
## 应用的角度
  架构：MVC、MVVM、单向数据流
  状态管理：Redux、Mbox、vux、pait
  路由：vue-router、react-router
  视图：vue、react、angluar

### Vue
### React
### Angular  

## 开发、测试、部署的角度
  书写工具: Eclipse、sublime、webstorm、vscode
    错误检查工具(eslint): 定义一套规则，提前发现书写错误。
    代码格式化工具(prettier)：统一书写风格

  调试工具: 
    语法、逻辑调试：Firebug调试器、chrome开发者、vscode内嵌调试器、Vconsole、eruda
    请求：fidder、charles
  测试工具: mocha、jest、chai
  部署工具: pm2
  文档工具: jsdoc
  版本管理工具：

# 了解
vue-cli
create-react-app

<<<<<<< HEAD
# 

=======
# 讲述方式
1.自上而下:
2.自下而上: 
  (1)html: 声明内容结构
  (2)css: 更丰富的静态视觉效果
  (3)js: 更丰富的交互效果.
  (4)Dom: 访问、操作文档中的元素对象
  (5)BOM: 访问、操作浏览器中的元素对象

  (6)调试工具：解决视觉、交互未按预期效果运行的问题。
  (7)打包工具：因为各浏览器厂商对上述web标准的实现差异，导致为适应不同的浏览器环境及优化用户体验、开发体验所需要进行的处理。

  (8)书写工具:
  (9)模块管理工具:
  (10)脚手架工具:

  (11-1)eslint: 解决语法错误未能提前发现的问题。
  (11-2)prettier: 解决代码格式不统一难以阅读的问题。
  (11-3)测试工具：解决逻辑错误未能提前发现的问题。

  (12)版本管理工具:
  (13)部署工具:
  (14)文档工具:

  (14)一般的web:
  (14)强展示: 图表绘制、
  (15)强动画展示: 
  (16)强交互展示: three.js。
  (17)游戏: 



# 面试题
1.数组的去重的方法:
  (1)利用对象的属性不能相同的特点进行去重
  (2)利用了Set结构不能接收重复数据的特点去重
  (3)利用数组filter方法循环查看当前元素的索引是否和其在数组中的索引位置相等，相等则返回true,以便该元素被过滤生成新数组。
  (4)利用for循环查看某个元素在数组中的索引是否和当前索引相等，相等则删除该元素并将该循环下标后退一位。
  (5)利用两层for循环比较，不重复则将外层当前索引的值添加到新数组，重复则跳过当前索引去重。
2.数组的排序

3.前端的性能优化与Vue的性能优化
  (1)合理使用路由懒加载、异步组件
  (2)不要将所有数据放data中，能用computed的用computed。data中的数据尽量扁平化。
  (3)能拆分组件的拆分。
  (4)使用keep-alive缓存组件。
  (5)for循环是某元素时，记得添加使用key保证唯一性。
  (6)尽量使用v-show，不要使用v-if

4.原型与原型链
5.闭包与闭包的应用
6.常用loader与Pulign
  (1)html-webpack-plugin
  (2)clean-webpack-plugin 
  (3)mini-css-extract-plugin
  (4)copy-webpack-plugin

7.前端工程化的理解
8.组件封装的的理解
9.事件循环机制
10.事件委托
11.事件冒泡
12.深拷贝与浅拷贝的概念及方法
  (1)深拷贝:
    <1>JSON.parse(JSON.stringify())：优点是简单，缺点是不能处理函数。
    <2>第三方库
    <3>递归

13.路由守卫
14.动态路由的实现
15.Vue生命周期钩子顺序
16.MVVM的优缺点
17.watch和computed的不同点
18.vue组件的通信方式

19.前端的数据存储方式
20.实现跨域的方法

21.图片预加载与懒加载的概念及应用场景
22.节流与防抖

#
20 * 20 = 400
800 * 5 = 4000

# 面试题
1.乾坤实现微应用的原理：沙箱原理。
2.diff算法：本质是dom操作开销大，js操作开销小。
  
3.单元测试：Jest,view层的测试和逻辑层的测试。
4.vue3和vue2的区别：解决选项式api将一个逻辑的代码分散在不同的生命周期钩子函数中的问题。

# 






>>>>>>> 7b39977 (1)















