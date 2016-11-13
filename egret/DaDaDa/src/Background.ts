// TypeScript file
class Background extends egret.Sprite{

    public constructor(){
        super();
        var bg = GameData.CREATE_BITMAP("bg_png");
        this.addChild(bg);
    }
    
}