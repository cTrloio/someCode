
class Collision{
    public static collisionSide:String=" ";
    public static block(r1:egret.Sprite,r2:egret.Sprite)
    {
        var vx:number=(r1.x+r1.width/2)-(r2.x+r2.width/2); //������X���ϵľ���
        var vy:number=(r1.y+r1.height/2)-(r2.y+r2.height/2);//������Y���ϵľ���
        if(Math.abs(vx)<(r1.width/2+r2.width/2))
        {
            if(Math.abs(vy)<(r1.height/2+r2.height/2))
            {
                var overlap_x:number=(r1.width/2+r2.width/2)-Math.abs(vx); //X���ϵ��ص����ִ�С=�������ܿ���-������X���ľ���
                var overlap_y:number=(r1.height/2+r2.height/2)-Math.abs(vy);//Y���ϵ��ص����ִ�С=�������ܸ߶�-������Y���ľ���
                if(overlap_x>=overlap_y)
                {
                    if(vy>0)
                    {
                        this.collisionSide="Top";
                        r1.y+=overlap_y;
                    }
                    else
                    {
                        this.collisionSide="Bottom";
                        r1.y-=overlap_y;
                    }
                }
                else
                {
                    if(vx>0)
                    {
                        this.collisionSide="Left";
                        r1.x+=overlap_x;
                    }
                    else
                    {
                        this.collisionSide="Right";
                        r1.x-=overlap_x;
                    }
                }
            }
            else
            {
                this.collisionSide="No collision";
            }
        }
        else
        {
            this.collisionSide="No collision";
        }
    }
}
