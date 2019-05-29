# 常用HTML结构块
	<div id="Container"></div> 页面层容器
	<div id="header"></div> 页面头部
	<div id="content"></div> 页面主体
	<div id="globalnav"></div> 站点导航
	<div id="subnav"></div> 子菜单
	<div id="search"></div> 搜索框
	<div id="footer"></div>  页脚

# 让IE6、IE7、IE8支持CSS3的功能的方法：
  原理：利用 VML(矢量可标记语言)模拟
  具体：
  第一步：下载PIE.js。
    下载地址：http://css3pie.com/download-latest
  第二部：添加如下代码。
    <!--[if lt IE 10]>
    <script type="text/javascript" src="PIE.js"></script>
    <![endif]-->

  第三部：如下调用。
    $(function() {
      if (window.PIE) {
          $('.rounded').each(function() {
              PIE.attach(this);
          });
      }
    });
  详见：http://www.jb51.net/web/89379.html
  官方实时测试例子：http://css3pie.com/
