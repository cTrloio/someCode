package huffmantree;

public class HuffmanTree {
	Node selectMin(Node[] HN,int end){//返回当前最小值
		Node min=HN[end];
		for(int i=0; i<HN.length;i++){
			if(HN[i].getFlag()==0&&HN[i].getWeight()<min.getWeight()){
				min=HN[i];
			}
		}
		return min;
	}
	int[][] huffmanCoding(int[] W){
		int n=W.length;	//权个数
		int m=2*n-1;	//节点个数
		Node []HN=new Node[m]; //构造存放节点的空数组
		int i;
		for(i=0;i<n;i++){		//把权值赋予空数组
			HN[i]=new Node(W[i]);
		}
		for(i=n;i<m;i++){//两个最小节点合成一个节点,并设置指针
			Node min1=selectMin(HN,i-1);
			min1.setFlag(1);
			Node min2=selectMin(HN,i-1);
			min2.setFlag(1);
			
			HN[i]=new Node();//定义节点
			min1.setParent(HN[i]);//设置指针
			min2.setParent(HN[i]);
			HN[i].setLchild(min1);
			HN[i].setRchild(min2);
			HN[i].setWeight(min1.getWeight()+min2.getWeight());
		}
		int[][] huffCode=new int[n][n];//分别记录 原值和编码后值
		for(int j=0;j<n;j++){
			int start =n-1;
			for(Node c=HN[j],p=c.getParent();p!=null;c=p,p=p.getParent()){
				if(p.getLchild().equals(c)){
					huffCode[j][start--]=0;
				}else{
\					huffCode[j][start--]=1;
				}
			}
			huffCode[j][start]=-1;
		}
		return huffCode;
		
	}
}
	













