import exactChangeNeeded from "../src/js/coin-counter.js"

describe("exactChangeNeeded", () => {
  test("it should break out of loop if not a number", () => {
    expect(exactChangeNeeded("pizza")).toEqual(-1);
  });
});