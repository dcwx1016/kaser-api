// 要访问的 HTTPS 网站 URL
const https = require('https');
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