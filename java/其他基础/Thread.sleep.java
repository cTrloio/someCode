public class L6_5
{
	public static void main(String[] args)
	{
		Xc5 xc5 = new Xc5();
		Thread ccc = new Thread(xc5);
		ccc.start();	
	}
}
class Xc5 implements Runnable
{
	public void run() //throws Exception
	{ 	
		for (int i=0; i<10; i++)
		{
			System.out.println(Thread.currentThread().getName() + "   " + i);
			try
			{
 				Thread.sleep(1000); //1000毫秒等于1秒
          	}
			catch (Exception e)
			{  
			}					
		}
	}
}



/*class Yy implements Runnable      
{
	public void run() throws Exception
	{
	}
}
class Xx extends Thread
{
	public void run() throws Exception
	{
	}	
}
       用throws抛异常的时候，如果向主调处抛异常的方法是从父类继承的或者是从接口实现的
      那么，覆盖父类方法或实现接口方法时，如果父类中的原方法或接口中的原抽象方法没有抛异常
     则子类覆盖父类的方法或实现接口的方法也不能抛异常。
     当出现这种情况时只能try...catch，大不了catch中什么都不写。*/
      