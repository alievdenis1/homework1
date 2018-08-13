const fs = require('fs');
const path = require('path');
const addfolder = require('./checkfolder');

const filename = 'img';
const base = path.join(__dirname, filename);
const filename2 = filename + 'Copy';
const base2 = path.join(__dirname, filename2);

if (!fs.existsSync(base2)) fs.mkdirSync(base2);

const readDir = (base, level) => {
  const files = fs.readdirSync(base);

  files.forEach(item => {
    let localBase = path.join(base, item);
    let state = fs.statSync(localBase);

    if (state.isDirectory()) {
      readDir(localBase, level + 1);
    } else {
      addfolder(path.join(base2, item[0].toUpperCase()), localBase, item);
    }
  });
};

readDir(base, 0);
