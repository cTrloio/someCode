import java.awt.*;
import java.awt.event.*;

import javax.swing.*;

public class L8_5 extends JFrame
{
    Wdmb5 mb=null;
    
    public static void main(String[] args) 
    {
    	L8_5 lx=new L8_5();
	}
	
	L8_5()
	{
		mb=new Wdmb5();
		this.add(mb);
		//this.addMouseListener(mb);
		//this.addKeyListener(mb);
		this.addMouseMotionListener(mb);
		
		this.setSize(400,300);
		this.setLocation(300,280);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		 this.setVisible(true);	
	}
}
class Wdmb5 extends JPanel implements MouseListener,KeyListener,MouseMotionListener
{
	public void paint(Graphics g)
	{
		super.paint(g);
	}

	@Override
	public void mouseClicked(MouseEvent e) 
	{
		System.out.println("鼠标点击的位置是：");
		System.out.println("横坐标："+e.getX());
		System.out.println("纵坐标："+e.getY());
	}
    public void mousePressed(MouseEvent e)
    {
    	//System.out.println("鼠标被按下");
	}
	public void mouseReleased(MouseEvent e)
	{
		//System.out.println("鼠标被松开");
	}
	public void mouseEntered(MouseEvent e)
	{
		//System.out.println("鼠标移动到界面中");
	}
    public void mouseExited(MouseEvent e)
    {
    	//System.out.println("鼠标离开界面");
	}

	@Override
	public void keyTyped(KeyEvent e) 
	{
			
	}
    public void keyPressed(KeyEvent e)
    {
    	System.out.println(e.getKeyChar()+"被按下");		
	}
    public void keyReleased(KeyEvent e)
    {
		
	}

	@Override
	public void mouseDragged(MouseEvent e)
	{
		System.out.println("鼠标当前位置是：");
		System.out.println("横坐标："+e.getX());
		System.out.println("纵坐标："+e.getY());
	}
	public void mouseMoved(MouseEvent e) 
	{
//		System.out.println("鼠标当前位置是：");
//		System.out.println("横坐标："+e.getX());
//		System.out.println("纵坐标："+e.getY());
	}
}