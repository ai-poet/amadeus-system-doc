# Required Modules

This project requires the following services and accounts to run completely. Please ensure you have prepared all necessary materials before starting deployment.

## Server Requirements

::: tip Choose one of the following
- A VPS server in Japan region
  - Recommended configuration: 1 core 1GB or higher
  - Bandwidth: Minimum 10Mbps
  - System: Ubuntu 20.04 or newer version
- A Zeabur account
  - For deploying WebRTC server
  - Can achieve better latency experience
:::

## Required API Services

### 1. Claude Series and OpenAI API
- Valid API Key and endpoint

### 2. Groq API (preferred for overseas users) or Silicon Flow API (preferred for domestic users)
- For speech recognition services
- Valid account and API Key

### 3. Mem0 API
- For memory storage services
- Valid Mem0 account and API Key

### 4. Fish Audio API
- For voice cloning services
- Valid Fish Audio account and API Key

### 5. FastRTC
- For real-time audio and video communication
- Requires configuration of corresponding signaling server

## Important Notes

::: warning Important Reminders
1. Please keep all API Keys secure and do not leak them
2. Pay attention to API quota usage
3. Ensure the server can stably access these APIs
:::

::: tip Cost Estimation
Based on normal user usage frequency, estimated monthly total cost:
- API fees: $50-100
- Server fees: Around $5
:::

## Optional Components

- Domain name and SSL certificate (for external HTTPS access, not needed if using Zeabur)