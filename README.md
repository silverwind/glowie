# glowie
[![](https://img.shields.io/npm/v/glowie.svg?style=flat)](https://www.npmjs.org/package/glowie) [![](https://img.shields.io/npm/dm/glowie.svg)](https://www.npmjs.org/package/glowie) [![](https://packagephobia.com/badge?p=glowie)](https://packagephobia.com/result?p=glowie)

Teeny-tiny terminal color library which does not perform any color support detection, so you can hook up [capable detection modules](https://github.com/chalk/supports-color) yourself.

## Usage
```js
import {green, disableColor} from "glowie";

console.info(green("foo", "bar"));
// "foo bar" in color

disableColor();

console.info(green("foo", "bar"));
// "foo bar" in no color
```

© [silverwind](https://github.com/silverwind), distributed under BSD licence
