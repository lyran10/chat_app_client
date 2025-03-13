const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : path.join(__dirname, "../" ,"src", "index.tsx"),
    resolve : {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module : {
        rules : [
            {
                test : /\.(ts|js)x?$/,
                exclude : /node_modules/,
                use : "babel-loader",
            },
            {
                test : /\.css$/,
                use : ["style-loader","css-loader", "postcss-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|webp|avif)$/i,
                type: 'asset/resource', 
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, '..', 'src', 'index.html'),
        }),
      ],
}