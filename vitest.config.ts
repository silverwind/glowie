import {defineConfig} from "vitest/config";
// @ts-ignore
import {backend} from "vitest-config-silverwind";

export default defineConfig(backend({
  url: import.meta.url,
}));
