import java.io.*;
import java.util.*;

public class L7_9
{
	public static void main(String[] args) 
	{
		PrintStream plzq = null;
		PrintStream plcw = null;
		Scanner ss = null;
			
		try
		{
			plzq = new PrintStream("e:/aaa.txt");
			plcw = new PrintStream("e:/ddd.txt");
			ss = new Scanner(System.in);
			int shuzi;
			System.setOut(plzq);
			System.setErr(plcw);
			
			while (true)
			{
				shuzi = ss.nextInt();
				System.out.println(shuzi);				
			}	
		}
		catch (Exception e)
		{
			System.err.println(" ‰»Î”–ŒÛ");
		}
   }
}