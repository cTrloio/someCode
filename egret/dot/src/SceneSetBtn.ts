/**
 * Created by Administrator on 2016/3/19.
 */
class SceneSetBtn extends egret.Sprite {
    te:egret.Bitmap;

    public constructor(name:string) {
        super();
        this.te = Factory.createBitmapByName(name);
        this.addChild(this.te);
        this.te.anchorOffsetX = this.te.width / 2;
        this.te.anchorOffsetY = this.te.height / 2;
    }

}