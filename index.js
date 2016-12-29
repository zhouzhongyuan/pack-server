import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import statusRoutes from './routes/status';
import packRoutes from './routes/pack';

// import config from './config/index.json';

const port = process.env.PORT || 8081;
// 连接数据库，require数据模型
// require('./server/models').connect(config.dbUri);
const app = express();
app.use(express.static('./static/'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/status', statusRoutes);
app.use('/api/pack', packRoutes);

app.get('*', (request, response) => {
    response.sendFile(path.resolve('./static/index.html'));
});
app.listen(port);
console.log(`打包服务器开启 http://127.0.0.1:${port}`);
