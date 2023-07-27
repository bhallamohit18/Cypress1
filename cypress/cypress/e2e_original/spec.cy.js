describe('Test case1', () => {
  it('open UAT site', () => {
    cy.visit('https://fleetpride--uat.sandbox.my.site.com/parts/ccrz__CCSiteLogin');
    cy.get("#emailField").type("mohit.bhalla+1@fleetpride.com");
    cy.get("#passwordField").type("Pass@123");
    cy.get("#send2Dsk").click();
    
  })
  it('Verify footer column1', () => {
    it("", () => {
      let footer_col1 = cy.get("//ul[@id='fp_footer_menu1']//li//a");
     cy.debug.footer_col1[0];
     cy.footer_col1[0].click();
     cy.title().should('contains', 'Abgdthout')
     
      cy.log(footer_col1);
      
    })
  })
})