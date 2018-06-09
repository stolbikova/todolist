function addTodo() {
  var input = document.getElementById('input');
  var t = document.createTextNode(input.value);
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(t);
  ul.appendChild(li);
}

window.onload = function() {
  var btn = document.getElementById('addBtn');
  btn.onclick() = addTodo;
}
