import java.util.*;
public class L2_1 
{
	public static void main(String[] args) 
	{
         int a,b,c;
         Scanner sc=new Scanner(System.in);
        try
        {
        	 a=sc.nextInt();
             b=sc.nextInt();
        	 c=a%b;
        	 System.out.println("����Ϊ"+c);
         }
         catch(Exception e)
         {
    	    System.out.println("��������");
         }  
        finally
        {
        	System.out.println("����˳��������");
        }
     }
}
