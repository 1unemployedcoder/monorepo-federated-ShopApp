export const totalPagesCalc = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit)
}