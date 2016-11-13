import java.util.*;
import java.io.*;
public class L4_3
{
	public static void main(String[] args) 
	{
        LinkedList bb= new LinkedList();
        Sp sp1=new Sp("001","话梅",5f);
        Sp sp2=new Sp("002","薯片",8f);
        
       // bb.addFirst(sp1); //后进先出，先放进去的在最里面，后放进去的，在最外面
        //bb.addFirst(sp2);
        
       //for(int i=0;i<bb.size();i++)
       //{
        	//System.out.println(((Sp)bb.get(i)).getMingcheng());
        	//System.out.println(((Sp)bb.getFirst()).getMingcheng());
            //System.out.println(((Sp)bb.getLast()).getMingcheng());
         //}      
        
        bb.addLast(sp1);
        bb.addLast(sp2);
        
        for(int i=0;i<bb.size();i++)
        {
        	//System.out.println(((Sp)bb.get(i)).getMingcheng());
        	//System.out.println(((Sp)bb.getFirst()).getMingcheng());
            System.out.println(((Sp)bb.getLast()).getMingcheng());
        } 
        
	}
}
