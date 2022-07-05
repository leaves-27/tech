# 概述
ESLint 是一个开源的JavaScript代码检查工具，目标是保证代码的一致性和避免错误。特征是可配置化(即可以创建自己的检测规则)。

## 配置化的的Eslint
1.配置文件形式：即使用javascript、json、yaml或package.json等四种配置文件形式，其需要名为.eslintrc，后缀为js或json或yaml。
2.javascript注释形式：

# 配置详情
所有配置大体可以分为以下三种
1.解析器、处理器及插件
2.Environments：
3.Globals：访问额外的全局变量。
4.Rules：启用的规则及其各自的错误级别。

## 指定解析器
  parser：Espree。

## 指定处理器(处理器可以从另一种文件中提取 JavaScript 代码，然后让 ESLint 检测 JavaScript代码)
  processor

### 为特定的文件类型指定处理器
  使用overrides 键和 processor

### 指定解析器选项列表
1.ecmaVersion: 按那个版本的语言规范检查
2.sourceType: 代码导入类型
3.ecmaFeatures: 想使用的额外的语言特性
  (1)globalReturn: 允许在全局作用域下使用return
  (2)impliedStrict: 启用全局严格模式
  (3)experimentalObjectRestSpread：启用试验性质的
  (4)启用JSX

## 配置化插件
  ESLint 支持使用第三方插件。插件名称可以省略eslint-plugin- 前缀。具体可以使用plugins

## 指定环境
  指定脚本的运行环境，每种环境都有一组特定的预定义全局变量。具体可以使用env，可以配置为多个环境。

## 指定全局变量
  即在一个源文件里使用全局变量，推荐在ESLint中定义这些全局变量的可读可写状态。具体使用globals作为key。



## 配置化规则
规则大体上又可以分为逻辑错误有关的、最佳实践有关的、与变量有关、与nodejs或commonjs有关、与风格有关、与ESCMAScript6有关

# 参考文献
https://eslint.bootcss.com/docs/user-guide/getting-started

