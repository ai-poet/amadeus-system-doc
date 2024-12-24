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
3. 充值并创建API令牌, API令牌是本项目Docker镜像的环境变量之一
4. AIHubMix 的 API 地址(https://api.aihubmix.com)是本项目Docker镜像的环境变量之一

### 方案二：使用 Amadeus API Center

通过 `api.amadeus-web.top` 进行调用：

- 特点：
  - 提供更优惠的调用价格
  - 支持全系列模型
  - 接口格式与官方完全一致

::: warning
方案二正在建设中....如果您是新用户，且希望立刻能够上手使用，建议使用方案一。
:::
