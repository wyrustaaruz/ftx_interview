const { override, addPostcssPlugins, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        'store': path.resolve(__dirname, './src/store'),
        'actions': path.resolve(__dirname, './src/store/actions'),
        'api': path.resolve(__dirname, './src/store/api'),
        'reducers': path.resolve(__dirname, './src/store/reducers'),
        'constants': path.resolve(__dirname, './src/constants'),
        'components': path.resolve(__dirname, './src/components'),
        'hooks': path.resolve(__dirname, './src/hooks'),
        'utils': path.resolve(__dirname, './src/utils'),
        'vector': path.resolve(__dirname, './src/assets/vector'),
        'assets': path.resolve(__dirname, './src/assets'),
        'views': path.resolve(__dirname, './src/views'),
    }),
    addPostcssPlugins([
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]),
);
