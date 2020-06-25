function constructsWithANoteModel() {
    var noteModel = new Note();
    var singleNote = new SingleNote(noteModel);

    expect.isTrue(singleNote.note instanceof Note);
}
constructsWithANoteModel();

function returnsHTMLofNote() {
    var noteModel = new Note("Favourite drink: seltzer");
    var singleNote = new SingleNote(noteModel);

    expect.isTrue(singleNote.returnsHTML() == "<div>Favourite drink: seltzer</div>")
}

returnsHTMLofNote();