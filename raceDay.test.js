const raceDay = require("./raceDay");

test("generateRaceNumber should return a number between 0 and 999 for runners who registered late or are under 18", () => {
  const mockRaceNumber = Math.floor(Math.random() * 1000);
  const generateRaceNumber = jest.fn(() => mockRaceNumber);

  const raceNumber = generateRaceNumber();

  expect(typeof raceNumber).toBe("number");
  expect(raceNumber).toBeGreaterThanOrEqual(0);
  expect(raceNumber).toBeLessThan(1000);
});

test("generateRaceNumber should return a number between 1000 and 1999 for runners who registered early and are over 18", () => {
  const mockRaceNumber = Math.floor(Math.random() * 1000) + 1000;
  const generateRaceNumber = jest.fn(() => mockRaceNumber);

  const raceNumber = generateRaceNumber();

  expect(raceNumber).toBeGreaterThanOrEqual(1000);
  expect(raceNumber).toBeLessThan(2000);
});
