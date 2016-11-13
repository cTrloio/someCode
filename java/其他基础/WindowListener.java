import java.awt.*;
import java.awt.event.*;

import javax.swing.*;

public class L8_6 extends JFrame
{
    Wdmb6 mb=null;
    
    public static void main(String[] args) 
    {
    	L8_6 lx=new L8_6();
	}
	
	L8_6()
	{
		mb=new Wdmb6();
		this.add(mb);
		this.addWindowListener(mb);
		
		
		this.setSize(400,300);
		this.setLocation(300,280);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		 this.setVisible(true);	
	}
}
class Wdmb6 extends JPanel implements WindowListener
{
	public void paint(Graphics g)
	{
		super.paint(g);
	}

	@Override
	public void windowOpened(WindowEvent e) 
	{
		System.out.println("窗口打开");	
	}
 	public void windowClosing(WindowEvent e) 
 	{
 		System.out.println("窗口关闭");
	}
    public void windowClosed(WindowEvent e)
    {

	}
    public void windowIconified(WindowEvent e) 
    {
    	System.out.println("最小化");
	}
	public void windowDeiconified(WindowEvent e)
	{
		System.out.println("从最小化变成正常");
	}
	public void windowActivated(WindowEvent e)
	{
		System.out.println("窗口被激活");
	}
	public void windowDeactivated(WindowEvent e)
	{
		
	}
}