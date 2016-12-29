import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import config from './config/index.json';

const port = process.env.PORT || 8081;
// 连接数据库，require数据模型
// require('./server/models').connect(config.dbUri);
const app = express();
// 静态文件
app.use(express.static('./static/'));
// body parser
app.use(bodyParser.urlencoded({ extended: false }));
// 路由
// app
// const appRoutes = require('./server/routes/app/');
// app.use('/api/app', appRoutes);
// 对于任意的get返回index.html, 能够实现非主页刷新
app.get('*', (request, response) => {
    response.sendFile(path.resolve('./static/index.html'));
});
app.listen(port);
console.log(`打包服务器开启 http://127.0.0.1:${port}`);
