class Xc extends Thread   //创建线程所需要继承的类  
{
	public void run()            //run方法是覆盖的父类方法
	{
		for(int i=0;i<20;i++)
		{
			System.out.println("子函数");
		}
	}
}

public class L6_1
{
	public static void main(String[] args)
	{
		Xc xc = new Xc();
		//xc.run();
		xc.start();   //谁调用的start方法，程序就去自动调用run方法
		//start会但开启一个线程，而不是直接调用。
		//xc.start();
		
		for(int i=0;i<20;i++)
		{
			System.out.println("主函数");
		}
	}
}