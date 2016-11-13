class Xc10 extends Thread
{
	public static int chepiao = 100;
	public static String aa = new String("1");
		
	public void run()
	{
		while (true)
		{
			synchronized (aa)  // 两个线程的aa是线程自己的，并不是公共的
			{
				if (chepiao > 0)
				{
					System.out.println("第"+Thread.currentThread().getName()+"个车站正在卖第"+(101-chepiao)+"张车票");
					--chepiao;	
				}
				else
			    {
				    break;
			    }
			}
		}
   }
}

public class L6_10
{
	public static void main(String[] args)
	{
		Xc10 xc1=new Xc10();
		xc1.start();	
				
		Xc10 xc2=new Xc10();
		xc2.start();		
	}
}