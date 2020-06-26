

(function (exports) {
    function NoteController(noteListModel) {
        this.noteListModel = new NoteList();

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
        var singlenote = new SingleNote(getNote());
        var element = document.getElementById('app');
        element.innerHTML = singlenote.returnsHTML();
    });

    document.getElementById('form').onsubmit = function (submitEvent) {
        submitEvent.preventDefault();
        let note = document.getElementById('form').elements[0].value;
        controller.noteListModel.addNote(note);
        controller.getHTML();
        console.log(submitEvent);
    };

    function getNote() {
        let noteIndex = window.location.hash.slice(-1);
        let note = controller.noteListModel.returnNote()[noteIndex];
        return note

    }
});
