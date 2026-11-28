// Google One 5X(20TB) - 土区普通存储换道 (20tb.m)
// 目标: ^https:\/\/one\.google\.com\/(u\/[0-9]+\/)?ai\?.*$
// 替换为: 20tb.m

let body = .body;

if (body && typeof body === 'string') {
    const original = body;
    const targets = ['g1.ios.20tb.ai.pro.m', '20tb.ai.pro.m', 'g1.ios.20tb.m.v2', '20tb.m.v2'];
    const replacement = '20tb.m';
    
    for (const t of targets) {
        if (body.includes(t)) {
            body = body.split(t).join(replacement);
        }
    }
    
    if (body !== original) {
        console.log('[g1-turkey-20tb] Successfully rewritten to ' + replacement);
    } else {
        console.log('[g1-turkey-20tb] No matching SKU found in response');
    }
    ({ body: body });
} else {
    ({});
}
