// TypeScript file
class Word extends egret.Sprite{
    private bitmap:egret.Bitmap;
    public type:string;
    public constructor(name){
        super();
        if(name == 'word'){
            this.bitmap = GameData.CREATE_BITMAP('word_png');
        }
        else if(name == GameData.starType1){
            this.bitmap = GameData.CREATE_BITMAP('star1');
        }
        else{
            this.bitmap = GameData.CREATE_BITMAP('star2');
        }
        
        this.type = name;

        this.anchorOffsetX = this.bitmap.width/2;
        this.anchorOffsetY = this.bitmap.height/2;
        this.addChild(this.bitmap);
    }

}