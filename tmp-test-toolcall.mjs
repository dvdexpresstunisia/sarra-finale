import 'dotenv/config';

const k = process.env.GEMINI_API_KEY;
const msg = 'Ouvre YouTube s il te plait';
const sys = `RÈGLE ABSOLUE : Si l'utilisateur demande une action (ouvrir un site, lancer une recherche), tu DOIS UNIQUEMENT émettre un functionCall vers l'outil correspondant. Tu ne dois JAMAIS répondre par du texte pour dire que tu vas le faire. Si tu émets du texte descriptif au lieu d'un functionCall, c'est une erreur de ta part. Après l'appel de l'outil, réponds en une phrase courte confirmant l'exécution.`;

const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${encodeURIComponent(k)}`;

const body = {
  contents: [{ role: 'user', parts: [{ text: msg }] }],
  systemInstruction: { parts: [{ text: sys }] },
  tools: [{
    functionDeclarations: [
      { name: 'open_url', description: 'Ouvre une URL http(s) dans le navigateur.', parameters: { type: 'OBJECT', properties: { url: { type: 'STRING' } }, required: ['url'] } },
      { name: 'youtube_search', description: 'Recherche YouTube.', parameters: { type: 'OBJECT', properties: { query: { type: 'STRING' } }, required: ['query'] } },
      { name: 'web_search', description: 'Recherche Google.', parameters: { type: 'OBJECT', properties: { query: { type: 'STRING' } }, required: ['query'] } }
    ]
  }],
  toolConfig: { functionCallingConfig: { mode: 'AUTO' } },
  generationConfig: { temperature: 0.9, maxOutputTokens: 150 }
};

const t0 = Date.now();
try {
  const r = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(20000)
  });
  const j = await r.json();
  const parts = j.candidates?.[0]?.content?.parts || [];
  const fc = parts.find((p) => p.functionCall)?.functionCall || null;
  const txt = parts.filter((p) => typeof p.text === 'string').map((p) => p.text).join(' ').trim();
  console.log(JSON.stringify({
    status: r.status,
    ms: Date.now() - t0,
    functionCall: fc ? { name: fc.name, args: fc.args } : null,
    text: txt
  }, null, 2));
} catch (e) {
  console.error('ERR', e.message);
}
