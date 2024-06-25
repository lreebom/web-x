"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
// 继承 EventDispatcher
class MyEventDispatcher extends index_1.default {
    // 重写 addEventListener、removeEventListener、dispatchEvent、clearEventListeners 方法
    addEventListener(type, eventListener) {
        super.addEventListener(type, eventListener);
    }
    removeEventListener(type, eventListener) {
        super.removeEventListener(type, eventListener);
    }
    dispatchEvent(type, event) {
        super.dispatchEvent(type, event);
    }
    clearEventListeners(type) {
        super.clearEventListeners(type);
    }
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
});
// 事件触发
myEventDispatcher.dispatchEvent("open", "open event");
myEventDispatcher.dispatchEvent("close", { code: 1000, reason: "normal close" });
myEventDispatcher.dispatchEvent("error", new ErrorEvent("error", { message: "error message" }));
myEventDispatcher.dispatchEvent("empty");
