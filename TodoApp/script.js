const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

//const list = document.getElementById('todo-list')
var itemCountSpan = 0
var uncheckedCountSpan = 0

var worklist = document.getElementsByTagName("li");
var i;
for (i=0;i<worklist.length;i++)
{
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	worklist[i].appendChild(span);
}
document.getElementById("item-count").innerHTML = itemCountSpan;
document.getElementById("unchecked-count").innerHTML = uncheckedCountSpan;
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    itemCountSpan--;
    uncheckedCountSpan--;
  }
document.getElementById("item-count").innerHTML = itemCountSpan;
    document.getElementById("unchecked-count").innerHTML = uncheckedCountSpan;
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    uncheckedCountSpan--;
    document.getElementById("item-count").innerHTML = itemCountSpan;
    if(uncheckedCountSpan<0)
    uncheckedCountSpan+=2
document.getElementById("unchecked-count").innerHTML = uncheckedCountSpan;
  }
}, false);


function newTodo() {
  var li = document.createElement("li");
  var todoname = document.getElementById("TodoName").value;
  var tex = document.createTextNode(todoname);
  li.appendChild(tex);
  if(todoname === " ") {
  	alert("Give a name to your task!!");
  }
  else
  {
  	document.getElementById("todo-list").appendChild(li);
  	itemCountSpan++;
  	uncheckedCountSpan++;
  }
  document.getElementById("item-count").innerHTML = itemCountSpan;
document.getElementById("unchecked-count").innerHTML = uncheckedCountSpan;
  document.getElementById("TodoName").value = ' ';
  var worklist = document.getElementsByTagName("li");
var i;
for (i=0;i<worklist.length;i++)
{
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	worklist[i].appendChild(span);
}
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
