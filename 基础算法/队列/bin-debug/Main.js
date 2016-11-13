var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        //解密队列： 规则是 首先将第一个数删除，在讲第二个数放到这串数的末尾，再将第三个数删除，再将第四个数放到末尾。。。。
        //加密的数字为 6，3,1,7,5,8,9,2,4
        //使用队列特性解密，只能在队首删除，在队尾添加，head,tail分别指向队首队尾，head==tail 队空，先进先出
        this.arr = [6, 3, 1, 7, 5, 8, 9, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.head = 0; //指向队首
        this.tail = 9; //指向队尾+1
        this.arr.push(6); //初始化
        this.arr.push(3);
        this.arr.push(1);
        this.arr.push(7);
        this.arr.push(5);
        this.arr.push(8);
        this.arr.push(9);
        this.arr.push(2);
        this.arr.push(4);
        while (this.head < this.tail) {
            console.log(this.arr[this.head]); //打印队首 并出队
            this.head++;
            this.arr[this.tail] = this.arr[this.head]; //将第二个数字放到队尾
            this.tail++; //队尾标记向后移动
            this.head++; //队首出队
        }
        //输出 615947283
    }
    var d = __define,c=Main,p=c.prototype;
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,'Main');
