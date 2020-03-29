一.两栏或三栏布局的实现方法：
1.使用BFC(块级格式化上下文):
  左右元素左右浮动，然后主元素overflow等于hidden.

2.圣杯布局:
  所有元素套一个包裹元素，然后让包裹元素padding压缩，让左右浮动元素定位左右移出。
3.双飞翼布局:
  自适应元素套一个包裹元素,然后左右元素浮动在其包裹元素上，然后自适应元素设置左右外边距。


4.flex布局:display+flex

二、BFC详解：
  1.BFC特性及应用:
    1>同一个BFC下的两个元素上下外边距会发生重叠
    2>BFC可以清除浮动
    3>BFC可以阻止元素被浮动元素覆盖

  2.触发BFC的方法:
    1>body元素
    2>浮动除none之外的值
    3>overflow除visible之外的值
    4>position的值不为relative和static
    5>display的值为table-cell, table-caption, inline-block中的任何一个。
三、css布局方案

详见：
  https://baijiahao.baidu.com/s?id=1580578435186877828&wfr=spider&for=pc
  https://mp.weixin.qq.com/s/uK1_ccjtFyV9o6p_qwd8eQ