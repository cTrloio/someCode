import java.awt.*;
import javax.swing.*;

public class L8_1 extends JFrame
{
	Wdmb mb=null;	
	
	public static void main(String[] args)
	{
		L8_1 lx=new L8_1();
	}
	
	public L8_1()
	{
		mb=new Wdmb();
		this.add(mb);
		this.setSize(400,300);
		this.setLocation(300,280);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		 this.setVisible(true);	
	}
}

class Wdmb extends JPanel
{
	public void paint(Graphics g) //��������Ǹ��Ǹ���ķ��������ʵ���˼
	{
		System.out.println("paint����������");
	//	g.drawOval(50,60,80,80);
		//g.drawLine(100,100,100,200);
        // g.drawRect(100,100,60,60);
		//g.draw3DRect(100,100,50,60,true);
//		g.setColor(Color.red); //�����������ɫ��Ĭ���Ǻ�ɫ
//		g.fillRect(100,100,100,100);
//		g.setColor(Color.green);
//		g.fillOval(220,100,80,80);				
	}
}

//paint��������������������±�ϵͳ�Զ�����
 //1.  ��������       2.���ڴ�С�����仯      3. ����repaint����ʱ