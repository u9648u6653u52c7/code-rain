import CodeRain from "../lib/index.ts";

const codeRain = new CodeRain();

window.addEventListener("resize", () => {
  codeRain.stop();
  codeRain.init();
});
