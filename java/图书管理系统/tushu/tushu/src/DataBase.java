import java.sql.*;
public class DataBase 
{
	public static void main(String[] args)
	{
	    PreparedStatement ps=null;
	    Connection ct=null;
	    ResultSet rs=null;
	    
	    try {
	    	  Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
			  ct=DriverManager.getConnection("jdbc:odbc:sql server","sa","ydyd4488321");
			  ps=ct.prepareStatement("select * from bumen where bianhao=? or didian=?");
			  rs=ps.executeQuery();
			  while(rs.next())
			  {
				  int bianhao=rs.getInt(1);
				  String mingcheng=rs.getString(2);
				  String didian=rs.getString(3);
				  System.out.println(bianhao+"    "+mingcheng+"     "+didian);
			  }	
//			  ps=ct.prepareStatement("insert into bumen values(?,?,?)");
//			  ps.setInt(1,7);     ps.setString(2,"’Ï≤È");   ps.setString(3,"…ΩÕ‚");
			  rs=ps.executeQuery();			  
		} catch (Exception e){}
	    finally
	    {
	    	try {
	    		if(rs!=null)
				{
					rs.close();
				}
	    		if(ps!=null)
				{
					ps.close();
				}
			if(ct!=null)
				{
					ct.close();
				}
				
			} catch (Exception e){}
	    }
	}
}
