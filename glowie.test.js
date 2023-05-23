import {red, disableColor, enableColor} from "./glowie.js";

test("test", () => {
  expect(red("foo")).toEqual("\u001b[31mfoo\u001b[39m");
  disableColor();
  expect(red("foo")).toEqual("foo");
  enableColor();
  expect(red("foo")).toEqual("\u001b[31mfoo\u001b[39m");
});
