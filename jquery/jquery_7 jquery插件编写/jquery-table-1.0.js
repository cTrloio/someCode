/**
 * Created by Administrator on 2016/6/15.
 */
/**
 * Created by Administrator on 2016/6/15.
 */
;(function ($) {
    $.fn.table = function (options) {
        var defaults = {
            //各种参数和属性
            evenRowClass:"evenRow",
            oddRowClass:"oddRow",
            curRowClass:"curRow",
            eventType1:"mouseover",
            eventType2:"mouseout"
        }
        //将 defaules的属性和参数 全部合并到了 options
        var options = $.extend(defaults,options);

        this.each(function () {
            var _tihs = $(this);
            //实现功能代码
            _tihs.find("tr:even").addClass(options.evenRowClass);
            _tihs.find("tr:odd").addClass(options.oddRowClass);

            //_tihs.find("tr").mouseenter(function () {
            //    $(this).addClass(options.curRowClass);
            //}).mouseleave(function () {
            //    $(this).removeClass(options.curRowClass);
            //});

            //一般用绑定方法 优点是 事件类型可以用参数来改变 更加灵活
            _tihs.find("tr").bind(options.eventType1, function () {
                $(this).addClass(options.curRowClass);
            });
            _tihs.find("tr").bind(options.eventType2, function () {
                $(this).removeClass(options.curRowClass);
            });
        });
        //return 对象之后就可以链式操作
        return this;
    }
})(jQuery);