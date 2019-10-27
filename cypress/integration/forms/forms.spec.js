describe('Filling out forms', function(){
    it('sucessfully load', function(){
        cy.visit('/')

        cy.get('input[name="email"]').type('tes@sdf.ua')
        cy.get('input[name="firstName"]').type('Dimitry')
        cy.get('input[name="lastName"]').type('Borschov')
        cy.get('input[name="company"]').type('Krama')

        cy.get('.form__button').click()

        cy.url().should('include', '/')

        cy.get('input[data-name="tools"]').type('tool1')
        cy.get('input[data-name="messagingPlatform"]').type('platform1')
        cy.get('input[name="role"]').type('admin')

        cy.get('.form__button').click()
        cy.url().should('include', '/')

        cy.get('.result')
    })
})