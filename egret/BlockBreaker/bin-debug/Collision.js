var Collision = (function () {
    function Collision() {
    }
    var d = __define,c=Collision,p=c.prototype;
    //矩形! 注意参数1与参数2 的位置关系
    Collision.block = function (r1, r2, type) {
        // if(r1!==null && r2!=null){
        var vx, vy;
        var overlap_x, overlap_y;
        if (type) {
            vx = r1.x - (r2.x + r2.width / 2);
        }
        else {
            vx = (r1.x + r1.width / 2) - (r2.x + r2.width / 2);
        }
        vy = (r1.y + r1.height / 2) - (r2.y + r2.height / 2);
        if (Math.abs(vx) < (r1.width / 2 + r2.width / 2)) {
            if (Math.abs(vy) < (r1.height / 2 + r2.height / 2)) {
                overlap_x = (r1.width / 2 + r2.width / 2) - Math.abs(vx);
                overlap_y = (r1.height / 2 + r2.height / 2) - Math.abs(vy);
                if (overlap_x >= overlap_y) {
                    if (vy > 0) {
                        this.collisionSide = "Top";
                        r2.y -= overlap_y;
                    }
                    else {
                        this.collisionSide = "Bottom";
                        r2.y += overlap_y;
                    }
                }
                else {
                    if (vx > 0) {
                        this.collisionSide = "Left";
                        r2.x -= overlap_x;
                    }
                    else {
                        this.collisionSide = "Right";
                        r2.x += overlap_x;
                    }
                }
            }
            else {
                this.collisionSide = "No collision";
            }
        }
        else {
            this.collisionSide = "No collision";
        }
        // }
    };
    Collision.collisionSide = "";
    return Collision;
}());
egret.registerClass(Collision,'Collision');
//# sourceMappingURL=Collision.js.map