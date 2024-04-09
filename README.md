# CodeRain

## Usage

```ts
import CodeRain from 'code-rain'

const codeRain = new CodeRain(document.documentElement, {
  characters: "01",
  fontSize: 17,
  fontColor: "green",
  fontFamily: "Consolas",
  framePerSecond: 1000 / 12,
  mount(container, canvas) {
    container.appendChild(canvas);
  }
});
```


## Options

| Option                                                                                                             | Type                             | Remarks                                                                                         |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `characters` | `string`        | A character string of characters to be used for the rain.                                       |
| `fontSize`   | `number`        | The font size of the rain characters.                                                           |
| `fontColor`  | `string`        | A valid color value                                                                             |
| `fontFamily` | `number`        | A valid font name value                                                                         |
| `framePerSecond` | `number`    | The number of frames per second. The default value is 12 frames                                 |
| `mount`      | `function`      | How to mount the canvas element                                                                 |
