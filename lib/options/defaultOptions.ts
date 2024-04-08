export type Options = {
  characters: string | string[];
  fontSize: number;
  fontColor: string;
  fontFamily: string;
  framePerSecond: number;
  mount: (container: HTMLElement, canvas: HTMLCanvasElement) => void;
};

export default {
  characters: "01",
  fontSize: 17,
  fontColor: "green",
  fontFamily: "Consolas",
  framePerSecond: 1000 / 12,
  mount(container, canvas) {
    container.appendChild(canvas);
  }
} as Options;
