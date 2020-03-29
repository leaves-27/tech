# 异步的方法
1.回调函数
2.事件监听
3.发布/订阅
4.promise对象
5.generator

# Promise和async/await及其generator/yield的异同点:
1.Promise和async/await的异同点
  <1>相同点：都使串行执行变的更优雅;
  <2>不同点：
    1>async/await基于Promise；
    2>Promise除了用来处理串行执行，也可用来进行并行执行的处理。
    
2.async/await和generator/yield的异同点:
  <1>async是generator的包装，await等同于yield。
  <2>async/await比generator/yield语义更清晰适用更广。

# 其他异步的实现
http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript

http://www.ruanyifeng.com/blog/2015/04/generator.html

https://www.zhihu.com/question/30820791

# 事件监听实现
function Event(){
    this.managers = [];
}

Event.prototype.$on = function(eventName, eventHandler){
    this.managers.push({
        eventName,
        eventHandler
    });
}

Event.prototype.$emit = function(eventName, data){
    const { eventHandler } = this.managers.find((item)=>{
        return item.eventName === eventName;
    })
    handler(data);
}

Event.$emit('readFileSuccess', file)
Event.$on('readFileSuccess', (file)=>{ //处理回到 });


# promise实现:
function Promise(fn){
    fn()
}

Promise.prototype.then = function(fn){
    fn()
}


new Promise((resolve, reject)=>{
    //
})

# Generator的实现
// 扫描函数是否有星号。若有星号则进一步扫描其中的表达式。根据其中的yield将其表达式进行拆分为一个个函数。

functionn Generator(){
    this.index = 0;
    this.managers = [fn,fn1,fn2...];
}

Generator.prototype.next = functionn(){
    // 将执行进行分阶段，然后利用监听进行
    
    
};



