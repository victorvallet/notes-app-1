function constructingWithTheGivenString() {
  let string = "My favorite language is JavaScript.";
  let note = new Note(string);
  expect.isTrue(note.text === string);
}
constructingWithTheGivenString();

function hasMethodToReturnText() {
  //this is it part of the describe/it
  let string = "Chris's idea!!";
  let note = new Note(string);
  expect.isTrue(note.returnText() === string);
}
hasMethodToReturnText();

function addsIdToNoteWhenMakingThem() {
  let noteList = new NoteList();
  noteList.addNote("This is a test");
  noteList.addNote("This is test 2");
  let note = noteList.returnNote();
  expect.isTrue(note[0].returnId() === 0);
  expect.isTrue(note[1].returnId() === 1);
}

addsIdToNoteWhenMakingThem();
