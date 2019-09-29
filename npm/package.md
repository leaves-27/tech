# 对npm包的一些操作
1.npm publish:
2.npm access: 
  在发布的包上设置访问级别
  (1)npm access public: 设置包的访问级别:public、restricted.即若为public，则所有人可以访问该包；若为restricted,则部分人可以访问该包。
  (2)npm access grant: 授权某个个体或团队对某个包拥有的权限.(仅读还是读写)
  (3)npm access revoke: 取消某个个体或团队对某个包拥有的权限.(仅读还是读写)
  
  (4)npm access ls-packages:显示某个个体或团队能访问的所有包
  (5)npm access ls-collaborators: 显示所有访问权限是私有的包
  (6)npm access edit: 使用$ EDITOR为一个包设置私有的访问权限。？？????