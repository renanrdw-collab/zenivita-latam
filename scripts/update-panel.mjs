// Atualiza panel-data.json com dados reais do Meta Ads via Windsor.ai
// Rodado pela GitHub Action. Requer secret WINDSOR_API_KEY.
import { readFileSync, writeFileSync } from 'node:fs';

const KEY = process.env.WINDSOR_API_KEY;
const ACCOUNT = '1806741513224678';
const FILE = 'panel-data.json';

if (!KEY) { console.error('WINDSOR_API_KEY ausente — nada a fazer.'); process.exit(0); }

const data = JSON.parse(readFileSync(FILE, 'utf8'));

const fields = ['date','account_name','account_currency','spend','impressions','clicks','actions_landing_page_view','actions_initiate_checkout','actions_purchase'].join(',');
const url = `https://connectors.windsor.ai/facebook?api_key=${KEY}&date_preset=last_14d&fields=${fields}`;

// cotação BRL->USD ao vivo (fallback 0.185)
async function brlToUsd() {
  try { const r = await fetch('https://open.er-api.com/v6/latest/BRL'); const j = await r.json(); const v = j?.rates?.USD; if (v) return v; } catch(_){}
  return 0.185;
}

try {
  const res = await fetch(url);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const json = await res.json();
  const rows = (json.data || json.result || []).filter(r => String(r.account_name||'').includes(ACCOUNT) || String(r.account_id||'') === ACCOUNT);
  if (!rows.length) throw new Error('sem linhas');

  // moeda da conta: se BRL, converte gasto para USD
  const cur = String(rows[0].account_currency || (String(rows[0].account_name||'').includes('BRL') ? 'BRL' : 'USD')).toUpperCase();
  const rate = cur === 'BRL' ? await brlToUsd() : 1;
  data.fx = { from: cur, usdRate: +rate.toFixed(4) };

  const num = (v) => Number(v || 0) * (cur === 'BRL' ? 1 : 1); // spend convertido abaixo
  const conv = (v) => Number(v || 0) * rate;
  const byDate = {};
  for (const r of rows) {
    const d = r.date;
    if (!byDate[d]) byDate[d] = { spend:0, impressions:0, clicks:0, lp:0, ic:0, pur:0 };
    byDate[d].spend += conv(r.spend);
    byDate[d].impressions += num(r.impressions);
    byDate[d].clicks += num(r.clicks);
    byDate[d].lp += num(r.actions_landing_page_view);
    byDate[d].ic += num(r.actions_initiate_checkout);
    byDate[d].pur += num(r.actions_purchase);
  }
  const dates = Object.keys(byDate).sort();
  const fmt = (iso) => { const [y,m,dd]=iso.split('-'); return `${dd}/${m}`; };

  // vendas REAIS entram manualmente em salesByProduct (Hotmart). Pixel/boleto não conta como venda paga.
  data.daily = dates.map(iso => ({ d: fmt(iso), spend: +byDate[iso].spend.toFixed(2), sales: 0, rev: 0 }));
  data.funnel = {
    impressions: dates.reduce((a,d)=>a+byDate[d].impressions,0),
    clicks: dates.reduce((a,d)=>a+byDate[d].clicks,0),
    lpviews: dates.reduce((a,d)=>a+byDate[d].lp,0),
    checkouts: dates.reduce((a,d)=>a+byDate[d].ic,0),
    sales: dates.reduce((a,d)=>a+byDate[d].pur,0)
  };

  const now = new Date();
  const brt = new Date(now.getTime() - 3*3600*1000);
  const pad = (n)=>String(n).padStart(2,'0');
  data.updated = `${brt.getUTCFullYear()}-${pad(brt.getUTCMonth()+1)}-${pad(brt.getUTCDate())} ${pad(brt.getUTCHours())}:${pad(brt.getUTCMinutes())} (BRT)`;
  data.month = {
    label: `${['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'][brt.getUTCMonth()]}/${brt.getUTCFullYear()}`,
    daysElapsed: brt.getUTCDate(),
    daysTotal: new Date(Date.UTC(brt.getUTCFullYear(), brt.getUTCMonth()+1, 0)).getUTCDate()
  };

  writeFileSync(FILE, JSON.stringify(data, null, 2) + '\n');
  console.log('Painel atualizado:', data.updated, '| gasto14d=', data.daily.reduce((a,x)=>a+x.spend,0).toFixed(2));
} catch (e) {
  console.error('Falha ao atualizar (painel mantido como está):', e.message);
  process.exit(0); // não quebra a Action
}
