# 部署方法

## 使用 Zeabur 部署

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/LMSUDW)

### 部署步骤

1. 点击上方的 "Deploy on Zeabur" 按钮
2. 如果你还没有 Zeabur 账号，需要先注册一个。如果需要让服务保持连续超过24小时的长久运行，需要花费$5开通Developer计划(可使用wildCard虚拟信用卡开通)
3. 点击上方按钮一键部署到日本区域，等待部署完成，然后如下图，填写环境变量，最后再生成域名，你就可以通过 Zeabur 提供的域名访问你的应用了

![环境变量配置界面](./public/images/5.png)

### 环境变量配置说明

| 环境变量 | 说明 |
|---------|------|
| `VITE_AUTH_API_TOKEN` | 用于后端鉴权，请填写一个随机字符串，长度至少为8位 |
| `VITE_APP_DEFAULT_USERNAME` | 用于前端登录系统鉴权的用户名，以及让Amadeus识别你的身份 |
| `VITE_APP_LOGIN_PASSWORD` | 用于前端登录系统鉴权的密码 |
| `OPENAI_API_KEY` | 调用LLM的API Key，请填写章节LLM中获取的API Key |
| `OPENAI_API_BASE_URL` | 调用LLM的API端点，请填写章节LLM中获取的API端点 |
| `OPENAI_API_MODEL` | 调用LLM的型号，必须使用claude-3-5-sonnet-20241022 |
| `AI_PROMPT` | 调用LLM的提示词，默认为"使用命运石之门(steins gate)的牧濑红莉栖(kurisu),一个天才少女,性格傲娇,不喜欢被叫克里斯蒂娜" |
| `FISH_AUDIO_TOKEN` | 调用Fish Audio的API Key，请填写章节Fish Audio中获取的API Key |
| `WHISPER_API_TOKEN` | 调用Whisper的API Key，请填写章节Groq中获取的API Key |
| `WHISPER_API_ENDPOINT` | 调用Whisper的API端点，请填写章节Groq中获取的API端点 |
| `VOICE_ID` | 牧濑红莉栖的Fish Audio语音ID为4c0b21b2ddb247d8ba45a1c1e84afe64 |
| `MEM_KEY` | 用于调用Mem0的API Key，请填写章节Mem0中获取的API Key |

- 确保你的项目符合 Zeabur 的部署要求
- 如果你需要自定义域名，可以在 Zeabur 的控制面板中进行设置
- 建议查看 [Zeabur 的官方文档](https://zeabur.com/docs) 获取更多部署相关信息

## 使用 Docker Compose 部署

如果你想在自己的服务器上部署，可以使用 Docker Compose 进行部署。

### 准备工作

1. 确保你的服务器已安装 [Docker](https://docs.docker.com/get-docker/) 和 [Docker Compose](https://docs.docker.com/compose/install/)
2. 准备好所有必需的环境变量（参考上方环境变量配置说明）

### Docker Compose 配置

创建 `docker-compose.yml` 文件，内容如下：

```yaml
version: '3'
services:
  container:
    image: ghcr.io/ai-poet/amadeus-system-new-alpha
    ports:
      - "3002:3002"  # 服务端口
    environment:
      - VITE_AUTH_API_TOKEN=${VITE_AUTH_API_TOKEN}
      - VITE_APP_DEFAULT_USERNAME=${VITE_APP_DEFAULT_USERNAME}
      - VITE_APP_LOGIN_PASSWORD=${VITE_APP_LOGIN_PASSWORD}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - OPENAI_API_BASE_URL=${OPENAI_API_BASE_URL}
      - OPENAI_API_MODEL=${OPENAI_API_MODEL}
      - AI_PROMPT=${AI_PROMPT}
      - FISH_AUDIO_TOKEN=${FISH_AUDIO_TOKEN}
      - WHISPER_API_TOKEN=${WHISPER_API_TOKEN}
      - WHISPER_API_ENDPOINT=${WHISPER_API_ENDPOINT}
      - VOICE_ID=${VOICE_ID}
      - MEM_KEY=${MEM_KEY}
    restart: unless-stopped
    networks:
      - amadeus-network
    volumes:
      - ./logs:/app/service/logs  # 日志持久化存储
networks:
  amadeus-network:
    driver: bridge
```

### 部署步骤

1. 创建 `.env` 文件，填入所需的环境变量
2. 在 `docker-compose.yml` 所在目录运行：
```bash
docker-compose up -d
```
3. 服务将在后台启动，可以通过以下命令查看日志：
```bash
docker-compose logs -f
```