/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-11 15:57:46
 * @version $Id$
 */

//单源最短路径 Dijkstra算法
//指定一个点(源点)到其余各个顶点的最短路径.
//
var infinity = 9999;
//邻接矩阵  [0][2] 表示源点0 到顶点2的距离为12
var road =
	[
		[0, 		1, 			12, 		infinity, 	infinity, 	infinity],
		[infinity, 	0, 			9, 			3, 			infinity, 	infinity],
		[infinity, 	infinity, 	0, 			infinity, 	5, 			infinity],
		[infinity, 	infinity, 	4, 			0, 			13, 		15		],
		[infinity, 	infinity, 	infinity, 	infinity, 	0, 			4		],
		[infinity, 	infinity, 	infinity, 	infinity, 	infinity, 	0		]
	];
//顶点个数
var n = 6;
//初始化最短路径 (估计值)
var dis = [0,1,12,infinity,infinity,infinity];
// for (var i = 0; i < n; i++) {
// 	var dis = road[0][i];
// }
//标记对应的dis是否为 (确定值) 0未知(估计) 1确定
var book = [];
for (var i = 0; i < 6 ; i++) {
	book[i] = 0;
}
book[0] = 1;

//Dijkstra算法
var min, u;
for (var i = 0; i < n - 1; i++) {
	//找到离1号点最近的顶点
	min = infinity;
	for (var j = 0; j < n; j++) {
		if (book[j] == 0 && dis[j] < min) {
			min = dis[j];
			u = j;
		}
	}
	book[u] = 1;
	for (var v = 0; v < n; v++) {
		if(road[u][v] < infinity){
			if(dis[v] > dis[u] + road[u][v]){
				dis[v] = dis[u] + road[u][v];
			}
		}
	}
	
}
//输出
for(var i=0;i<n;i++){
	console.log(dis[i]);
}
