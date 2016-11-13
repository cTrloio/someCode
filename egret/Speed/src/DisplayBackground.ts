
class DisplayBackground extends egret.Sprite{
    disBackground:egret.Bitmap;
    public constructor(){
        super();
        this.disBackground  = Factory.createBitmapByName("displayBackground");
        this.addChild(this.disBackground);
    }
}