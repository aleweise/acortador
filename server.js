
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

const urlsDbPath = path.join(__dirname, 'urls.json');

// Helper function to get URLs from the DB
const getUrls = () => {
    if (!fs.existsSync(urlsDbPath)) {
        fs.writeFileSync(urlsDbPath, JSON.stringify({}));
    }
    const data = fs.readFileSync(urlsDbPath);
    return JSON.parse(data);
};

// Helper function to save URLs to the DB
const saveUrl = (slug, url) => {
    const urls = getUrls();
    urls[slug] = url;
    fs.writeFileSync(urlsDbPath, JSON.stringify(urls, null, 2));
};

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Shorten URL
app.post('/shorten', (req, res) => {
    const { url, slug } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const urls = getUrls();
    const newSlug = slug || Math.random().toString(36).substring(2, 8);

    if (urls[newSlug]) {
        return res.status(400).json({ error: 'Slug already in use' });
    }

    saveUrl(newSlug, url);
    res.json({ slug: newSlug });
});

// Redirect
app.get('/:slug', (req, res) => {
    const urls = getUrls();
    const { slug } = req.params;
    const url = urls[slug];

    if (url) {
        res.redirect(url);
    } else {
        res.status(404).send('URL not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
