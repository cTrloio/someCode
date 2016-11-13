/**
 * Created by Administrator on 2016/4/7.
 */
class MusicSetBtn extends egret.Sprite{
    te1:egret.Bitmap;
    te2:egret.Bitmap;
    public clickNum=2;
    public constructor(){
        super();
        this.te1=Factory.createBitmapByName('musicOn');
        this.te2=Factory.createBitmapByName('musicOff');
        this.addChild(this.te1);
        this.addChild(this.te2);
        this.te1.visible=true;
        this.te2.visible=false;
    }
    public changeHd(){
        this.te1.visible=true;
        this.te2.visible=false;
    }
    public changeHd2(){
        this.te1.visible=false;
        this.te2.visible=true;
    }


}