const axios = require('axios');
const { SocksProxyAgent } = require('socks-proxy-agent');

// 设置代理服务器地址和本地端口
const proxyOptions = 'socks5://127.0.0.1:1080';

// 创建代理配置对象
const agent = new SocksProxyAgent(proxyOptions);

// 配置axios使用代理
const axiosConfig = {
  httpsAgent: agent,
  httpAgent: agent,
};

// 发送HTTPS请求
axios.get('https://www.google.com', axiosConfig)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
