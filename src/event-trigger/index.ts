abstract class EventTriggerBase {
    private _handlers: Function[] = [];

    protected _add(handler: Function) {
        if (this._handlers.indexOf(handler) < 0) {
            this._handlers.push(handler);
        }
    }

    protected _remove(handler: Function) {
        const index = this._handlers.indexOf(handler)
        if (index >= 0) {
            this._handlers.splice(index, 1);
        }
    }

    protected _invoke(...params: any): void {
        for (let i = 0; i < this._handlers.length; i++) {
            this._handlers[i]?.(...params);
        }
    }

    public removeAllListeners(): void {
        this._handlers = [];
    }
}

export class EventTrigger extends EventTriggerBase {
    public addListener(handler: (() => void)): void {
        this._add(handler);
    }

    public removeListener(handler: (() => void)): void {
        this._remove(handler);
    }

    public invoke(): void {
        this._invoke();
    }
}

export class EventTrigger1<T1> extends EventTriggerBase {
    public addListener(handler: ((v1: T1) => void)): void {
        this._add(handler);
    }

    public removeListener(handler: ((v1: T1) => void)): void {
        this._remove(handler);
    }

    public invoke(v1: T1): void {
        this._invoke(v1);
    }
}

export class EventTrigger2<T1, T2> extends EventTriggerBase {
    public addListener(handler: ((v1: T1, v2: T2) => void)): void {
        this._add(handler);
    }

    public removeListener(handler: ((v1: T1, v2: T2) => void)): void {
        this._remove(handler);
    }

    public invoke(v1: T1, v2: T2): void {
        this._invoke(v1, v2);
    }
}

export class EventTrigger3<T1, T2, T3> extends EventTriggerBase {

    public addListener(handler: ((v1: T1, v2: T2, v3: T3) => void)): void {
        this._add(handler);
    }

    public removeListener(handler: ((v1: T1, v2: T2, v3: T3) => void)): void {
        this._remove(handler);
    }

    public invoke(v1: T1, v2: T2, v3: T3): void {
        this._invoke(v1, v2, v3);
    }
}

export class EventTrigger4<T1, T2, T3, T4> extends EventTriggerBase {

    public addListener(handler: ((v1: T1, v2: T2, v3: T3, v4: T4) => void)): void {
        this._add(handler);
    }

    public removeListener(handler: ((v1: T1, v2: T2, v3: T3, v4: T4) => void)): void {
        this._remove(handler);
    }

    public invoke(v1: T1, v2: T2, v3: T3, v4: T4): void {
        this._invoke(v1, v2, v3, v4);
    }
}

export class EventTrigger5<T1, T2, T3, T4, T5> extends EventTriggerBase {

    public addListener(handler: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => void)): void {
        this._add(handler);
    }

    public removeListener(handler: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => void)): void {
        this._remove(handler);
    }

    public invoke(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): void {
        this._invoke(v1, v2, v3, v4, v5);
    }
}