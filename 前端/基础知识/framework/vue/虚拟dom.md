# 解决的问题：
1.在虚拟DOM技术出现前，我们要改变页面展示的内容，需要通过每次去遍历真实的DOM树的方式找到需要修改的DOM,然后修改相关样式或行为结构，来达到更新UI的目的，在项目比较小，更新页面展示不频繁的情况下，这倒不是问题。但当项目变大时，修改变的很频繁的时候。由于直接操作真实DOM是一个很消耗内存资源、很慢的过程，这样做会导致渲染UI速度变慢。特别当互联网发展到移动互联网时，由于手机相对于以前的PC端台式电脑，手机性能参差不齐，性能问题就很明显。但直接操作JS却是很快的，因此有人想到通过使用JS建立一个与真实DOM树一一对应关系的虚拟DOM树，然后在每次操作的时候先对虚拟DOM树进行更改，接着根据Diff算法比较最终更改前后的虚拟DOM差异，然后将最终的虚拟DOM更改差异更新到真实DOM上。
2.满世界的遍历DOM、修改DOM使代码很难维护，而通过一个中间层使我们可以专注于代码的逻辑编写，而不需要关注底层DOM的遍历和更新。

注1：
  操作真实DOM的成本比较高的原因：
  (1)浏览器中dom 树的实现模块和 js引擎模块是分开的，这些跨模块的通讯增加了成本。
  (2)dom 操作引起的浏览器的回流和重绘，使得性能开销巨大。

# 原理
使用js对象创建了一个真实DOM的副本(因为操作js对象比操作DOM快)，然后对新旧副本同级进行比较(具体比较策略见下)，然后对真实DOM进行更新，依次递归，最终实现整个DOM树的更新。

# diff算法
  即对改变前后的两整棵树采用深度优先遍历的方法从根节点开始遍历，直到叶子节点后，然后回溯到前一个节点，再继续对其进行采用深度优先遍历的方法开始遍历，直到叶子节点为止。如此循环，知道比较完成。这其中遍历时的比较又分为三个diff。
  (1)tree diff: 即同一层级进行比较。若不同，则生成新的节点，再删除旧的节点。
    同一层级：同一水平位的同一索引。
    相同节点的定义：其相关属性都相同，但子节点可能不相同。
  (2)component diff: 不同元素产生不同的树。同类元素产生相同的树。
  (3)element diff: 


详情参见:
  https://blog.csdn.net/qq_43958325/article/details/112315992
  https://blog.csdn.net/liuliuliuliumin123/article/details/107943687?utm_medium=distribute.pc_feed_404.none-task-blog-2~default~BlogCommendFromBaidu~Rate-1-107943687-blog-null.pc_404_mixedpudn&depth_1-utm_source=distribute.pc_feed_404.none-task-blog-2~default~BlogCommendFromBaidu~Rate-1-107943687-blog-null.pc_404_mixedpud

  https://blog.csdn.net/luoshaoyun/article/details/122928581

