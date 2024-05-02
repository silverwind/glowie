import {
  reset, bold, dim, italic, underline, overline, inverse, hidden, strikethrough, black, green,
  yellow, blue, magenta, cyan, white, gray, bgBlack, bgRed, bgGreen, bgYellow, bgBlue,
  bgMagenta, bgCyan, bgWhite, bgGray, red, disableColor, enableColor,
} from "./index.ts";

test("colors", () => {
  expect(red("foo", "bar")).toEqual("\u001b[31mfoo bar\u001b[39m");
  disableColor();
  expect(red("foo")).toEqual("foo");
  enableColor();
  expect(red("foo")).toEqual("\u001b[31mfoo\u001b[39m");
});

test("funcs", () => {
  expect(reset).toBeFunction();
  expect(bold).toBeFunction();
  expect(dim).toBeFunction();
  expect(italic).toBeFunction();
  expect(underline).toBeFunction();
  expect(overline).toBeFunction();
  expect(inverse).toBeFunction();
  expect(hidden).toBeFunction();
  expect(strikethrough).toBeFunction();
  expect(black).toBeFunction();
  expect(green).toBeFunction();
  expect(yellow).toBeFunction();
  expect(blue).toBeFunction();
  expect(magenta).toBeFunction();
  expect(cyan).toBeFunction();
  expect(white).toBeFunction();
  expect(gray).toBeFunction();
  expect(bgBlack).toBeFunction();
  expect(bgRed).toBeFunction();
  expect(bgGreen).toBeFunction();
  expect(bgYellow).toBeFunction();
  expect(bgBlue).toBeFunction();
  expect(bgMagenta).toBeFunction();
  expect(bgCyan).toBeFunction();
  expect(bgWhite).toBeFunction();
  expect(bgGray).toBeFunction();
});
