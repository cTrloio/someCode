package Use;

import Graph.*;

public class test {

	public static void main(String args[]){
	  String []a={"v0","v1","v2","v3"};
	  ALGraph<String> g=new ALGraph<String>(4,3,1,a);
	  if(g.Way(0, 3))
		  System.out.println("存在路径！");
		  else
			  System.out.println("不存在路径！");
	}	
}

