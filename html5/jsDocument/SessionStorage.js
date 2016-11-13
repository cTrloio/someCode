//浏览器保存（关闭后丢失数据）
//function saveStorage(id)
//{
//    var target=document.getElementById(id);
//    var str=target.value;
//    sessionStorage.setItem("mess",str);

    //简写  sessionStorage.setItem=("mess",document.getElementById(id).value);
//}
//function loadStorage(id)
//{
//    var target=document.getElementById(id);
//    var msg1=sessionStorage.getItem("mess");
//    target.innerHTML=msg1;

    //简写 document.getElementById(id).innerHTML=sessionStorage.getItem("mess");
//}
//本地永久保存
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