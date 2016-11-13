/**
 * Created by Administrator on 2015/12/8.
 */
class GameOver extends egret.Sprite{
    gameover:egret.Bitmap;
    public vy:number=0;
    public constructor(){
        super();
        this.gameover=Factory.createBitmapByName('gameOver');
        this.addChild(this.gameover);
        this.gameover.anchorOffsetX =this.gameover.width/2;
    }
}