// Google One AI 土区/3折特惠重写脚本
// 目标: ^https://one\.google\.com/(u/[0-9]+/)?ai\?.*$
// 规则: 30tb\.ai\.pro\.m -> 30tb.m

let body = $response.body;

if (body) {
    if (typeof body === 'string') {
        const original = body;
        body = body.replace(/30tb\.ai\.pro\.m/g, '30tb.m');
        if (body !== original) {
            console.log('[Google-One-Promo] Successfully replaced 30tb.ai.pro.m -> 30tb.m');
        } else {
            console.log('[Google-One-Promo] No match found');
        }
    }
    $done({ body: body });
} else {
    $done({});
}
