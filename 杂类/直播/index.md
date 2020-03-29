# 直播
## 基本概念介绍
1.推流：将编码好的音视频数据发往视频流服务器
2.播流：

##  
1.阿里云直播服务


# 参考文档

## 阿里云
1.https://help.aliyun.com/document_detail/29951.html?spm=5176.13394999.0.0.b542787aBnFL8S
2.https://help.aliyun.com/document_detail/57251.html?spm=a2c4g.11186623.6.679.506444538NIme4

## 小程序
1.https://cloud.tencent.com/document/product/454/34930

# issue:
1.跨域问题:
2.

# 直播调研
1.了解h5直播和微信直播基本概念和流程。
  h5端：
     一般最佳实践是app来实现直播推流，h5来实现直播播流。h5主要通过vedio标签来实现，优点利于分发，缺点有一定延迟(具体延迟效果需看后续开放的demo)。
     
  微信小程序端: 
     通过微信小程序支持<live-pusher>和<live-player>标签来实现推流和播流，使用时有版本和类目限制(目前看该限制对我们没有影响)。另对推流和播流URL不知道有没有什么限制，例来自阿里云的推流URL不支持什么的(目前从文档上看没有，有待后续demo验证)。
  
2.开发demo。
  (1)h5：配合青蟹那边的推流来实现一个播流demo。
  (2)微信小程序端: 使用火拼拼小程序
  

# web实现直播：
1.录制:使用webRTC(仅支持PC).
2.播放:使用HLS(HTTP Live Streaming)

# 码率:  

# HLS:

# 播放卡顿的原因：
1.推流上行网络差。
2.拉流上行网络差。

# 


