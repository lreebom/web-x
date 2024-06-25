import Index from "./index";

// 继承 EventDispatcher
class MyEventDispatcher extends Index {

    // 重写 addEventListener、removeEventListener、dispatchEvent、clearEventListeners 方法
    addEventListener<K extends keyof MyEventDispatcherEventMap>(type: K, eventListener: (event: MyEventDispatcherEventMap[K]) => void) {
        super.addEventListener(type, eventListener);
    }

    removeEventListener<K extends keyof MyEventDispatcherEventMap>(type: K, eventListener: (event: MyEventDispatcherEventMap[K]) => void) {
        super.removeEventListener(type, eventListener);
    }

    dispatchEvent<K extends keyof MyEventDispatcherEventMap>(type: K, event?: MyEventDispatcherEventMap[K]) {
        super.dispatchEvent(type, event);
    }

    clearEventListeners<K extends keyof MyEventDispatcherEventMap>(type?: K) {
        super.clearEventListeners(type);
    }
}

// 事件类型
interface MyEventDispatcherEventMap {
    "open": string,
    "close": CloseEvent,
    "error": ErrorEvent,
    "empty": undefined,
}

// 自定义的CloseEvent事件参数
interface CloseEvent {
    code: number,
    reason: string,
}

const myEventDispatcher = new MyEventDispatcher();

// 事件监听
myEventDispatcher.addEventListener("open", event => {
    console.log("open", event);
});

myEventDispatcher.addEventListener("close", event => {
    console.log("close", event.code, event.reason);
});

myEventDispatcher.addEventListener("error", event => {
    console.log("error", event.message);
});

myEventDispatcher.addEventListener("empty", () => {
    console.log("empty");
})

// 事件触发
myEventDispatcher.dispatchEvent("open", "open event");
myEventDispatcher.dispatchEvent("close", {code: 1000, reason: "normal close"});
myEventDispatcher.dispatchEvent("error", new ErrorEvent("error", {message: "error message"}));
myEventDispatcher.dispatchEvent("empty");