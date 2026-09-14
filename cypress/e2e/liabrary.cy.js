
describe('testing-liabrary', () => {

    it('liabrary-test', () => {

        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#')
        cy.findByRole('textbox', { name: /username/i }).type('rahulshettyacademy')
        cy.findByLabelText(/password/i).type('Learning@830$3mK2')

        cy.findByText('Sign In').click()
        cy.findByText('Shop Name').should('exist')
        cy.findByText('iphone X').should('be.visible')
        cy.findAllByRole('button', { name: /Add/i }).eq(0).click()
        cy.findByText(/checkout/i).click()
        cy.findByRole('button', { name: /checkout/i }).click()
        cy.findByRole('textbox' ).type('india')
        

        cy.findByText('India',{ timeout: 5000}).click()

        cy.findByText('Purchase').click()

        cy.findByText('Success!').should('be.visible')
    })
})
