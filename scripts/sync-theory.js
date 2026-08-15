// 思想理论栏目自动同步脚本
// 抓取共产党员网“总书记重要讲话”栏目，保留最近 100 条，按年度分组，写入 theory.json
const fs = require('fs');

const SOURCE_URL = 'https://www.12371.cn/special/xxzd/jh/';
const KEEP = 100;
const OUT_FILE = 'theory.json';

function urlDate(u) {
  const m = u.match(/12371\.cn\/(\d{4})\/(\d{2})\/(\d{2})\//);
  return m ? m[1] + '-' + m[2] + '-' + m[3] : '';
}

function extractItems(html) {
  const items = [];
  const arrs = [...html.matchAll(/var\s+itemELMT[\w]*\s*=\s*\[\s*\]\s*;\s*itemELMT[\w]*\s*=\s*(\[[\s\S]*?\])\s*;/g)];
  for (const m of arrs) {
    const recs = [...m[1].matchAll(/\{'link_add':'([^']*)','title':'([^']*)','brief':'([^']*)','content':'([^']*)'\}/g)];
    for (const r of recs) {
      const url = r[1];
      const date = urlDate(url);
      if (!date) continue;
      items.push({ title: r[3] || r[2], date, url, year: Number(date.slice(0, 4)) });
    }
  }
  const seen = new Set();
  const uniq = items.filter(x => {
    if (seen.has(x.url)) return false;
    seen.add(x.url);
    return true;
  });
  return uniq
    .map((x, i) => ({ ...x, _i: i }))
    .sort((a, b) => (b.date === a.date ? a._i - b._i : b.date.localeCompare(a.date)))
    .map(({ _i, ...x }) => x);
}

async function main() {
  const res = await fetch(SOURCE_URL, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36' },
    signal: AbortSignal.timeout(30000)
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const html = await res.text();
  const all = extractItems(html);
  const kept = all.slice(0, KEEP);

  const groups = [];
  for (const item of kept) {
    const key = item.year + '年';
    let g = groups.find(x => x.year === key);
    if (!g) { g = { year: key, items: [] }; groups.push(g); }
    g.items.push({ title: item.title, date: item.date, url: item.url });
  }

  const out = {
    source: SOURCE_URL,
    updatedAt: new Date().toISOString().slice(0, 10),
    total: all.length,
    kept: kept.length,
    groups
  };
  fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2), 'utf8');
  console.log('OK total=' + all.length + ' kept=' + kept.length);
  console.log(groups.map(g => g.year + '(' + g.items.length + ')').join(' '));
}

main().catch(e => {
  console.error('同步失败：', e.message || e);
  process.exit(1);
});
