const { merge } = require('webpack-merge');
const commonConfig = require('./config/common.webpack');
const productionConfig = require('./config/production.webpack')
const developmentConfig = require('./config/development.webpack');

module.exports = (env, args) => {
    switch(args.mode) {
        case 'development':
            return merge(commonConfig, developmentConfig);
        case 'production':
            return merge(commonConfig, productionConfig);
        default:
            throw new Error('No matching configuration was found!');
    }
}