class Xc9 implements Runnable
{
	public static int chepiao = 100;
	String aa = new String("1");  //字符串随意定义，定义在函数上边
		
	//synchronized 的作用是，让它所管辖的代码部分，要么全部执行完，要么全部不执行
	public void run()   //synchronized修饰函数不需要字符串，相当于默认是this
	{
		while (true)
		{
			synchronized (aa)  //既可以修饰代码块，又可以修饰函数
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

public class L6_9
{
	public static void main(String[] args)
	{
		Xc9 xc9=new Xc9();
		Thread ee = new Thread(xc9);
		ee.start();	
				
		Thread ff = new Thread(xc9);
		ff.start();		
	}
}