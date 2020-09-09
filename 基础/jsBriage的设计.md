# jsBriage桥的设计
## 需要解决的问题
1.js调用native及调用后的回调
2.native调用js及调用后的回调

## 接口定义
declare let NativeBriage: any
declare let messageHandler: any

interface Callbacks {
	[type: String]: (params: any) => void
}
interface Callback {
	once: boolean,
	callback: (params: any)=> void
}

interface InvokeNativeCallbacks {
	[callbackId]: Callback
}

interface SendMessageToNativeParams { // 供H5调用
	briageName: String,
	params: any,
	callbackId: String
}

interface ReviceMessageFromNativeParams { // 供Native调用
	briageName: String,
	params: any,
	callbackId: String	
}

interface JsBriage {
	sendMessageToNative: (params: SendMessageToNativeParams)=> void,
	reviceMessageFromNative: (params: ReviceMessageFromNativeParams) => void
}

## 接口实现


export default window.JSBriage

## 调用

JSBriage.invoke({
	briageName: String,
	data: any,
	callbacks: Callbacks
})
