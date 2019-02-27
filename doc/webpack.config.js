var path = require("path");

module.exports = {
    entry: './js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve('./dist')
    },

    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    },

    resolve:{
    }
    
};
