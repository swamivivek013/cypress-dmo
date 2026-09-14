import HomePage from '../support/pageObjects/homepage'

import Confirmation from  '../support/pageObjects/confirmation'
import ProductPage from '../support/pageObjects/productpage'
import CartPage from '../support/pageObjects/cartpage'


describe("framework",function(){

   before(function(){

   cy.fixture('loginData').then(function(data){
    
    this.data=data
    this.homepage=new HomePage()
    this.cart=new CartPage()
   })

   })

    
it("framework test",function(){

   this.homepage.goTo("https://rahulshettyacademy.com/loginpagePractise/#")

   this.homepage.login(this.data.username,this.data.password)
   this.con=new Confirmation()
   this.con.confirm()
   this.ProductPage=new ProductPage()
   this.ProductPage.countProduct(4)
   this.ProductPage.selectpro(this.data.addbutton)
   this.cart.checkOut()
   this.cart.purchase(this.data.country)
   this.cart.success(this.data.successmsg)


    
   

})
})