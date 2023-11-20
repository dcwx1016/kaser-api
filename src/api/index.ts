const axios = require('axios');
const { apiKey } = require('./qwen-turbo/config.ts')

const instance = axios.create({
  baseURL: 'https://dashscope.aliyuncs.com/api/v1/services/aigc',
  headers: {
    'Authorization': apiKey
  }
});

const getTextGeneration = (messages) => {
  return instance.post('/text-generation/generation', {
    "model": "qwen-turbo",
    "input":{
        messages
    }
  })
}

module.exports = {
  getTextGeneration
}