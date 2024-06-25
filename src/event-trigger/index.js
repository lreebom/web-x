"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTrigger5 = exports.EventTrigger4 = exports.EventTrigger3 = exports.EventTrigger2 = exports.EventTrigger1 = exports.EventTrigger = void 0;
var EventTriggerBase = /** @class */ (function () {
    function EventTriggerBase() {
        this._handlers = [];
    }
    EventTriggerBase.prototype._add = function (handler) {
        if (this._handlers.indexOf(handler) < 0) {
            this._handlers.push(handler);
        }
    };
    EventTriggerBase.prototype._remove = function (handler) {
        var index = this._handlers.indexOf(handler);
        if (index >= 0) {
            this._handlers.splice(index, 1);
        }
    };
    EventTriggerBase.prototype._invoke = function () {
        var _a, _b;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        for (var i = 0; i < this._handlers.length; i++) {
            (_b = (_a = this._handlers)[i]) === null || _b === void 0 ? void 0 : _b.call.apply(_b, __spreadArray([_a], params, false));
        }
    };
    EventTriggerBase.prototype.removeAllListeners = function () {
        this._handlers = [];
    };
    return EventTriggerBase;
}());
var EventTrigger = /** @class */ (function (_super) {
    __extends(EventTrigger, _super);
    function EventTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventTrigger;
}(EventTriggerBase));
exports.EventTrigger = EventTrigger;
var EventTrigger1 = /** @class */ (function (_super) {
    __extends(EventTrigger1, _super);
    function EventTrigger1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventTrigger1;
}(EventTriggerBase));
exports.EventTrigger1 = EventTrigger1;
var EventTrigger2 = /** @class */ (function (_super) {
    __extends(EventTrigger2, _super);
    function EventTrigger2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventTrigger2;
}(EventTriggerBase));
exports.EventTrigger2 = EventTrigger2;
var EventTrigger3 = /** @class */ (function (_super) {
    __extends(EventTrigger3, _super);
    function EventTrigger3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventTrigger3.prototype.addListener = function (handler) {
        this._add(handler);
    };
    EventTrigger3.prototype.removeListener = function (handler) {
        this._remove(handler);
    };
    EventTrigger3.prototype.invoke = function (v1, v2, v3) {
        this._invoke(v1, v2, v3);
    };
    return EventTrigger3;
}(EventTriggerBase));
exports.EventTrigger3 = EventTrigger3;
var EventTrigger4 = /** @class */ (function (_super) {
    __extends(EventTrigger4, _super);
    function EventTrigger4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventTrigger4.prototype.addListener = function (handler) {
        this._add(handler);
    };
    EventTrigger4.prototype.removeListener = function (handler) {
        this._remove(handler);
    };
    EventTrigger4.prototype.invoke = function (v1, v2, v3, v4) {
        this._invoke(v1, v2, v3, v4);
    };
    return EventTrigger4;
}(EventTriggerBase));
exports.EventTrigger4 = EventTrigger4;
var EventTrigger5 = /** @class */ (function (_super) {
    __extends(EventTrigger5, _super);
    function EventTrigger5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventTrigger5.prototype.addListener = function (handler) {
        this._add(handler);
    };
    EventTrigger5.prototype.removeListener = function (handler) {
        this._remove(handler);
    };
    EventTrigger5.prototype.invoke = function (v1, v2, v3, v4, v5) {
        this._invoke(v1, v2, v3, v4, v5);
    };
    return EventTrigger5;
}(EventTriggerBase));
exports.EventTrigger5 = EventTrigger5;
