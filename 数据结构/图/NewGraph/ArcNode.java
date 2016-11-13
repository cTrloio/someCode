package NewGraph;

public class ArcNode<T> {
    private int adjvex;
    private ArcNode<T> next;
    public void setNext(ArcNode<T> next){
    	this.next=next;
    }
    public ArcNode<T> getNext(){
    	return next;
    }
    public void setAdjvex(int adjvex){
    	this.adjvex=adjvex;
    }
    public int getAdjvex(){
    	return adjvex;
    }
}