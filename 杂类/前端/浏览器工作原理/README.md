# 浏览器进程/线程模型

# 浏览器渲染进程的GUI线程渲染工作流程(即渲染引擎的工作流程):
1.dom树构建:
2.css树构建:
3.渲染树:
  (1)渲染对象:渲染对象树
  (2)渲染层:渲染层树
  (3)合成层/图形层:即将拥有动画的渲染层对象提升到单独的层。3D变化：transform或opacity、transform应用动画或过度

4.布局: 布局对象
5.绘制:

详细参见：
  https://blog.csdn.net/dangnian/article/details/50876241
  https://juejin.im/entry/59f010fdf265da4315231caa
  http://taobaofed.org/blog/2016/04/25/performance-composite/
  http://taobaofed.org/blog/2016/04/25/performance-composite/