var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.data = [0, 2, 3, 5, 8, 9, 10, 18, 26, 32, 6]; //在最后直接放入一个6 (如果小于2则会出错),
        this.dataRight = [0, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.len = 9;
        this.t = 1;
        this.len++;
        while (this.t != 0) {
            if (this.data[this.dataRight[this.t]] > this.data[this.len]) {
                this.dataRight[this.len] = this.dataRight[this.t];
                this.dataRight[this.t] = this.len;
                break;
            }
            this.t = this.dataRight[this.t];
        }
        this.t = 1;
        while (this.t != 0) {
            console.log(this.data[this.t]);
            this.t = this.dataRight[this.t];
        }
    }
    var d = __define,c=Main,p=c.prototype;
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,'Main');
