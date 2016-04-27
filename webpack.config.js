var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/build',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.scss$/, loader: 'style!css!sass' }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	]
};