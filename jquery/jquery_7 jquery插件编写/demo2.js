/**
 * Created by Administrator on 2016/6/15.
 */
$.hfySpace = {
    centerDiv: function (obj) {
        obj.css({
            "top":($(window).height() - obj.height())/2,
            "left":($(window).width() - obj.width())/2,
            "position":"absolute"
        });
        return obj;
    }
};