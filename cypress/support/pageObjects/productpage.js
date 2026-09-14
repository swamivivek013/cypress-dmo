class ProductPage{

    countProduct(number){
        cy.get('app-card').should('have.length',number)

        return this
    }

    selectpro(value){

        cy.get('app-card').eq(1).then((el)=>{

            cy.wrap(el).find('.card-footer > button').click()
        })
    }
}
export default ProductPage