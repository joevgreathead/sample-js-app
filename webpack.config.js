const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	mode: 'development',
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