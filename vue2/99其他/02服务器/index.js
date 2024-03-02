const http = require('http');
const url = require('url');

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  // 解析请求的 URL
  const parsedUrl = url.parse(req.url, true);

  // 获取请求路径
  const path = parsedUrl.pathname;

  // 获取请求方法
  const method = req.method;

  // 设置响应头
  // res.setHeader('Content-Type', 'application/json');

  // 如果请求路径为 '/msg' 并且请求方法为 'GET'
  if (path === '/student' && method === 'GET') {
    // 响应一个简单的 JSON 消息
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ name: 'student' }));
  } else if (path === '/school' && method === 'GET') {
    // 响应一个简单的 JSON 消息
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ name: 'school' }));
  } else {
    // 对于其他路径和方法，响应 404 Not Found
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// 监听在端口 3000 上
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
  console.log("localhost:3000")
});
