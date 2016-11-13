/**
 * Created by Administrator on 2016/4/1.
 */
class Background extends egret.Sprite{
    bg:egret.Bitmap;
    public txt:egret.TextField=new egret.TextField();
    public constructor(name:string){
        super();
        this.bg=Factory.createBitmapByName(name);
        this.addChild(this.bg);
        this.txt.text=0+'';
    }
}