"use babel";
import Functions from "./Functions";

export default {
  activate(state) {
    atom.commands.add("atom-workspace", {
      "feeling-lucky:search": () => Functions.feelingLucky()
    });
  }
};
