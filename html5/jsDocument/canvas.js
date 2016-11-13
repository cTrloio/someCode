/**
 * Created by Administrator on 2015/10/26.
 */
function draw(id)
{
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    //矩形
    context.fillStyle="#f60";
    context.strokeStyle="#ff00ff";
    context.lineWidth=5;
    context.fillRect(50,50,200,150);
    context.strokeRect(45,45,210,160);
    //圆形
    context.fillStyle="#0000ff";
    context.strokeStyle="#ff0000";
    context.lineWidth=3;
    context.beginPath();
    context.arc(400,50,50,0,Math.PI*2,true);
    context.closePath();
    context.strokeStyle="#ffff00";
    context.stroke();
    context.beginPath();
    context.arc(400,50,45,0,Math.PI*2,true);
    context.closePath();
    context.strokeStyle="#ffff00";
    context.fill();
    //文字
    context.fillStyle='green';
    context.strokeStyle='red';
    context.font="bold 40px '字体1','字体2','微软雅黑','宋体'";//匹配多种字体
    context.textBaseline='Top';
    context.textAlign='center';
    context.fillText("动画学院",150,100,100);
    context.strokeText("动画学院",150,170,100);
    //保存文件
    window.location=canvas.toDataURL('image/jpeg');
}