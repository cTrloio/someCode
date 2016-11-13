class Xc8 implements Runnable
{
	public static int  chepiao = 100;
		
	public void run()
	{
		while (true)
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

public class L6_8
{
	public static void main(String[] args)
	{
		Xc8 xc81=new Xc8();
		Thread ee = new Thread(xc81);
		ee.start();	
		
		Xc8 xc82=new Xc8();
		Thread ff = new Thread(xc82);
		ff.start();		
	}
}