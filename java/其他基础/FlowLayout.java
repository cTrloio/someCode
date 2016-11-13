import java.awt.*;
import javax.swing.*;

public class L5_4 extends JFrame
{
	JButton[] an={null,null,null,null,null,null,null,null};
	
	public static void main(String[] args)
	{
	    L5_4 lx=new L5_4();
	}
	
	public L5_4()
	{
		an[0]=new JButton("话梅");
		an[1]=new JButton("果浦");
		an[2]=new JButton("薯片");
		an[3]=new JButton("饼干");
		an[4]=new JButton("巧克力");
		an[5]=new JButton("腰果");
		an[6]=new JButton("锅巴");
		an[7]=new JButton("开心果");
		
		//this.setLayout(new FlowLayout());  //由于java默认的是边界布局管理器，添加布局管理器，以免添加出现错误。
		this.setLayout(new FlowLayout(FlowLayout.LEFT));
		//this.setLayout(new FlowLayout(FlowLayout.RIGHT));
		
		this.add(an[0]);
		this.add(an[1]);
		this.add(an[2]);
		this.add(an[3]);
		this.add(an[4]);
		this.add(an[5]);
		this.add(an[6]);
		this.add(an[7]);
		
		this.setTitle("流式布局FlowLayout");
	    this.setSize(380,120);
	    this.setLocation(200,200);
	    this.setResizable(false);
	    this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	    this.setVisible(true);
		
	}
}
