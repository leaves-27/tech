# 概述
授权和调用第三方提供的功能

# 详细
1.公众号消息会话:
(1)群发消息: 不解释。
(2)被动回复消息: 在用户给公众号发消息后，微信服务器会将消息发到开发者预先在开发者中心设置的服务器地址，公众号可以在5秒内做出回复，可以回复一个消息，也可以回复命令告诉微信服务器这条消息暂不回复。
(3)客服消息: 在用户给公众号发消息后的48小时内，公众号可以给用户发送不限数量的消息，主要用于客服场景.
(4)模板消息:在需要对用户发送服务通知时，公众号可以用特定内容模板，主动向用户发送消息。

2.公众号内网页:
(1)用户通过网页授权，公众号可以获取用户基本信息。
(2)微信JS-SDK: 通过js使用微信原生功能的工具包。

# issue:
1.多公众号间共享用户：
需在微信开放平台中将这些公众号和应用绑定在一个开放平台账号下，然后在同一开放平台账号下的这些公众号和应用就会获得一个UnionID。具体见https://developers.weixin.qq.com/doc/offiaccount/User_Management/Get_users_basic_information_UnionID.html#UinonId。

