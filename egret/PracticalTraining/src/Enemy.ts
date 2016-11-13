/**
 * Created by Administrator on 2015/12/4.
 */
class Enemy extends egret.Sprite{
    enemy1:egret.Bitmap;
    public vx:number=0;
    public vy:number=0;
    public constructor(name:string){
        super();
        if(name == 'soul1'){
            this.enemy1 = Factory.createBitmapByName("enemySoul");
            this.addChild(this.enemy1);
            this.enemy1.anchorOffsetX=this.enemy1.width/2;
            this.enemy1.anchorOffsetY=this.enemy1.height/2;
            this.enemy1.scaleX=0.7;
            this.enemy1.scaleY=0.7;
        }
        if(name == 'soul2'){
            this.enemy1 = Factory.createBitmapByName("enemyTwo");
            this.addChild(this.enemy1);
            this.enemy1.anchorOffsetX=this.enemy1.width/2;
            this.enemy1.anchorOffsetY=this.enemy1.height/2;
            this.enemy1.scaleX=0.7;
            this.enemy1.scaleY=0.7;
        }

    }
}