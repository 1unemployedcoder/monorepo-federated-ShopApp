export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface AuthSlice {
    user: string
    isAuth: boolean
    status?: Status
}
