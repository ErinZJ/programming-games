describe("Home page", () => {
  it("Find and click BlackJack", () => {
    cy.visit("http://localhost:3000");
    cy.contains("blackjack").click();
    cy.url().should('include', 'blackjack')
  });
  it("Find and click PuzleGame", () => {
    cy.visit("http://localhost:3000");
    cy.contains("puzzle-game").click();
    cy.url().should('include', 'puzzle-game')
  })
});
