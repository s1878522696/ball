import * as ui from "../common/ui/pop_mgr";
import { TimerMgr } from "../common/timer/timer_mgr";
import { EventDispatch, Event_Name } from "../common/event/EventDispatch"
import * as AudioManager from "../common/audio/AudioPlayer"

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        /**自定义事件 */
        EventDispatch.ins().add(Event_Name.TIPS_0, this.showTips, this);
        AudioManager.AudioPlayer.ins().init();
    }

    private opentest1() {
        AudioManager.AudioPlayer.ins().play_sound(AudioManager.AUDIO_CONFIG.Audio_Btn);
        ui.pop_mgr.get_inst().show(ui.UI_CONFIG.uitest_1);
    }

    private opentest2() {
        AudioManager.AudioPlayer.ins().play_sound(AudioManager.AUDIO_CONFIG.Audio_Btn);
        ui.pop_mgr.get_inst().show(ui.UI_CONFIG.uitest_2);
    }


    private showTips(str: string = 'loading') {
        console.log("自定义事件处理逻辑", str);
    }


    update(dt) {
        TimerMgr.getInst().update(dt);
    }
}
