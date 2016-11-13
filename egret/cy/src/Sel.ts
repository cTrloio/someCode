/**
 * Created by Administrator on 2016/4/5.
 */
class Sel extends egret.Sprite{
    sel:egret.Bitmap;   //选关图片
    se2:egret.Bitmap;   //选关图片
    public selSceneNum:number=0;
    public constructor(){
        super();
        this.sel=Factory.createBitmapByName('sel');
        this.addChild(this.sel);
        this.sel.anchorOffsetX=this.sel.width/2;
        this.sel.anchorOffsetY=this.sel.height/2;
        this.sel.visible=true;

        this.se2=Factory.createBitmapByName('selLight');
        this.addChild(this.se2);
        this.se2.anchorOffsetX=this.se2.width/2;
        this.se2.anchorOffsetY=this.se2.height/2;
        this.se2.visible=false;
    }
    public changeHd(){
        this.sel.visible=false;
        this.se2.visible=true;
    }
}