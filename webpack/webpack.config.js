const {merge} = require("webpack-merge")
const common = require("./webpack.common")

module.exports = (vars) => {
    const {env} = vars
    const file = require(`./webpack.${env}.js`)
    return merge(common, file)
}