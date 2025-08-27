# 构建阶段
FROM node:20-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production 2>/dev/null || npm install --production

# 安装开发依赖（VitePress需要）
RUN npm install

# 复制所有源代码
COPY . .

# 构建文档
RUN npm run docs:build

# 运行阶段
FROM nginx:alpine

# 从构建阶段复制构建后的文件
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

# 创建nginx配置文件，支持单页应用路由
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]