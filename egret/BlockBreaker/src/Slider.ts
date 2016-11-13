class Slider extends egret.Sprite {

	public canChange: boolean;
	public vx: number = 0;
	public vy: number = 0;
	public bounce:number = GameFactory.bounce;
	
	private _shape: egret.Shape;
	private _slider_w:number = GameFactory.slider_w;
	private _slider_h:number = GameFactory.slider_h;
	private _color:number = GameFactory.SLIDER_1;
	
	public constructor() {
		super();
		this.createSlider();
	}

	public changeSliderWidth(width: number) {
		this.removeChild(this._shape);
		this._slider_w = width;
		this.bounce = GameFactory.bounce;
		this._color = GameFactory.SLIDER_2;
		this.createSlider();
	}
	
	public changeSliderBounce(bounce:number) {
		this.removeChild(this._shape);
		this._slider_w = GameFactory.slider_w;
		this.bounce = bounce;
		this._color = GameFactory.SLIDER_3;
		this.createSlider();
	}

	public resetSider(){
		this.removeChild(this._shape);
		this.bounce = GameFactory.bounce;
		this._slider_w = GameFactory.slider_w;
		this._slider_h = GameFactory.slider_h;
		this._color = GameFactory.SLIDER_1;
		this.createSlider();
	}

	private createSlider(){
		this._shape = GameFactory.createShape(this._slider_w,this._slider_h,this._color);
		this.anchorOffsetX = this._shape.width/2;
		this.addChild(this._shape);
	}

}