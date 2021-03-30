const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, dt) => {
    if (err) throw err;
    console.log(dt);
  });