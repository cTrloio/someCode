/**
 * Created by Administrator on 2016/4/7.
 */
class MusicManger extends egret.Sprite{
    bgmSound:egret.Sound;
    bgmChannel:egret.SoundChannel;
    clickSound:egret.Sound;
    clickMChannel:egret.SoundChannel;
    public constructor(){
        super();
        this.bgmSound=RES.getRes('bgm');
        this.clickSound=RES.getRes('clickM');
    }
    public playBgm(){
        this.bgmChannel=this.bgmSound.play();
    }
    public stopBgm(){
        this.bgmChannel.stop();
    }
    public playclickM(){
        this.clickMChannel=this.clickSound.play(0,1);
    }
    public volumeIsZero(){
        this.bgmChannel.volume=0;
        //this.clickMChannel.volume=0;
    }
    public volumeIsOne(){
        this.bgmChannel.volume=1;
        //this.clickMChannel.volume=1;
    }

}