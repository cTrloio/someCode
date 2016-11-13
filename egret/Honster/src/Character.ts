/**
 * Created by Administrator on 2015/10/30.
 */
class Character extends egret.Sprite{

    public constructor(){
        super();
        var chara:egret.Bitmap = Factory.createBitmapByName("character");
        this.addChild(chara);
    }
}