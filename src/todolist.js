window.addEventListener("load", function() {

  var ul = document.getElementById("list");

  function addItem() {

    let input = document.getElementById('input_field');
    if (input.value === '') {
      alert("You must write something!");
      return;
    }
    let t = document.createTextNode(input.value);
    let li = document.createElement("li");
    li.appendChild(t);
    ul.appendChild(li);

    li.onclick =  function() {
      li.classList.add("checked");
    }
  }

  function removeItem() {

    // ul.removeChild(ul.childNodes[i]);
  }

  var addbtn = document.getElementById('addBtn');
  addbtn.addEventListener("click", function() {
    addItem();
  });

  var rmvbtn = document.getElementById('removeBtn');
  addbtn.addEventListener("click", function() {
    removeItem();
  });

  var list = document.getElementsByTagName("li");

  for (let i = 0; i < list.length; i++) {

    list[i].onclick =  function() {
      list[i].classList.add("checked");
    }
  }
});
