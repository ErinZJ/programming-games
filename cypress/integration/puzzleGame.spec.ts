/* eslint-disable testing-library/await-async-utils */

describe("PuzzleGame page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/puzzle-game");
  }); 
  it("is card clickable and card moves", () => {
    cy.get('[data-clickable="true"]:first').then((card) => {
      const x =card.data().x
      const y =card.data().y
      cy.get('[data-clickable="true"]:first').click();
      cy.get(`[data-x=${x}][data-y=${y}].empty-card`).should("exist",true)
    }) ;
  })
});