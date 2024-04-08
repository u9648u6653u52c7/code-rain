import { isDOM } from "./helpers";
import { parseOptions } from "./options";
import type { Options, ParsedOptions } from "./options";

class CodeRain {
  private container: HTMLElement;
  private options: ParsedOptions;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private numberOfColumns!: number;
  private characterPosition!: number[];
  private timer!: number;

  constructor(container?: HTMLElement, options: Partial<Options> = {}) {
    this.container =
      container && isDOM(container) ? container : document.documentElement;
    this.options = parseOptions(options);
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d")!;
    this.init();
  }

  init() {
    const { container, options, canvas, ctx } = this;
    canvas!.width = container.clientWidth;
    canvas!.height = container.clientHeight;
    this.numberOfColumns = Math.floor(canvas!.width / options.fontSize);
    this.characterPosition = Array(this.numberOfColumns).fill(0);
    if (canvas!.parentNode == null) {
      options.mount(container, canvas!);
    }
    ctx.clearRect(0, 0, canvas!.width, canvas!.height);
    ctx.font = options.getFontSetting();
    this.draw();
  }

  draw() {
    const { options, canvas, ctx, numberOfColumns, characterPosition } = this;
    const { getRandomCharacter, getRandomFontColor, fontSize } = options;
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < numberOfColumns; i++) {
      ctx.fillStyle = getRandomFontColor();
      const x = i * fontSize;
      const y = characterPosition[i] * fontSize + fontSize;
      ctx.fillText(getRandomCharacter(), x, y);
      if (y > canvas.height && Math.random() > 0.95) {
        characterPosition[i] = 0;
      } else {
        characterPosition[i]++;
      }
    }

    this.timer = setTimeout(() => {
      this.draw();
    }, options.framePerSecond);
  }

  start() {
    this.draw();
  }

  stop() {
    clearTimeout(this.timer);
  }

  destroy() {
    this.stop();
    this.canvas.remove();
    this.canvas = null!;
    this.ctx = null!;
  }
}

export default CodeRain;
