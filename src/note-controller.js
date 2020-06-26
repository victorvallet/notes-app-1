

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

    // NoteController.prototype.returnNumber = function () {
    //     return window.location.hash.split("#")[1];
    // };

    // NoteController.prototype.addNoteToHTML = function () {
    //     let noteId = window.location.hash.split("#")[1];
    //     console.log(noteId);
    //     let singleNote = new SingleNote(this.noteListModel.getNote(0));
    //     console.log(singleNote)
    //     getNoteFromList(noteId);
    // };

    // NoteController.prototype.getNoteFromList = function (noteId) {
    //     let singleNote = new SingleNote(this.noteListModel.getNote(noteId));
    //     console.log(singleNote)
    //     this.displayNote(singleNote);
    // };

    // NoteController.prototype.displayNote = function (note) {
    //     let ele = document.getElementById("app");
    //     ele.innerHTML = note.returnHTML();
    // };

    // NoteController.prototype.loadNote = function () {
    //     window.addEventListener("hashchange", this.addNoteToHTML);
    // };


    exports.NoteController = NoteController;
})(this);

window.addEventListener(`DOMContentLoaded`, function () {
    var notelist = new NoteList();
    var controller = new NoteController(notelist);

    controller.getHTML();

    window.addEventListener("hashchange", function () {
        let noteIndex = window.location.hash.slice(-1);
        let note = controller.noteListModel.returnNote()[noteIndex]
        console.log(noteIndex)
        var singlenote = new SingleNote(note);

        var element = document.getElementById("app");
        element.innerHTML = singlenote.returnsHTML();

    })

})
