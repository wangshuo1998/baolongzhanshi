const Koa = require("koa");
const bodyParser =  require("koa-bodyparser");
const config = require("./config/default");
//实例化一个对象
const app = new Koa();
//引入路由器
const router = require("./router/index.js");
app.use(bodyParser());
//使用中间件
app
	.use(router.routes())
	.use(router.allowedMethods());

 app.listen(config.port);
 console.log(`正在监听${config.port}端口...`)