import { type JSXElementConstructor, type ReactElement, useMemo } from 'react'

export const useOutletEmpty = (outlet: ReactElement<any, string | JSXElementConstructor<any>> | null) => {
    return useMemo(() => {
        return outlet === null || outlet === undefined
    }, [outlet])
}
