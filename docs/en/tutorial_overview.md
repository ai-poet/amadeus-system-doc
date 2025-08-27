# Amadeus System Overview

This project is inspired by the Amadeus System from "Steins;Gate 0" and is a multimodal AI role-playing system. By integrating cutting-edge AI technologies, it aims to perfectly recreate virtual characters as interactive digital forms. Whether it's anime characters, game characters, or any other character you dream of, they can all achieve real dialogue and emotional interaction through this system.

## Project Vision

By combining multiple AI technologies such as speech recognition, natural language processing, and emotional analysis, we have created a system that can:
- Accurately restore character personalities and speaking patterns
- Achieve natural and smooth real-time dialogue
- Possess emotional understanding and expression capabilities
- Continuously learn and remember interactions with users

## System Architecture

```
                     +----------------------+
                     |      Client          |
                     | (UI/Interaction Layer)|
                     +----------+-----------+
                                ↕
                     +----------+-----------+
                     |  WebRTC Server       |
                     +----------+-----------+
                          ↗            ↖
   +------------------+---+----+------+------------------+
   |                  |        |      |                  |
+--+---+        +----+----+   |  +---+-------+    +-----+-----+
|Speech|        |         |   |  |           |    |           |
|Input +------->| Claude  |<--+--+ GPT-4.1   |<-->|   Mem0    |
|Module|        | Series  |<-+   |   nano    |    |           |
+--+---+        +----+----+  |   +-----------+    +-----------+
   |                 |       |
   |                 v       |
   |            +----+----+ |    +-----+-----+
   |            | Speech  | |    |  Visual  |
   +----------->| Output  | +----|  Input   |
                | Module  |      |  Module  |
                +----+----+      +-----+----+
                     |                |
          +----------+-----------+    |
          |          |           |    |
   Audio Output  Emotion Analysis Image Frame <----+
          |          |           |
          v          v           v
    [Return via RTM] [Analysis Results] [Processed Frames]
          |          |           |
          +----------+-----------+
                     |
                     ↓
              Real-time return to client
```

## Core Component Description

### 1. Communication Layer
- Real-time bidirectional communication based on WebRTC, using the open-source FastRTC framework
- Ensures immediacy and naturalness of character reactions
- Supports continuous dialogue flow
- Optimized low-latency audio and video transmission

### 2. Speech Processing Module
- **ASR**: Speech recognition, capturing every word from users
- **Fish Audio**: High-quality audio processing ensuring smooth conversations
- Real-time voice interaction, creating authentic conversational experiences

### 3. AI Processing Core
- **Claude Series Large Models**: 
  - Responsible for character dialogue generation and processing
  - Ensures responses align with character settings
  - Maintains dialogue coherence and logic
  
- **GPT-4.1 nano**:
  - Emotional analysis and understanding
  - Proactive topic guidance and interaction

### 4. Memory System
- Deep memory storage based on Mem0
- Records and learns interaction history with users
- Builds character-specific memory databases
- Achieves human-like memory retrieval and association

## Featured Functions

1. **Immersive Role-Playing**
   - Precise character personality restoration
   - Dialogue style consistent with character design
   - Context-aware interactive experience

2. **Emotional Intelligence System**
   - Delicate emotional understanding capabilities
   - Personalized emotional expression
   - Interaction strategy adjustment based on scenarios

3. **Proactive Interaction**
   - Proactive dialogue based on character settings
   - Intelligent topic expansion
   - Natural dialogue rhythm control

4. **Evolutionary Memory**
   - Continuously growing interaction memory
   - Personalized user relationship building
   - Long-term memory accumulation and application

## Technology Stack
- React client interface
- WebRTC for real-time communication and audio/video transmission, and core AI business logic implementation, using FastRTC open-source framework, with Python Flask providing interfaces
- ASR speech recognition
- Claude Series Large Models for character dialogue generation
- GPT-4.1 nano for small classification tasks
- CosyVoice2 for audio quality assurance
- Mem0 providing memory storage system