/**
 * Created by Administrator on 2016/4/4.
 */
class promptPic extends egret.Sprite{
    te:egret.Bitmap;
    public pic:egret.Bitmap;
    public constructor(picName:string){
        super();
        this.te=Factory.createBitmapByName('promptPanel');
        this.addChild(this.te);

        this.pic=new egret.Bitmap();
        this.pic=Factory.createBitmapByJsonName('interpret',picName);
        this.addChild(this.pic);
        this.pic.x=this.te.x+40;
        this.pic.y=this.te.y+35;
    }
}