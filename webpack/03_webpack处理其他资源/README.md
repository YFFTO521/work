src => index.js 这个是默认情况，如果我们把index,.js 换成mian.js 的话他就会报错找不到，这个是因为我们没有配置文件入口的原因
可以通过命令行来指定吗？
答案是可以的
>npx webpack --entry ./src/main.js
那出口文件指定呢？
>npx webpack --output-path ./build
> npx webpack --entry ./src/main.js --output-path ./build

单独安装postcss是没有什么用的，我们得配合他的插件进行使用
## 命令行使用postcss-cli
npm i postcss-cli -D > npx postcss -0 result.css ./src/css/test.css