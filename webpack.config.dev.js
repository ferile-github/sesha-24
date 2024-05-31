const { merge } = require('webpack-merge')
const common = require('./webpack.config.common')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
require('dotenv').config()

module.exports = merge(common, {
		mode: 'development',
		watch: true,
		devtool: 'source-map',
		plugins: [
			new BrowserSyncPlugin({
				host: 'localhost',
				port: process.env.PORT,
				proxy: process.env.WP_SITE
			})
		]
})
