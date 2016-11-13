/**
 * Created by Administrator on 2016/3/31.
 */
var OneScene = (function (_super) {
    __extends(OneScene, _super);
    function OneScene() {
        _super.call(this);
        this.intdStr = '原意是从生到死去。后形容冒着生命危险，不顾个人安危。|' +
            '象征古代劳动人民征服自然的决心|' +
            '喜欢做某事，并在其中获得乐趣。|' +
            '弹琴、弈棋、写字、绘画。常以表示个人的文化素养。|' +
            '理由正确充分，说话气势就盛|' +
            '形容百花齐放，色彩艳丽。也比喻事物丰富多彩。|' +
            '坐在井底看天。比喻眼界下，见识少。|' +
            '喜事从天上掉下来。比喻突然遇到意想不到的喜事。|' +
            '指男女相爱立下誓言，表示爱情象山和海一样永恒不变。|' +
            '比喻要抓紧有利的时间和条件去做。|' +
            '三生：佛家指前生、今生、来生；三世都很幸运。比喻非常幸运。|' +
            '德：品德；望：声望。道德高尚，名望很大。|' +
            '使线的一头通过针眼。比喻从中联系拉拢。|' +
            '比喻遭到了巨大的打击。|' +
            '形容十分危险，很快就要掉下来，或不稳固，很快就要垮台。|' +
            '比喻人极有才华。|' +
            '形容非常害怕而微微发抖的样子。也形容小心谨慎的样子。|' +
            '重视男子，看轻女性。指轻视妇女的封建思想。|' +
            '前进和后退都难。比喻事情无法决定，因而难以行动。';
        this.sponStr = '先秦·李耳《老子》第50章：“出生入死，生之徒（途）十有三，死之徒十有三。”|' +
            '《山海经，海内经》羿上射十日，万民皆喜|' +
            '先秦·孔子《论语·述而》：“饭疏食饮水，曲肱而枕之，乐意在其中矣。”|' +
            '宋·孙光宪《北梦琐言》：“至于天文历数，琴棋书画，长笛胡琴，率梁朝朱异之流。”|' +
            '明·冯梦龙《喻世明言》第31卷：“便提我到阎罗殿前，我也理直气壮，不怕甚的。”|' +
            '宋·朱熹《春日》诗：“等闲识得东风面，万紫千红总是春。”|' +
            '唐·韩愈《原道》：“坐井而观天，日天小者，非天小也。”|' +
            '元·马致远《青衫泪》：“贵脚踏贱地，使下官喜从天降。”|' +
            '宋·辛弃疾《南乡子·赠妓》词：“别泪没些些，海誓山盟总是赊。”|' +
            '老舍《四世同堂》十九：“他决定趁热打铁，把话都说干净。”|' +
            '元·王实甫《西厢记》第一本第二折：“今难一见，是小生三生有幸矣。”|' +
            '宋·司马光《辞人对小殿札子》：“臣窃惟富弼三世辅臣，德高望重。”|' +
            '明·周楫《西湖二集》：“到黄府亲见小姐询其下落，做个穿针引线之人。”|' +
            '老舍《龙须沟》：要是我从中赚一个钱，天上现在有云影，教我五雷轰顶。|' +
            '明·罗贯中《三国演义》第104回：“众视之，见其色昏暗，摇摇欲坠。”|' +
            '明·陈汝元《金莲记·偕计》：“学富五车，才高八斗。”|' +
            '《诗经·小雅·小宴》：“战战兢兢，如临深渊，如履薄冰。”|' +
            '曲波《林海雪原》二十：“什么黄毛丫头，重男轻女的思想。”|' +
            '元·郑德辉《周公摄政》第一折：“娘娘道不放微臣进宫闱，进退两难为。”';
        // 4(n-1)___4n
        this.trueStr = '出生入死后羿射日乐在其中琴棋书画' +
            '理直气壮万紫千红坐井观天喜从天降山盟海誓趁热打铁' +
            '三生有幸德高望重穿针引线五雷轰顶摇摇欲坠才' +
            '高八斗战战兢兢重男轻女进退两难';
        // 扰乱字符
        this.falseStr = '十而立交加寿比南崩地裂一笑千金牛郎织女' +
            '力大无比难耐高温获得乐趣疏食饮水曲肱而枕乐意在其中文化素养历' +
            '数长笛胡琴率梁朝朱异认错赔罪阎罗殿百花齐放周公摄政兄弟相称关系亲' +
            '密周老爷显得殷勤错杂出现雷电';
        this.tailStrArr = []; //乱序其他字符
        this.intdArr = []; //正序成语解释
        this.sponArr = []; //正序成语出处
        this.testArr = []; // 每一关的所有字符=(正序四字成语+乱序其他字符)
        this.testArr1 = []; // 正序四字成语
        this.testArr2 = []; // 乱序其他字符
        this.collArr = []; // 容纳成语的容器数组
        this.teArr = []; // 所有字数组
        this.cyNum = 0;
        this.str = '';
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStageHd, this);
    }
    var d = __define,c=OneScene,p=c.prototype;
    p.addToStageHd = function () {
        this.addStaticObject();
        this.addObjectHd();
    };
    p.addStaticObject = function () {
        this.mm = new MusicManger();
        this.mm.playBgm();
        this.mm.volumeIsOne();
        this.bg = new Background('bg');
        this.addChild(this.bg);
        //正序成语解释数组
        this.intdArr = this.intdStr.split('|');
        //正序成语出处数组
        this.sponArr = this.sponStr.split('|');
        //返回按钮
        this.backBtn = new Background('backBtn');
        this.addChild(this.backBtn);
        this.backBtn.x = 20;
        this.backBtn.y = 10;
        this.backBtn.touchEnabled = true;
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHd, this);
        //音量按钮
        this.mOn = new MusicSetBtn();
        this.addChild(this.mOn);
        this.mOn.x = 460 - this.mOn.width;
        this.mOn.y = 10;
        this.mOn.touchEnabled = true;
        this.mOn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicHd, this);
    };
    p.musicHd = function () {
        if (this.mOn.clickNum % 2 == 1) {
            this.mOn.changeHd();
            this.mm.volumeIsOne();
        }
        else {
            this.mOn.changeHd2();
            this.mm.volumeIsZero();
        }
        this.mOn.clickNum++;
    };
    p.backHd = function () {
        this.mm.playclickM();
        this.intdArr = [];
        this.sponArr = [];
        this.backBtn.touchEnabled = false;
        this.backBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backHd, this);
        this.removeChild(this.bg);
        this.removeChild(this.backBtn);
        this.removeChild(this.mOn);
        this.mOn.touchEnabled = false;
        this.mOn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.musicHd, this);
        this.deleHd();
        this.mm.stopBgm();
        this.dispatchEvent(new egret.Event('goSelectScene'));
    };
    p.addObjectHd = function () {
        //判断成语容器
        for (var i = 0; i < 4; i++) {
            var c = new cyTest();
            c.x = i * 55 + 132;
            c.y = 435;
            this.addChild(c);
            this.collArr.push(c);
        }
        //提示图片容器
        this.promPanel = new promptPic(SelectScene.goSceneNum + '');
        this.addChild(this.promPanel);
        this.promPanel.x = 20;
        this.promPanel.y = 100;
        //扰乱字符>变成数组
        this.tailStrArr = this.falseStr.split('');
        //截取4字成语
        this.testArr1 = this.trueStr.substring((4 * (SelectScene.goSceneNum - 1)), ((4 * (SelectScene.goSceneNum - 1)) + 4)).split('');
        //打乱所有扰乱字符
        this.tailStrArr.sort(function () {
            return Math.random() - 0.5;
        });
        //截取乱序20个字符
        this.testArr2 = this.tailStrArr.join('').substring(0, 20).split('');
        //获取每一关的所有字符（本关的4字成语+扰乱的20个字符）
        this.testArr = this.testArr.concat(this.testArr1, this.testArr2);
        //乱序得到的每一关所有字符
        this.testArr.sort(function () {
            return Math.random() - 0.5;
        });
        //设置位置
        for (var j = 0; j < this.testArr.length; j++) {
            var tb = new TextBox('teBox');
            tb.tbText.text = this.testArr[j];
            tb.x = -100;
            tb.y = 600;
            if (j < 8) {
                tb.x = j * 55 + 22;
                tb.y = 500;
            }
            else if (j >= 8 && j < 16) {
                tb.x = (j - 8) * 55 + 22;
                tb.y = 555;
            }
            else {
                tb.x = (j - 16) * 55 + 22;
                tb.y = 610;
            }
            this.addChild(tb);
            tb.proX = tb.x;
            tb.proY = tb.y;
            tb.touchEnabled = true;
            tb.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapHd, this);
            this.teArr.push(tb);
        }
    };
    p.tapHd = function (e) {
        this.mm.playclickM();
        e.target.clickNum++;
        if (e.target.clickNum % 2 == 1) {
            for (var i = 0; i < this.collArr.length; i++) {
                if (!this.collArr[i].havChild) {
                    var tw = egret.Tween.get(e.target, { loop: false });
                    tw.to({ x: this.collArr[i].x, y: this.collArr[i].y }, 500);
                    //e.target.x=this.collArr[i].x;
                    //e.target.y=this.collArr[i].y;
                    this.collArr[i].havChild = true;
                    this.collArr[i].currtxt = e.target.tbText.text;
                    e.target.onBottom = true;
                    e.target.onNum = i; //记录它在容器中的位置
                    this.cyNum++;
                    break; //跳出循环
                }
            }
        }
        else {
            var tw = egret.Tween.get(e.target, { loop: false });
            tw.to({ x: e.target.proX, y: e.target.proY }, 500);
            //e.target.x=e.target.proX;     //设置回到之前位置
            //e.target.y=e.target.proY;
            this.cyNum--;
            e.target.onBottom = false;
            this.str = '';
            this.collArr[e.target.onNum].currtxt = '';
            this.collArr[e.target.onNum].havChild = false; //将点击的这个字符 离开的容器 是否有对象存在 设为 false
        }
        if (this.cyNum < 4) {
            for (var k = 0; k < this.teArr.length; k++) {
                this.teArr[k].touchEnabled = true;
            }
        }
        else {
            for (var j = 0; j < this.teArr.length; j++) {
                if (this.teArr[j].onBottom) {
                    this.teArr[j].touchEnabled = true;
                }
                if (this.teArr[j].onBottom == false) {
                    this.teArr[j].touchEnabled = false;
                }
            }
            for (var l = 0; l < this.collArr.length; l++) {
                this.str += this.collArr[l].currtxt;
            }
            if (this.str == this.testArr1.join('')) {
                for (var j = 0; j < this.teArr.length; j++) {
                    if (this.teArr[j].onBottom) {
                        this.teArr[j].touchEnabled = false;
                    }
                }
                this.resPanel = new resultPanel();
                this.addChild(this.resPanel);
                this.resPanel.alpha = 0;
                var tw = egret.Tween.get(this.resPanel, { loop: false });
                tw.wait(800).to({ alpha: 1 }, 100);
                this.resPanel.textInterpret.text = this.intdArr[SelectScene.goSceneNum - 1];
                this.resPanel.textDerive.text = this.sponArr[SelectScene.goSceneNum - 1];
                this.resPanel.nextBtn.touchEnabled = true;
                this.resPanel.x = 75;
                this.resPanel.y = 148;
                this.resPanel.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goNextHd, this);
            }
            else {
                for (var j = 0; j < this.teArr.length; j++) {
                    if (this.teArr[j].onBottom) {
                        var tw = egret.Tween.get(this.teArr[j], { loop: false });
                        tw.wait(600).to({ scaleX: 1.1 }, 200).wait(200).to({ scaleX: 1 }, 200);
                    }
                }
            }
        }
    };
    p.goNextHd = function () {
        this.breakScene();
    };
    p.breakScene = function () {
        if (OneScene.maxSceneNum >= 19) {
            //gameOver
            this.intdArr = [];
            this.sponArr = [];
            this.backBtn.touchEnabled = false;
            this.backBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backHd, this);
            this.mm.stopBgm();
            this.mOn.touchEnabled = false;
            this.mOn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.musicHd, this);
            this.deleHd();
            this.removeChild(this.bg);
            this.removeChild(this.backBtn);
            this.removeChild(this.mOn);
            this.dispatchEvent(new egret.Event('goStart'));
        }
        else {
            this.deleHd();
            this.resPanel.nextBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.goNextHd, this);
            this.removeChild(this.resPanel);
            //下一关
            SelectScene.goSceneNum++;
            if (SelectScene.goSceneNum > OneScene.maxSceneNum) {
                OneScene.maxSceneNum++;
            }
            this.addObjectHd();
        }
    };
    p.deleHd = function () {
        //滞空数组
        for (var k = 0; k < this.teArr.length; k++) {
            this.teArr[k].touchEnabled = false;
            this.teArr[k].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapHd, this);
            this.removeChild(this.teArr[k]);
        }
        for (var i = 0; i < this.collArr.length; i++) {
            this.removeChild(this.collArr[i]);
        }
        this.str = '';
        this.removeChild(this.promPanel);
        this.cyNum = 0;
        this.collArr = [];
        this.tailStrArr = [];
        this.teArr = [];
        this.testArr = [];
        this.testArr1 = [];
        this.testArr2 = [];
    };
    OneScene.maxSceneNum = 1; //记录过了多少关 最多现在19关
    return OneScene;
}(egret.Sprite));
egret.registerClass(OneScene,'OneScene');
//# sourceMappingURL=OneScene.js.map