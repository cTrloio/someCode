import java.io.*;

public class L7_1
{
	public static void main(String[] args) throws Exception
	{
		//read input是输入流    write  output是输出流
		//read  write是字符流   input  output是字节流
		FileReader wj = new FileReader("E:/javadaima/java2-1/src/L7_1.java");
		//FileInputStream wj = new FileInputStream("E:/javadaima/java2-1/src/L7_1.java");
		
		int aa;   //这里必须定义成整形，java规定read()函数的返回值是整形的
		aa = wj.read();  //读取一个字符
		System.out.println("文件内容为：");
		while (aa!=(-1))   //ASCII码是从0开始的数字,只有什么都没有才会返回-1
		{
			System.out.print((char)aa); //这里没有ln  ln的作用是换行
			aa = wj.read();
		}
		wj.close();	
	}
}