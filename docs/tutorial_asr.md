# ASR (自动语音识别) 服务

本项目使用自动语音识别 (ASR) 技术来将语音转换成文本，支持多种ASR服务。

## 单机版Whisper部署

如果你想在本地部署Whisper语音识别服务，可以尝试使用docker镜像`onerahmet/openai-whisper-asr-webservice:latest-gpu`，通过以下步骤部署：

### 环境要求

- NVIDIA GPU
- Docker和Docker Compose
- 支持CUDA的服务器

### 部署步骤

1. 创建`docker-compose.yml`文件，包含以下内容：

```yaml
version: '3'
services:
  whisper:
    image: onerahmet/openai-whisper-asr-webservice:latest-gpu
    ports:
      - 9000:9000  # 服务暴露端口
    environment:
      - ASR_MODEL=base
      - DEVICE_TYPE=cuda:0  # 如果没有GPU可以设置为cpu
    restart: unless-stopped
    volumes:
      - ./audio_data:/tmp  # 音频文件存储目录
```

2. 在目录中运行:
```bash
docker-compose up -d
```

3. 测试服务是否运行:
```bash
curl http://localhost:9000/health
```

4. 将此地址配置为ASR服务的API端点

此Docker镜像默认使用CPU进行推理，如果您的服务器有GPU，可以将`DEVICE_TYPE`环境变量设置为`cuda:0`以启用GPU加速。

## AIhubmix提供的ASR服务

如果你不想自行部署ASR服务，可以使用AIhubmix提供的API服务：

### 特点
- 支持高精度语音识别
- 免去本地部署的麻烦
- 稳定的API调用

### 使用方法

1. 访问[AIhubmix](https://aihubmix.com/)注册账号
2. 充值API积分
3. 将AIhubmix的API端点和密钥配置在系统的API配置页面

## Groq提供的ASR服务

Groq平台提供个人免费的API密钥，这里我们需要这个API密钥调用它们的Whisper API以获得快速的语音转文本服务：

目前Groq的Whisper API限制如下：
- 每分钟请求次数: 20次

这个限制对于个人使用来说通常是足够的。

## 获取API密钥

1. 访问 https://console.groq.com/keys
2. 注册/登录Groq账号
3. 点击"Create API KEY"按钮
4. 为你的API Key命名
5. 在弹出的对话框中复制API Key并保存，登录Amadeus系统后在API配置页面中填入Groq的API密钥和API地址(https://api.groq.com/openai)

::: warning
请妥善保管你的API Key，不要泄露给他人。
:::

::: tip API配置
无论你选择哪种ASR服务，都需要在Amadeus系统的API配置页面中填写相关的API端点和密钥。系统会保存这些配置，方便后续使用。
:::
