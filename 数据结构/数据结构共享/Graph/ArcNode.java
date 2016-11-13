package Graph;

public class ArcNode {
    private int adjvex;
    private ArcNode next;
    public void setNext(ArcNode next){
    	this.next=next;
    }
    public ArcNode getNext(){
    	return next;
    }
    public void setAdjvex(int adjvex){
    	this.adjvex=adjvex;
    }
    public int getAdjvex(){
    	return adjvex;
    }
}
