describe("Test login funcationlity : login into  the application and logout ", () => {
  it("Open URL", () => {
    cy.visit("http://www.testyou.in/Login.aspx");
  });
  it("Login Into Application", () => {
    cy.get("#ctl00_CPHContainer_txtUserLogin").type("kailash1980");
    cy.get("#ctl00_CPHContainer_txtPassword").type("Sonie8088");
    cy.get("#ctl00_CPHContainer_btnLoginn").click();
  });
  it("Logout From Application", () => {
    cy.get("#ctl00_headerTopStudent_lnkbtnSignout").click();
  });
});
