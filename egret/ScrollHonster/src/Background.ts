/**
 * Created by Administrator on 2015/10/30.
 */
class Background extends egret.Sprite{

    public constructor(){
        super();
        var bg:egret.Bitmap = Factory.createBitmapByName("bigBackground");
        this.addChild(bg);
    }
}