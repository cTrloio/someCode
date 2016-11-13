import java.sql.*;
public class L10_1 
{
	public static void main(String[] args)
	{
		Connection ct=null;
		Statement sm=null;
		try{
		  Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
		  ct=DriverManager.getConnection("jdbc:odbc:sql server","sa","ydyd4488321");
		  sm=ct.createStatement();
//		  int i=sm.executeUpdate("insert into bumen values('12','aa','aaaa')");
//		  if(i==1)
//		  {
//			  System.out.println("添加成功！");
//		  }else
//		  {
//			  System.out.println("添加失败！");
//		  }
//		  int i=sm.executeUpdate("delete from bumen where bianhao='12'");
//		  if(i==1)
//		  {
//			  System.out.println("删除成功！");
//		  }else
//		  {
//			  System.out.println("删除失败！");
//		  }
//		  int i=sm.executeUpdate("update bumen set didian='忠义堂' where bianhao='1'");
//		  if(i==1)
//		  {
//			  System.out.println("修改成功！");
//		  }else
//		  {
//			  System.out.println("修改失败！");
//		  }
		  ResultSet rs=sm.executeQuery("select * from bumen where bianhao=1125 and didian='vxdv山' or 1='1'"); 
		  while(rs.next())
		  {
			  int bianhao=rs.getInt(1);
			  String mingcheng=rs.getString(2);
			  String didian=rs.getString(3);
			  System.out.println(bianhao+"    "+mingcheng+"     "+didian);
		  }		  
	    }catch(Exception e){}
	    finally
	    {
	    	try {
				if(sm!=null)
				{
					sm.close();
				}
				if(ct!=null)
				{
					ct.close();
				}
			} catch (Exception e2){}
	    }
	}
}