public class L6_4 {
	public static void main(String[] args) 
	{
		Thread xc1 = new Thread(new Xc41());
		Thread xc2 = new Thread(new Xc42());//线程默认级别是5
		xc2.setPriority(Thread.NORM_PRIORITY + 3); //数字越大优先级越高
		xc1.start();
		xc2.start();
	}
}

class Xc41 implements Runnable {
	public void run() {
		for(int i=0; i<100; i++) {
			System.out.println("1线程" + i);
		}
	}
}

class Xc42 implements Runnable {
	public void run() {
		for(int i=0; i<100; i++) {
			System.out.println("第2个线程正在被执行: " + i);
		}
	}
}