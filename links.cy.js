class Link{
    clickLink(link){
            cy.contains(link).click();
    }
 }
 export default Link;