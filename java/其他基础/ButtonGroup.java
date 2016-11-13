import java.awt.*;
import javax.swing.*;

public class L5_8 extends JFrame
{
	JPanel mb1,mb2,mb3;
	JButton an1,an2;
	JLabel bq1,bq2;
	JCheckBox fxk1,fxk2,fxk3;
	JRadioButton dx1,dx2;
	//ButtonGroup dxz;//把单选按钮放进一个组里
	
	public static void main(String[] args) 
    {
	   L5_8 lx=new L5_8();
	}
	
	public L5_8()
	{
		mb1=new JPanel();
		mb2=new JPanel();
		mb3=new JPanel();
		
		bq1=new JLabel("特长");
	    bq2=new JLabel("性别");
	    an1=new JButton("注册");
		an2=new JButton("取消");
		fxk1=new JCheckBox("音乐");
		fxk2=new JCheckBox("体育");
		fxk3=new JCheckBox("文艺");
		dx1=new JRadioButton("男");
		dx2=new JRadioButton("女");
		
		//dxz=new ButtonGroup();
		//dxz.add(dx1);   dxz.add(dx2);  //添加进组，使其只能选其中一个
		
		this.setLayout(new GridLayout(3,1));
		
		mb1.add(bq1);  mb1.add(fxk1); mb1.add(fxk2);  mb1.add(fxk3);
		mb2.add(bq2);  mb2.add(dx1);  mb2.add(dx2); //还是一个一个添加，不是把组添加进来
		mb3.add(an1);  mb3.add(an2);
		
	     this.add(mb1);
		 this.add(mb2);
		 this.add(mb3);
		 
		 this.setTitle("用户注册");
		 this.setSize(240,150);
		 this.setLocation(300,280);
		 this.setResizable(false);
		 this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		 this.setVisible(true);		
	}
}