let enabled = true;

export function enableColor() {
  enabled = true;
}

export function disableColor() {
  enabled = false;
}

function format(str, start, end) {
  return enabled ? `\u001B[${start}m${str}\u001B[${end}m` : str;
}

export const reset = str => format(str, 0, 0);
export const bold = str => format(str, 1, 22);
export const dim = str => format(str, 2, 22);
export const italic = str => format(str, 3, 23);
export const underline = str => format(str, 4, 24);
export const overline = str => format(str, 53, 55);
export const inverse = str => format(str, 7, 27);
export const hidden = str => format(str, 8, 28);
export const strikethrough = str => format(str, 9, 29);

export const black = str => format(str, 30, 39);
export const red = str => format(str, 31, 39);
export const green = str => format(str, 32, 39);
export const yellow = str => format(str, 33, 39);
export const blue = str => format(str, 34, 39);
export const magenta = str => format(str, 35, 39);
export const cyan = str => format(str, 36, 39);
export const white = str => format(str, 37, 39);
export const gray = str => format(str, 90, 39);

export const bgBlack = str => format(str, 40, 49);
export const bgRed = str => format(str, 41, 49);
export const bgGreen = str => format(str, 42, 49);
export const bgYellow = str => format(str, 43, 49);
export const bgBlue = str => format(str, 44, 49);
export const bgMagenta = str => format(str, 45, 49);
export const bgCyan = str => format(str, 46, 49);
export const bgWhite = str => format(str, 47, 49);
export const bgGray = str => format(str, 100, 49);
