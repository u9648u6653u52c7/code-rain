import { getRandomElement } from "../helpers";
import defaultOptions from "./defaultOptions";
import type { Options } from "./defaultOptions";

function parseOptions(options: Partial<Options>): Options & {
  getRandomCharacter: () => string;
  getRandomFontColor: () => string;
  getFontSetting: () => string;
};
function parseOptions(options: Partial<Options>) {
  const opts = Object.assign({}, defaultOptions, options);
  return {
    ...opts,
    getRandomCharacter: getRandomElement.bind(null, opts.characters),
    getRandomFontColor: Array.isArray(opts.fontColor)
      ? getRandomElement.bind(null, opts.fontColor)
      : () => opts.fontColor,
    getFontSetting: () => `${opts.fontSize}px ${opts.fontFamily}`,
  };
}
export default parseOptions;
export type ParsedOptions = ReturnType<typeof parseOptions>;
