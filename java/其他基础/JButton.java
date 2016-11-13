import java.awt.*;
import javax.swing.*;

public class L5_2 extends JFrame
{
	JButton an1=null;   //把需要的组件全部在这里定义
	
	public static void main(String[] args)
	{
         L5_2 lx1=new L5_2();   //主函数只需调用即可。
	}
	
	public L5_2()         //把初始化的全部工作放到构造函数中完成。包括设置大小、标题、位置等等。
	{
		this.setTitle("用户界面");  //设置窗口标题
		this.setSize(350, 180);     //设置大小和位置
		this.setLocation(100, 260);
		an1= new JButton("一个按钮");   //设置组件
		this.add(an1);                  //添加组件
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setVisible(true);
	}

}
