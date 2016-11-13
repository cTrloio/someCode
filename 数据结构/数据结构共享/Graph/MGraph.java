package Graph;

import java.util.Scanner;

public class MGraph<T> implements IGraph<T> {
    private T vertex[];
    private int arc[][];
    private int vertexNum,arcNum;
    private int visited[];
    private int kind;//1是无向图，2是有向图
    @SuppressWarnings("unchecked")
	public MGraph(int vertexNum,int arcNum,int kind,T []a){
    	this.vertexNum=vertexNum;
    	this.arcNum=arcNum;
    	this.kind=kind;
    	vertex=(T[])new Object[vertexNum];
    	visited=new int[vertexNum];
    	arc=new int[vertexNum][vertexNum];
    	for(int i=0;i<vertexNum;i++)
    		vertex[i]=a[i];
    	for(int i=0;i<vertexNum;i++)
    		visited[i]=0;
    	for(int i=0;i<vertexNum;i++){
    		for(int j=0;j<vertexNum;j++)
    			arc[i][j]=0;
    	}
    	Scanner read=new Scanner(System.in);
    	for(int i=0;i<arcNum;i++){
    		int vi=read.nextInt();
    		int vj=read.nextInt();
    		arc[vi][vj]=1;
    		if(kind==1) arc[vj][vi]=1;
    	}
    }
	@Override
	public void DFSTraverse(int i) {
		// TODO Auto-generated method stub
      System.out.println(vertex[i]);
      visited[i]=1;
      for(int j=0;j<vertexNum;j++)
    	  if(arc[i][j]==1&&visited[j]==0)
    		  DFSTraverse(j);
	}
	public void NoDFSTravers(int i){
		System.out.println(vertex[i]);
	    visited[i]=1;
	    int s[]=new int[vertexNum];
	    int top=-1;
	    s[++top]=i;
	    while(top!=-1){
	    	int v=s[top];
	    	for(int j=0;j<vertexNum;j++)
	    	{
	    		if(arc[v][j]==1&&visited[j]==0){
	    			System.out.println(vertex[j]);
	    		    visited[j]=1;
	    		    s[++top]=j;
	    		    break;
	    		}
	    	}
	    	if(s[top]==v) top--;
	    }
	  }
    
	@Override
	public void BFSTraverse(int i) {
		// TODO Auto-generated method stub
      int front=-1,rear=-1;
      int Q[]=new int[vertexNum];
      System.out.println(vertex[i]);
	    visited[i]=1;
	  Q[++rear]=i;
	  while(front!=rear){
		  int v=Q[++front];
		  for(int j=0;j<vertexNum;j++){
			  if(arc[v][j]==1&&visited[j]==0){
	    			System.out.println(vertex[j]);
	    		    visited[j]=1;
	    		    Q[++rear]=j;
	    		}
		  }
	  }
	}
   public void setVisited(){
	   for(int i=0;i<vertexNum;i++)
   		visited[i]=0;
   }
}
