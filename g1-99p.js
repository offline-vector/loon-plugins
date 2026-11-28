// Google One 99p (3个月 99% OFF / 0.05折) 重写脚本
// 目标: ^https://one\.google\.com/(u/[0-9]+/)?ai\?.*$
// 替换为: com.google.gemini.2tb.ai.m.3month_ip_99p (约 0.72 CNY / 3.49 TRY / 3个月)

let body = $response.body;

if (body && typeof body === 'string') {
    const original = body;
    const replacement = 'com.google.gemini.2tb.ai.m.3month_ip_99p';

    // 覆盖所有可能的源 SKU (包括带与不带 g1.ios 前缀的 30TB、20TB、2TB)
    const targets = [
        '30tb.ai.pro.m',
        'g1.ios.30tb.ai.pro.m',
        '20tb.ai.pro.m',
        'g1.ios.20tb.ai.pro.m',
        '20tb.m.v2',
        'g1.ios.20tb.m.v2',
        'g1.ios.2tb.ai.m',
        '2tb.ai.m'
    ];

    for (const t of targets) {
        if (body.includes(t)) {
            body = body.split(t).join(replacement);
        }
    }

    if (body !== original) {
        console.log('[g1-99p] Successfully replaced SKU with ' + replacement);
    } else {
        console.log('[g1-99p] No matching target SKU found');
    }
    $done({ body: body });
} else {
    $done({});
}
