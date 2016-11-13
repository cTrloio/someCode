// TypeScript file
var GameData = (function () {
    function GameData() {
    }
    var d = __define,c=GameData,p=c.prototype;
    //创建图片
    GameData.CREATE_BITMAP = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    //行为检测
    GameData.checkBourder = function (obj) {
        //限制最大加速度
        if (obj.vx >= obj.speedLim) {
            obj.vx = obj.speedLim;
        }
        if (obj.vx <= -obj.speedLim) {
            obj.vx = -obj.speedLim;
        }
        if (obj.vy >= obj.speedLim) {
            obj.vy = obj.speedLim;
        }
        if (obj.vy <= -obj.speedLim) {
            obj.vy = -obj.speedLim;
        }
        //加速度较小时归零
        if (Math.abs(obj.vx) < 0.15) {
            obj.vx = 0;
        }
        if (Math.abs(obj.vy) < 0.15) {
            obj.vy = 0;
        }
        //边界检测
        if (obj.x < obj.width / 2 + 25) {
            obj.x = obj.width / 2 + 25;
        }
        if (obj.y < obj.height / 2 + 25) {
            obj.y = obj.height / 2 + 25;
        }
        if (obj.x > GameData.stageWidth - obj.width / 2 - 25) {
            obj.x = GameData.stageWidth - obj.width / 2 - 25;
        }
        if (obj.y > GameData.stageHeight - obj.height / 2 - 25) {
            obj.y = GameData.stageHeight - obj.height / 2 - 25;
        }
    };
    GameData.getRandomNum = function () {
        return Math.random();
    };
    GameData.stageWidth = 1133; //舞台宽高
    GameData.stageHeight = 680;
    GameData.fireRate = 350; //人物开火速率
    GameData.enemyRate = 750; //怪物创建速率
    GameData.CREATEBOOSTIME = 5000; // 首次创建 间隔5S创建一个BOOS
    GameData.createBoosRate = 5000; // 下次创建增加时间值
    GameData.maxlife1 = 30; //BOOS基础血量
    GameData.maxlife2 = 45;
    GameData.maxlife3 = 60;
    GameData.enemyType1 = 'enemy1';
    GameData.enemyType2 = 'enemy2';
    GameData.enemyType3 = 'enemy3';
    GameData.boosType1 = 'boos1';
    GameData.boosType2 = 'boos2';
    GameData.boosType3 = 'boos3';
    GameData.starType1 = 'star1';
    GameData.starType2 = 'star2';
    GameData.first_name = 'ToT';
    GameData.MAXSCORE = egret.localStorage.getItem("score") || "0";
    GameData.MAXNAME = egret.localStorage.getItem('name') || "ToT";
    return GameData;
}());
egret.registerClass(GameData,'GameData');
