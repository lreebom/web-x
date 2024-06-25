type Listener = {
    handler: Function;
    order: number;
};
declare class EventDispatcher {
    protected listeners: Map<string, Listener[]>;
    addEventListener(type: string, handler: Function, order?: number): void;
    removeEventListener(type: string, handler: Function): void;
    dispatchEvent(type: string, event: any): void;
    clearEventListeners(type?: string): void;
}
export default EventDispatcher;
