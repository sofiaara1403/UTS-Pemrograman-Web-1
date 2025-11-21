const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// === STATIC FILES (WAJIB) ===
app.use(express.static(path.join(__dirname, 'website')));

const DATA_FILE = path.join(__dirname, 'data.json');

function readData() {
    const raw = fs.readFileSync(DATA_FILE);
    return JSON.parse(raw);
}

function writeData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET all
app.get('/informasi', (req, res) => {
    const data = readData();
    res.json(data);
});

// GET by id
app.get('/informasi/:id', (req, res) => {
    const id = Number(req.params.id);
    const data = readData();
    const item = data.find(x => x.id === id);
    if (!item) return res.status(404).json({ message: 'Not Found' });
    res.json(item);
});

// START SERVER
app.listen(3000, () => console.log("API running on port 3000"));
