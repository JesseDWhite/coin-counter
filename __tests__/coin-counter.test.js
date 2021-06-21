import exactChangeNeeded from "../src/js/coin-counter.js"

describe("exactChangeNeeded", () => {
  test("it should break out of loop if not a number", () => {
    expect(exactChangeNeeded("pizza")).toEqual(-1);
  });
});

describe("exactChangeNeeded", () => {
  test("it should return zero if the expected output is zero", () => {
    expect(exactChangeNeeded(0)).toEqual(0);
  });
});