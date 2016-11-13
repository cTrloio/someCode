/**
 * Created by Administrator on 2016/3/24.
 */
var RankScene = (function (_super) {
    __extends(RankScene, _super);
    function RankScene() {
        _super.call(this);
        this.rankBg = Factory.createBitmapByName('rankBg');
        this.addChild(this.rankBg);
        this.backBtn = Factory.createBitmapByName('xx');
        this.addChild(this.backBtn);
        this.backBtn.x = 180;
        this.backBtn.y = 670;
        this.backBtn.touchEnabled = true;
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHd, this);
        if (SceneOne.playName == '') {
            SceneOne.playName = '无名';
        }
        if (SceneOne.playName.length >= 6) {
            SceneOne.playName = SceneOne.playName.substring(0, 6);
        }
        if (SceneOne.score >= GameData.score1) {
            GameData.score3 = GameData.score2;
            GameData.name3 = GameData.name2;
            GameData.score2 = GameData.score1;
            GameData.name2 = GameData.name1;
            GameData.score1 = SceneOne.score;
            GameData.name1 = SceneOne.playName;
        }
        else if (SceneOne.score >= GameData.score2) {
            GameData.score3 = GameData.score2;
            GameData.name3 = GameData.name2;
            GameData.score2 = SceneOne.score;
            GameData.name2 = SceneOne.playName;
        }
        else if (SceneOne.score >= GameData.score3) {
            GameData.score3 = SceneOne.score;
            GameData.name3 = SceneOne.playName;
        }
        this.tname1 = new egret.TextField();
        this.addChild(this.tname1);
        this.tname1.text = GameData.name1 + "\n" + GameData.score1;
        this.tname1.size = 60;
        this.tname1.textColor = 0x000000;
        this.tname1.x = 180;
        this.tname1.y = 120;
        this.tname2 = new egret.TextField();
        this.addChild(this.tname2);
        this.tname2.text = GameData.name2 + "\n" + GameData.score2;
        this.tname2.size = 60;
        this.tname2.textColor = 0x000000;
        this.tname2.x = 180;
        this.tname2.y = 310;
        this.tname3 = new egret.TextField();
        this.addChild(this.tname3);
        this.tname3.text = GameData.name3 + "\n" + GameData.score3;
        this.tname3.size = 60;
        this.tname3.textColor = 0x000000;
        this.tname3.x = 180;
        this.tname3.y = 505;
    }
    var d = __define,c=RankScene,p=c.prototype;
    p.backHd = function () {
        this.dispatchEvent(new egret.Event('goMain'));
        this.backBtn.touchEnabled = false;
        this.backBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backHd, this);
    };
    return RankScene;
}(egret.Sprite));
egret.registerClass(RankScene,'RankScene');
//# sourceMappingURL=RankScene.js.map