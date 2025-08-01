describe("Login Page Tests", () => {
  beforeEach(() => {
    cy.visit("index.html"); // run `npx cypress open` and use correct path
  });

  it("Login button disabled initially", () => {
    cy.get("#loginButton").should("be.disabled");
  });

  it("Enable login button when fields are filled", () => {
    cy.get("#username").type("user");
    cy.get("#password").type("pass");
    cy.get("#loginButton").should("not.be.disabled");
  });

  it("Entering valid credentials", () => {
    cy.get("#username").type("corrUsername");
    cy.get("#password").type("corrPassword");
    cy.get("#loginButton").click();
    cy.url().should("include", "dashboard.html");
  });

  it("Entering wrong credentials", () => {
    cy.get("#username").type("user");
    cy.get("#password").type("pass");
    cy.get("#loginButton").click();
    cy.get("#message").should("contain", "Invalid Credentials");
  });

  it("Login button remains disabled with empty fields", () => {
    cy.get("#username").clear();
    cy.get("#password").clear();
    cy.get("#loginButton").should("be.disabled");
  });
});
