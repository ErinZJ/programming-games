describe("Calculator Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/calculator");
  });
  it("values are clicked and added correctly", () => {
    cy.contains("3").click();
    cy.get("#values").should("have.text", 3);
    cy.contains("+").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.get("#total").should("have.text", 6);
  });
  it("back button removes last selected value", () => {
    cy.contains("1").click();
    cy.contains("2").click();
    cy.contains("3").click();
    cy.contains("⌫").click();
    cy.get("#values").should("have.text", 12);
  });
  it("clear button resets calculator", () => {
    cy.contains("4").click();
    cy.get('[data-cy="clear-button"]').click();
    cy.get("#values").should("have.text", 0);
  });
  it("dot is added when clicked", () => {
    cy.contains("1").click();
    cy.get("#dot ").click();
    cy.contains("4").click();
    cy.get("#values").should("have.text", 1.4);
  });
});
