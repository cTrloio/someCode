import java.awt.*;
import javax.swing.*;

public class L5_11 extends JFrame
{
	JTextArea wby;
	JPanel mb;
	JComboBox xlk;
	JButton an;
	JTextField wbk;	
	JScrollPane gd;
	
	public static void main(String[] args) 
	{
		L5_11 lx=new L5_11();
	}
	
	L5_11()
	{
		wby=new JTextArea();
		mb=new JPanel();
		String[] lt={"Îò¿Õ","°Ë½ä","É³É®","Ð¡°×Áú"};
		xlk=new JComboBox(lt);
		wbk=new JTextField(10);
		an=new JButton("·¢ËÍ");
		gd=new JScrollPane(wby);
		
		
		mb.add(xlk);   mb.add(wbk);   mb.add(an);		
		this.add(gd);   this.add(mb,BorderLayout.SOUTH);
		
		this.setTitle("ÁÄÌì´°¿Ú");
		 this.setSize(300,200);
		 this.setIconImage((new ImageIcon("image/qq.jpg")).getImage());
		 this.setLocation(300,280);
		 this.setResizable(false);
		 this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		 this.setVisible(true);	
	}
}