class Main extends egret.DisplayObjectContainer {
//    桶排序：
//    基本思想：如果需要对0-100数字的范围内排序 则需要101个桶  某个数字出现一次  就在相应下标数组标记一次 然后依次输出数组
//    时间复杂度：O(M+N)  速度快，但非常浪费空间，适用于一定范围内 数据量较多时使用
    book: Array<number> = new Array(101);
    num: Array<number> = [51,22,1,66,54,1,50];
    k: number;
    public constructor() {
        super();
        //把每个桶初始化为0
        for(var l = 0;l <= 100;l++){ 
            this.book[l] = 0;
        }
        //将需要排序的数字放入相应的桶中 标记为++
        for(var i = 0; i < this.num.length; i++){
            this.book[this.num[i]]+=1;
        }
        //依次判断1-100编号的桶 从大到小排序
        for(this.k = 100;this.k >= 0; this.k--){ 
            // 出现了几次就输出几次
            for(var j = 1; j <= this.book[this.k]; j++){
                console.log(this.k);
            }
        }
    }
}