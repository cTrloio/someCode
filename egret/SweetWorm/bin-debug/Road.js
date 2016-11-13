/**
 * 空地类
 * 供人物点击空地时寻路使用
 *
 */
var Road = (function (_super) {
    __extends(Road, _super);
    function Road() {
        _super.call(this);
        this.mapX = 0;
        this.mapY = 0;
        this.color = 0x3DED41; //测试颜色
        this.size = 0; //尺寸
        this.size = GameData.SIZE;
        this.graphics.clear();
        this.graphics.beginFill(this.color, 0);
        this.graphics.drawRect(0, 0, this.size, this.size);
        this.graphics.endFill();
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.once(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=Road,p=c.prototype;
    p.addStageHd = function () {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.clickHd, this);
    };
    p.clickHd = function () {
        this.touchEnabled = false;
        this.dispatchEventWith(GameEvent.MOVE_CHARA);
        this.roadEffect();
    };
    p.roadEffect = function () {
        var _this = this;
        var tw = egret.Tween.get(this, { onChange: function () {
                _this.graphics.clear();
                _this.graphics.beginFill(_this.color);
                _this.graphics.drawRect(0, 0, _this.size, _this.size);
                _this.graphics.endFill();
            }, onChangeObj: this });
        tw.to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).call(function () {
            _this.touchEnabled = true;
        });
    };
    p.removeHd = function () {
        this.graphics.clear();
        this.touchEnabled = false;
        this.removeChildren();
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.clickHd, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    return Road;
}(egret.Sprite));
egret.registerClass(Road,'Road');
//# sourceMappingURL=Road.js.map