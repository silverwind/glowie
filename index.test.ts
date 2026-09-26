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
  for (const fn of [
    reset, bold, dim, italic, underline, overline, inverse, hidden, strikethrough, black, green,
    yellow, blue, magenta, cyan, white, gray, bgBlack, bgRed, bgGreen, bgYellow, bgBlue,
    bgMagenta, bgCyan, bgWhite, bgGray,
  ]) {
    expect(fn).toBeFunction();
  }
});
