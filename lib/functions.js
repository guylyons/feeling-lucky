"use babel";
import Shell from "shell";
import querystring from "querystring";

export default class Functions {
  static getSelection() {
    if (atom.workspace.getActiveTextEditor()) {
      var editor = atom.workspace.getActiveTextEditor();
      var selection = editor.getSelectedText();

      if (selection === "") {
        editor.moveToBeginningOfWord();
        editor.selectToEndOfWord();
        selection = editor.getSelectedText();
      }

      return selection;
    }
  }

  static feelingLucky() {
    var workspace = atom.workspace;
    var selectedText = this.getSelection();

    workspace.notificationManager.addInfo('Googling "' + selectedText + '"');

    var queryString = querystring.stringify({ q: selectedText });
    parsedString = queryString.replace("q=", "");

    setTimeout(function() {
      Shell.openExternal(
        "http://www.google.com/search?q=" + parsedString + "&btnI"
      );
    }, 1500);
  }
}
