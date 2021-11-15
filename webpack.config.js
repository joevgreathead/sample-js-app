const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	mode: 'development',
	module: {
		rules: [{
			test: /\.(jsx|js)$/,
			include: path.resolve(__dirname, 'src'),
			exclude: /node_modules/,
			use: ['babel-loader']
		}]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		clean: true,
		filename: '[name].bundle.[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/template.html',
		}),
	],
};