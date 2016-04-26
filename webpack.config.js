var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            //{ test: /\.scss$/, loader: 'style!css!sass' }
            { test: /\.scss$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css!sass?sourceMap=true') }
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new ExtractTextPlugin("app.css")
	]
};