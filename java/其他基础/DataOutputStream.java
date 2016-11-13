import java.io.*;

public class L7_7
{
	public static void main(String[] args) throws Exception 
	{
		DataOutputStream sjl = new DataOutputStream(new FileOutputStream("e:/1.txt"));
		sjl.writeLong(12345);  
		sjl.close();
		System.out.println(12345);
		System.out.printf("%#X\n", 12345);
				
		PrintStream pl = new PrintStream(new FileOutputStream("e:/2.txt"));
		pl.println(12345);  
		pl.close();
	}
}


//DataOutputStream 中的 writeXXX(data)方法的结果是计算机识别的二进制形式
//PrintStream 中的 println(data)方法的结果是以人们习惯看到的字符串形式