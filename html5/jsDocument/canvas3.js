
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
    context.fillStyle="rgba(255,255,0,0.8)";/*��ʵ��������ɫ���������Ϊ��Ƥ����ɫ����ʲô��ɫ������ν��*/
    context.clearRect(i,j,30,25);
    i+=20;
    j+=15;
}