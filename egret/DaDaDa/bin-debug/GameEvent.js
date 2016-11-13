// TypeScript file
var GameEvent = (function () {
    function GameEvent() {
    }
    var d = __define,c=GameEvent,p=c.prototype;
    GameEvent.STARTGAME = 'startgame';
    GameEvent.GAMEOVER = 'gameover';
    GameEvent.CHARARESET = 'resetchara';
    GameEvent.BOOSOVER = 'boosover';
    GameEvent.FIRE = 'fire';
    GameEvent.NO_FIRE = 'nofire';
    return GameEvent;
}());
egret.registerClass(GameEvent,'GameEvent');
