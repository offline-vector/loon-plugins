// Google One 5X(20TB) - [拉新] 前3期2折($19.99)
// 目标: ^https://one\.google\.com/(u/[0-9]+/)?ai\?.*$
// 替换目标: g1.20tb.3months_ip_80p.acq (拉新 (acq))

let body = $response.body;

if (body && typeof body === 'string') {
    const original = body;
    const targets = ['g1.ios.20tb.ai.pro.m', '20tb.ai.pro.m', 'g1.ios.20tb.m.v2', '20tb.m.v2'];
    const replacement = 'g1.20tb.3months_ip_80p.acq';
    
    for (const t of targets) {
        if (body.includes(t)) {
            body = body.split(t).join(replacement);
        }
    }
    
    if (body !== original) {
        console.log('[g1-5x-3m-80p-acq] Successfully rewritten to ' + replacement);
    } else {
        console.log('[g1-5x-3m-80p-acq] No matching SKU found in response');
    }
    $done({ body: body });
} else {
    $done({});
}
