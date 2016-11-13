import java.io.*;

public class L7_10
{
	public static void main(String[] args)
	{
		ObjectOutputStream osc = null;
		ObjectInputStream osr = null;
		Student ss = new Student("悟空", 007, 95.5f);
		Student ss2 = null;	
				
		try
		{
			FileOutputStream wsc = new FileOutputStream("e:/ccc.txt");
			osc = new ObjectOutputStream(wsc);
			osc.writeObject(ss);
			
			osr = new ObjectInputStream(new FileInputStream("e:/ccc.txt"));	
			ss2 = (Student)osr.readObject();  
			
			System.out.println("姓名："+ss2.xingming);
			System.out.println("学号："+ss2.xuehao);
			System.out.println("成绩："+ss2.chengji);
		}
		catch (Exception e)
		{
                        System.out.println("出现错误");
		}
		finally
		{
			try
			{
				osc.close();
				osr.close();
				System.exit(-1);
			}
			catch (Exception e)
			{
				System.exit(-1);
			}
		}		
	}
}

class Student implements Serializable  
{
	String xingming = null;
	int xuehao = 0;
	transient float chengji = 0; 
	
	public Student(String xingming, int xuehao, float chengji)
	{
		this.xingming=xingming;
		this.xuehao=xuehao;
		this.chengji=chengji;
	}
}