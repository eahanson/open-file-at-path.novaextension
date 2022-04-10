exports.activate = function () {
  // Do work when the extension is activated
};

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
};

nova.commands.register("open-file-at-path.run", (editor) => {
  // var range = editor.selectedRange;
  // var text = editor.getTextInRange(range);
  nova.clipboard.readText().then((text) => {
    const regex = /(\/?(?:[\w.-]+\/)*[\w.-]+):(\d+)/;
    let firstLine = extractFirstLine(text);

    if (firstLine) {
      nova.workspace.showInputPalette(
        "Open file",
        { value: firstLine },
        (input) => {
          if (input) {
            let [path, line, column] = extractPathLineAndColumn(input);
            path = nova.path.join(nova.workspace.path, path).trim();
            nova.workspace.openFile(path, { line: line, column: column });
          }
        }
      );
    }
  });
});

function extractFirstLine(text) {
  if (text) {
    let firstLine = text.split(/\r?\n/)[0];
    if (firstLine) {
      return firstLine.trim();
    }
  }
}

function extractPathLineAndColumn(text) {
  if (text) {
    let [path, line, column] = text.trim().split(":");
    path = path.trim();
    line = parseNumber(line, 1);
    column = parseNumber(column, 1);

    return [path, line, column];
  } else {
    return [null, null, null];
  }
}

function parseNumber(text, defaultValue) {
  if (text) {
    return parseInt(text, 10);
  } else {
    return defaultValue;
  }
}
