"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTrigger5 = exports.EventTrigger4 = exports.EventTrigger3 = exports.EventTrigger2 = exports.EventTrigger1 = exports.EventTrigger = void 0;
class EventTriggerBase {
    _handlers = [];
    _add(handler) {
        if (this._handlers.indexOf(handler) < 0) {
            this._handlers.push(handler);
        }
    }
    _remove(handler) {
        const index = this._handlers.indexOf(handler);
        if (index >= 0) {
            this._handlers.splice(index, 1);
        }
    }
    _invoke(...params) {
        for (let i = 0; i < this._handlers.length; i++) {
            this._handlers[i]?.(...params);
        }
    }
    removeAllListeners() {
        this._handlers = [];
    }
}
class EventTrigger extends EventTriggerBase {
    addListener(handler) {
        this._add(handler);
    }
    removeListener(handler) {
        this._remove(handler);
    }
    invoke() {
        this._invoke();
    }
}
exports.EventTrigger = EventTrigger;
class EventTrigger1 extends EventTriggerBase {
    addListener(handler) {
        this._add(handler);
    }
    removeListener(handler) {
        this._remove(handler);
    }
    invoke(v1) {
        this._invoke(v1);
    }
}
exports.EventTrigger1 = EventTrigger1;
class EventTrigger2 extends EventTriggerBase {
    addListener(handler) {
        this._add(handler);
    }
    removeListener(handler) {
        this._remove(handler);
    }
    invoke(v1, v2) {
        this._invoke(v1, v2);
    }
}
exports.EventTrigger2 = EventTrigger2;
class EventTrigger3 extends EventTriggerBase {
    addListener(handler) {
        this._add(handler);
    }
    removeListener(handler) {
        this._remove(handler);
    }
    invoke(v1, v2, v3) {
        this._invoke(v1, v2, v3);
    }
}
exports.EventTrigger3 = EventTrigger3;
class EventTrigger4 extends EventTriggerBase {
    addListener(handler) {
        this._add(handler);
    }
    removeListener(handler) {
        this._remove(handler);
    }
    invoke(v1, v2, v3, v4) {
        this._invoke(v1, v2, v3, v4);
    }
}
exports.EventTrigger4 = EventTrigger4;
class EventTrigger5 extends EventTriggerBase {
    addListener(handler) {
        this._add(handler);
    }
    removeListener(handler) {
        this._remove(handler);
    }
    invoke(v1, v2, v3, v4, v5) {
        this._invoke(v1, v2, v3, v4, v5);
    }
}
exports.EventTrigger5 = EventTrigger5;
