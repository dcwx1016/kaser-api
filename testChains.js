// 要访问的 HTTPS 网站 URL
const https = require('https');
const targetUrl = 'https://api.openai.com/v1/models';

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