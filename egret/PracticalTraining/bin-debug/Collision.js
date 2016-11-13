var Collision = (function () {
    function Collision() {
    }
    var d = __define,c=Collision,p=c.prototype;
    Collision.block = function (r1, r2) {
        var vx = (r1.x + r1.width / 2) - (r2.x + r2.width / 2);
        var vy = (r1.y + r1.height / 2) - (r2.y + r2.height / 2);
        if (Math.abs(vx) < (r1.width / 2 + r2.width / 2)) {
            if (Math.abs(vy) < (r1.height / 2 + r2.height / 2)) {
                var overlap_x = (r1.width / 2 + r2.width / 2) - Math.abs(vx);
                var overlap_y = (r1.height / 2 + r2.height / 2) - Math.abs(vy);
                if (overlap_x >= overlap_y) {
                    if (vy > 0) {
                        this.collisionSide = "Top";
                        r1.y += overlap_y;
                    }
                    else {
                        this.collisionSide = "Bottom";
                        r1.y -= overlap_y;
                    }
                }
                else {
                    if (vx > 0) {
                        this.collisionSide = "Left";
                        r1.x += overlap_x;
                    }
                    else {
                        this.collisionSide = "Right";
                        r1.x -= overlap_x;
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
    };
    Collision.collisionSide = " ";
    return Collision;
}());
egret.registerClass(Collision,'Collision');
//# sourceMappingURL=Collision.js.map