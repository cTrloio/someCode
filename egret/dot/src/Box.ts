/**
 * Created by Administrator on 2016/3/14.
 */
class Box extends egret.Sprite {
    box:egret.Bitmap;
    public name:string = '';
    public vy:number = 0;

    public constructor(num:number) {
        super();
        if (num == 1) {
            this.box = Factory.createBitmapByName('t1');
        }
        if (num == 2) {
            this.box = Factory.createBitmapByName('t2');
        }
        if (num == 3) {
            this.box = Factory.createBitmapByName('t3');
        }
        if (num == 4) {
            this.box = Factory.createBitmapByName('t4');
        }
        this.box.anchorOffsetX = this.box.width/2;
        this.box.anchorOffsetY = this.box.height/2;
        this.addChild(this.box);
    }
}