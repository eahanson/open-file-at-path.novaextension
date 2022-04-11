**Open File at Path** opens a palette into which you can type a file path and optionally line number and column number.
The palette will default to the first line of text from the clipboard.

This is especially useful when you have a file path in some stack trace or test failure but you can't click on it
because it's in a Report, or Nova doesn't recognize it because it has a line number and maybe a column number appended.

These are some valid paths:

- `src/hello.js`
- `src/hello.js:4`
- `src/hello.js:4:18`

To run Open File at Path:

- Optionally copy a path into the clipboard
- Select the **Extensions → Open File at Path** menu item; or
- Open the command palette and type `Open File at Path`

## License, Copyright, Attributions

Copyright 2022 Erik Hanson. See [LICENSE](LICENSE). The extension icon is a modified version of an icon from
[Font Awesome](https://fontawesome.com/) which is licensed under [CC BY 4.0](https://fontawesome.com/license).
