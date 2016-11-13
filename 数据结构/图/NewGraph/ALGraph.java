package NewGraph;

import java.util.Scanner;

public class ALGraph<T> implements IGraph<T> {
    private VertexNode<?>[] adjlist;
    private int vertexNum,arcNum,kind;
    private int visited[];
    public ALGraph(int vertexNum,int arcNum,int kind,T[] a){
    	this.vertexNum=vertexNum;
    	this.arcNum=arcNum;
    	this.kind=kind;
    	adjlist=new VertexNode<?>[vertexNum];
    	visited=new int[vertexNum];
    	for(int i=0;i<vertexNum;i++){
    		visited[i]=0;
    	}
    	for(int i=0;i<vertexNum;i++){
    		VertexNode<T> v=new VertexNode<T>();
    		v.setVertex(a[i]);
    		v.setFirstedge(null);
    		adjlist[i]=v;
    	}
    	Scanner read=new Scanner(System.in);
    	for(int i=0;i<arcNum;i++){
    		int vi=read.nextInt();
    		int vj=read.nextInt();
    		ArcNode s=new ArcNode();
    		s.setAdjvex(vj);
    		s.setNext(adjlist[vi].getFirstedge());
    		adjlist[vi].setFirstedge(s);
    		if(kind==1){
    			ArcNode t=new ArcNode();
        		t.setAdjvex(vi);
        		t.setNext(adjlist[vj].getFirstedge());
        		adjlist[vj].setFirstedge(t);
    		}
    	}
    }
	@Override
	public void DFSTraverse(int i) {
		// TODO Auto-generated method stub
       System.out.println(adjlist[i].getVertex());
       visited[i]=1;
       ArcNode p=adjlist[i].getFirstedge();
       while(p!=null){
    	   int j=p.getAdjvex();
			if (visited[j] == 0) {
				DFSTraverse(j);
			} else {
				p = p.getNext();
			}
		}
	}
	
	public int jiediandedu(int i) {//某个节点的度
		int count=0;
		ArcNode p=adjlist[i].getFirstedge();
		while(p!=null){
			p=p.getNext();
			count++;
		}
		return count;
	}
	
	public void jiediandelinjiedian(int i) {//遍历某个节点的所有邻接点
		System.out.println(adjlist[i].getVertex());
		ArcNode p=adjlist[i].getFirstedge();
		while(p!=null){
			
			p=p.getNext();
		}
		
	}
	
	public void Traverse(){
		int count=0;
		for(int i=0;i<vertexNum;i++){
			if(visited[i]==0)
			{
				count++;
				DFSTraverse(i);
			}
		}
		if (count == 1) {
			System.out.println("图是连通的");
		} else {
			System.out.println("图中有" + count + "个连通分量");
		}
	}
   
	public boolean Way(int u,int v){
    	visited[u]=1;
    	 ArcNode p=adjlist[u].getFirstedge();
         while(p!=null){
      	   int j=p.getAdjvex();
      	   if(visited[j]==0){
      		   if(j==v)
      			   return true;
      		   else{
      			 if( Way(j,v))
      		     return true;
      		   }
      	   }
      	  p=p.getNext();
         }
    	return false;
    }
	@Override
	public void BFSTraverse(int i) {
		// TODO Auto-generated method stub
        int front=-1,rear=-1;
        int[]Q=new int[vertexNum];
        System.out.println(adjlist[i].getVertex());
        visited[i]=1;
        Q[++rear]=i;
        while(front!=rear){
        	int v=Q[++front];
        	ArcNode p=adjlist[v].getFirstedge();
        	while(p!=null){
        		int j=p.getAdjvex();
         	    if(visited[j]==0){
         		   System.out.println(adjlist[j].getVertex());
         		   visited[j]=1;
         		  Q[++rear]=j;
         	   }
         	    p=p.getNext();
        	}
        	
        }
	}
}