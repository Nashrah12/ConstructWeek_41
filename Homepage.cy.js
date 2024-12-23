class Homepage{
    homepage(){
        //Verify the web logo is visible
        cy.get('[src="../image/logo.svg"]').should('be.visible');

        //Verify the search bar is visible
        cy.get('[placeholder="search"]').should('be.visible');

        //Verify the login button is visible
        cy.get('[class="loginbtn"]').should('be.visible');

        //Verify the cart button is visible
        cy.get('[href="/html/cart"]').should('be.visible');

        //Verify the wishlist button is visible
        cy.get('[href="/html/cart"]').should('be.visible');

        //Verify the footer is visible
        cy.get('#footer').should('be.visible');

         //Verify Shop Now navigation
        cy.contains('SHOP NOW').should('be.visible').click();
    }
}
export default Homepage;