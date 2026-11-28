// Google One 20X(30TB) - 前3期1折(.99) acq版
// 目标: ^https:\/\/one\.google\.com\/(u\/[0-9]+\/)?ai\?.*$
// 替换为: g1.ai.ultra.3months_ip_90p.acq

let body = .body;

if (body && typeof body === 'string') {
    const original = body;
    const targets = ['g1.ios.30tb.ai.pro.m', '30tb.ai.pro.m'];
    const replacement = 'g1.ai.ultra.3months_ip_90p.acq';
    
    for (const t of targets) {
        if (body.includes(t)) {
            body = body.split(t).join(replacement);
        }
    }
    
    if (body !== original) {
        console.log('[g1-20x-3m-90p] Successfully rewritten to ' + replacement);
    } else {
        console.log('[g1-20x-3m-90p] No matching SKU found in response');
    }
    ({ body: body });
} else {
    ({});
}
