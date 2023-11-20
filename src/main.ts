const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const { getTextGeneration } = require('./api/index.ts');

const cors = require('cors');
const path = require('path');
const app = express();

const options = {
  key: fs.readFileSync(path.join(__dirname, '/ssl/server.key')),
  cert: fs.readFileSync(path.join(__dirname, './ssl/server.crt')),
  passphrase: '19961016'
};

const server = https.createServer(options, app);

// 使用Body Parser中间件解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// 定义API接口
app.post('/api/generate', async (req, res) => {
  try {
    // 使用Axios调用第三方接口
    const messages = req.body?.messages || [];
    const response = await getTextGeneration([      
      {
          "role": "system",
          "content": "You are a helpful assistant."
      },
      ...messages
    ]);

    // 检查第三方接口返回的状态码，可以根据实际情况进行调整
    if (response.status === 200) {
        // 返回成功时的数据
        const result = response.data?.output || '出现异常了哦';
        res.json({ success: true, data: result });
    } else {
        // 返回第三方接口的错误状态码和消息
        res.status(response.status).json({ success: false, message: 'Third-party API error' });
    }
    } catch (error) {
    // 捕获Axios调用或其他错误
    console.error('Error calling third-party API:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// 启动服务器
const port = process.env.PORT || 3002;

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});