var Main = (function (_super) {
    __extends(Main, _super);
    //?3 *6528 = 3? * 8256;
    //枚举 即 穷举    列出每一种可能  符合条件的输出结果
    function Main() {
        _super.call(this);
        for (var i = 1; i <= 9; i++) {
            if ((i * 10 + 3) * 6528 == (30 + i) * 8256) {
                console.log(i);
            }
        }
    }
    var d = __define,c=Main,p=c.prototype;
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,'Main');
