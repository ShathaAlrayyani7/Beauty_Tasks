import { resolve as _resolve } from 'path';
export var devtool = "inline-source-map";
export var entry = './Typescript_tasks/Beauty_Form/src/Components/Pages/App.ts';
export var mode = 'development';
export var module = {
    rules: [
        {
            exclude: /node_modules/,
            include: [_resolve(__dirname, './Typescript_tasks/Beauty_Form/src')],
            test: /\.ts?$/,
            use: 'ts-loader'
        }
    ],
};
export var resolve = {
    extensions: ['', '.tsx', '.ts'],
};
export var output = {
    filename: './bundle.js',
    path: _resolve(__dirname, './Typescript_tasks/Beauty_Form/dist'),
};
