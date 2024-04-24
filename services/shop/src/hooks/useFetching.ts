import { useState } from 'react'
import { type ArrayFetch, type CallbackFunction } from '@/@types/types'

export const useFetching = (callback: CallbackFunction) => {
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
