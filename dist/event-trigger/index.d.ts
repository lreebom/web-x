declare abstract class EventTriggerBase {
    private _handlers;
    protected _add(handler: Function): void;
    protected _remove(handler: Function): void;
    protected _invoke(...params: any): void;
    removeAllListeners(): void;
}
export declare class EventTrigger extends EventTriggerBase {
    addListener(handler: (() => void)): void;
    removeListener(handler: (() => void)): void;
    invoke(): void;
}
export declare class EventTrigger1<T1> extends EventTriggerBase {
    addListener(handler: ((v1: T1) => void)): void;
    removeListener(handler: ((v1: T1) => void)): void;
    invoke(v1: T1): void;
}
export declare class EventTrigger2<T1, T2> extends EventTriggerBase {
    addListener(handler: ((v1: T1, v2: T2) => void)): void;
    removeListener(handler: ((v1: T1, v2: T2) => void)): void;
    invoke(v1: T1, v2: T2): void;
}
export declare class EventTrigger3<T1, T2, T3> extends EventTriggerBase {
    addListener(handler: ((v1: T1, v2: T2, v3: T3) => void)): void;
    removeListener(handler: ((v1: T1, v2: T2, v3: T3) => void)): void;
    invoke(v1: T1, v2: T2, v3: T3): void;
}
export declare class EventTrigger4<T1, T2, T3, T4> extends EventTriggerBase {
    addListener(handler: ((v1: T1, v2: T2, v3: T3, v4: T4) => void)): void;
    removeListener(handler: ((v1: T1, v2: T2, v3: T3, v4: T4) => void)): void;
    invoke(v1: T1, v2: T2, v3: T3, v4: T4): void;
}
export declare class EventTrigger5<T1, T2, T3, T4, T5> extends EventTriggerBase {
    addListener(handler: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => void)): void;
    removeListener(handler: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => void)): void;
    invoke(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): void;
}
export {};
