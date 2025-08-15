import { kv } from '@vercel/kv';

/**
 * Generic helper for simple KV-backed collections stored as arrays under a key.
 */

export async function getAll(key) {
  const arr = (await kv.get(key)) || [];
  return arr;
}

export async function getById(key, id) {
  const arr = (await kv.get(key)) || [];
  return arr.find(x => String(x.id) === String(id));
}

export async function createItem(key, item) {
  const arr = (await kv.get(key)) || [];
  const newItem = { id: Date.now().toString(), ...item };
  arr.push(newItem);
  await kv.set(key, arr);
  return newItem;
}

export async function updateItem(key, id, patch) {
  const arr = (await kv.get(key)) || [];
  const idx = arr.findIndex(x => String(x.id) === String(id));
  if (idx === -1) return null;
  arr[idx] = { ...arr[idx], ...patch, id: arr[idx].id };
  await kv.set(key, arr);
  return arr[idx];
}

export async function deleteItem(key, id) {
  const arr = (await kv.get(key)) || [];
  const idx = arr.findIndex(x => String(x.id) === String(id));
  if (idx === -1) return false;
  arr.splice(idx, 1);
  await kv.set(key, arr);
  return true;
}
