import { totalPagesCalc } from '../../src/utils/totalPagesCalc'

describe('TypeScript spec', () => {
    it('calls TS source file', () => {
        expect(totalPagesCalc(10, 2)).to.equal(5)
    })
})
