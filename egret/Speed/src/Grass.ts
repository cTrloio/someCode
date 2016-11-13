
class Grass extends egret.Sprite{
    grass:egret.Bitmap;
    public constructor(){
        super();
        this.grass  = Factory.createBitmapByName("grass");
        this.addChild(this.grass);
    }
}