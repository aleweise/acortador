const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..')));

// In-memory storage for Vercel (since file system is read-only)
let urls = {};

// Helper function to get URLs
const getUrls = () => {
    return urls;
};

// Helper function to save URLs
const saveUrl = (slug, url) => {
    urls[slug] = url;
};

// Serve static files
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'style.css'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'script.js'));
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Shorten URL
app.post('/shorten', (req, res) => {
    const { url, slug } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const currentUrls = getUrls();
    const newSlug = slug || Math.random().toString(36).substring(2, 8);

    if (currentUrls[newSlug]) {
        return res.status(400).json({ error: 'Slug already in use' });
    }

    saveUrl(newSlug, url);
    res.json({ slug: newSlug });
});

// Redirect
app.get('/:slug', (req, res) => {
    const currentUrls = getUrls();
    const { slug } = req.params;
    const url = currentUrls[slug];

    if (url) {
        res.redirect(url);
    } else {
        res.status(404).send('URL not found');
    }
});

module.exports = app;