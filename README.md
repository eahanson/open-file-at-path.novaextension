**Open File at Path** opens a palette into which you can type a file path and optionally line number and column number.
The palette will default to the first line of text from the clipboard.

This is especially useful when you have a file path in some stack trace or test failure but you can't click on it
because it's in a Report, or Nova doesn't recognize it because it has a line number and maybe a column number appended.

These are some valid paths:

- `src/hello.js`
- `src/hello.js:4`
- `src/hello.js:4:18`

The extension tries to ignore trailing text, so you can often copy an entire line from a stacktrace
or other output and still go to the file. For example, `src/hello.js:4: unknown value` should successfully
lead to line 4 of `src/hello.js`.

![screenshot](https://raw.github.com/eahanson/open-file-at-path.novaextension/main/open-file-at-path.jpg)

## Usage

To run Open File at Path:

- Optionally copy a path into the clipboard
- Select the **Extensions → Open File at Path** menu item; or
- Open the command palette and type `Open File at Path`

## Other Nova extensions you might like :)

- **Copy Path** copies the absolute or relative path of the current file, optionally including the line number and
  column number.
  [GitHub](https://github.com/eahanson/copy-path.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.copy-path/)

- **Document Sections** lets you jump around to various sections in a text document using a customizable marker
  (typically a code comment in a certain format).
  [GitHub](https://github.com/eahanson/document-sections.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.document-sections/)

- **Elixir Manual Formatter** lets you manually format an Elixir file or entire project, in case the LSP formatter
  starts failing.
  [GitHub](https://github.com/eahanson/elixir-manual-formatter.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.elixir-manual-formatter/)

- **Go To Tab** shows a list of open editors and lets you choose one to go to.
  [GitHub](https://github.com/eahanson/go-to-tab.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.go-to-tab/)

- **Open File At Path** opens a palette into which you can type a file path and optionally line number and column number.
  The palette will default to the first line of text from the clipboard.
  [GitHub](https://github.com/eahanson/open-file-at-path.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.open-file-at-path/)

- **Open Recent** shows a list of recently-used editors and lets you choose one to open.
  [GitHub](https://github.com/eahanson/open-recent.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.open-recent/)

- **Open Related File** opens a file related to the current file.
  [GitHub](https://github.com/synchronal/related-files.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.related-files/)

- **Smart Sort Lines** sorts the selected lines of code with special support for comma-separated lists.
  [GitHub](https://github.com/eahanson/smart-sort-lines) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.smart-sort-lines/)

- **Trail** lets you create a trail of editor positions as you navigate code so that you can easily get back to where
  you came from.
  [GitHub](https://github.com/eahanson/trail.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.trail/)

## License, Copyright, Attributions

Copyright 2023 Erik Hanson. See [LICENSE](https://github.com/eahanson/open-file-at-path.novaextension/blob/main/LICENSE).
