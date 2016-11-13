class Xc3 extends Thread
{
	public void run()
	{
		System.out.println( Thread.currentThread().getName()+"在执行");  
	}   //显示当前线程名称
}

public class L6_3
{
	public static void main(String[] args)
	{
		Xc3 xc31=new Xc3();
		xc31.setName("线程1");
		xc31.start();
		
		Xc3 xc32=new Xc3();
		xc32.setName("线程2");
		xc32.start();
		
		Xc3 xc33=new Xc3();
		xc33.setName("线程3");
		xc33.start();
		
		
		System.out.println( Thread.currentThread().getName()+"在执行");  
	}
}