/**
* Created by Administrator on 2015/10/27.
*/
var i;
function draw(id){
    var canvas=document.getElementById(id);
    context=canvas.getContext('2d');
    setInterval(patting,10);
    i=0;
}
function patting()
{
    context.fillStyle='green';
    context.fillRect(100+i,100,1,20);
    i++;
}