# 远程登录的方法:
  1.利用ssh命令登录
  2.利用客户端图形界面登录

# ssh的登录方法：
  1.先查看本机是否安装了ssh: ps -ef | grep ssh
  2.若已安装，查看是否已经开启ssh服务：netstat -ntlp 
  3.若ssh服务已开启，即可在shell中使用ssh命令登录。

# 远程登录的客户端类型有：
  1.windows上:
    (1)SecureCRT
    (2)Putty
    (3)SSH Secure Shell
    (4)xshell

  2.mac上：
    (1)FileZilla

  3.linux一般作为服务器，不用来做客户端
