# Groq使用教程

## 什么是Groq?

Groq是一家美国AI芯片公司，专注设计高性能的AI处理器，目前借助自研的AI芯片LPU，每秒能够输出近500个token。和GPT-4，Gemini对标，同一个问题所需的时间，Groq完全碾压了其他两者，输出速度比Gemini快10倍，比GPT4快18倍。

目前国内环境下Groq使用起来不是太方便，而且国外很多网络也不能通畅访问Groq。下面教大家一个方法来实现代理访问Groq，从而体验Groq超快速度。

## Groq注册流程

1. 访问Groq官网 https://groq.com/

::: tip
需要使用代理工具，代理到美国或者日本节点访问，比如[clash](https://github.com/clash-verge-rev/clash-verge-rev)。
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
5. 在弹出的对话框中复制API Key并保存，API Key是本项目Docker镜像的环境变量之一,Groq 的 API 地址(https://api.groq.com)是本项目Docker镜像的环境变量之一

::: warning
请妥善保管你的API Key，不要泄露给他人。
:::

## 替代方案

如果你觉得使用代理注册Groq过于麻烦，本项目[章节LLM](/tutorial_ai.html)中介绍的AIhubMix服务端点和API Key同样可以调用Whisper模型进行语音识别。虽然识别速度不如直接使用Groq快，但在无法访问Groq的情况下也是一个可行的替代方案。
