const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
import OpenAI from 'openai';//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

const openai = new OpenAI({
  apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
});

openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
}).then((res)=>{
    console.log(res);
}).catch(()=>{
    console.log("error")
})
const app = express();

// 使用Body Parser中间件解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 静态文件服务器
app.use(express.static(path.join(__dirname, 'site')));

// 定义API接口
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from API!' });
});

// 启动服务器
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});