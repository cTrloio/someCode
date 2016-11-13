/**
 * Created by Administrator on 2015/12/3.
 */
class BorderBox extends egret.Sprite{
    bg:egret.Bitmap;
    public constructor(name:string) {
        super();
        if (name == 'her') {
            this.bg = Factory.createBitmapByName("herBorder");
            this.addChild(this.bg);
        }
        if (name == 'ver') {
            this.bg = Factory.createBitmapByName("verBorder");
            this.addChild(this.bg);
        }
    }
}