import java.util.*;
public class L4_4
{
	public static void main(String[] args) 
	{
      /*  Vector cc=new Vector();
        Sp sp1=new Sp("001","巧克力",20f);
        Sp sp2=new Sp("002","果浦",10f);
        cc.add(sp1);  
        cc.add(sp2);
        for(int i=0;i<cc.size();i++)
        {
        	System.out.println(((Sp)cc.get(i)).getMingcheng());
        }*/
		
		Stack dd=new Stack();
		Sp sp1=new Sp("001","巧克力",20f);
        Sp sp2=new Sp("002","果浦",10f);
        dd.add(sp1);
        dd.add(sp2);
        for(int i=0;i<dd.size();i++)
        {
        	System.out.println(((Sp)dd.get(i)).getMingcheng());
        }
	}
}