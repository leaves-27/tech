# eval:
eval模式是使用eval将webpack中每个模块包裹，然后在模块末尾添加模块来源//# souceURL， 依靠souceURL找到原始代码的位置

# source-map:
包含source-map关键字的配置项都会产生一个.map文件，该文件保存有原始代码与运行代码的映射关系， 浏览器可以通过它找到原始代码的位置

# cheap:
不包含列信息

# module
module关键字webpack将会添加loader的sourcemap