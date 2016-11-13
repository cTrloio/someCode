/**
 * Created by Administrator on 2016/3/14.
 */
class Character extends egret.Sprite {
    chara:egret.Bitmap;
    public life:number = 2;
    enemy0:egret.Bitmap;
    enemy1:egret.Bitmap;
    enemy2:egret.Bitmap;
    enemy3:egret.Bitmap;
    enemy4:egret.Bitmap;
    eArrIdle:Array<egret.Bitmap> = [];
    timer:egret.Timer;
    timer2:egret.Timer;

    public constructor(name:string) {
        super();
        if (name == 'black') {
            this.enemy0 = Factory.createBitmapByName('chara1');
            this.addChild(this.enemy0);
            this.enemy1 = Factory.createBitmapByName('chara2');
            this.addChild(this.enemy1);
            this.enemy2 = Factory.createBitmapByName('chara3');
            this.addChild(this.enemy2);
            this.enemy3 = Factory.createBitmapByName('chara4');
            this.addChild(this.enemy3);
            this.enemy4 = Factory.createBitmapByName('chara5');
            this.addChild(this.enemy4);
            this.eArrIdle.push(this.enemy0);
            this.eArrIdle.push(this.enemy1);
            this.eArrIdle.push(this.enemy2);
            this.eArrIdle.push(this.enemy3);
            this.eArrIdle.push(this.enemy4);
            this.enemy0.visible = true;
            this.enemy1.visible = false;
            this.enemy2.visible = false;
            this.enemy3.visible = false;
            this.enemy4.visible = false;
            this.enemy0.anchorOffsetX = this.enemy0.width / 2;
            this.enemy1.anchorOffsetX = this.enemy1.width / 2;
            this.enemy2.anchorOffsetX = this.enemy2.width / 2;
            this.enemy3.anchorOffsetX = this.enemy2.width / 2;
            this.enemy4.anchorOffsetX = this.enemy2.width / 2;
            this.enemy0.anchorOffsetY = this.enemy0.height / 2;
            this.enemy1.anchorOffsetY = this.enemy1.height / 2;
            this.enemy2.anchorOffsetY = this.enemy2.height / 2;
            this.enemy3.anchorOffsetY = this.enemy2.height / 2;
            this.enemy4.anchorOffsetY = this.enemy2.height / 2;
            this.timer = new egret.Timer(100);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.changeHd, this);
            this.timer.start();
        }
        if (name == 'blue') {
            this.enemy0 = Factory.createBitmapByName('chara01');
            this.addChild(this.enemy0);
            this.enemy1 = Factory.createBitmapByName('chara02');
            this.addChild(this.enemy1);
            this.enemy2 = Factory.createBitmapByName('chara03');
            this.addChild(this.enemy2);
            this.enemy3 = Factory.createBitmapByName('chara04');
            this.addChild(this.enemy3);
            this.enemy4 = Factory.createBitmapByName('chara05');
            this.addChild(this.enemy4);
            this.eArrIdle.push(this.enemy0);
            this.eArrIdle.push(this.enemy1);
            this.eArrIdle.push(this.enemy2);
            this.eArrIdle.push(this.enemy3);
            this.eArrIdle.push(this.enemy4);
            this.enemy0.visible = true;
            this.enemy1.visible = false;
            this.enemy2.visible = false;
            this.enemy3.visible = false;
            this.enemy4.visible = false;
            this.enemy0.anchorOffsetX = this.enemy0.width / 2;
            this.enemy1.anchorOffsetX = this.enemy1.width / 2;
            this.enemy2.anchorOffsetX = this.enemy2.width / 2;
            this.enemy3.anchorOffsetX = this.enemy2.width / 2;
            this.enemy4.anchorOffsetX = this.enemy2.width / 2;
            this.enemy0.anchorOffsetY = this.enemy0.height / 2;
            this.enemy1.anchorOffsetY = this.enemy1.height / 2;
            this.enemy2.anchorOffsetY = this.enemy2.height / 2;
            this.enemy3.anchorOffsetY = this.enemy2.height / 2;
            this.enemy4.anchorOffsetY = this.enemy2.height / 2;
            this.timer2 = new egret.Timer(100);
            this.timer2.addEventListener(egret.TimerEvent.TIMER, this.changeHd2, this);
            this.timer2.start();
        }
    }

    num:number = 0;
    num2:number = 0;

    private changeHd() {
        this.num++;
        if (this.num > 4) {
            this.num = 0;
        }
        for (var i = 0; i < this.eArrIdle.length; i++) {
            this.eArrIdle[i].visible = false;
        }
        this.eArrIdle[this.num].visible = true;
    }

    private changeHd2() {
        this.num2++;
        if (this.num2 > 4) {
            this.num2 = 0;
        }
        for (var i = 0; i < this.eArrIdle.length; i++) {
            this.eArrIdle[i].visible = false;
        }
        this.eArrIdle[this.num2].visible = true;
    }

}