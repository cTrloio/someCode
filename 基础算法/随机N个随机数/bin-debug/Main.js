var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.createRanNum(5, 10);
    }
    var d = __define,c=Main,p=c.prototype;
    p.createRanNum = function (count, distancd) {
        var isRanNum = true;
        var r = new Array(count);
        if (count > distancd) {
            console.log('数量大于范围');
        }
        else {
            //产生三个随机数
            for (var i = 1; i <= count; i++) {
                r[i] = Math.round(Math.random() * (distancd - 1)) + 1;
            }
            //判断随机的三个数是否重复
            for (var i = count; i >= 1; i--) {
                for (var j = count; j >= 1; j--) {
                    if ((i != j) && (r[i] == r[j])) {
                        //可以输出
                        isRanNum = false;
                    }
                }
            }
            //没有重复>>可以输出
            if (isRanNum) {
                for (var k = 1; k <= count; k++) {
                    console.log(r[k]);
                }
            }
            else {
                this.createRanNum(count, distancd);
            }
        }
    };
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,'Main');
