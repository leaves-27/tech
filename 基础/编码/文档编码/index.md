# 了解编码的作用：
1.解决乱码问题;
2.预防xss攻击;

# 浏览器的解码:
	html解析器: 解码并构建dom树渲染
	url解析器: 解码并发送请求
	javascript解析器: 解码并相应操作(改变dom结构或css或发送请求等)

参见：
  https://www.cnblogs.com/leesf456/p/5317574.html
  https://jingyan.baidu.com/article/e73e26c0c0a51c24adb6a798.html
  https://security.yirendai.com/news/share/26	