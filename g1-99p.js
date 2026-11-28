// Google One 20TB -> 3个月 99% off (约 0.72 CNY/月) 重写脚本
// 目标: ^https:\/\/one\.google\.com/(u/[0-9]+/)?ai(\?.*)?$
// 替换: g1.ios.20tb.m.v2 -> com.google.gemini.2tb.ai.m.3month_ip_99p

let body = $response.body;

if (body && typeof body === 'string') {
    const original = body;
    const targets = [
        'g1.ios.20tb.m.v2',
        '20tb.m.v2',
        'g1.ios.20tb.ai.pro.m',
        '20tb.ai.pro.m'
    ];
    const replacement = 'com.google.gemini.2tb.ai.m.3month_ip_99p';

    for (const t of targets) {
        if (body.includes(t)) {
            body = body.split(t).join(replacement);
        }
    }

    if (body !== original) {
        console.log('[g1-99p] Successfully replaced with ' + replacement);
    } else {
        console.log('[g1-99p] No matching 20TB SKU found in response');
    }
    $done({ body: body });
} else {
    $done({});
}
