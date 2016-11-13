/**
 * Created by Administrator on 2015/10/30.
 */
class Star extends egret.Sprite{
    star:egret.Bitmap;
    public launched:boolean;
    public direction:string="left";
    public constructor(){
        super();
        this.star= Factory.createBitmapByName("star");
        this.addChild(this.star);
        this.anchorOffsetX=this.star.width/2;
        this.anchorOffsetY=this.star.height/2;
    }

}