
describe("PuzzleGame page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/puzzle-game");
    });
it("is card clickable and card moves",()=>{
const clickableElement= cy.get('[data-clickable="true"]:first');
cy.log(clickableElement)
})
});