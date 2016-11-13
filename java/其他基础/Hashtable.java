import java.util.*;
public class L4_6 
{
    public static void main(String[] args) 
    {
		//Hashtable ff=new Hashtable();		
    	ArrayList ff=new ArrayList();
    	Ls ls1=new Ls(" Ì∆¨",5f);
    	ff.add(ls1);
       	Ls cls=(Ls)ff.get(0);
    	Yl hyl=(Yl)ff.get(0);
	}
}
class Ls
{
   private String mingcheng;
   private float jiage;
   
   Ls(String mingcheng,float jiage)
   {
	   this.mingcheng=mingcheng;
	   this.jiage=jiage;
   }
}
class Yl
{
   private String mingcheng;
   private float jiage;
   private String yanse;
   
   Yl(String mingcheng,float jiage,String yanse)
   {
	   this.mingcheng=mingcheng;
	   this.jiage=jiage;
	   this.yanse=yanse;
   }
}