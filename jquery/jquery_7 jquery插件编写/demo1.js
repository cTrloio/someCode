/**
 * Created by Administrator on 2016/6/15.
 */
//直接给jquery添加全局函数

jQuery.myAlert = function (str) {
    alert(str+"直接给jquery添加去全局函数");
};

//用extend()方法
jQuery.extend({
    myAlert2: function (str) {
        alert(str+"用extend");
    },
    myAlert3: function (str) {
        alert(str+"用extend");
    }
});

//使用命名空间

jQuery.hfySpace = {
    myAlert:function (str) {
        alert(str + "使用命名空间");
    }
};