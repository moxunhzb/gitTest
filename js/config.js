const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
// IE浏览器的内核Trident、 Mozilla的Gecko、google的WebKit、Opera内核Presto；
//