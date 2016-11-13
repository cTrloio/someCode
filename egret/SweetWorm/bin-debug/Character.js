var Character = (function (_super) {
    __extends(Character, _super);
    function Character() {
        _super.call(this);
        this.canMove = true; //可以移动(寻路)
        this.mapX = 0;
        this.mapY = 0;
        this.moveSpeed = 300;
        this.isSetBox = false;
        this.isActive = true;
        this.resetTimer = undefined;
        this.isActiveTimer = undefined;
        this.texture = GameData.createBitmapByName("niao_png");
        this.texture.anchorOffsetX = this.texture.width / 2;
        this.texture.anchorOffsetY = this.texture.height / 2;
        this.addChild(this.texture);
        this.once(egret.Event.ADDED_TO_STAGE, this.stageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=Character,p=c.prototype;
    p.stageHd = function () {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setBoxHd, this);
    };
    //放置或拿起箱子
    p.setBoxHd = function () {
        this.dispatchEventWith(GameEvent.SET_BOX);
    };
    p.removeHd = function () {
        if (this.resetTimer != undefined) {
            this.resetTimer.stop();
            this.resetTimer.removeEventListener(egret.TimerEvent.TIMER, this.resetHd, this);
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.setBoxHd, this);
        this.touchEnabled = false;
        this.canMove = true;
        this.removeChildren();
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    //碰到怪物被冰冻
    p.changeNiaoD = function () {
        var _this = this;
        if (this.isActive) {
            this.touchEnabled = false;
            this.canMove = false;
            if (this.texture) {
                this.removeChild(this.texture);
            }
            this.texture = GameData.createBitmapByName("niaoD_png");
            this.texture.anchorOffsetX = this.texture.width / 2;
            this.texture.anchorOffsetY = this.texture.height / 2;
            this.addChild(this.texture);
            //冰冻时间控制器
            this.resetTimer = new egret.Timer(2000, 1);
            this.resetTimer.addEventListener(egret.TimerEvent.TIMER, this.resetHd, this);
            this.resetTimer.start();
            this.isActiveTimer = new egret.Timer(3000, 1);
            this.isActiveTimer.addEventListener(egret.TimerEvent.TIMER, function () {
                _this.isActive = true;
            }, this);
        }
    };
    //冰冻恢复
    p.resetHd = function () {
        if (this.texture) {
            this.removeChild(this.texture);
        }
        this.texture = GameData.createBitmapByName("niao_png");
        this.texture.anchorOffsetX = this.texture.width / 2;
        this.texture.anchorOffsetY = this.texture.height / 2;
        this.addChild(this.texture);
        //this.isActive = true;
        this.isActiveTimer.start();
        this.canMove = true;
        this.touchEnabled = true;
        this.resetTimer.stop();
        this.resetTimer.removeEventListener(egret.TimerEvent.TIMER, this.resetHd, this);
    };
    //设置touch
    p.setTouchEnable = function (bool) {
        this.touchEnabled = bool;
    };
    return Character;
}(egret.Sprite));
egret.registerClass(Character,'Character');
//# sourceMappingURL=Character.js.map