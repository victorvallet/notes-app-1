(function (exports) {
  function NoteListView(notelist) {
    this.frame = notelist;
  }

  NoteListView.prototype.returnHTML = function () {
    var array = this.frame.returnNote();
    var output = "";

    if (array.length === 0) {
      return "<ul><li><div></div></li></ul>";
    } else {
      array.forEach((note) => {
        output += `<li><div>${note.returnText().substr(0, 20)}</div></li>`;
      });
      return `<ul>${output}</ul>`;
    }
  };
  exports.NoteListView = NoteListView;
})(this);
