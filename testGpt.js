const express = require('express');
const bodyParser = require('body-parser');
const OpenAI  = require('openai');
// import OpenAI from 'openai';//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

const openai = new OpenAI({apiKey : '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'});

async function fetchCompletion(content) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content }],
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0];
  console.log(completion.choices[0]); // { message: {role: 'assistant', content: ""}, ...}
}

const app = express();

// 使用Body Parser中间件解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 定义API接口
app.get('/api', async (req, res) => {
    let result = await fetchCompletion(req.query?.content || 'Say this is a test');
    console.log(result.message?.content);
    res.json({ message: result.message?.content || 'no res' });
});

// 启动服务器
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});