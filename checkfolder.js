const fs = require('fs');
var mkdirp = require('mkdirp');
const path = require('path');

function addFolder (dirname) {
  mkdirp(dirname, err => {
    if (err) console.error(err);
    else console.log('new directory:' + dirname);
  });
}

function writeImg (dirname, localBase, nameFile) {
  fs.readFile(localBase, (err, data) => {
    if (err) throw err;
    fs.writeFile(path.join(dirname, nameFile), data, (err) => {
      if (err) throw err;
      console.log(path.join(dirname, nameFile));
    });
  });
}

var checkFolder = (dirname, localBase, nameFile) => {
  if (!fs.existsSync(dirname)) {
    addFolder(dirname);
  } else {
    writeImg(dirname, localBase, nameFile);
  }
  return 0;
};

module.exports = checkFolder;
