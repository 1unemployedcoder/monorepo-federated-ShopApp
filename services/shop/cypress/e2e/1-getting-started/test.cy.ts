import {totalPagesCalc} from "../../../src/utils/totalPagesCalc";
describe('TypeScript spec', () => {
    it('works', () => {
        cy.wrap('foo').should('equal', 'foo')
    })

    it('calls TS source file', () => {
        expect(totalPagesCalc(10, 2)).to.equal(5)
    })
})
