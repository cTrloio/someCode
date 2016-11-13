// TypeScript file
var Word = (function (_super) {
    __extends(Word, _super);
    function Word(name) {
        _super.call(this);
        if (name == 'word') {
            this.bitmap = GameData.CREATE_BITMAP('word_png');
        }
        else if (name == GameData.starType1) {
            this.bitmap = GameData.CREATE_BITMAP('star1');
        }
        else {
            this.bitmap = GameData.CREATE_BITMAP('star2');
        }
        this.type = name;
        this.anchorOffsetX = this.bitmap.width / 2;
        this.anchorOffsetY = this.bitmap.height / 2;
        this.addChild(this.bitmap);
    }
    var d = __define,c=Word,p=c.prototype;
    return Word;
}(egret.Sprite));
egret.registerClass(Word,'Word');
