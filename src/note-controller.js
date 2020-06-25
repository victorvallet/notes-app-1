

(function (exports) {

    function NoteController(noteListModel) {
        noteListModel = new NoteList();
        noteListModel.addNote("Favourite drink: seltzer");
        noteListModel.addNote("Favourite drink: beer");
        noteListModel.addNote("Favourite drink: cola");

        this.view = new NoteListView(noteListModel)
    }

    NoteController.prototype.getHTML = function () {
        var ele = document.getElementById('app')
        ele.innerHTML = this.view.returnHTML();
    }

    exports.NoteController = NoteController;
})(this);


