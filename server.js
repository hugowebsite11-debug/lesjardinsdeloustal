const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.avif': 'image/avif'
};

http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0]; // strip query string
  // /bons-cadeaux/ → /bons-cadeaux (sinon les chemins relatifs des images/CSS cassent)
  if (urlPath.length > 1 && urlPath.endsWith('/')) {
    const query = req.url.slice(urlPath.length);
    res.writeHead(301, { 'Location': urlPath.replace(/\/+$/, '') + query });
    res.end();
    return;
  }

  let filePath = '.' + urlPath;
  if (filePath === './') filePath = './index.html';
  // Adresses courtes : /bons-cadeaux sert bons-cadeaux.html
  if (!path.extname(filePath) && fs.existsSync(filePath + '.html')) filePath += '.html';

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile('./index.html', (err2, data2) => {
        if (err2) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data2);
      });
      return;
    }
    const headers = {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    };
    res.writeHead(200, headers);
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
