/**
 * Created by Administrator on 2016/3/14.
 */
var Factory = (function () {
    function Factory() {
    }
    var d = __define,c=Factory,p=c.prototype;
    Factory.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Factory.createBitmapByJsonName = function (jsonName, sheetName) {
        var result = new egret.Bitmap();
        var spriteSheet = RES.getRes(jsonName);
        result.texture = spriteSheet.getTexture(sheetName);
        return result;
    };
    return Factory;
}());
egret.registerClass(Factory,'Factory');
//# sourceMappingURL=Factory.js.map