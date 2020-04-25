import SingletonClass from "../base/SingletonClass";
/**事件名称定义*/
export enum Event_Name {
    GAME_TIME_CHANGED,
    GAME_CREATE_BALL,
    GAME_SCORE_CHANGED,
    GAME_BALL_POWER_CHANGED,
    GAME_BEST_SCORE_CHANGED,
    GAME_ON_TOUCH_MOVE,
    GAME_POWER_TYPE_CHANGED,
    GAME_RELIVE,
    GAME_PLAY_BRICK_REMOVE_EFFECT,
    SHOW_TIPS,
    GAME_STAR_GET_EFFECT,
}

export class EventDispatch extends SingletonClass {
    private listeners: any = {};          //Event_Name => cb[]


    static ins(): EventDispatch {
        return super.ins() as EventDispatch;
    }

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


}
