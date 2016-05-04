var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8888',
		'webpack/hot/dev-server',
		'./app/index.js'
	],
	output: {
		path: __dirname + '/build',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader"] },
            { test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap' },
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			}
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