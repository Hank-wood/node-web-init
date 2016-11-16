const express = require('express');
const path = require('path');
const compression = require('compression');
const useragent = require('express-useragent');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const config = require('./config/config');

const app = express();
// 设置配置
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'lib/views'));
app.use(express.static(__dirname + '/public'));

app.use(compression());
app.use(useragent.express());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(useragent.express());
app.use(flash());

// 配置session
var sess = {
  secret: config.session_secret,
  cookie: {
    maxAge: 60000
  },
  resave: true,
  saveUninitialized: true
};
if (app.get('env') === 'production') {
  app.set('trust proxy', 1)
  sess.cookie.secure = true;
}
app.use(session(sess));

// 加载DB配置
require('./config/mongoose');

// 加载路由
require('./lib/routes/index.server.routes')(app);

app.listen('3000', function(){
  console.log('开启服务: 3000 端口');
});
