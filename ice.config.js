const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: 'src/index.js',
    publicPath: './',
    plugins: [
        [
            'ice-plugin-fusion',
            {
                themePackage: '@icedesign/theme'
            }
        ],
        'ice-plugin-css-assets-local'
    ],
    /* chainWebpack: config => {
        config // 定义插件名称
            .plugin('BundleAnalyzerPlugin')
            // 第一项为具体插件，第二项为插件参数
            .use(BundleAnalyzerPlugin, [[{}]]);
        config.optimization.splitChunks({
            chunks: 'all'
        });
    } */
};
