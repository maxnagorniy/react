import path from 'path';

export default {
    // devtools: 'eval-source-map',
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: [ 'babel-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}