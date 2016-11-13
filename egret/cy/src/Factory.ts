/**
 * Created by Administrator on 2016/3/14.
 */
class Factory{
    static createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    static createBitmapByJsonName(jsonName:string,sheetName:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var spriteSheet:egret.SpriteSheet=RES.getRes(jsonName);
        result.texture =spriteSheet.getTexture(sheetName);
        return result;
    }
}