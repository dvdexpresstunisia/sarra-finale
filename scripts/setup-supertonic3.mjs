import { createHash } from 'node:crypto';
import { createReadStream, existsSync } from 'node:fs';
import { mkdir, rename, rm, stat, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';

const MODEL_DIR = path.resolve(process.env.SARRA_TTS_MODEL_DIR || path.join(process.cwd(), 'models', 'supertonic-3'));
const BASE_URL = 'https://huggingface.co/csukuangfj2/sherpa-onnx-supertonic-3-tts-int8-2026-05-11/resolve/main';

const REQUIRED_SHA256 = {
    'duration_predictor.int8.onnx': 'c3eb91414d5ff8a7a239b7fe9e34e7e2bf8a8140d8375ffb14718b1c639325db',
    'text_encoder.int8.onnx': 'c7befd5ea8c3119769e8a6c1486c4edc6a3bc8365c67621c881bbb774b9902ff',
    'vector_estimator.int8.onnx': '20cd86fa5c6effedfda0e7cffe5b0569ca401c440a0c3a1d72bf39286c0db3fd',
    'vocoder.int8.onnx': 'e923d60f53f95eb1ce235f1dc33ec56d9c057823c96fa6f8acf98f32b0da6152',
    'unicode_indexer.bin': '8402ca48e5189a8950138580b0fff64db6f072f24ac07cd54ba8b2fbb9883b30',
    'voice.bin': '67d5209b0ee8ce6c74105ffbe12fe6a7628aea3b4ba2fcb308a4a67938a93ce8'
};
const FILES = [...Object.keys(REQUIRED_SHA256), 'tts.json'];

function sha256File(filePath) {
    return new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const stream = createReadStream(filePath);
        stream.on('data', (chunk) => hash.update(chunk));
        stream.on('end', () => resolve(hash.digest('hex')));
        stream.on('error', reject);
    });
}

async function isFileValid(filename) {
    const fullPath = path.join(MODEL_DIR, filename);
    if (!existsSync(fullPath)) return false;
    const st = await stat(fullPath);
    if (!st.isFile() || st.size <= 0) return false;
    if (REQUIRED_SHA256[filename]) {
        const digest = await sha256File(fullPath);
        return digest === REQUIRED_SHA256[filename];
    }
    if (filename === 'tts.json') {
        try {
            const parsed = JSON.parse(await readFile(fullPath, 'utf8'));
            return Boolean(parsed?.ae?.sample_rate && parsed?.ttl);
        } catch {
            return false;
        }
    }
    return true;
}

async function downloadFile(filename) {
    const url = `${BASE_URL}/${filename}`;
    const dest = path.join(MODEL_DIR, filename);
    const tmp = `${dest}.download`;
    console.log(`⬇️  Téléchargement ${filename}...`);
    const resp = await fetch(url, { redirect: 'follow' });
    if (!resp.ok) {
        throw new Error(`HTTP ${resp.status} sur ${url}`);
    }
    const buf = Buffer.from(await resp.arrayBuffer());
    if (REQUIRED_SHA256[filename]) {
        const digest = createHash('sha256').update(buf).digest('hex');
        if (digest !== REQUIRED_SHA256[filename]) {
            throw new Error(`SHA-256 invalide pour ${filename}: reçu ${digest}, attendu ${REQUIRED_SHA256[filename]}`);
        }
    }
    await writeFile(tmp, buf);
    await rename(tmp, dest);
    console.log(`✅ ${filename} (${(buf.length / (1024 * 1024)).toFixed(2)} Mo) vérifié.`);
}

async function main() {
    const verifyOnly = process.argv.includes('--verify-only');
    await mkdir(MODEL_DIR, { recursive: true });
    let failures = 0;

    for (const filename of FILES) {
        const valid = await isFileValid(filename);
        if (valid) {
            console.log(`✅ Déjà valide : ${filename}`);
            continue;
        }
        if (verifyOnly) {
            console.error(`❌ Manquant ou corrompu : ${filename}`);
            failures += 1;
            continue;
        }
        await rm(path.join(MODEL_DIR, `${filename}.download`), { force: true }).catch(() => {});
        await downloadFile(filename);
        if (!(await isFileValid(filename))) {
            throw new Error(`Validation post-téléchargement échouée pour ${filename}`);
        }
    }

    if (failures > 0) {
        console.error(`❌ ${failures} fichier(s) invalide(s) dans ${MODEL_DIR}`);
        process.exit(1);
    }
    console.log(`🎉 Supertonic 3 (int8, BigScience Open RAIL-M) prêt hors-ligne dans ${MODEL_DIR}`);
}

main().catch((err) => {
    console.error('❌ Setup Supertonic 3 échoué:', err?.message || err);
    process.exit(1);
});
