1.docker作用：
	可以使开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的linux机器上.
2.docker的镜像源：	
	https://www.cnblogs.com/zhangrui153169/p/12699077.html
3.dockerfile:
  dockerfile是一个用来构建镜像的文本文件.即docker是如何构建镜像的。

4.Compose：
  Compose是用于定义和运行多容器Docker应用程序的工具。  

5.镜像的创建:  
6.容器的使用:
  (1)创建容器并启动: docker run 镜像名称 命令。
  (2)启动已经停止运行的容器: docker start 容器ID。
  (3)停止容器: docker stop 容器ID.
  (4)删除容器：docker rm -f 容器ID
  (5)查看容器: docker ps 
  (6)进入容器: docker attach/exec 容器ID.注意：使用attach，从容器退出的话会导致容器停止，而使用exec的话，不会导致此问题，所以建议使用exec.
  (7)查看端口的映射情况: docker ps或docker port 容器ID/容器名称。
  (8)查看容器内部的标准输出：docker logs -f 容器ID/容器名称。
  (9)查看容器内部运行的进程：docker top 容器ID/容器名称。
  (10)查看容器的底层信息: docker inspect 容器ID/容器名称。
  
# issue
docker启动的应用如何使用命令和ip关联。  	