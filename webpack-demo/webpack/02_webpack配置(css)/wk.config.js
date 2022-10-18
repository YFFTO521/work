const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'boudle.js',
        path: path.resolve(__dirname, './build') // 必须是一个绝对路径，相对路径的话会报错
    }
}