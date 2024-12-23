class Product{
   selectProduct(){
    //Select product 
    cy.contains('Campus Sutra').click();
    //Click on add to bag option
    cy.get('#pd-add-to-bag-btn').click();
     //click on wishlist button
    cy.get('#add-to-wishlist-btn').click();

   }  
}
export default Product;