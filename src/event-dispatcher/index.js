"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter = function (a, b) { return a.order - b.order; };
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this.listeners = new Map();
    }
    EventDispatcher.prototype.addEventListener = function (type, handler, order) {
        if (order === void 0) { order = 0; }
        var listeners = this.listeners.get(type);
        if (!listeners) {
            listeners = [];
            this.listeners.set(type, listeners);
        }
        listeners.push({
            order: order,
            handler: handler,
        });
        listeners.sort(sorter);
    };
    EventDispatcher.prototype.removeEventListener = function (type, handler) {
        if (!this.listeners.has(type))
            return;
        var listeners = this.listeners.get(type);
        if (listeners) {
            var listener = listeners.find(function (value) { return value.handler === handler; });
            if (listener) {
                var index = listeners.indexOf(listener);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        }
    };
    EventDispatcher.prototype.dispatchEvent = function (type, event) {
        if (!this.listeners.has(type))
            return;
        var listeners = this.listeners.get(type);
        if (listeners) {
            listeners.forEach(function (listener) {
                listener.handler(event);
            });
        }
    };
    EventDispatcher.prototype.clearEventListeners = function (type) {
        if (type) {
            this.listeners.delete(type);
        }
        else {
            this.listeners.clear();
        }
    };
    return EventDispatcher;
}());
exports.default = EventDispatcher;
