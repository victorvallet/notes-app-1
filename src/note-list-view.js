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
                output += `<li><a href=#${note.id}>${note.returnText().substr(0, 20)}</a><div id=${note.id}></div</li>`;
            });
            return `<ul>${output}</ul>`;
        }
    };
    exports.NoteListView = NoteListView;
})(this);
