export const totalPagesCalc = (totalCount: number, limit: number) => {
    return totalCount > 0 && limit > 0 ? Math.ceil(totalCount / limit) : 0
}
