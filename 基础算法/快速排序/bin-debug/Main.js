var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        //快速排序
        //基本思想：基于二分思想，
        //设置第一个数为基准数，然后先从右向左找到一个小于基准数的数j，再从左往右找到一个大于基准数的数i，然后交换他们，
        //(在i和j相遇时 交换基准数和i&j相遇的那个数) 然后此时第一个数设置为新的基准数
        //最后分别递归上述过程
        //每一轮都会将基准数归位，直到所有基准数归位
        //最坏情况是O(N^2) 最好情况为O（0）平均时间复杂度O（NlogN）
        this.arr = [51, 22, 1, 66, 54, 1, 51];
        this.i = 0;
        this.j = 0;
        this.t = 0;
        this.quickSort(0, this.arr.length - 1);
        //输出排序后结果
        for (var i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i]);
        }
    }
    var d = __define,c=Main,p=c.prototype;
    //快排
    p.quickSort = function (left, right) {
        if (left > right) {
            return;
        }
        this.temp = this.arr[left];
        this.i = left; //指向数组中第一个数
        this.j = right; //指向数组中最后一个数
        //在i!=j(下标不等) 也就是不相遇时循环
        while (this.i != this.j) {
            //先从右向左寻找一个比基准数小的数字
            while (this.arr[this.j] >= this.temp && this.i < this.j) {
                this.j--;
            }
            //再从左向右寻找一个比基准数大的数字
            while (this.arr[this.i] <= this.temp && this.i < this.j) {
                this.i++;
            }
            //在i和j不相遇时交换他们
            if (this.i < this.j) {
                this.t = this.arr[this.i];
                this.arr[this.i] = this.arr[this.j];
                this.arr[this.j] = this.t;
            }
        }
        //在i和j相遇时  将基准数归位，也就是将基准数和他们相遇的数字交换位置
        this.arr[left] = this.arr[this.i];
        this.arr[this.i] = this.temp;
        //继续处理左边 递归 左边的列尾是 i和j相遇的位置-1       
        this.quickSort(left, this.i - 1);
        //继续处理右边 递归 右边基准数为 i和j相遇的位置+1  
        this.quickSort(this.i + 1, right);
        return;
    };
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,'Main');
