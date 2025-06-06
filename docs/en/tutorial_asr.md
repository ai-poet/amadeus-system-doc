# ASR (Automatic Speech Recognition) Service

This project uses Automatic Speech Recognition (ASR) technology to convert speech to text, supporting multiple ASR services.

## Standalone Whisper Deployment

If you want to deploy Whisper speech recognition service locally, you can try using the docker image `onerahmet/openai-whisper-asr-webservice:latest-gpu` and deploy through the following steps:

### Environment Requirements

- NVIDIA GPU
- Docker and Docker Compose
- CUDA-enabled server

### Deployment Steps

1. Create a `docker-compose.yml` file with the following content:

```yaml
version: '3'
services:
  whisper:
    image: onerahmet/openai-whisper-asr-webservice:latest-gpu
    ports:
      - 9000:9000  # Service exposure port
    environment:
      - ASR_MODEL=base
      - DEVICE_TYPE=cuda:0  # If no GPU available, set to cpu
    restart: unless-stopped
    volumes:
      - ./audio_data:/tmp  # Audio file storage directory
```

2. Run in the directory:
```bash
docker-compose up -d
```

3. Test if the service is running:
```bash
curl -X POST "http://localhost:9000/asr" -H "accept: application/json" -H "Content-Type: multipart/form-data" -F "audio_file=@test.wav;type=audio/wav"
```

## Cloud ASR Services

### Option 1: Groq API (Recommended for International Users)
- Fast processing speed
- Good accuracy
- Competitive pricing

### Option 2: Silicon Flow API (Recommended for Domestic Users)
- Stable domestic access
- Chinese language optimization
- Good cost-effectiveness

### Configuration Steps

1. Register account for your chosen service
2. Obtain API Key
3. Configure in Amadeus system settings
4. Test voice recognition functionality

::: tip Service Selection
Choose the appropriate ASR service based on your geographic location and language requirements.
:::