/**
 * access_token: 
 * 
 * 微信jssdk：即微客户端封装了很多方法暴露出来供第三方网页应用来调用（依赖于客户端版本）。调用前需要先进行安全校验。
 * 微信jssdk使用前先需要添加JS安全域名
 * 然后添加权限验证配置
 * 然后再权限验证成功后的回调里面调用相关方法.
 * 
 * wx.config({
 *  appId: '',
 *  timestamp,
 *  nonceStr: '',
 *  signature: '',
 *  jsApiList: []
 * });
 * 
 * */ 
# JSSDK

JSSDK是微信公众平台 面向网页开发者提供的基于微信内的网页开发工具包。通过该开发工具包，网页开发者可以使用微信客户端的很多功能。具体有：
1.设备接口
2.地理位置

3.界面操作
4.分享接口
5.微信支付

6.图像接口
7.音频接口

8.扫一扫
9.摇一摇

10.智能接口
11.微信商品页
12.微信卡券
13.微信收货地址


# 使用步骤
1.绑定JS接口安全域名:
2.引入JS文件: 引入方式。
3.注入权限验证配置:

同一个url仅需调用一次。

http://weixin.qq.com/cgi-bin/readtemplate?t=weixin_external_links_content_management_specification