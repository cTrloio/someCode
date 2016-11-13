// TypeScript file
class Bullet extends egret.Sprite {

    private _bitMap: egret.Bitmap;
    vx: number = 0;
    vy: number = 0;
    bullSpeed: number = 10; //移动速度

    public constructor(who:string) {
        super();
        if(who == GameData.boosType1){
            this._bitMap = GameData.CREATE_BITMAP('bullet_e1');
            this.bullSpeed = 8;

        }else if(who == GameData.boosType2){
            this._bitMap = GameData.CREATE_BITMAP('bullet_e2');
            this.bullSpeed = 9;

        }else if(who == GameData.boosType3){
            this._bitMap = GameData.CREATE_BITMAP('bullet_e3');
            this._bitMap.scaleY = 0.6;
            this.bullSpeed = 7;
            
        }else{
            this._bitMap = GameData.CREATE_BITMAP('bullet_png');
            this.bullSpeed = 10;
        }
        this.anchorOffsetX = this._bitMap.width / 2;
        this.anchorOffsetY = this._bitMap.height / 2;
        this.addChild(this._bitMap);

    }
}