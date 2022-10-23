const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "boudle.js",
    path: path.resolve(__dirname, "./build"), // 必须是一个绝对路径，相对路径的话会报错
  },
  module: {
    rules: [
      {
        // 正则匹配
        test: /\.css$/,
        use: [
          // { 
          //     loader: 'css-loader',
          // },
          // 注意顺序： 从后往前，从下往上，从右往左
          "style-loader",
          "css-loader",
        ],
        // loader: 'css-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      }
    ],
  },
};
