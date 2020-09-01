# Babel工作原理
根据要转译的文件查找转译配置文件，然后对要编译的文件进行解析，待解析到相应的抽象语法树后。然后使用babel-traverse对抽象预发树进行遍历转译生成新的抽象语法树，最后使用babel-generator将新的抽象语法树转译为新的代码。


# babelrc解析:

{
  "presets": [[
    "env",
    {
      "targets": {
        "node": "v8.9.3"
      }
    }
  ]]
}

env: 使用的插件
targets父对象: env插件的参数.

# 
