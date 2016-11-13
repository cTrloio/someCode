/**
 * Created by Administrator on 2016/4/5.
 */
class Btn extends egret.Sprite{
    startBtn:egret.Bitmap;
    public constructor(){
        super();
        this.startBtn=Factory.createBitmapByName('StartBtn');
        this.addChild(this.startBtn);
        this.startBtn.anchorOffsetX=this.startBtn.width/2;
        this.startBtn.anchorOffsetY=this.startBtn.height/2;
        this.startBtn.scaleY=0.9;
    }
}