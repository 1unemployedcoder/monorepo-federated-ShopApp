describe('LogInModal', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should open login modal when "Вход" button is clicked', () => {
        cy.contains('Вход').click()
        cy.contains('Авторизация').should('be.visible')
    })

    it('should close login modal when "Закрыть" button is clicked', () => {
        cy.contains('Вход').click()
        cy.contains('Авторизация').should('be.visible')
        cy.contains('X').should('be.visible')
        cy.contains('X').click()
        cy.contains('Авторизация').should('not.be.visible')
    })

    it('should login with valid credentials', () => {
        cy.contains('Вход').click()
        cy.get('input[placeholder="Логин"]').type('Sasha')
        cy.get('input[placeholder="Пароль"]').type('1234')
        cy.contains('Войти').click()
        cy.contains('Авторизация').should('not.be.visible')
        cy.contains('Sasha').should('be.visible')
    })
})
