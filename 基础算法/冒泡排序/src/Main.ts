class Main extends egret.DisplayObjectContainer {
    //冒泡排序
    //核心思想：每次比较两个相邻的元素 如果他们的顺序错误就把他们交换过来  时间复杂度：O(N^2)
    arr: Array<number> = [51,22,1,66,54,1,50];
    i: number;
    j: number;
    public constructor() {
        super();
        //对n个数排序 需要进行n-1次
        for(this.i = 0;this.i < this.arr.length - 1; this.i++){
            //从第一个数比到最后一个数(比过的不需要再比)
            for(this.j = 0;this.j < this.arr.length - this.i; this.j++){  
                //比较大小并交换
                if(this.arr[this.j + 1] > this.arr[this.j]){  
                    var t: number = this.arr[this.j];
                    this.arr[this.j] = this.arr[this.j+1];
                    this.arr[this.j+1] = t;
                }
            }
        }
        //输出结果
        for(var k = 0;k < this.arr.length;k++){  
            console.log(this.arr[k]);
        }
    }
}