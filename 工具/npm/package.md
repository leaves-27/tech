# 第三方包
## 安装(增):
1.全局:
2.本地:
npm i xx
npm i -g xx
### 更新:
npm update xxx

## 卸载(删):
npm uninstall xx

## 搜索(查):
npm search xx

## 查看包安装的位置
npm root

## 查看可执行命令安装的位置
npm bin

## 查看本地安装的某个包及其版本
npm list 
## 查看本地某个包的文档
npm docs
## 查看本地某个包的仓库地址
npm repo
## 查看某个包的基本信息
npm view

# 自己的包
## 创建:
npm init

## 修改
1.修改包的版本
2.

# 发布:
1.npm publish:
2.npm unpublish:
2.npm access: 在发布的包上设置访问级别。
  (1)npm access public/restricted xxx: 设置包的访问级别为public或restricted。若为public，则代表所有人可以访问该包；若为restricted,则代表部分人可以访问该包。

  (2)npm access grant <read-only|read-write> <scope:team> [<package>]: 授权某个个体或团队对某个包拥有的权限.(仅读还是读写)
  (3)npm access revoke: 取消某个个体或团队对某个包拥有的权限.(仅读还是读写)
  
  (4)npm access ls-packages:显示某个个体或团队能访问的所有包
  (5)npm access ls-collaborators: 显示所有访问权限是私有的包
  (6)npm access edit: 使用$ EDITOR为一个包设置私有的访问权限。


参考： https://blog.csdn.net/liu602182699/article/details/48186655  


# scope
scope是一种把相关的模块组织到一起的一种方式

# 