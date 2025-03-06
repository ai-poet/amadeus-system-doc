# 语音识别服务使用教程

## 使用Zeabur部署模板内置语音识别服务（国内用户推荐）

如果后续使用Zeabur一键部署的用户，Zeabur部署模板里已经内置了语音识别服务地址和API密钥，无需再自行填写。

::: tip
此语音识别服务为个人搭建，仅供测试使用，不保证服务的稳定性和可用性。如需稳定的ASR服务，建议自行部署SenseVoice Small语音识别服务。
:::

## 自行部署SenseVoice Small

如果您希望自行部署SenseVoice Small语音识别服务，可以使用以下Docker Compose文件在您的服务器上快速部署：

```yaml
version: '3'

services:
  sensevoice:
    image: registry.cn-hangzhou.aliyuncs.com/lucklittleboy/sensevoice-oneapi:1.0
    container_name: sensevoice
    ports:
      - "8000:8000"
    environment:
      - DEVICE_TYPE=cpu
    restart: unless-stopped
```

部署步骤：
1. 在服务器上创建一个名为`docker-compose.yml`的文件，将上述内容复制进去
2. 在该文件所在目录执行`docker-compose up -d`命令启动服务
3. 服务启动后，可通过`http://您的服务器IP:8000`访问API服务
4. 将此地址配置为本项目Docker镜像的环境变量即可使用

::: tip
此Docker镜像默认使用CPU进行推理，如果您的服务器有GPU，可以将`DEVICE_TYPE`环境变量设置为`cuda:0`以启用GPU加速。
:::

## 使用商业语音识别服务

除了自行部署SenseVoice Small，您还可以选择使用商业语音识别服务。商业服务通常提供更高的稳定性、更好的识别准确率以及更强的并发处理能力，适合对服务质量有较高要求的场景。


## 使用AIhubmix API

您还可以使用章节LLM中提到的AIhubmix的API端点和密钥来进行语音识别。AIhubmix提供了兼容OpenAI接口的语音识别服务，使用方法如下：

1. 访问AIhubmix官网并注册账号
2. 在个人中心获取API密钥
3. 将AIhubmix的API端点和密钥配置为本项目Docker镜像的环境变量，即Whisper_API_ENDPOINT和WHISPER_API_TOKEN


## Groq API获取（国外用户首选）

Groq是一家美国AI芯片公司，专注设计高性能的AI处理器，目前借助自研的AI芯片LPU，每秒能够输出近几百甚至几千个token。同一个问题所需的时间，Groq完全碾压了其他传统的依赖GPU推理的AI推理服务。

目前国内环境下Groq使用起来不是太方便，而且国外很多网络也不能通畅访问Groq。下面教大家一个方法来实现代理访问Groq，从而体验Groq超快速度。

## Groq注册流程

1. 访问Groq官网 https://groq.com/

::: tip
需要使用代理工具，代理到美国或者日本节点访问，比如[clash](https://github.com/clash-verge-rev/clash-verge-rev)，需要使用谷歌账户注册(使用Github登录可能会被拒绝，感谢@labmem no.1219树灵藤蔓的反馈)
:::

2. 成功访问后可以看到Groq的主界面

## API密钥限制

Groq平台提供个人免费的API密钥，这里我们需要这个API密钥调用它们的Whisper API以获得快速的语音转文本服务：

目前Groq的Whisper API限制如下：
- 每分钟请求次数: 20次

这个限制对于个人使用来说通常是足够的。

## 获取API密钥

1. 访问 https://console.groq.com/keys
2. 注册/登录Groq账号
3. 点击"Create API KEY"按钮
4. 为你的API Key命名
5. 在弹出的对话框中复制API Key并保存，API Key是本项目Docker镜像的环境变量之一,Groq 的 API 地址(https://api.groq.com/openai)是本项目Docker镜像的环境变量之一

::: warning
请妥善保管你的API Key，不要泄露给他人。
:::
