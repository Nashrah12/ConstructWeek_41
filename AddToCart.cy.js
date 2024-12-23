class AddToCart{
    bag(){
    cy.get('[href="/html/cart"]').click();
    cy.url().should('include','cart');
    }
}
export default AddToCart;