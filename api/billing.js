import { json } from 'stream/consumers';
import { getAll, getById, createItem, updateItem, deleteItem } from './_kvHelper.js';

const KEY = 'billing';

export default async function handler(req, res) {
  try {
    const method = req.method;
    const urlParts = req.url.split('/').filter(Boolean); // e.g. ["api","authors","123"]
    const id = urlParts.length >= 3 ? urlParts[2] : req.query?.id;

    if (method === 'GET') {
      if (id) {
        const item = await getById(KEY, id);
        if (!item) return res.status(404).json({ message: 'Not found' });
        return res.status(200).json(item);
      }
      const all = await getAll(KEY);
      return res.status(200).json(all);
    }

    if (method === 'POST') {
      const body = req.body || (await readBody(req));
      if (!body || typeof body !== 'object') {
        return res.status(400).json({ message: 'Invalid body' });
      }
      const created = await createItem(KEY, body);
      return res.status(201).json(created);
    }

    if (method === 'PUT' || method === 'PATCH') {
      if (!id) return res.status(400).json({ message: 'ID required in URL' });
      const body = req.body || (await readBody(req));
      const updated = await updateItem(KEY, id, body);
      if (!updated) return res.status(404).json({ message: 'Not found' });
      return res.status(200).json(updated);
    }

    if (method === 'DELETE') {
      if (!id) return res.status(400).json({ message: 'ID required in URL' });
      const ok = await deleteItem(KEY, id);
      if (!ok) return res.status(404).json({ message: 'Not found' });
      return res.status(204).end();
    }

    res.setHeader('Allow', 'GET,POST,PUT,PATCH,DELETE');
    return res.status(405).json({ message: 'Method not allowed' });
  } catch (err) {
    console.error('billing handler error', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

/** Fallback raw body reader if req.body is empty */
async function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => (data += chunk));
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}
