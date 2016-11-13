// 复制文本文件用字符流，其余格式文件用字节流

import java.io.*;

public class L7_2
{
	public static void main(String[] args) throws Exception
	{
		//FileReader fz = new FileReader("E:/javadaima/java2-1/51zxw.jpg");
		//FileWriter zt = new FileWriter("e:/51zxw.jpg"); //路径的斜杠和windows中相反
		
		FileInputStream fz = new FileInputStream("E:/javadaima/java2-1/51zxw.jpg");
		FileOutputStream zt = new FileOutputStream("e:/51zxw.jpg");
		
		int aa;
		aa = fz.read();
		while (aa!=(-1))
		{
			zt.write(aa);
			aa = fz.read();
		}		
		zt.flush();  //将流中残留内容全部写入文件，该函数需写在文件关闭之前
		
		fz.close();
		zt.close();
	}
}