/**
 * Created by Administrator on 2016/6/15.
 */
/**
 * Created by Administrator on 2016/6/15.
 */
//�ٷ�ģ��
;(function ($) {
    $.fn.tab = function (options) {
        var defaults = {
            //���ֲ���������
            curClass:"cur",
            tabNav:'.tabNav>li',
            tabCon:'.tabContent>div',
            eventType:'click'
        };
        var options = $.extend(defaults,options);

        this.each(function () {
            //ʵ�ֹ��ܴ���
            var _this = $(this);
            _this.find(options.tabNav).bind(options.eventType, function () {
                $(this).addClass(options.curClass).siblings().removeClass(options.curClass);
                var index = $(this).index();
                _this.find(options.tabCon).eq(index).show().siblings().hide();
            });
        });

        return this;
    }
})(jQuery);