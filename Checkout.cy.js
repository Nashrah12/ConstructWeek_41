class Checkout{
   checkoutProcess(){
    //Click on Add adress button
      cy.contains('ADD ADDRESS').click();
      
      //Enter Name
      cy.get('[placeholder="Full Name"]').type('Aali');

      //Enter Mobile no.
      cy.get('[placeholder="Mobile Number"]').type('7894569034');

     //Enter Pincode
      cy.get('[placeholder="Pincode/Postal Code/Zipcode"]').type('22100');
      //Enter city
      cy.get('[placeholder="City"]').type('Varanasi');

      //Enter State
      cy.get('[placeholder="State"]').type('Uttar pradesh');

      //Enter Flat no.
      cy.get('[placeholder="Flat no/Building, Street Name"]').type('C 68');

      //Enter Area name
      cy.get('placeholder="Area/Localtity"').type('sigra');
      //Click on place order
      cy.contains('PLACE ORDER').click();
      
   }
}
export default Checkout;