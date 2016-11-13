/**
 * Created by Administrator on 2015/11/18.
 */
class Box extends egret.Sprite{
    box:egret.Bitmap;


    public constructor(){
        super();
        this.box  = Factory.createBitmapByName("box");
        this.addChild(this.box);
    }
}