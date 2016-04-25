var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPlugin = require('extract-text-webpack-plugin');


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
			{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract(
					'style', // backup loader when not building .css file
					'css!sass' // loaders to preprocess CSS
				)
			}
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
	    new ExtractTextPlugin('[name].css'),
	]
};