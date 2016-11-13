/**
 * Created by Administrator on 2015/12/2.
 */
class Background extends egret.Sprite{
    bg:egret.Bitmap;
    public constructor(name:string){
        super();
        if(name == 'level0'){
            this.bg = Factory.createBitmapByName("levelStart");
            this.addChild(this.bg);
        }
        if(name == 'level1'){
            this.bg = Factory.createBitmapByName("levelOne");
            this.addChild(this.bg);
        }
        if(name == 'level2'){
            this.bg = Factory.createBitmapByName("levelTwo");
            this.addChild(this.bg);
        }
        if(name == 'level3'){
            this.bg = Factory.createBitmapByName("levelThree");
            this.addChild(this.bg);
        }
        if(name == 'level4'){
            this.bg = Factory.createBitmapByName("levelEnd");
            this.addChild(this.bg);
        }
    }
}