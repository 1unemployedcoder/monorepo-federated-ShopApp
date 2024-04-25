import type React from 'react'
import { useState } from 'react'
import { type NewsPost, type Product } from '../@types/types'
type ArrayFetch = [() => Promise<NewsPost | Product>, boolean, string, React.Dispatch<React.SetStateAction<string>>]
export const useFetching = (callback: () => Promise<void>) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetchingPosts = async (): Promise<any> => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error) {
            setError((error as Error).message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetchingPosts, isLoading, error, setError] as ArrayFetch
}
