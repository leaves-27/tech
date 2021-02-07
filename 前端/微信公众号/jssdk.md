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

# 使用步骤
1.绑定JS接口安全域名:
2.引入JS文件: 引入方式。
3.注入权限验证配置:

同一个url仅需调用一次。

http://weixin.qq.com/cgi-bin/readtemplate?t=weixin_external_links_content_management_specification