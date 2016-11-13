/**
 * Created by Administrator on 2016/6/15.
 */
/**
 * Created by Administrator on 2016/6/15.
 */
;(function ($) {
    $.fn.table = function (options) {
        var defaults = {
            //���ֲ���������
            evenRowClass:"evenRow",
            oddRowClass:"oddRow",
            curRowClass:"curRow",
            eventType1:"mouseover",
            eventType2:"mouseout"
        }
        //�� defaules�����ԺͲ��� ȫ���ϲ����� options
        var options = $.extend(defaults,options);

        this.each(function () {
            var _tihs = $(this);
            //ʵ�ֹ��ܴ���
            _tihs.find("tr:even").addClass(options.evenRowClass);
            _tihs.find("tr:odd").addClass(options.oddRowClass);

            //_tihs.find("tr").mouseenter(function () {
            //    $(this).addClass(options.curRowClass);
            //}).mouseleave(function () {
            //    $(this).removeClass(options.curRowClass);
            //});

            //һ���ð󶨷��� �ŵ��� �¼����Ϳ����ò������ı� �������
            _tihs.find("tr").bind(options.eventType1, function () {
                $(this).addClass(options.curRowClass);
            });
            _tihs.find("tr").bind(options.eventType2, function () {
                $(this).removeClass(options.curRowClass);
            });
        });
        //return ����֮��Ϳ�����ʽ����
        return this;
    }
})(jQuery);