# Amadeus System 系统概述

本项目脱胎于《命运石之门 0》中的 Amadeus System，是一个多模态的 AI 角色扮演系统。通过整合最先进的 AI 技术，致力于将虚拟角色完美还原为可交互的数字形态。无论是动漫角色、游戏人物，还是其他任何你梦想中的角色，都将可以通过本系统实现真实的对话和情感交互。

## 项目愿景

通过结合语音识别、自然语言处理、情感分析等多项 AI 技术，我们打造了一个能够：
- 精确还原角色性格和说话方式
- 实现自然流畅的实时对话
- 具备情感理解和表达能力
- 持续学习和记忆与用户的互动

## 系统架构

```
                     +----------------------+
                     |      客户端          |
                     | (用户界面/交互层)     |
                     +----------+-----------+
                                ↕
                     +----------+-----------+
                     |  WebRTC 服务器       |
                     +----------+-----------+
                          ↗            ↖
   +------------------+---+----+------+------------------+
   |                  |        |      |                  |
+--+---+        +----+----+   |  +---+-------+    +-----+-----+
|语音  |        |         |   |  |           |    |           |
|输入  +------->| Claude  |<--+--+ GPT-4.1   |<-->|   Mem0    |
|模块  |        | 系列    |<-+   |   nano    |    |           |
+--+---+        +----+----+  |   +-----------+    +-----------+
   |                 |       |
   |                 v       |
   |            +----+----+ |    +-----+-----+
   |            |  语音   | |    |  视觉    |
   +----------->|  输出   | +----|  输入    |
                |  模块   |      |  模块    |
                +----+----+      +-----+----+
                     |                |
          +----------+-----------+    |
          |          |           |    |
     输出音频    情感分析    图像帧传输 <----+
          |          |           |
          v          v           v
    [通过 RTM 返回] [分析结果]  [处理后帧]
          |          |           |
          +----------+-----------+
                     |
                     ↓
              实时返回给客户端
```

## 核心组件说明

### 1. 通信层
- 基于 WebRTC 的实时双向通信，使用开源框架 FastRTC
- 确保角色反应的即时性和自然度
- 支持持续性对话流
- 优化的低延迟音视频传输

### 2. 语音处理模块
- **ASR**: 语音识别，捕捉用户的每一句话
- **Fish Audio**: 高质量的音频处理，确保对话的流畅性
- 实时语音互动，营造真实的交谈体验

### 3. AI 处理核心
- **Claude 系列大模型**: 
  - 负责角色对话的生成和处理
  - 确保回复符合角色设定
  - 维持对话的连贯性和逻辑性
  
- **GPT-4.1 nano**:
  - 情感分析和理解
  - 主动话题引导和互动

### 4. 记忆系统
- 基于 Mem0 的深度记忆存储
- 记录并学习与用户的互动历史
- 构建角色专属的记忆数据库
- 实现类似人类的记忆检索和联想

## 特色功能

1. **沉浸式角色扮演**
   - 精确的角色性格还原
   - 符合人设的对话风格
   - 情境感知的互动体验

2. **情感智能系统**
   - 细腻的情感理解能力
   - 个性化的情感表达
   - 根据场景调整互动策略

3. **主动式互动**
   - 基于角色设定的主动对话
   - 智能话题延展
   - 自然的对话节奏把控

4. **进化式记忆**
   - 持续成长的互动记忆
   - 个性化的用户关系构建
   - 长期记忆的积累与应用

## 技术栈
- React 客户端界面
- WebRTC 实现实时通信和音视频传输，以及实现核心的AI业务逻辑，采用 FastRTC 开源框架，使用Python Flask提供接口
- ASR 语音识别
- Claude 系列大模型 负责角色对话生成
- GPT-4.1 nano 处理小型分类任务
- CosyVoice2 确保音频质量
- Mem0 提供记忆存储系统
