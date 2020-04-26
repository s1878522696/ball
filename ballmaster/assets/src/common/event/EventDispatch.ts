import SingletonClass from "../base/SingletonClass";

/**自定义事件 */
export class EventDispatch extends SingletonClass {
    private listeners: any = {};          //Event_Name => cb[]

    static ins(): EventDispatch {
        return super.ins() as EventDispatch;
    }

    fire(event: Event_Name, ...params: any[]): void {
        let cbs: any[] = this.listeners[event];
        if (!cbs) {
            return;
        }
        for (let i: number = 0, len: number = cbs.length; i < len; i += 2) {
            let cb: any = cbs[i];
            let host: any = cbs[i + 1];
            if (cb)
                cb.call(host, ...params);
        }
    }

    /**添加自定义事件 */
    add(event: Event_Name, cb: Function, host: any = null, callNow = false, ...params: any[]): void {
        let cbs: any[] = this.listeners[event];
        if (!cbs) {
            this.listeners[event] = cbs = [];
        }
        cbs.push(cb, host);
        if (callNow) {
            cb.call(host, ...params);
        }
    }

    remove(event: Event_Name, cb: Function) {
        let cbs: any[] = this.listeners[event];
        if (!cbs) {
            return;
        }
        let index: number = cbs.indexOf(cb);
        if (index < 0) {
            cc.warn(`EventDispatch remove ${event}, but cb not exists!`);
            return;
        }
        cbs.splice(index, 2);
    }

    clear() {
        for (let key in this.listeners) {
            this.listeners[key].length = 0;
        }
        this.listeners = {};
    }
}

/**事件名称定义*/
export enum Event_Name {
    TIPS_0,
    TIPS_2
}