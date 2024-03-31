import path from 'path'
import { type BuildPaths, buildWebpack, type EnvVariables } from '@packages/build-config'
import webpack, { type Configuration } from 'webpack'
import packageJson from './package.json'

export default (env: EnvVariables): object => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }
    const config: Configuration = buildWebpack({
        port: env.port ?? 3001,
        mode: env.mode ?? 'development',
        paths
    })

    if (config.plugins != null) {
        config.plugins.push(new webpack.container.ModuleFederationPlugin({
            name: 'shop',
            filename: 'remoteEntry.js',
            exposes: {
                './Router': './src/router/Router.tsx',
                './Store': './src/redux/store.ts'
            },
            shared: {
                ...packageJson.dependencies,
                react: {
                    eager: true,
                    requiredVersion: packageJson.dependencies.react
                },
                'react-router-dom': {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react-router-dom']
                },
                'react-dom': {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react-dom']
                }
            }
        }))
    }

    return config
}
