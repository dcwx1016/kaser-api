const axios = require('axios');
const https = require('https');
const { SocksProxyAgent } = require('socks-proxy-agent');
const socks5Proxy = 'socks5://127.0.0.1:1080';

const customHttpsAgent = new https.Agent({
  rejectUnauthorized: false
});

const instance = axios.create({
  baseURL: 'https://www.google.com',
  httpsAgent: new SocksProxyAgent(socks5Proxy, { ...customHttpsAgent }),
});

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

instance.get('/')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
