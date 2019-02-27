var path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'Ximage-1.0.js',
        path: './dist'
    },

    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    },

    resolve:{
        alias: {
            Ximage: path.resolve(__dirname, "./src/Ximage")
        }
    }
    
};
