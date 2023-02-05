# rn-responsive-design

It's a library for React Native that provides utilities for responsive design. It includes functions for retrieving the current window size of a device, scaling values based on the device's width or height, and normalizing the size to the nearest pixel.

## Installation

```sh
npm install rn-responsive-design
```

## Usage/Examples

| Function Name   | Input         | Output                   | Usage                                                                                                                                                    |
| --------------- | ------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Normalize       | number (size) | number (normalized size) | Use for scaling font sizes and horizontal values such as width, marginLeft, marginRight, marginHorizontal, paddingLeft, paddingRight ,paddingHorizontal. |
| normalizeHeight | number (size) | number (normalized size) | Use for scaling vertical values such as height, marginTop, marginBottom, marginVertical, paddingTop, paddingBottom, ,paddingVertical.                    |

- ### Normalize function
  The normalize function takes a size and scales the size according to the width of the screen, and then rounds the result to the nearest pixel.

For example, if you want to have a Text element with a size of 16 on a screen with a width of 375 pixels, you can do the following:

```javascript
import { normalize } from 'rn-responsive-design';
<Text style={{ fontSize: normalize(16) }}>Scaled text</Text>;
```

The result will be a text with a size scaled according to the screen width and rounded to the nearest pixel.

- ### normalizeHeight function
  The normalizeHeight function works similar to normalize, but instead of scaling the size according to the width of the screen, it scales it according to the height of the screen.

For example, if you want to have a View element with a height of 50 on a screen with a height of 667 pixels, you can do the following:

```javascript
import { normalizeHeight } from 'rn-responsive-design';
<View style={{ height: normalizeHeight(50) }}></View>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
