## vsftpd的配置:
## vsftpd的启动:
brew services start   vsftpd
brew services restart vsftpd

/private/etc/ftpusers 白名单


/etc/vsftpd/vsftpd.conf： vsftpd 的核心配置文件 
/etc/vsftpd/ftpusers ：用于指定哪些用户不能访问FTP 服务器。 黑名单 
/etc/vsftpd/user_list：指定允许使用vsftpd 的用户列表文件。 白名单

# 环境变量

.bash_profile