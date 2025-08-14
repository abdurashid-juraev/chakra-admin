const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());

// Mock DB ni o‘qish
const dbPath = path.join(__dirname, 'db.json');
let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// API endpointlar
app.get('/api/authors', (req, res) => {
  res.json(db.authors);
});

app.get('/api/projects', (req, res) => {
  res.json(db.projects);
});

app.get('/api/billing', (req, res) => {
  res.json(db.billing);
});

// Angular static fayllar
app.use(express.static(path.join(__dirname, 'dist/chakra-admin/browser')));

// Angular routing (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/chakra-admin/browser/index.html'));
});

module.exports = app;
