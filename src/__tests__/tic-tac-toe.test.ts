import { gameWinner } from "../tic-tac-toe/tic-tac-toe";

describe(" tic-tac-toe Tests", () => {
  test("X has 3 in top row ", () => {
    const val = gameWinner(["X", "X", "X", "", "", "", "", "", ""], "X");
    expect(val).toEqual(true);
  });
  test("X has 3 in middle row", () => {
    const val = gameWinner(["", "", "", "X", "X", "X", "", "", ""], "X");
    expect(val).toEqual(true);
  });
  test("X has 3 in bottom row", () => {
    const val = gameWinner(["", "", "", "", "", "", "X", "X", "X"], "X");
    expect(val).toEqual(true);
  });
  test("X has 3 in first column", () => {
    const val = gameWinner(["X", "", "", "X", "", "", "X", "", ""], "X");
    expect(val).toEqual(true);
  });
  test("X has 3 in second column", () => {
    const val = gameWinner(["", "X", "", "", "X", "", "", "X", ""], "X");
    expect(val).toEqual(true);
  });
  test("X has 3 in the third column", () => {
    const val = gameWinner(["", "", "X", "", "", "X", "", "", "X"], "X");
    expect(val).toEqual(true);
  });
  test("X has 3 diagonally from top to bottom", () => {
    const val = gameWinner(["X", "", "", "", "X", "", "", "", "X"], "X");
    expect(val).toEqual(true);
  });
  test("X has 3 diagonally from bottom to top", () => {
    const val = gameWinner(["", "", "X", "", "X", "", "X", "", ""], "X");
    expect(val).toEqual(true);
  });
  test("X has no winning", () => {
    const val = gameWinner(["", "X", "", "", "X", "", "X", "", ""], "X");
    expect(val).toEqual(false);
  });
  test("O can also win", () => {
    const val = gameWinner(["", "", "O", "", "O", "", "O", "", ""], "O");
    expect(val).toEqual(true);
  });
});
