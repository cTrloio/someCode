var Slider = (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        _super.call(this);
        this.vx = 0;
        this.vy = 0;
        this.bounce = GameFactory.bounce;
        this._slider_w = GameFactory.slider_w;
        this._slider_h = GameFactory.slider_h;
        this._color = GameFactory.SLIDER_1;
        this.createSlider();
    }
    var d = __define,c=Slider,p=c.prototype;
    p.changeSliderWidth = function (width) {
        this.removeChild(this._shape);
        this._slider_w = width;
        this.bounce = GameFactory.bounce;
        this._color = GameFactory.SLIDER_2;
        this.createSlider();
    };
    p.changeSliderBounce = function (bounce) {
        this.removeChild(this._shape);
        this._slider_w = GameFactory.slider_w;
        this.bounce = bounce;
        this._color = GameFactory.SLIDER_3;
        this.createSlider();
    };
    p.resetSider = function () {
        this.removeChild(this._shape);
        this.bounce = GameFactory.bounce;
        this._slider_w = GameFactory.slider_w;
        this._slider_h = GameFactory.slider_h;
        this._color = GameFactory.SLIDER_1;
        this.createSlider();
    };
    p.createSlider = function () {
        this._shape = GameFactory.createShape(this._slider_w, this._slider_h, this._color);
        this.anchorOffsetX = this._shape.width / 2;
        this.addChild(this._shape);
    };
    return Slider;
}(egret.Sprite));
egret.registerClass(Slider,'Slider');
//# sourceMappingURL=Slider.js.map