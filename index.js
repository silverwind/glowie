let enabled = true;

export function enableColor() {
  enabled = true;
}

export function disableColor() {
  enabled = false;
}

function format(args, start, end) {
  return enabled ? `\u001B[${start}m${args.join(" ")}\u001B[${end}m` : args.join(" ");
}

export const reset = (...args) => format(args, 0, 0);
export const bold = (...args) => format(args, 1, 22);
export const dim = (...args) => format(args, 2, 22);
export const italic = (...args) => format(args, 3, 23);
export const underline = (...args) => format(args, 4, 24);
export const overline = (...args) => format(args, 53, 55);
export const inverse = (...args) => format(args, 7, 27);
export const hidden = (...args) => format(args, 8, 28);
export const strikethrough = (...args) => format(args, 9, 29);

export const black = (...args) => format(args, 30, 39);
export const red = (...args) => format(args, 31, 39);
export const green = (...args) => format(args, 32, 39);
export const yellow = (...args) => format(args, 33, 39);
export const blue = (...args) => format(args, 34, 39);
export const magenta = (...args) => format(args, 35, 39);
export const cyan = (...args) => format(args, 36, 39);
export const white = (...args) => format(args, 37, 39);
export const gray = (...args) => format(args, 90, 39);

export const bgBlack = (...args) => format(args, 40, 49);
export const bgRed = (...args) => format(args, 41, 49);
export const bgGreen = (...args) => format(args, 42, 49);
export const bgYellow = (...args) => format(args, 43, 49);
export const bgBlue = (...args) => format(args, 44, 49);
export const bgMagenta = (...args) => format(args, 45, 49);
export const bgCyan = (...args) => format(args, 46, 49);
export const bgWhite = (...args) => format(args, 47, 49);
export const bgGray = (...args) => format(args, 100, 49);
