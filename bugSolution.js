const http = require('http');
const net = require('net');

function isPortAvailable(port) {
  return new Promise((resolve, reject) => {
    const tester = net.createServer().once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false);
      } else {
        reject(err);
      }
    }).once('listening', () => {
      tester.close()
      resolve(true);
    }).listen(port);
  });
}

async function startServer(port) {
  const isAvailable = await isPortAvailable(port);
  if (!isAvailable) {
    console.error(`Port ${port} is already in use. Exiting.`);
    process.exit(1); // Exit with an error code
  }

  const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
  };

  const server = http.createServer(requestListener);
  server.listen(port);
  console.log(`Server is running on port ${port}`);
}

startServer(8080); 
