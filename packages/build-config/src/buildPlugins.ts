import webpack, { type Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/types'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ESLintWebpackPlugin from 'eslint-webpack-plugin'
import path from 'path'

export function buildPlugins ({ mode, paths, analyzer }: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development'
    const isProd = mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin(
            {
                template: paths.html,
                favicon: path.resolve(paths.public, 'favicon.ico'),
                publicPath: '/'
            }
        )
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshPlugin())
        plugins.push(new ESLintWebpackPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }

    return plugins
}
