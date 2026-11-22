// Google One 套餐重写 · 精简版
// 用法：作为 http-response 脚本，目标 one.google.com/ai
const R = [['30tb.ai.pro.m', '30tb.m'], ['20tb.m.v2', '20tb.m']];
function rep(v) {
  if (typeof v === 'string') { let s = v; for (const [a, b] of R) s = s.split(a).join(b); return s; }
  if (Array.isArray(v)) return v.map(rep);
  if (v && typeof v === 'object') { const o = {}; for (const k in v) o[k] = rep(v[k]); return o; }
  return v;
}
if (!$response || !$request) { $done({}); }
else if (!(($request.url || '') + ' ' + (($request.headers && $request.headers.Host) || '')).includes('one.google.com')) { $done({}); }
else {
  let b = $response.body, ch = false;
  try { const o = JSON.parse(b), n = JSON.stringify(rep(o)); if (n !== JSON.stringify(o)) { b = n; ch = true; } } catch (e) { }
  if (!ch && typeof b === 'string') { let s = b; for (const [a, c] of R) s = s.split(a).join(c); if (s !== b) { b = s; ch = true; } }
  if (typeof console !== 'undefined' && console.log) console.log('[google-one] ' + (ch ? 'rewritten' : 'no match'));
  $done({ body: b });
}
