
class Spider extends egret.Sprite{
    spider:egret.Bitmap;
    public constructor(){
        super();
        this.spider  = Factory.createBitmapByName("spider");
        this.addChild(this.spider);
    }
}