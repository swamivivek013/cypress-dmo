class Confirmation{

confirm(){
    cy.contains('Shop Name').should('be.visible')
    return this
}

}
export default Confirmation