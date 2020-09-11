const path = require("path");

module.exports = {
	entry: "./wktools.ts",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				include: [path.resolve(__dirname,"src")]
			}
		]
	},
	mode: 'development',
	resolve: {
		extensions: [ '.ts', '.js' ],
	},
	optimization: {
		minimize: true
	},
	output: {
		filename: "wktools.js",
		path: path.resolve(__dirname,"")
	}
}