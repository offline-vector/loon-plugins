// Google One 20X(30TB) - [通用] 前3期5折($99.99)
// 目标: ^https://one\.google\.com/(u/[0-9]+/)?ai\?.*$
// 替换目标: g1.ai.pro.3months_ip_50p (通用促销)

let body = $response.body;

if (body && typeof body === 'string') {
    const original = body;
    const targets = ['g1.ios.30tb.ai.pro.m', '30tb.ai.pro.m'];
    const replacement = 'g1.ai.pro.3months_ip_50p';
    
    for (const t of targets) {
        if (body.includes(t)) {
            body = body.split(t).join(replacement);
        }
    }
    
    if (body !== original) {
        console.log('[g1-20x-3m-50p] Successfully rewritten to ' + replacement);
    } else {
        console.log('[g1-20x-3m-50p] No matching SKU found in response');
    }
    $done({ body: body });
} else {
    $done({});
}
