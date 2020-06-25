(function (exports) {
  function NoteList() {
    this.notes = [];
    this.id = 0;
  }

  NoteList.prototype.addNote = function (note) {
    this.notes.push(new Note(note, this.id));
    this.incrementId();
  };

  NoteList.prototype.returnNote = function () {
    return this.notes;
  };

  NoteList.prototype.incrementId = function () {
    this.id++;
  };

  exports.NoteList = NoteList;
})(this);
