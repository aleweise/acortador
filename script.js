
document.getElementById('shortenBtn').addEventListener('click', async () => {
    const url = document.getElementById('urlInput').value;
    const slug = document.getElementById('slugInput').value;
    const resultDiv = document.getElementById('result');

    if (!url) {
        resultDiv.textContent = 'Please enter a URL';
        return;
    }

    try {
        const response = await fetch('/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url, slug })
        });

        const data = await response.json();

        if (response.ok) {
            const shortUrl = data.slug;
            resultDiv.innerHTML = `Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
        } else {
            resultDiv.textContent = `Error: ${data.error}`;
        }
    } catch (error) {
        resultDiv.textContent = 'An unexpected error occurred.';
    }
});
