import { cardsDealt, gameResults, getValueOfCard, individualSuites, isGameOver, suites, valuesOfSuites } from "../blackJack";
import { Card } from "../shared/cardInterfaces";

describe("cardfunctions Tests - getValueOfCard", () => {
  test(" check ace value", () => {
    const val = getValueOfCard("a", true);
    expect(val).toEqual(11);
  });
  test ("chack queen value",()=>{
      const val = getValueOfCard("q", true);
      expect(val).toEqual(10);
  })
  test ("check jack value", ()=>{
      const val = getValueOfCard("j" , true);
      expect(val).toEqual(10);
  })
  test ("check king value",()=>{
      const val = getValueOfCard("k", true);
      expect(val).toEqual(10);
  })
  test ("check default value",()=>{
    const val = getValueOfCard(2, true);
    expect(val).toEqual(2);
  })
});

describe("isGameOver Tests", ()=>{
    test(" can player continue with less than 21", () => {
        const val = isGameOver(false,20,19);
        expect(val).toEqual(false);
      });
      test(" is player bust", () => {
        const val = isGameOver(false,22,19);
        expect(val).toEqual(true);
      });
      test("is house bust", () => {
        const val = isGameOver(false,20,22);
        expect(val).toEqual(true);
      });
      test("user holds and house is more than 17", () => {
        const val = isGameOver(true,20,19);
        expect(val).toEqual(true);
      });
      test(" user holds and houseCards is bigger than userCards", () => {
        const val = isGameOver(true,14,15);
        expect(val).toEqual(true);
      });
})
describe("cardsDealt Tests", ()=>{
    test("cards are dealt", () => {
        // arrange
        const suitesAndValues: Card[] = [{rank:4,suit:"spades",value:4},{rank:5,suit:"hearts",value:5},{rank:6,suit:"diams",value:6}]
        //act
        const val = cardsDealt(suitesAndValues);
        // assert
        expect(val).toBeDefined()
        expect(suitesAndValues.length).toEqual(2)
      });

})
describe("mergedSuitsValues Tests" , ()=>{
    test("are suits built",()=>{
      const cards =  individualSuites(suites,valuesOfSuites);
      expect (cards.length).toEqual(52)
      expect (cards.filter(i=>i.suit === "clubs").length).toEqual(13)
      expect (cards.filter(i=>i.suit === "diams").length).toEqual(13)
      expect (cards.filter(i=>i.rank === "a").length).toEqual(4)
      expect (cards.filter(i=>i.rank === 5).length).toEqual(4)
      expect (cards).toMatchSnapshot()
    })
})
describe("gameResults tests", ()=>{
  test("user losses when sum of cards is bigger than 21",()=>{
    const val = gameResults(18,22)
    expect(val).toEqual("You Lose")
  })
  test("user wins when sum of house cards is bigger than 21",()=>{
    const val = gameResults(22,18)
    expect(val).toEqual("You Win")
  })
  test("user wins when sum of userCards is bigger than houseCards",()=>{
    const val = gameResults(17,21)
    expect(val).toEqual("You Win")
  })
  test("user wins when sum of houseCards is bigger than userCards ",()=>{
    const val = gameResults(21,17)
    expect(val).toEqual("You Lose")
  })
  test("its a draw sum of userCards equals houseCards ",()=>{
    const val = gameResults(19,19)
    expect(val).toEqual("Its a Draw")
  })
})