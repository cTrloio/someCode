/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-11 13:28:02
 * @version $Id$
 */
//佛洛依德算法 求两点之间最短距离  O(n^3) 适用于n值较小的情况
//不能解决带有"负权回路"的图,如1>2>3>1>2>3... 然而这样的图并没有最短路径之说
//
//表示初始化路径
var infinity = 9999;
//路径邻接矩阵   [2][4]表示 顶点2-顶点4 距离为1
var road = [
				[0,			2,			6,	4		],
				[infinity,	0,			3,	infinity],
				[7,			infinity,	0,	1		],
				[5,			infinity,	12,	0		]
			];
var n = 4;   //表示顶点个数
function floyd(){
	for(var k=0;k<n;k++){
		for(var i=0;i<n;i++){
			for(var j=0;j<n;j++){
				if(road[i][j] > road[i][k] + road[k][j] && road[i][k]<infinity && road[k][j]<infinity){
					road[i][j] = road[i][k] + road[k][j];
				}
			}
		}
	}
}
function print(){
	for(var i=0;i<n;i++){
		for(var j=0;j<n;j++){
			console.log(road[i][j]);
		}
	}
}
floyd();
print();