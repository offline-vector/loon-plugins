# Loon 插件与配置

本仓库提供 iOS Loon 相关插件与脚本配置。

## 1. Google One AI Ultra 3个月特惠插件

重写 `one.google.com/ai` 响应，将 `g1.ios.30tb.ai.pro.m` 替换为特惠 SKU `g1.ai.ultra.3months_ip_90p.acq`。

- **GitHub Raw 链接**：
  ```text
  https://raw.githubusercontent.com/offline-vector/loon-plugins/main/google-one-promo.plugin
  ```
- **国内 CDN 镜像**：
  ```text
  https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/google-one-promo.plugin
  ```

## 2. Google One Ultra 套餐解锁插件

- **GitHub Raw 链接**：
  ```text
  https://raw.githubusercontent.com/offline-vector/loon-plugins/main/google-one-ultra.plugin
  ```
- **国内 CDN 镜像**：
  ```text
  https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/google-one-ultra.plugin
  ```

### 使用方法

1. 打开 **Loon** App。
2. 点击下方 **「配置」** -> **「插件」**。
3. 点击右上角 **「+」**，粘贴上述任意一个插件链接，点击保存并开启插件。
4. 确保在 **「配置」->「MitM」** 中已生成并信任证书，且 MitM 总开关处于开启状态。
