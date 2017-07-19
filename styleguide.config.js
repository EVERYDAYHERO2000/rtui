const loaders = require('loaders');
const path = require('path');

module.exports = {
	
	require: [
    path.join(__dirname, './build/css/components.css')
  ],
	webpackConfig: {
		
		module: {
			loaders: loaders.all,
		},
	},
};

