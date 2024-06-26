const path = require('path')
//const HtmlWebpackPlugin = require('html-webpack-plugin')

   
module.exports = {
  mode: 'development',
  entry: './src/js/main.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "/dist/",
    filename: 'main.js'
  },
    devServer: {
     historyApiFallback: true,
     static: {
      directory: path.join(__dirname, "/"),
    },
     port: 8081,
     open: true
   },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.(tsx|jsx|js)?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:[ "@babel/preset-react"]    // используемые плагины
                }
            }
        ]
    }
}

