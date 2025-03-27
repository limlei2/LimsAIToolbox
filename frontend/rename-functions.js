const fs = require('fs');
const path = require('path');

const serverDir = path.join(__dirname, 'dist', 'lims-toolbox', 'server');
const files = fs.readdirSync(serverDir);

files.forEach(file => {
  if (file.endsWith('.server.mjs')) {
    const newName = file.replace('.server', '-server');
    fs.renameSync(path.join(serverDir, file), path.join(serverDir, newName));
  }
});