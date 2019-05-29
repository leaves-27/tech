1.Promise的使用场景:
(1)串行:promise
(2)并行:all
(3)容错:race

2.Promise的解决的问题:
(1).避免了回调地狱，使代码逻辑和结果处理分离，变得条理化、清晰可读。
(2).使调试错误变得容易。

3.Promise的实现原理:
  
4.Promise和async/await的异同点
  (1)相同点：都使串行执行变的更优雅;
  (2)不同点：
    1>async/await基于Promise；
    2>Promise除了用来处理串行执行，也可用来进行并行执行的处理。
    
5.async/await和generator/yield的异同点:
  (1)async是generator的包装，await等同于yield。
  (2)async/await比generator/yield语义更清晰适用更广。
  
6.其他异步实现：
http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript

http://www.ruanyifeng.com/blog/2015/04/generator.html

https://www.zhihu.com/question/30820791
