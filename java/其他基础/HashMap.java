import java.util.*;
public class L4_5 
{
    public static void main(String[] args) 
    {
	    HashMap ee=new HashMap();
	    Sp sp1=new Sp("001","香肠",20);
	    Sp sp2=new Sp("002","果浦",10);
	    Sp sp3=new Sp("003","面包",2);
	    ee.put("002",sp1);
	    ee.put("002",sp2);  // 键  值
	    ee.put("002",sp3);
	    
	   /* if(ee.containsKey("002"))  // 不需要遍历
	    {
	    	System.out.println("该食品信息为");
	    	Sp sp=(Sp)ee.get("002");
	    	System.out.println(sp.getMingcheng());
	    	System.out.println(sp.getJiage());
	   }	    
	    else
	    {
	    	System.out.println("对不起，没有该食品！");	    
	    }*/
	    Iterator it=ee.keySet().iterator();
	    while(it.hasNext())
	    {
	    	String key=it.next().toString();
	    	Sp sp=(Sp)ee.get(key);
	    	System.out.println("食品名称:"+sp.getMingcheng());
	    	System.out.println("食品价格:"+sp.getJiage()+"元");
	    }
	}
}
