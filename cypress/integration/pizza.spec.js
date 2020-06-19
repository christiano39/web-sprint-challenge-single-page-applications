describe('inputs work correctly', () => {
    it('can navigate to the form', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'pizza')
    })

    it('can type in the name input', () => {
        cy.get('input[name=name]')
            .type('Chris')
            .should('have.value', 'Chris')
    })

    it('can select multiple checkboxes', () => {
        cy.get('input[name=peperoni]').check()
            .should('be.checked')

        cy.get('input[name=olives]').check()
            .should('be.checked')

        cy.get('input[name=mushrooms]').check()
            .should('be.checked')

        cy.get('input[name=bacon]').check()
            .should('be.checked')

        cy.get('input[name=peperoni]').should('be.checked')
        cy.get('input[name=olives]').should('be.checked')
        cy.get('input[name=mushrooms]').should('be.checked')
        cy.get('input[name=bacon]').should('be.checked')
    })

    it('can submit order', () => {
        cy.get('form button').click()

        cy.url().should('include', 'order')

        cy.contains('Name: Chris')
    })
})