import java.sql.*;

public class L10_3
{
     public static void main(String[] args) 
     {
    	PreparedStatement ps=null;
 	    Connection ct=null;
 	    ResultSet rs=null;
 	    
 	   try {
 		       Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
		       ct =DriverManager.getConnection("jdbc:odbc:sql server","sa","ydyd4488321");
// 		      ps=ct.prepareStatement("create database abcd");
//		      ps=ct.prepareStatement("create table aabbcc(aa int,bb nvarchar(2))");
//		       ps=ct.prepareStatement("backup database abcd to disk='e:/abcd.bak'");
//		       ps=ct.prepareStatement("drop table aabbcc");
//		       ps=ct.prepareStatement("drop database abcd");
		       ps=ct.prepareStatement("restore database abcd from disk='e:/abcd.bak'");
		       ps.execute();
		       System.out.println("Ö´ÐÐÍê±Ï");
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
