//��������棨�رպ�ʧ���ݣ�
//function saveStorage(id)
//{
//    var target=document.getElementById(id);
//    var str=target.value;
//    sessionStorage.setItem("mess",str);

    //��д  sessionStorage.setItem=("mess",document.getElementById(id).value);
//}
//function loadStorage(id)
//{
//    var target=document.getElementById(id);
//    var msg1=sessionStorage.getItem("mess");
//    target.innerHTML=msg1;

    //��д document.getElementById(id).innerHTML=sessionStorage.getItem("mess");
//}
//�������ñ���
function saveStorage(id)
{
    var target=document.getElementById(id);
    var str=target.value;
    localStorage.setItem("mess",str);
}
function loadStorage(id)
{
    var target=document.getElementById(id);
    var msg1=localStorage.getItem("mess");
    target.innerHTML=msg1;
}