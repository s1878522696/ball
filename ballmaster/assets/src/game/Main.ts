import * as ui from "../common/ui/pop_mgr";
import { TimerMgr } from "../common/timer/timer_mgr";
import { EventDispatch, Event_Name } from "../common/event/EventDispatch"

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        EventDispatch.ins().add(Event_Name.SHOW_TIPS, this.showTips, this);

    }

    private opentest1() {
        ui.pop_mgr.get_inst().show(ui.UI_CONFIG.uitest_1);
    }

    private opentest2() {
        ui.pop_mgr.get_inst().show(ui.UI_CONFIG.uitest_2);
    }


    private showTips(str: string = 'loading') {
        console.log("自定义事件");
    }


    update(dt) {
        TimerMgr.getInst().update(dt);
    }
}
