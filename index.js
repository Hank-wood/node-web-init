const express = require('express');
const app = express();
const path = require('path');

// 设置配置
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'lib/views'));
app.use(express.static(__dirname + '/public'));

// 加载DB配置
require('./config/mongoose');

// 加载路由
require('./lib/routes/index.server.routes')(app);

app.listen('3000', function(){
  console.log('开启服务: 3000 端口');
});
