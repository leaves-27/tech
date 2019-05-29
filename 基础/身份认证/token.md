# token的生成

一般由账号加时间戳经过加密生成

# token解决的问题
1.防止表单重复提交：因为token的唯一性。
2.防止跨站请求伪造：因为token是由服务器签发的，不易伪造。
3.可以跨域认证：只需要在请求的http头中带上即可(相对于)。
4.提高了性能: 一次网络往返时间（通过数据库查询session信息）总比做一次HMACSHA256计算 的Token验证和解析要费时得多.
5.基于标准化: 可以采用标准化的 JSON Web Token.

# token的组成
1.头部:
2.载荷:
3.签名:

详情参见：
https://ninghao.net/blog/2834
https://www.cnblogs.com/xiekeli/p/5607107.html


