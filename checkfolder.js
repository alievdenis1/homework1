const fs = require('fs');
const path = require('path');

var _addFolder = (dirname) => {
  fs.mkdir(dirname, err => {
    if (err) console.error(err);
    else console.log('new directory:' + dirname);
  });
};

var _writeImg = (dirname, localBase, nameFile) => {
  fs.readFile(localBase, (err, data) => {
    if (err) throw err;
    fs.writeFile(path.join(dirname, nameFile), data, (err) => {
      if (err) throw err;
      console.log(path.join(dirname, nameFile));
    });
  });
};

var checkFolder = (dirname, localBase, nameFile) => {
  if (!fs.existsSync(dirname)) {
    _addFolder(dirname);
  } else {
    _writeImg(dirname, localBase, nameFile);
  }
  return 0;
};

module.exports = checkFolder;
