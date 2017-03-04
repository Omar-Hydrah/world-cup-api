var path = require("path");

module.exports ={
	entry: path.resolve(__dirname, "client.js"),
	output: {
		filename: "public/js/bundle.js"
	},
	module:{
		loaders: [
			{
				exclude: /(node_modules|app\.js)/,
				loader: "babel-loader",
				query:{
					presets: ["react", "es2015"]
				}
			},
			{
				include: /\.json$/,
				loader: "json-loader"
			}
		]
	}

}