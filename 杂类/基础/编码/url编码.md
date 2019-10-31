# 一、URL
"字母和数字、$-_.+!*'(),、以及某些保留字，才可以直接用于URL。
字母和数字[0-9a-zA-Z]、一些特殊符号"$-_.+!*'(),

# 三、目前存在使用的编码现象：
1.网址路径的编码，用的是utf-8编码。
2.查询字符串的编码，用的是操作系统的默认编码。
3.表单GET和POST方法的编码，用的是网页的编码。即：<meta http-equiv="Content-Type" content="text/html;charset=xxxx">
4.在Ajax调用中，IE总是采用GB2312编码（操作系统的默认编码），而Firefox总是采用utf-8编码

# 四、javascript的编码函数：
(1)escape():返回一个字符的Unicode编码值。
(2)encodeURI():对整个URL进行编码，输出utf8编码值。
(3)encodeURIComponent(): 对URI中的局部进行编码。可对uri保留字进行转码。

# 五、详情参见：
http://www.ruanyifeng.com/blog/2010/02/url_encoding.html
