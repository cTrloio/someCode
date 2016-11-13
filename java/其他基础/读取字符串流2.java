import java.io.*;

public class L7_6
{
	 public static void main(String[] args) throws Exception
	 {
		String zfc = "111111111111";
		System.out.println("字符串是 " + zfc);
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		zfc = br.readLine();  //如果直接输入回车的话，字符串就是一个空字符串
		
		System.out.println("------------");
		System.out.println(zfc + "aaaaaaa"); 
		System.out.println(zfc.equals(""));  
		System.out.println(zfc.equals(null));	
	}
}
