/**
 * Created by Administrator on 2015/11/18.
 */
class Background extends egret.Sprite{
    background:egret.Bitmap;
    public constructor(){
        super();
        this.background  = Factory.createBitmapByName("background");
        this.addChild(this.background);
    }
}