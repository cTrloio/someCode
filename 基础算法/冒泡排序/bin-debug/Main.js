var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        //冒泡排序
        //核心思想：每次比较两个相邻的元素 如果他们的顺序错误就把他们交换过来  时间复杂度：O(N^2)
        this.arr = [51, 22, 1, 66, 54, 1, 50];
        //对n个数排序 需要进行n-1次
        for (this.i = 0; this.i < this.arr.length - 1; this.i++) {
            //从第一个数比到最后一个数(比过的不需要再比)
            for (this.j = 0; this.j < this.arr.length - this.i; this.j++) {
                //比较大小并交换
                if (this.arr[this.j + 1] > this.arr[this.j]) {
                    var t = this.arr[this.j];
                    this.arr[this.j] = this.arr[this.j + 1];
                    this.arr[this.j + 1] = t;
                }
            }
        }
        //输出结果
        for (var k = 0; k < this.arr.length; k++) {
            console.log(this.arr[k]);
        }
    }
    var d = __define,c=Main,p=c.prototype;
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,'Main');
