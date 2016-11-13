public class L3_1
{
	public static void main(String[] args) 
	{
		B b1=new B(200);
		B b2=new B(200);
		//System.out.println(b1.equals(b2));
		
		C c1=new C(10);
		C c2=new C(100);
		System.out.println(c2.equals(c1));
	}
}
class B
{
   private int i;
   
	B(int i)
	{
       this.i=i;
	}
 
	public boolean equals(B b2)
	{
	    if(this.i==b2.i)
	    	return true;
	    else
	    	return false;
    }
}
class C extends B
{
	private int j;
	
	C(int j)
	{
	   super(j);
	   this.j=j;
	}

	/*public boolean equals(B b2)
	{
	    C c=(C)b2;
		if(this.j==c.j)
	    	return true;
	    else
	    	return false;
    }*/
}