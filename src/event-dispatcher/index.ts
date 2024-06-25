type Listener = {
    handler: Function,
    order: number,
}

const sorter = (a: Listener, b: Listener) => a.order - b.order;

class EventDispatcher {

    protected listeners: Map<string, Listener[]> = new Map<string, Listener[]>()

    public addEventListener(type: string, handler: Function, order: number = 0): void {
        let listeners = this.listeners.get(type)

        if (!listeners) {
            listeners = []
            this.listeners.set(type, listeners)
        }

        listeners.push({
            order: order,
            handler: handler,
        })

        listeners.sort(sorter);
    }

    public removeEventListener(type: string, handler: Function): void {
        if (!this.listeners.has(type)) return
        const listeners = this.listeners.get(type)
        if (listeners) {
            const listener = listeners.find(value => value.handler === handler)
            if (listener) {
                const index = listeners.indexOf(listener)
                if (index !== -1) {
                    listeners.splice(index, 1)
                }
            }
        }
    }

    public dispatchEvent(type: string, event: any): void {
        if (!this.listeners.has(type)) return

        const listeners = this.listeners.get(type)

        if (listeners) {
            listeners.forEach(listener => {
                listener.handler(event)
            })
        }
    }

    public clearEventListeners(type?: string): void {
        if (type) {
            this.listeners.delete(type)
        } else {
            this.listeners.clear()
        }
    }

}

export default EventDispatcher