# GPU概述：
  主要用来进行图形绘制。和CPU的区别是，CPU对各种逻辑及其各种数据类型均可处理，但对重复性的图形处理效率不如GPU。

# 启用GPU的方法：
  1.使用css的will-change属性。缺点兼容性不好，IE、手机端均支持不好。
    例：will-change: transform。

  2.使用css的3d变换。
    例1：-webkit-transform: translate3d(0, 0, 0);
    例2：-webkit-transform: translateZ(0);
