class CartPage{

checkOut(){

    cy.get('.active > a').click()
    cy.get('tbody >tr').eq(2).find('td').eq(4).find('button').click()
    return CartPage
}

purchase(value){
      cy.get('input#country').type(value)
      cy.wait(5000)
      cy.get('.suggestions ul > li > a').click()
      cy.get('.ng-untouched > input').click()

    return CartPage
}

success(value){
    cy.get('.alert-success > strong').should('contain.text',value)
        return CartPage

}


}

export default CartPage