import java.util.*;
public class L4_1 
{
	public static void main(String[] args) 
	{
        ArrayList aa1=new  ArrayList();
        System.out.println("大小为"+aa1.size()); 
        Xs xs1=new Xs("悟空",15,90);
        Xs xs2=new Xs("八戒",13,70);
        Xs xs3=new Xs("沙僧",14,75);
        Xs xs4=new Xs("悟空",15,90);
        
        aa1.add(xs1);  
        aa1.add(xs2);
        aa1.add(xs3);
        System.out.println("大小为"+aa1.size()); 
        //aa1.remove(1);
        /*for(int i=0;i<aa1.size();i++)
        {
            Xs tv=(Xs)aa1.get(i);
            System.out.println("第"+(i+1)+"个学生姓名是"+tv.getXingming());
        }  */      
        //aa1.remove(1);
        aa1.add(xs4);
	   for(int i=0;i<aa1.size();i++)
        {
      	  Xs tv=(Xs)aa1.get(i);
          System.out.println("第"+(i+1)+"个学生姓名是"+tv.getXingming());
        }
	    
	}   
}
class Xs
{
	private String xingming;
    private int xuehao;
    private int chegnji;
    
    Xs(String xingming,int xuehao,int chengji)
    {
    	this.xingming=xingming;
    	this.xuehao=xuehao;
    	this.chegnji=chengji;    	
    }    
	public String getXingming() {
		return xingming;
	}	
	public int getXuehao() {
		return xuehao;
	}
	public int getChegnji() {
		return chegnji;
	}
}