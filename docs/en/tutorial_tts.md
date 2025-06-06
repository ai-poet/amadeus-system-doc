# CosyVoice2 Text-to-Speech Model

Alibaba's Tongyi Lab speech team officially released the CosyVoice2 text-to-speech model. This model supports bidirectional streaming of text and speech, supports multiple languages, mixed languages and dialects, providing more accurate, stable, faster, and better speech generation capabilities.

Silicon Flow SiliconCloud officially launched the inference accelerated version of CosyVoice2-0.5B (priced at ¥105/ M UTF-8 bytes, each character occupies 1 to 4 bytes). Including network transmission time, the model output latency is as low as 150ms, bringing more efficient user experience to your generative AI applications. Like other language synthesis models on SiliconCloud, CosyVoice2 supports 8 preset tones out of the box, supports user preset tones and dynamic tones, and allows customization of speech rate, audio gain and output sampling rate.

## Online Experience and Documentation

You can experience and view detailed documentation at [Silicon Flow](https://siliconflow.cn).

## Model Features

Combined with Alibaba's speech recognition model SenseVoice-Small (free to use) previously launched on SiliconCloud and various other large models on the platform, developers can easily call model APIs to efficiently develop end-to-end speech interaction applications, including audiobooks, streaming media audio output, virtual assistants and other applications.

### Technical Features

CosyVoice2 is a streaming text-to-speech model based on large language models, using a unified streaming/non-streaming framework design:

- Improves speech token codebook utilization through Finite Scalar Quantization (FSQ)
- Simplifies text-to-speech language model architecture
- Develops chunk-aware causal flow matching models supporting different synthesis scenarios
- Achieves ultra-low latency of 150ms in streaming mode while maintaining almost the same synthesis quality as non-streaming mode

### Core Advantages

#### Natural Fluency
- Prosody and sound quality enhancement: Improved MOS evaluation score from 5.4 to 5.53
- Emotional and dialect flexibility: Supports more refined emotional control and dialect accent adjustment

## Application Scenarios

CosyVoice2 is particularly suitable for the following application scenarios:
- Audiobook generation
- Live streaming and media voiceover
- Virtual assistants and customer service systems
- Voice navigation and prompts
- Multilingual content localization

## Developer Reviews

After the release of CosyVoice2.0, some developers who experienced it first said that it supports ultra-fine control functions, the synthesized voice is more realistic and natural, making it one of the most outstanding text-to-speech solutions on the market.

## Configuration in Amadeus System

1. Register account on Silicon Flow platform
2. Obtain API Key
3. Configure in Amadeus system TTS settings
4. Select CosyVoice2 model and preferred voice tone

::: warning Usage Tips
- Please use API quota reasonably to avoid resource waste
- It is recommended to conduct sufficient testing in production environment before deployment
:::