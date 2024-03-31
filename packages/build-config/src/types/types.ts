export interface EnvVariables {
    mode?: BuildMode
    port?: number
    ADMIN_REMOTE_URL?: string
    SHOP_REMOTE_URL?: string
}
export interface BuildPaths {
    entry: string
    html: string
    output: string
    src: string
    public: string
}

export interface BuildOptions {
    port: number
    paths: BuildPaths
    mode: BuildMode
    analyzer?: boolean
}

export type BuildMode = 'production' | 'development'
