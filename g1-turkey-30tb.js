// Google One 20X(30TB) - 土区普通存储换道 (30tb.m)
// 目标: ^https:\/\/one\.google\.com\/(u\/[0-9]+\/)?ai\?.*$
// 替换为: 30tb.m

let body = .body;

if (body && typeof body === 'string') {
    const original = body;
    const targets = ['g1.ios.30tb.ai.pro.m', '30tb.ai.pro.m'];
    const replacement = '30tb.m';
    
    for (const t of targets) {
        if (body.includes(t)) {
            body = body.split(t).join(replacement);
        }
    }
    
    if (body !== original) {
        console.log('[g1-turkey-30tb] Successfully rewritten to ' + replacement);
    } else {
        console.log('[g1-turkey-30tb] No matching SKU found in response');
    }
    ({ body: body });
} else {
    ({});
}
