/**
 * Created by Administrator on 2015/10/30.
 */
class YouLost extends egret.Sprite{
    public constructor(){
        super();
        var yl:egret.Bitmap = Factory.createBitmapByName("youLost");
        this.addChild(yl);
    }
}