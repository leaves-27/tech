/**
 * @description 对数组的操作方法劫持，以获得对数组修改时的回调
 * @param  { Function } callback - 数组产生修改的回调
 * @return { Array }  - 数组类的原型对象
 * */
function getArrayPrototype(callback){
  const array = Object.create(Array.prototype)
  const methods = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ]

  methods.forEach(method => {
    const oldMethod = Array.prototype[method]
    const newMethod = function(...args) {
      oldMethod.apply(this, args)
      callback();
    }
    array[method] = newMethod
  })
  return array;
}

/**
 * @description 并发请求Api基础包装层。该API对外暴露了统一的并发请求完成后的处理函数，使得我们可以对多个并发请求整个完成后的结果进行统一处理。
 * @param { Array } items - 并发请求的参数列表。
 * @param { Function } request - 并发中的一个单次的请求。需在这里按照需要对特定平台的api按照规定格式进行统一包装。
 * @param { Function } complete - 所有并发请求完成后的回调函数。参数为包含所有并发请求完成后的成功列表和失败列表的结果对象。
 */
function requestAll({ items, request, complete }){
  // result的successes和failures只能通过数组的方法进行修改，否则complete无法响应
  let result = {
    successes: [],
    failures: []
  };

  const callback = function(){
    const MAX_LENGTH = items.length;
    if(( result.successes.length + result.failures.length) === MAX_LENGTH){
      complete({
        successes: result.successes,
        failures: result.failures
      });
    }
  }

  Object.keys(result).forEach((item) => {
    if (Array.isArray(result[item])) {
        result[item].__proto__ = getArrayPrototype(callback);
    }
  });

  items.forEach((item, index)=>{
    request(item, index, {
      successes: result.successes,
      failures: result.failures
    })
  })
}