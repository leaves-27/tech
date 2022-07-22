# redux中间件：
1.能访问完整的redux state.
2.能dispatch redux action.

# redux-thunk
我们没有办法像dispatch一个同步操作一样，dispatch一个异步的操作来对异步操作进行重用，所以为发明了redux-thunk来使我们其可以像同步操作dispatch一样来重用异步操作。

# redux-soga