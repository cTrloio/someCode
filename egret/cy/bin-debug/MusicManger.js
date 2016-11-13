/**
 * Created by Administrator on 2016/4/7.
 */
var MusicManger = (function (_super) {
    __extends(MusicManger, _super);
    function MusicManger() {
        _super.call(this);
        this.bgmSound = RES.getRes('bgm');
        this.clickSound = RES.getRes('clickM');
    }
    var d = __define,c=MusicManger,p=c.prototype;
    p.playBgm = function () {
        this.bgmChannel = this.bgmSound.play();
    };
    p.stopBgm = function () {
        this.bgmChannel.stop();
    };
    p.playclickM = function () {
        this.clickMChannel = this.clickSound.play(0, 1);
    };
    p.volumeIsZero = function () {
        this.bgmChannel.volume = 0;
        //this.clickMChannel.volume=0;
    };
    p.volumeIsOne = function () {
        this.bgmChannel.volume = 1;
        //this.clickMChannel.volume=1;
    };
    return MusicManger;
}(egret.Sprite));
egret.registerClass(MusicManger,'MusicManger');
//# sourceMappingURL=MusicManger.js.map