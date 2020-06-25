function constructsWithAnNoteListModel() {
  let list = new NoteList();
  let view = new NoteListView(list);
  expect.isTrue(view.frame instanceof NoteList);
}
constructsWithAnNoteListModel();

function returnHTMLStringNoNote() {
  let list = new NoteList();
  let view = new NoteListView(list);
  expect.isTrue(view.returnHTML() === "<ul><li><div></div></li></ul>");
}
returnHTMLStringNoNote();

function returnHTMLStringOneNote() {
  let list = new NoteList();
  let view = new NoteListView(list);
  list.addNote("This is a string that I have put together");
  expect.isTrue(
    view.returnHTML() === "<ul><li><div>This is a string tha</div></li></ul>"
  );
}
returnHTMLStringOneNote();

function returnHTMLStringSeveralNotes() {
  let list = new NoteList();
  let view = new NoteListView(list);
  list.addNote("This is a string that I have put together");
  list.addNote("This is a string that I have put together");
  var string =
    "<ul><li><div>This is a string tha</div></li><li><div>This is a string tha</div></li></ul>";
  expect.isTrue(view.returnHTML() === string);
}
returnHTMLStringSeveralNotes();
