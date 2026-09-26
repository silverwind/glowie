import * as glowie from "./index.ts";

test("colors", () => {
  expect(glowie.red("foo", "bar")).toEqual("\u001b[31mfoo bar\u001b[39m");
  glowie.disableColor();
  expect(glowie.red("foo")).toEqual("foo");
  glowie.enableColor();
  expect(glowie.red("foo")).toEqual("\u001b[31mfoo\u001b[39m");
});

test("funcs", () => {
  for (const name of [
    "reset", "bold", "dim", "italic", "underline", "overline", "inverse", "hidden", "strikethrough", "black", "green",
    "yellow", "blue", "magenta", "cyan", "white", "gray", "bgBlack", "bgRed", "bgGreen", "bgYellow", "bgBlue",
    "bgMagenta", "bgCyan", "bgWhite", "bgGray",
  ] as const) {
    expect(glowie[name]).toBeFunction();
  }
});
