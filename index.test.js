import {red, disableColor, enableColor} from "./index.js";

test("colors", () => {
  expect(red("foo", "bar")).toEqual("\u001b[31mfoo bar\u001b[39m");
  disableColor();
  expect(red("foo")).toEqual("foo");
  enableColor();
  expect(red("foo")).toEqual("\u001b[31mfoo\u001b[39m");
});
