const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const glob = require('glob')

const pxtorem = require("postcss-pxtorem");

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'assets'),
	entry: {
		main: './src/index.js',
		editor: './src/editor.js',
		login: './src/login.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'assets/dist'),
		clean: true,
		publicPath: './',
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new ImageminPlugin({
			externalImages: {
				context: '.',
				sources: glob.sync(
					'assets/src/images/**/*.{png, jpg, jpeg, gif, svg}'
				),
				destination: 'assets/dist',
				fileName: '[name].[ext]',
			},
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, {
						loader: 'css-loader',
						options: {
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									require('postcss-mixins'),
									require('postcss-nested'),
									require('postcss-import'),
									require('tailwindcss/nesting'),
									require('tailwindcss'),
									require.resolve("postcss-pxtorem"),
									pxtorem({
										rootValue: 16,
										unitPrecision: 5,
										propList: ['font', 'font-size', 'letter-spacing', 'width', 'height', 'margin', 'padding'],
										selectorBlackList: [],
										replace: true,
										mediaQuery: true,
										minPixelValue: 0,
										exclude: /node_modules/i
									}),
									require('autoprefixer'),
								],
							},
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(woff|woff2)$/i,
				type: 'asset/resource'
			},
		],
	}
}
