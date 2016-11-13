/**
 * Created by Administrator on 2016/3/17.
 */
class CtrlButton extends egret.Sprite {
    btn1:egret.Bitmap;

    public constructor(name:string) {
        super();
        this.btn1 = Factory.createBitmapByName(name);
        this.addChild(this.btn1);
        this.btn1.anchorOffsetX = this.btn1.width / 2;
        this.btn1.anchorOffsetY = this.btn1.height / 2;
    }
}