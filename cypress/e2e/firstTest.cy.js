
describe('intial suite', () => {


    const mtext = 'Samsung Note 8'
    it('first test', () => {

        cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
        cy.log("opening url")
        cy.wait(2000)
        cy.log("trying to login")

        cy.get('#username').type("rahulshettyacademy")
        cy.get('#password').type("Learning@830$3mK2")
        cy.contains('Sign In').click()
        cy.log("login successfull")
        cy.get('.my-4').should('be.visible')
        cy.get('.my-4').then((text) => {

            const sname = text.text()
            cy.log(sname)

            cy.get('.row').find('.h-100').should('have.length', 4)
            cy.log('four items are present on the page')

            cy.get('.row').find('.h-100').eq(1).find('a').then((text) => {
                const mname = text.text();
                cy.log("mobile name:" + mname)
            })
        })
        cy.get('.row').find('.h-100').find('a').each(($el) => {

            const etext = $el.text().trim()

            if (etext === mtext) {
                cy.wrap($el).parents('.card-body').siblings('.card-footer').find('button').click()
                cy.wait(2000)
                cy.wrap($el).parents('.card-body').siblings('.card-footer').find('button').click()

            }

        })

        cy.get('ul li .btn-primary').click()

        cy.get('.table tbody tr > td > strong').contains('170000')
        
        cy.get('.table tbody tr >td').eq(3).find('strong').then((el) =>{


           const val= el.text().split(' ')[1].trim()
           if(val > 85000){

            cy.get('.table tbody > tr').eq(2).find('td').eq(4).find('button').click()
           }

        })

    })


})