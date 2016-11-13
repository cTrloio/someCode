class Main extends egret.DisplayObjectContainer {
    //选择排序
    //基本思想：将第一个数字依次和所有数字比较  根据大小关系交换位置 每次归位一个数字 时间复杂度O(N^2)
    arr: Array<number> = [51,22,1,66,54,1,50];
    i: number;
    j: number;
    public constructor() {
        super();
        //从第一个数字开始 依次比较每一个数字
        for(this.i = 0;this.i < this.arr.length-1;this.i++){ 
            //和后面所有数字比较
            for(this.j = this.i + 1;this.j < this.arr.length;this.j++){ 
                //从小到大》交换位置
                if(this.arr[this.i]>this.arr[this.j]){ 
                    var t:number = this.arr[this.i];
                    this.arr[this.i] = this.arr[this.j];
                    this.arr[this.j] = t;
                }
            }
        }
        //输出数组
        for(var k = 0;k < this.arr.length;k++){ 
            console.log(this.arr[k]);
        }
    }
}