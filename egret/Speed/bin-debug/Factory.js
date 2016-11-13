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
    return Factory;
}());
egret.registerClass(Factory,'Factory');
//# sourceMappingURL=Factory.js.map