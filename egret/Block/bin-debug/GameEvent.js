var GameEvent = (function () {
    function GameEvent() {
    }
    var d = __define,c=GameEvent,p=c.prototype;
    GameEvent.GAMESTART = "gamestart";
    GameEvent.GAMEOVER = "gameover";
    GameEvent.CHECKHIT = "checkhit";
    GameEvent.GAMEREPLAY = "replay";
    return GameEvent;
}());
egret.registerClass(GameEvent,'GameEvent');
