/**
 * Created by Administrator on 2016/3/14.
 */
var Box = (function (_super) {
    __extends(Box, _super);
    function Box(num) {
        _super.call(this);
        this.name = '';
        this.vy = 0;
        if (num == 1) {
            this.box = Factory.createBitmapByName('t1');
        }
        if (num == 2) {
            this.box = Factory.createBitmapByName('t2');
        }
        if (num == 3) {
            this.box = Factory.createBitmapByName('t3');
        }
        if (num == 4) {
            this.box = Factory.createBitmapByName('t4');
        }
        this.box.anchorOffsetX = this.box.width / 2;
        this.box.anchorOffsetY = this.box.height / 2;
        this.addChild(this.box);
    }
    var d = __define,c=Box,p=c.prototype;
    return Box;
}(egret.Sprite));
egret.registerClass(Box,'Box');
//# sourceMappingURL=Box.js.map