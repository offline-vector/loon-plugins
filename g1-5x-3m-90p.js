// Google One 5X(20TB) - 前3期1折(.99) 无acq版
// 目标: ^https:\/\/one\.google\.com\/(u\/[0-9]+\/)?ai\?.*$
// 替换为: g1.20tb.3months_ip_90p

let body = .body;

if (body && typeof body === 'string') {
    const original = body;
    const targets = ['g1.ios.20tb.ai.pro.m', '20tb.ai.pro.m', 'g1.ios.20tb.m.v2', '20tb.m.v2'];
    const replacement = 'g1.20tb.3months_ip_90p';
    
    for (const t of targets) {
        if (body.includes(t)) {
            body = body.split(t).join(replacement);
        }
    }
    
    if (body !== original) {
        console.log('[g1-5x-3m-90p] Successfully rewritten to ' + replacement);
    } else {
        console.log('[g1-5x-3m-90p] No matching SKU found in response');
    }
    ({ body: body });
} else {
    ({});
}
