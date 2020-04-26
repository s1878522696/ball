import { POP_UI_BASE } from "../../common/ui/pop_ui_base";
import * as AudioManager from "../../common/audio/AudioPlayer"
import { EventDispatch, Event_Name } from "../../common/event/EventDispatch"

const { ccclass, property } = cc._decorator;


@ccclass
export default class NewClass extends POP_UI_BASE {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        EventDispatch.ins().fire(Event_Name.TIPS_0, `自定义参数${this.node.name}`);
    }

    on_show() {
        AudioManager.AudioPlayer.ins().play_music(AudioManager.AUDIO_CONFIG.Audio_Bgm);
    }

    /**关闭界面时调用，用来做清理工作*/
    on_hide(): void {
        AudioManager.AudioPlayer.ins().stop_music();
    }

    hide() {
        super.hide();
    }

    // update (dt) {}
}
