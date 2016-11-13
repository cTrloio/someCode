
var i,j;
var context;
var width;
var height;
function draw(id){
    var canvas=document.getElementById(id);
    context=canvas.getContext('2d');
    width=canvas.width;
    height=canvas.height;
    setInterval(painting,350);
    i=0;
    j=0;
}
function painting()
{
    context.fillStyle="#000000";
    context.fillRect(0,0,width,height);
    context.fillStyle="rgba(255,255,0,0.8)";/*其实擦除的颜色，可以理解为橡皮的颜色，是什么颜色都无所谓的*/
    context.clearRect(i,j,30,25);
    i+=20;
    j+=15;
}