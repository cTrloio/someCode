/**
 * Created by Administrator on 2015/12/7.
 */
class TextPORTAL extends egret.Sprite{
    p:egret.Bitmap;
    o:egret.Bitmap;
    r:egret.Bitmap;
    t:egret.Bitmap;
    a:egret.Bitmap;
    l:egret.Bitmap;
    public vy:number=0;
    public constructor(name:string){
        super();
        if(name == 'p'){
            this.p=Factory.createBitmapByName('TextP');
            this.addChild(this.p);
        }
        if(name == 'o'){
            this.p=Factory.createBitmapByName('TextO');
            this.addChild(this.p);
        }
        if(name == 'r'){
            this.p=Factory.createBitmapByName('TextR');
            this.addChild(this.p);
        }
        if(name == 't'){
            this.p=Factory.createBitmapByName('TextT');
            this.addChild(this.p);
        }
        if(name == 'a'){
            this.p=Factory.createBitmapByName('TextA');
            this.addChild(this.p);
        }
        if(name == 'l'){
            this.p=Factory.createBitmapByName('TextL');
            this.addChild(this.p);
        }
    }
}