public class L6_6
{
	public static void main(String[] args) 
	{
	   Xc6 xc6 = new Xc6();
	   Thread aa = new Thread(xc6);
	   Thread bb = new Thread(xc6);
	   
	   aa.setName("线程一");
	   bb.setName("线程二");
	   
	   aa.start();
	   bb.start();
	}
}
class Xc6 implements Runnable 
{
	public void run()
	{
	    for(int i=1;i<=30;i++)
	    {
			System.out.println(Thread.currentThread().getName()+": "+i);
	      	if(i%5==0)
	      	{
	        	Thread.yield();
	      	}
	    }
  	}
}
