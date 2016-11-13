class Ck 
{
	private char[] rl = new char[8];
	private int wp = 0;
	
	public synchronized void shengchan(char aa)
	{
		while (wp == rl.length)
		{
			try
			{
				this.wait();
			}
			catch (Exception e){}
		}
		this.notify(); //叫醒另一个线程。是在当前线程处于就绪状态的前提下
		
		rl[wp] = aa;	++wp;
		
		System.out.println("生产线程正在生产第"+wp+"个产品，该产品是:"+aa);
	}
	
	public synchronized void xiaofei()
	{
		char aa;
		
		while (wp == 0)
		{
			try
			{
				this.wait();
			}
			catch (Exception e){}
		}
		this.notify();
		aa = rl[wp-1];
		
		System.out.println("消费线程正在消费第"+wp+"个产品，该产品是:"+aa);
		
		--wp;		
	}	
}

class Sc implements Runnable
{
	private Ck xc = null;
	
	public Sc(Ck xc)
	{
		this.xc = xc;
	}
	
	public void run()
	{
		char aa;
		
		for (int i=0; i<26; i++)
		{
			aa = (char)('A'+i);
			xc.shengchan(aa);
		}
	}
}

class Xf implements Runnable
{
	private Ck xc = null;
	
	public Xf(Ck xc)
	{
		this.xc = xc;
	}
	
	public void run()
	{
		for (int i=0; i<26; i++)
		{
			xc.xiaofei();
		}
	}
}

public class L6_12
{
	public static void main(String[] args)
	{
		Ck ck = new Ck();
		Sc sc = new Sc(ck);
		Xf xf = new Xf(ck);
		Thread xc1 = new Thread(sc);
		xc1.start();
				
		Thread xc2 = new Thread(xf);
		xc2.start();
	}
}


