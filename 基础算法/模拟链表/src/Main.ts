class Main extends egret.DisplayObjectContainer {
    data: Array<number> = [0,2,3,5,8,9,10,18,26,32,6]; //在最后直接放入一个6 (如果小于2则会出错),
    dataRight: Array<number> = [0,2,3,4,5,6,7,8,9,0];
    len: number = 9;
    t: number = 1;
    public constructor() {
        super();
        this.len++;
        while(this.t!=0){ 
            if(this.data[this.dataRight[this.t]] > this.data[this.len]){  //如果当前节点的下一个节点值大于待插入数字 则插入到中间
                this.dataRight[this.len] = this.dataRight[this.t];
                this.dataRight[this.t] = this.len;
                break;
            }
            this.t = this.dataRight[this.t];
        }
        this.t = 1;
        while(this.t!=0){
            console.log(this.data[this.t]);
            this.t = this.dataRight[this.t];
        }
        
    }
    
}