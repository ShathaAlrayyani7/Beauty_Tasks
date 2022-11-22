import { resolve as _resolve } from 'path'
export const devtool = "inline-source-map"
export const entry = './Typescript_tasks/Beauty_Form/src/Components/Pages/App.ts'
export const mode = 'development'
export const module = {
    rules: [
        {
            exclude: /node_modules/,
            include: [_resolve(__dirname, './Typescript_tasks/Beauty_Form/src')],
            test: /\.ts?$/,
            use: 'ts-loader'
        }
    ],
}
export const resolve = {
    // modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['', '.tsx', '.ts'],
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    //   '@constants': path.resolve(__dirname, './src/constants'),
    //   '@hooks': path.resolve(__dirname, './src/hooks'),
    //   '@components': path.resolve(__dirname, './src/components')
    // }
}
export const output = {
    filename: './bundle.js',
    path: _resolve(__dirname, './Typescript_tasks/Beauty_Form/dist'),
}

