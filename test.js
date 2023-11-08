const https = require('https');
// const {SocksProxyAgent} = require('socks-proxy-agent')

// 创建一个 SocksProxyAgent 实例
// const agent = new SocksProxyAgent('socks5://127.0.0.1:1083');

// 要访问的 HTTPS 网站 URL
const targetUrl = 'https://www.google.com';

// 发起 HTTPS 请求
https.get(targetUrl, { 
  // agent,
  headers: {
    'Authorization': 'Bearer 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',
  },
}, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  // 输出响应主体
  res.on('data', (d) => {
    process.stdout.write(d);
  });
}).on('error', (e) => {
  console.error(e);
});
