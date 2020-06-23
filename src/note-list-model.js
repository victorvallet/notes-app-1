(function (exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.addNote = function (note) {
    this.notes.push(new Note(note));
  };

  NoteList.prototype.returnNote = function () {
    return this.notes;
  };
  exports.NoteList = NoteList;
})(this);
