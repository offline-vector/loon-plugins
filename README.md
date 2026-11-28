# Loon 插件与脚本库 - Google One AI 系列

本仓库提供 iOS Loon 专用独立重写插件。每个插件对应一个独立的促销 SKU 或换道逻辑，方便在 Loon 中**单独开启/关闭以逐个测试**哪一个促销档位可以在你的账号或节点下成功触发。

## 使用教程
1. 打开 **Loon** -> 底部 **「配置」** -> **「插件」**。
2. 点击右上角 **「+」**，粘贴下方表格中想要测试的插件链接。
3. **重要**：测试时，请**只开启当前要测的那一个插件**，关闭其余测试插件，避免重写冲突。
4. 确保 **「配置」->「MitM」** 中已信任 Loon 证书，且 MitM 总开关开启。
5. 开启 Loon 后使用浏览器访问 `one.google.com/ai` 查看或点击订阅。

---

## 5X 档位测试插件 (Ultra 20 TB)

| 方案名称 | 优惠力度 / 说明 | 目标 SKU | GitHub Raw 插件链接 | CDN 加速链接 |
| :--- | :--- | :--- | :--- | :--- |
| **5X (20TB) - 前3期1折 ($9.99/月) .acq** | 前3期 1折 ($9.99/月) | `g1.20tb.3months_ip_90p.acq` | [Raw](https://raw.githubusercontent.com/offline-vector/loon-plugins/main/g1-5x-3m-90p-acq.plugin) | [CDN](https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/g1-5x-3m-90p-acq.plugin) |
| **5X (20TB) - 前3期1折 ($9.99/月) 无acq** | 前3期 1折 ($9.99/月) | `g1.20tb.3months_ip_90p` | [Raw](https://raw.githubusercontent.com/offline-vector/loon-plugins/main/g1-5x-3m-90p.plugin) | [CDN](https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/g1-5x-3m-90p.plugin) |
| **5X (20TB) - 前3期2折 ($19.99/月)** | 前3期 2折 ($19.99/月) | `g1.20tb.3months_ip_80p.acq` | [Raw](https://raw.githubusercontent.com/offline-vector/loon-plugins/main/g1-5x-3m-80p.plugin) | [CDN](https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/g1-5x-3m-80p.plugin) |
| **5X (20TB) - 首月2.5折 ($24.99)** | 首月 2.5折 ($24.99) | `g1.20tb.1month_ip_75p.acq` | [Raw](https://raw.githubusercontent.com/offline-vector/loon-plugins/main/g1-5x-1m-75p.plugin) | [CDN](https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/g1-5x-1m-75p.plugin) |
| **5X (20TB) - 土区普通存储换道 (20tb.m)** | 换道普通 20TB 价格 | `20tb.m` | [Raw](https://raw.githubusercontent.com/offline-vector/loon-plugins/main/g1-turkey-20tb.plugin) | [CDN](https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/g1-turkey-20tb.plugin) |

---

## 20X 档位测试插件 (Ultra 30 TB)

| 方案名称 | 优惠力度 / 说明 | 目标 SKU | GitHub Raw 插件链接 | CDN 加速链接 |
| :--- | :--- | :--- | :--- | :--- |
| **20X (30TB) - 前3期1折 ($19.99/月)** | 前3期 1折 ($19.99/月) | `g1.ai.ultra.3months_ip_90p.acq` | [Raw](https://raw.githubusercontent.com/offline-vector/loon-plugins/main/g1-20x-3m-90p.plugin) | [CDN](https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/g1-20x-3m-90p.plugin) |
| **20X (30TB) - 前3期2折 ($39.99/月)** | 前3期 2折 ($39.99/月) | `g1.ai.ultra.3months_ip_80p.acq` | [Raw](https://raw.githubusercontent.com/offline-vector/loon-plugins/main/g1-20x-3m-80p.plugin) | [CDN](https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/g1-20x-3m-80p.plugin) |
| **20X (30TB) - 前3期2.5折 ($49.99/月)** | 前3期 2.5折 ($49.99/月) | `g1.ai.ultra.3months_ip_75p.acq` | [Raw](https://raw.githubusercontent.com/offline-vector/loon-plugins/main/g1-20x-3m-75p.plugin) | [CDN](https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/g1-20x-3m-75p.plugin) |
| **20X (30TB) - 前3期5折 ($99.99/月)** | 前3期 5折 ($99.99/月) | `g1.ai.pro.3months_ip_50p` | [Raw](https://raw.githubusercontent.com/offline-vector/loon-plugins/main/g1-20x-3m-50p.plugin) | [CDN](https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/g1-20x-3m-50p.plugin) |
| **20X (30TB) - 首月1折 ($19.99)** | 首月 1折 ($19.99) | `g1.ai.ultra.1month_ip_90p.acq` | [Raw](https://raw.githubusercontent.com/offline-vector/loon-plugins/main/g1-20x-1m-90p.plugin) | [CDN](https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/g1-20x-1m-90p.plugin) |
| **20X (30TB) - 土区普通存储换道 (30tb.m 论坛3折)** | 换道普通 30TB 价格 | `30tb.m` | [Raw](https://raw.githubusercontent.com/offline-vector/loon-plugins/main/g1-turkey-30tb.plugin) | [CDN](https://cdn.jsdelivr.net/gh/offline-vector/loon-plugins@main/g1-turkey-30tb.plugin) |
