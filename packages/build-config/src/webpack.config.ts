import type webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import type { BuildOptions } from './types/types'

export function buildWebpack (options: BuildOptions): webpack.Configuration {
    const { mode, port, paths } = options
    const isDev = mode === 'development'
    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
            chunkFilename: isDev ? 'chunk-[name].[contenthash].js' : '[contenthash].js'
        },
        devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options)
    }
}
