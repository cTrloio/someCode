/**
 * Created by Administrator on 2015/12/4.
 */

class End extends egret.Sprite {
    end:egret.Bitmap;
    public constructor(name:string) {
        super();

        if(name == 'one'){
            this.end = Factory.createBitmapByName("endPlace1");
            this.addChild(this.end);
            this.end.scaleX=0.5;
            this.end.scaleY=0.5;
            this.end.anchorOffsetX=this.end.width/2;
            this.end.anchorOffsetY=this.end.height/2;
        }
        if(name == 'two'){
            this.end = Factory.createBitmapByName("endPlace2");
            this.addChild(this.end);
            this.end.scaleX=0.3;
            this.end.scaleY=0.3;
            this.end.anchorOffsetX=this.end.width/2;
            this.end.anchorOffsetY=this.end.height/2;
        }
        if(name == 'three'){
            this.end = Factory.createBitmapByName("endPlace3");
            this.addChild(this.end);
            this.end.scaleX=0.3;
            this.end.scaleY=0.3;
            this.end.anchorOffsetX=this.end.width/2;
            this.end.anchorOffsetY=this.end.height/2;
        }

    }
}