let enabled: boolean = true;

export function enableColor(): void {
  enabled = true;
}

export function disableColor(): void {
  enabled = false;
}

function format(args: any[], start: number, end: number): string {
  const content = args.join(" ");
  return enabled ? `\u001B[${start}m${content}\u001B[${end}m` : content;
}

export const reset = (...args: any[]): string => format(args, 0, 0);
export const bold = (...args: any[]): string => format(args, 1, 22);
export const dim = (...args: any[]): string => format(args, 2, 22);
export const italic = (...args: any[]): string => format(args, 3, 23);
export const underline = (...args: any[]): string => format(args, 4, 24);
export const overline = (...args: any[]): string => format(args, 53, 55);
export const inverse = (...args: any[]): string => format(args, 7, 27);
export const hidden = (...args: any[]): string => format(args, 8, 28);
export const strikethrough = (...args: any[]): string => format(args, 9, 29);

export const black = (...args: any[]): string => format(args, 30, 39);
export const red = (...args: any[]): string => format(args, 31, 39);
export const green = (...args: any[]): string => format(args, 32, 39);
export const yellow = (...args: any[]): string => format(args, 33, 39);
export const blue = (...args: any[]): string => format(args, 34, 39);
export const magenta = (...args: any[]): string => format(args, 35, 39);
export const cyan = (...args: any[]): string => format(args, 36, 39);
export const white = (...args: any[]): string => format(args, 37, 39);
export const gray = (...args: any[]): string => format(args, 90, 39);

export const bgBlack = (...args: any[]): string => format(args, 40, 49);
export const bgRed = (...args: any[]): string => format(args, 41, 49);
export const bgGreen = (...args: any[]): string => format(args, 42, 49);
export const bgYellow = (...args: any[]): string => format(args, 43, 49);
export const bgBlue = (...args: any[]): string => format(args, 44, 49);
export const bgMagenta = (...args: any[]): string => format(args, 45, 49);
export const bgCyan = (...args: any[]): string => format(args, 46, 49);
export const bgWhite = (...args: any[]): string => format(args, 47, 49);
export const bgGray = (...args: any[]): string => format(args, 100, 49);
