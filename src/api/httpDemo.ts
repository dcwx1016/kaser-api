// 要访问的 HTTPS 网站 URL
const https = require('https');

// 发起 HTTPS 请求
const getTextGeneration = (messages) => {
  // Request data
  const postData = JSON.stringify({
    "model": "qwen-turbo",
    "input":{
        messages
    }
  });
  
  // Request options
  const options = {
    hostname: 'dashscope.aliyuncs.com',
    port: 443,
    path: '/api/v1/services/aigc/text-generation/generation',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
  };
  
  // Create a request object
  const req = https.request(options, (res) => {
    let data = '';
  
    // Receive response data
    res.on('data', (chunk) => {
      data += chunk;
    });
  
    // Handle the end of the response
    res.on('end', () => {
      console.log('Response:', data);
    });
  });
  
  // Handle request errors
  req.on('error', (error) => {
    console.error('Error:', error);
  });
  
  // Write data to the request body
  req.write(postData);
  
  // End the request
  req.end();
}


module.exports = {
  getTextGeneration
}