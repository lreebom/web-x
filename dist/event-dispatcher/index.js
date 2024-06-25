"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter = (a, b) => a.order - b.order;
class EventDispatcher {
    listeners = new Map();
    addEventListener(type, handler, order = 0) {
        let listeners = this.listeners.get(type);
        if (!listeners) {
            listeners = [];
            this.listeners.set(type, listeners);
        }
        listeners.push({
            order: order,
            handler: handler,
        });
        listeners.sort(sorter);
    }
    removeEventListener(type, handler) {
        if (!this.listeners.has(type))
            return;
        const listeners = this.listeners.get(type);
        if (listeners) {
            const listener = listeners.find(value => value.handler === handler);
            if (listener) {
                const index = listeners.indexOf(listener);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        }
    }
    dispatchEvent(type, event) {
        if (!this.listeners.has(type))
            return;
        const listeners = this.listeners.get(type);
        if (listeners) {
            listeners.forEach(listener => {
                listener.handler(event);
            });
        }
    }
    clearEventListeners(type) {
        if (type) {
            this.listeners.delete(type);
        }
        else {
            this.listeners.clear();
        }
    }
}
exports.default = EventDispatcher;
