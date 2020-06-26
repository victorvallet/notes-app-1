(function (exports) {
  function NoteController(noteListModel) {
    this.noteListModel = new NoteList();
    this.noteListModel.addNote('Favourite drink: seltzer');
    this.noteListModel.addNote('Favourite drink: beer');
    this.noteListModel.addNote('Favourite drink: cola');

    this.view = new NoteListView(this.noteListModel);
  }

  NoteController.prototype.getHTML = function () {
    var ele = document.getElementById('app');
    ele.innerHTML = this.view.returnHTML();
  };

  exports.NoteController = NoteController;
})(this);

window.addEventListener(`DOMContentLoaded`, function () {
  var notelist = new NoteList();
  var controller = new NoteController(notelist);

  controller.getHTML();

  window.addEventListener('hashchange', function () {
    let noteIndex = window.location.hash.slice(-1);
    let note = controller.noteListModel.returnNote()[noteIndex];
    console.log(noteIndex);
    var singlenote = new SingleNote(note);

    var element = document.getElementById('app');
    element.innerHTML = singlenote.returnsHTML();
  });

  document.getElementById('form').onsubmit = function (submitEvent) {
    submitEvent.preventDefault();
    console.log(document.getElementById('form').elements[0].value);
    console.log(submitEvent);
  };
});
