// TypeScript file
class Enemy extends egret.Sprite {
    public _bitMap: egret.Bitmap;
    private _root:any;
    public vx: number;
    public vy: number;
    public life: number;
    public speed: number;

    public constructor(type:string,root) {
        super();
        this._root = root;
        if(type == GameData.enemyType1){
            this._bitMap = GameData.CREATE_BITMAP('enemy_png');
            this.life = 2;
            this.speed = 4;
        }
        else if(type == GameData.enemyType2){
            this._bitMap = GameData.CREATE_BITMAP('enemy2_png');
            this.life = 1;
            this.speed = 8;
        }
        else{
            this._bitMap = GameData.CREATE_BITMAP('enemy3_png');
            this.life = 3;
            this.speed = 3;
        }
        this._bitMap.anchorOffsetX = this._bitMap.width / 2;
        this._bitMap.anchorOffsetY = this._bitMap.height / 2;
        this.addChild(this._bitMap);
    }

    public showWord() {
        var word = new Word('word');
        word.x = this.x;
        word.y = this.y;
        this._root.addChild(word);
        
        var tw = egret.Tween.get(word);
        tw.wait(700).to({ alpha: 0 }, 200).call(() => {
            this._root.removeChild(word);
        });
    }

    public createStar() {
        if (GameData.getRandomNum() > 0.8) {
            var type = GameData.getRandomNum() > 0.5 ? GameData.starType1 : GameData.starType2;
            var star = new Word(type);
            star.x = this.x;
            star.y = this.y;
            this._root.addChild(star);
            this._root.starArr.push(star);
        }
    }


}