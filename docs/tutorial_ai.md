# LLM API服务接入说明

我们提供两种 LLM API 接入方案，均支持与官方完全相同的接口格式，可以无缝对接所有支持 LLM 的应用程序。

## API调用方案

### 方案一：使用 AIHubMix（推荐）

通过 [AIHubMix](https://aihubmix.com?aff=6zS4) 进行AI接口调用是推荐的首选方案：

- 优势：
  - 原价调用，无需额外费用，按量付费
  - 支持全系列模型
  - 接口格式与官方完全一致
  - 即开即用，无需等待
  - 支持多种支付方式
  - 技术支持响应快速

使用步骤：
1. 访问 [AIHubMix](https://aihubmix.com?aff=6zS4)
2. 注册/登录账号
3. 充值并创建API令牌
4. 登录Amadeus系统后，在AI配置页面中填入AIHubMix的API地址(https://api.aihubmix.com)和API令牌

### 方案二：使用 Amadeus API Center

通过 `api.amadeus-web.top` 进行调用：

- 特点：
  - 提供更优惠的调用价格
  - 支持全系列模型
  - 接口格式与官方完全一致

::: warning
方案二开始内测，有需要的可以直接通过B站联系我进行内测，名额有限，如果想快速体验建议使用方案一。
:::

::: tip AI配置
无论你选择哪种LLM服务，系统都会在本地保存你的AI配置，无需每次登录都重新填写。你可以随时在设置页面更新这些配置。
:::
