class Search{
    searchbar(){
        cy.get('[placeholder="search"]').type('T-shirts{enter}');
        cy.url().should('include','T-Shirts');
    }
}
export default Search;