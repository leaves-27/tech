# 小程序app的生命周期:
1.初始化: onLaunch
2.从后台进入前台显示: onShow
3.从前台进入后台时: onHide

4.脚本错误或api调用失败时: onError
5.要打开的页面不存在时: onPageNotFound

# 小程序页面的生命周期:
1.页面加载时触发:onLoad
2.页面初次渲染完成时触发:onReady
3.页面显示/切入前台时触发。
4.页面隐藏/切入后台时触发
5.页面卸载时触发:


## 两条线程：
创建小程序app实例，创建完成后加载页面(onLoad)，页面加载完成后将页面从后台显示到前台(onShow)。然后等待视图层初始化完成后的通知。待接到视图层初始化完成的通知后，发送初始化数据给视图层。视图层接到初始化数据后开始渲染页面，渲染完成后，又发送通知给逻辑层，触发onReady,onReady中的操作执行，若改变data的操作，则又发送数据给视图层，视图层进行渲染。

# 小程序的性能优化
1.优化setData过程
(1)不要频繁的setData，减少setData次数
(2)setData中的数据尽量不要包含跟view层渲染无关的数据
2.注意手动清除掉定时器相关的
3.onPageScroll中的setData操作尽可能简单。
4.尽量不要获取节点位置





