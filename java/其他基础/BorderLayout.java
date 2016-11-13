import java.awt.*;
import javax.swing.*;

public class L5_3 extends JFrame
{
    JButton an1,an2,an3,an4,an5;
	
	public static void main(String[] args) 
    {
	    L5_3 lx=new L5_3();
	}
	
	public L5_3() 
	{
		an1=new JButton("东方");
		an2=new JButton("西方");
		an3=new JButton("南方");
		an4=new JButton("北方");
		an5=new JButton("中部");
		
	    this.add(an1,BorderLayout.EAST); //括号中的参数都是固定的，顺序不能改变
	    this.add(an2,BorderLayout.WEST); //前面是对象，后面是布局管理器
	    //this.add(an3,BorderLayout.SOUTH);
	    this.add(an4,BorderLayout.NORTH);
	    //this.add(an5,BorderLayout.CENTER);
	    //如果不是五个按钮全部添加，则会以扩充中部为主进行填充，但中部不会被其它四个填充。
	    
	    this.setTitle("边界布局BorderLayout");
	    this.setSize(380,320);
	    this.setLocation(200,200);
	    this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//这句一定要写对，因为这句写的对不对运行时看不出来。
	    this.setVisible(true);
	}
}

      /*总结  1.  继承JFrame类
       2. 在最上方定义组件
       3. 在构造方法中创建组件
       4. 在构造方法中添加组件
       5. 设置窗体属性
       6. 显示窗体    
       7. 在主函数中创建对象 
       8. 所有布局管理器都可以添加任意组件，我这里只是拿按钮举例子，并不是只能添加按钮*/