const path = require('path');
//   entry: './Typescript_tasks/Beauty_Form/src/Components/Pages/App.ts',

module.exports = {
    mode: 'development',
    entry: './Typescript_tasks/Beauty_Form/src/Components/Pages/App.ts',
    module: {
      rules: [
        {
              test: /\.tsx?$/,
              use: 'ts-loader',
            //   exclude: /node_modules/,
          },
          {
              test: /\.js$/,
              loader: "source-map-loader",
          },
      ],
    },
    devtool: "source-map",
    resolve: {
      // modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['', '.tsx', '.ts', '.js'],
      // alias: {
      //   '@': path.resolve(__dirname, 'src'),
      //   '@constants': path.resolve(__dirname, './src/constants'),
      //   '@hooks': path.resolve(__dirname, './src/hooks'),
      //   '@components': path.resolve(__dirname, './src/components')
      // }
    },
    output: {
        path: path.resolve(__dirname, './Typescript_tasks/Beauty_Form/dist'),
        filename: './bundle.js',

    },
  }