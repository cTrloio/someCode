import java.util.*;
public class L2_2 
{
	public static void main(String[] args)throws Exception
	{
	    A aa=new A();
        	aa.a();
        System.out.println("顺利进行中...");
	}
}
class A
{
   void a() throws Exception
   {
	   int a,b,c;
	   Scanner sc=new Scanner(System.in);
       a=sc.nextInt();
       b=sc.nextInt();
  	   c=a%b;
  	   System.out.println("余数为"+c);
   }
}