// Google One AI Ultra 3个月特惠套餐重写脚本
// 目标: ^https://one\.google\.com/(u/[0-9]+/)?ai\?.*$
// 作用: 将 g1.ios.30tb.ai.pro.m 替换为特惠 SKU g1.ai.ultra.3months_ip_90p.acq

let body = $response.body;

if (body) {
    if (typeof body === 'string') {
        const target = 'g1.ios.30tb.ai.pro.m';
        const replaceWith = 'g1.ai.ultra.3months_ip_90p.acq';
        if (body.includes(target)) {
            body = body.split(target).join(replaceWith);
            console.log('[Google-One-Promo] Successfully replaced ' + target + ' with ' + replaceWith);
        } else {
            body = body.replace(/g1\.ios\.30tb\.ai\.pro\.m/g, replaceWith);
        }
    }
    $done({ body: body });
} else {
    $done({});
}
