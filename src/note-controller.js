(function (exports) {
  function NoteController(noteListModel) {
    this.noteListModel = new NoteList();
    this.noteListModel.addNote("Favourite drink: seltzer");
    this.noteListModel.addNote("Favourite drink: beer");
    this.noteListModel.addNote("Favourite drink: cola");

    this.view = new NoteListView(this.noteListModel);
  }

  NoteController.prototype.getHTML = function () {
    var ele = document.getElementById("app");
    ele.innerHTML = this.view.returnHTML();
  };

  NoteController.prototype.loadNote = function () {
    window.addEventListener("hashchange", this.addNoteToHTML);
  };

  NoteController.prototype.getNumber = function (location) {
    return location.hash.split("#")[1];
  };

  NoteController.prototype.addNoteToHTML = function () {
    let noteId = this.getNumber(window.location);
    console.log(noteId);
    this.getNoteFromList(noteId);
  };

  NoteController.prototype.getNoteFromList = function (noteId) {
    let singleNote = new SingleNote(this.noteListModel.getNote(noteId));
    this.displayNote(singleNote);
  };

  NoteController.prototype.displayNote = function (note) {
    let ele = document.getElementById("app");
    ele.innerHTML = note.returnHTML();
  };

  exports.NoteController = NoteController;
})(this);
