var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        // 栈 ： 后进先出  例子解密回文：
        // xyzyx 是回文  也就是正反读都有相同的字符序列
        //top  表示栈顶   mid 表示中点 mid=length/2-1;
        this.arr = [1, 2, 2, 1]; //待入栈
        this.stack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //栈
        this.top = 0; //标记栈顶
        this.mid = this.arr.length / 2 - 1; //问题在这里 
        this.next = 0;
        //将mid之前的字符依次入栈
        for (var i = 0; i < this.mid; i++) {
            this.top++;
            this.stack[this.top] = this.arr[i];
        }
        //判断所求数列长度 找出需要进行匹配的起始下标
        if (this.arr.length % 2 == 0) {
            this.next = this.mid + 1;
        }
        else {
            this.next = this.mid + 2;
        }
        //进行匹配
        for (var j = this.next; j <= this.arr.length - 1; j++) {
            if (this.arr[j] != this.stack[this.top]) {
                break;
            }
            this.top--;
        }
        //top为0  则说明栈内所有字符被匹配
        if (this.top == 0) {
            console.log('是回文');
        }
        else {
            console.log('不是回文');
        }
    }
    var d = __define,c=Main,p=c.prototype;
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,'Main');
