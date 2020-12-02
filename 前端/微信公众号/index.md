# 微信公众号授权流程：
1．用户关注微信公众账号。
2．微信公众账号提供请求授权页面URL给用户。
3．用户点击授权页面URL，向微信服务器发起请求
4．微信服务器返回询问用户是否同意授权给微信公众账号的页面(scope为snsapi_base时无此步骤)
5．用户同意(scope为snsapi_base时无此步骤)
6．微信服务器将CODE通过回调传给微信公众账号页面URL.
7．微信公众账号通过CODE向微信服务器请求Access Token
8．微信服务器返回Access Token和OpenID给微信公众账号
9.微信公众账号通过Access Token向服务器请求用户信息(scope为snsapi_base时无此步骤)
10.微信服务器将用户信息回送给微信公众账号(scope为snsapi_base时无此步骤)

## 请求授权页面URL:
1.appid:
2.redirect_uri:
3.response_type:
4.scope: 见下文scope.
5.state:

## scope:
snsapi_base: 用来获取进入页面的用户的openid的.
snsapi_userinfo: 用来获取用户的基本信息的。

详见：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html