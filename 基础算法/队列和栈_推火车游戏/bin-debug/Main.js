var Main = (function (_super) {
    __extends(Main, _super);
    //出现过就 book[t]=1; 拿走后book[t]=0 类似桶排序 用来判断是否可以赢牌 (这样可以避免循环所有牌面去判断是否赢牌)
    function Main() {
        _super.call(this);
        //游戏规则：
        //将一分扑克平均分为2分，分别出牌，如果某人打出的牌和台面上的牌相同，就拿走将两张相同牌及其中间的所有牌拿走，放到自己手牌的末尾
        //任意一个人手牌为0 则对手胜
        //写一个程序判断谁会获胜，假定牌面只有1-9
        //出牌就是出队，赢牌就是入队(出栈)，打出一张牌相当于入栈
        //需要两个队列，一个栈 模拟游戏  假定两人各有6张牌 桌面上最多存在9张牌 因为只有九中牌 相同时会被赢走
        this.lsy = [0, 2, 4, 1, 2, 5, 6,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //玩家1   队列1
        this.lsyHead = 1;
        this.lsyTail = 7;
        this.tt = [0, 3, 1, 3, 5, 6, 4,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //玩家2   队列2
        this.ttHead = 1;
        this.ttTail = 7;
        this.tab = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //栈  桌面
        this.tabTop = 0;
        this.book = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //len==10;用来标记出现过的牌 
        //        for(var i = 1;i <= this.tabTop;i++){  //遍历桌上每一张牌 
        //            if(t == this.tab[i]) {  //和t比较
        //                flag = 1;           //相同的话表示可以赢牌
        //                break;
        //            }
        //        }
        while (this.lsyHead < this.lsyTail && this.ttHead < this.ttTail) {
            //lsy先亮出一张牌 >> lsy出队 tab 入栈      t==暂时保存刚打出的一张牌
            var t = this.lsy[this.lsyHead];
            if (this.book[t] == 0) {
                this.lsyHead++; //lsy打出一张牌 出队
                this.tabTop++; //栈顶++
                this.tab[this.tabTop] = t; //打出的牌放到桌子上  入栈
                this.book[t] = 1; //标记桌面上有了一张为t的牌
            }
            else {
                //这里拿走了'开始的相同牌'
                this.lsyHead++; //lsy打出一张牌 出队
                this.lsy[this.lsyTail] = t; //将刚打出的牌放到手牌的末尾
                this.lsyTail++; //将队尾指针向后移动
                //这里拿走了'相同牌之间'的牌
                while (this.tab[this.tabTop] != t) {
                    this.book[this.tab[this.tabTop]] = 0; //取消可以赢的那张牌在桌子上的标记
                    this.lsy[this.lsyTail] = this.tab[this.tabTop]; //放入lsy的队尾
                    this.lsyTail++; //入队一个 队尾标记向后移动一位
                    this.tabTop--; //栈里牌减少一张 栈顶标记--
                }
                //这里拿走了'后面的相同牌'
                this.book[this.tab[this.tabTop]] = 0; //取消'后面相同牌'在桌面上的标记
                this.lsy[this.lsyTail] = this.tab[this.tabTop]; //拿走后面相同牌放到lsy队尾
                this.lsyTail++; //lsy队尾后移
                this.tabTop--; //桌面栈顶--
            }
            if (this.lsyHead == this.lsyTail) {
                break;
            }
            /***************tt类似lsy出牌过程*********************************************************/
            var y = this.tt[this.ttHead];
            if (this.book[y] == 0) {
                this.ttHead++;
                this.tabTop++;
                this.tab[this.tabTop] = y;
                this.book[y] = 1;
            }
            else {
                //这里拿走了'开始的相同牌'
                this.ttHead++;
                this.tt[this.ttTail] = y;
                this.ttTail++;
                //这里拿走了'相同牌之间'的牌
                while (this.tab[this.tabTop] != y) {
                    this.book[this.tab[this.tabTop]] = 0;
                    this.tt[this.ttTail] = this.tab[this.tabTop];
                    this.ttTail++;
                    this.tabTop--;
                }
                //这里拿走了'后面的相同牌'
                this.book[this.tab[this.tabTop]] = 0;
                this.tt[this.ttTail] = this.tab[this.tabTop];
                this.ttTail++;
                this.tabTop--;
            }
        }
        //判定结果
        if (this.ttHead == this.ttTail) {
            console.log('lsy赢了');
            console.log('lsy手牌为：');
            for (var i = this.lsyHead; i <= this.lsyTail - 1; i++) {
                console.log(this.lsy[i]);
            }
            //如果桌面上有牌 则输出
            if (this.tabTop > 0) {
                console.log('桌面上的牌为');
                for (var j = 1; j <= this.tabTop; j++) {
                    console.log(this.tab[j]);
                }
            }
            else {
                console.log('桌面上没牌了');
            }
        }
        else {
            console.log('tt赢了');
            console.log('tt手牌为：');
            for (var i = this.ttHead; i <= this.ttTail - 1; i++) {
                console.log(this.tt[i]);
            }
            //如果桌面上有牌 则输出
            if (this.tabTop > 0) {
                console.log('桌面上的牌为');
                for (var j = 1; j <= this.tabTop; j++) {
                    console.log(this.tab[j]);
                }
            }
            else {
                console.log('桌面上没牌了');
            }
        }
    }
    var d = __define,c=Main,p=c.prototype;
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,'Main');
