# WebRTC 架构概述
  ICE(Interactive Connectivity Establishment): 交互式链接设施。

## STUN(Session Traversal Utilities for NAT): NAT的会话穿越功能。允许位于NAT后的客户端找出自己的公网地址，判断出路由器阻止直连的限制方法。
## NAT(Network Address Translation): 网络地址转换，用来给你的（私网）设备映射一个公网的IP地址。
## TURN(Traversal Using Relays around NAT): NAT的中继穿越方式。
## SDP(Session Description Protocol): 会话描述，用来描述多媒体链接内容, 例：分辨率、格式、编码、加密算法等。

参考资料：
https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API