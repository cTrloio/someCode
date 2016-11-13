//入口模块
var server = require("./server");
var router = require("./route");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);

var str = [1, 2, 3, 4, 5, 6, 8, 7 ];



