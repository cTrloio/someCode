import java.awt.*;
import javax.swing.*;

public class L5_5 extends JFrame
{
	JButton an[]={null,null,null,null,null,null,null,null,null};
	int s=9;
	
	public static void main(String[] args) 
	{
	   L5_5 lx=new L5_5();
	}
	
	public L5_5()
	{
		an[0]=new JButton("话梅");
		an[1]=new JButton("果浦");
		an[2]=new JButton("薯片");
		an[3]=new JButton("饼干");
		an[4]=new JButton("巧克力");
		an[5]=new JButton("腰果");
		an[6]=new JButton("锅巴");
		an[7]=new JButton("开心果");
		an[8]=new JButton("杏仁");
		
		this.setLayout(new GridLayout(3,3,12,13));
		
		for(int i=0;i<s;i++)
		{
			this.add(an[i]);
		}
		
		this.setTitle("网格布局GridLayout");
	    this.setSize(380,320);
	    this.setLocation(200,200);
	    this.setResizable(false);
	    this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	    this.setVisible(true);
	}
		
}
