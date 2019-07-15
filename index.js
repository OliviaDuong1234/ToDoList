var button = $('button');
var container = $('.container');
var text = $('text');

button.on('click', addToList);
function addToList() {
  var userToDo = text.val();
  console.log(userToDo);

}
