/**
 * Created by Administrator on 2016/3/14.
 */
class Background extends egret.Sprite {
    bg:egret.Bitmap;

    public constructor(name:string) {
        super();
        this.bg = Factory.createBitmapByName(name);
        this.addChild(this.bg);
    }
}