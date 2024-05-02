import { type BuildOptions } from '../types/types'

export function buildBabelLoader (options: BuildOptions): object {
    const isDev = options.mode === 'development'

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: { node: 'current' } }],
                    '@babel/preset-typescript',
                    ['@babel/preset-react',
                        {
                            runtime: isDev ? 'automatic' : 'classic'
                        }
                    ]
                ]
            }
        }
    }
}
