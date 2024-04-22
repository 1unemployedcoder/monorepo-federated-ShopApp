export interface CreatedProduct {
    name: string
    description: string
    img: string
    price: number
    typeId: number
}

export interface CreatedNews {
    title: string
    description: string
    img: string
    date: string
}

export interface CreatedUser {
    id: number
    name: string
    role: string
    iat: number
    exp: number
}

export interface AuthUser {
    name: FormDataEntryValue | null
    password: FormDataEntryValue | null
}

export interface getProductType {
    search: string
    page: number
}
