// Google One 20X(30TB) - [升级] 前3期2折($39.99)
// 目标: ^https://one\.google\.com/(u/[0-9]+/)?ai\?.*$
// 替换目标: g1.ai.ultra.3months_ip_80p (升级 (upgrade))

let body = $response.body;

if (body && typeof body === 'string') {
    const original = body;
    const targets = ['g1.ios.30tb.ai.pro.m', '30tb.ai.pro.m'];
    const replacement = 'g1.ai.ultra.3months_ip_80p';
    
    for (const t of targets) {
        if (body.includes(t)) {
            body = body.split(t).join(replacement);
        }
    }
    
    if (body !== original) {
        console.log('[g1-20x-3m-80p-upgrade] Successfully rewritten to ' + replacement);
    } else {
        console.log('[g1-20x-3m-80p-upgrade] No matching SKU found in response');
    }
    $done({ body: body });
} else {
    $done({});
}
