import java.io.*;

public class L7_4
{
	public static void main(String[] args) throws Exception 
	{
		ByteArrayOutputStream zjszl = new ByteArrayOutputStream();
		DataOutputStream sjl = new DataOutputStream(zjszl);
		long aa = 123456789;
		sjl.writeLong(aa);
		
		byte[] zjsz = zjszl.toByteArray();
		ByteArrayInputStream srl = new ByteArrayInputStream(zjsz);
		DataInputStream sjsr = new DataInputStream(srl);
		long ss;
		ss = sjsr.readLong();
		//dis.readLong(n);  
		
		System.out.println("ss="+ss);	
	}
}