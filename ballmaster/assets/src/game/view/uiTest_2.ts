import { POP_UI_BASE } from "../../common/ui/pop_ui_base";
import * as ui from "../../common/ui/pop_mgr";
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends POP_UI_BASE {



    start() {

    }

    /**主界面 */
    menuJiemian() {
        console.log(this.ui_name);
        this.hide();
    }

    /**界面1 */
    uiTest_1() {
        ui.pop_mgr.get_inst().show(ui.UI_CONFIG.uitest_1);
    }

    // update (dt) {}
}
