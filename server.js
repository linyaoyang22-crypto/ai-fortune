const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Server running on port ${port}`));
