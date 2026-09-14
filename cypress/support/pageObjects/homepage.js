


class HomePage {

  goTo(url){
     cy.visit(url)
     return this
  }

    login(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.contains('Sign In').click()
            return this

    }


}
export default HomePage;