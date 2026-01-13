const { add, minus } = require("./math.util.js");
const fc = require("fast-check");

test("math adding utilities", () => {
  expect(add(2, 3)).toBe(5);
});
test("math subtracting utilities", () => {
  expect(minus(5, 3)).toBe(2);
});

test("math fast-check adding utilities", () => {
  fc.assert(
    fc.property(fc.integer(), fc.integer(), (a, b) => {
      console.log({ a, b });
      expect(add(a, b)).toBe(a + b);
      expect(add(a, b)).toBe(b + a);
    })
  );
});
