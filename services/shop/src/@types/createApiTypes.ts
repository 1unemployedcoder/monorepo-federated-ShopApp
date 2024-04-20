export interface newsComment {
    description: string
}

export interface productComment extends newsComment {
    rate: number
}

export interface CreatedUser {
    id: number
    name: string
    role: string
    iat: number
    exp: number
}
