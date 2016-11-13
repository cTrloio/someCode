public class L6_7
{	
	public static void main(String args[])
	{
		Xc7 xc7=new Xc7();
		Thread dd = new Thread(xc7);
		dd.start();
		try{
			dd.join(); //阻塞时将当前线程暂停，直至调用join函数所对应的线程执行完毕，才继续执行程序。
		}
		catch(Exception e)
		{
		}
		for(int i=0;i<15;i++){
			System.out.println("主线程:" + i);
		}
    }
}
class Xc7 implements Runnable {
	public void run() {
		for(int i=0;i<10;i++) {
			System.out.println("子线程: " + i);
		}
	}
}
