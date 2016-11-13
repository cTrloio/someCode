/**
 * Created by Administrator on 2015/12/4.
 */
var Door = (function (_super) {
    __extends(Door, _super);
    function Door(name) {
        _super.call(this);
        this.door1 = Factory.createBitmapByName("doorOpen");
        this.addChild(this.door1);
        this.door1.visible = false;
        this.door2 = Factory.createBitmapByName("doorClose");
        this.addChild(this.door2);
        this.door1.anchorOffsetX = this.door1.width / 2;
        this.door1.anchorOffsetY = this.door1.height / 2;
        this.door2.anchorOffsetX = this.door2.width / 2;
        this.door2.anchorOffsetY = this.door2.height / 2;
        this.door1.alpha = 0.6;
        this.door2.alpha = 0.6;
        if (name == 'sta') {
            this.door1.scaleX = 0.8;
            this.door1.scaleY = 0.8;
            this.door2.scaleX = 0.8;
            this.door2.scaleY = 0.8;
        }
        if (name == 'one') {
            this.door1.scaleX = 0.7;
            this.door1.scaleY = 0.7;
            this.door1.alpha = 0.7;
            this.door2.alpha = 0.7;
            this.door2.scaleX = 0.7;
            this.door2.scaleY = 0.7;
        }
        if (name == 'two') {
            this.door1.scaleX = 0.5;
            this.door1.scaleY = 0.5;
            this.door2.scaleX = 0.5;
            this.door2.scaleY = 0.5;
        }
        if (name == 'three') {
            this.door1.scaleX = 0.4;
            this.door1.scaleY = 0.4;
            this.door2.scaleX = 0.4;
            this.door2.scaleY = 0.4;
        }
    }
    var d = __define,c=Door,p=c.prototype;
    p.checkOpen = function () {
        if (this.doorIsOpen) {
            this.door1.visible = true;
            this.door2.visible = false;
        }
        else {
            this.door2.visible = true;
            this.door1.visible = false;
        }
    };
    return Door;
}(egret.Sprite));
egret.registerClass(Door,'Door');
//# sourceMappingURL=Door.js.map