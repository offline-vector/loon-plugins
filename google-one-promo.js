// Google One AI 土区老定价特惠重写脚本 (30TB 3折 & 20TB 4折)
// 目标: ^https://one\.google\.com/(u/[0-9]+/)?ai\?.*$

let body = $response.body;

if (body && typeof body === 'string') {
    const original = body;

    // 1. 30TB (20X 档) -> 换道普通 30TB 老定价 (₺2,949.99/月，约 3 折)
    body = body.replace(/g1\.ios\.30tb\.ai\.pro\.m/g, 'g1.ios.30tb.m');
    body = body.replace(/30tb\.ai\.pro\.m/g, '30tb.m');

    // 2. 20TB (5X 档) -> 换道普通 20TB 老定价 (₺1,989.99/月，约 4.1 折)
    body = body.replace(/g1\.ios\.20tb\.ai\.pro\.m/g, 'g1.ios.20tb.m');
    body = body.replace(/20tb\.ai\.pro\.m/g, '20tb.m');
    body = body.replace(/g1\.ios\.20tb\.m\.v2/g, 'g1.ios.20tb.m');
    body = body.replace(/20tb\.m\.v2/g, '20tb.m');

    if (body !== original) {
        console.log('[Google-One-Promo] Successfully applied Turkey legacy SKU rewrite');
    } else {
        console.log('[Google-One-Promo] No match found');
    }
    $done({ body: body });
} else {
    $done({});
}
