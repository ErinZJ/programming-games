describe("BlackJack page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/blackjack");
  });
  it("after user clicks hold, they can't add another card", () => {
    cy.contains("Hold").click();
    cy.get('#user [data-cy="hit-button"]').should("be.disabled");
    cy.get('#house [data-cy="hit-button"]').should("be.enabled");
  });
  it("reset should allow the user to hit", () => {
    cy.contains("Hold").click();
    cy.get('#user [data-cy="hit-button"]').should("be.disabled");
    cy.contains("Reset").click();
    cy.get('#user [data-cy="hit-button"]').should("be.enabled");
  });
  it("count of cards decreases when resest is clicked", async () => {
    await cy.get(".card");
    await cy.get("#cardsInDeck").should("have.text",48);
    cy.contains("Reset").click();
    await cy.get("#cardsInDeck").should("have.text",44);
  });
});
