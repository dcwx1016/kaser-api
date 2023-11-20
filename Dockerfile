# 使用 Node.js 14 的官方基础镜像
FROM node:16

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将项目文件复制到工作目录
COPY . .

# 暴露 Express 应用的端口
EXPOSE 3000

# 启动 Express 应用
CMD ["npm", "start"]