let list = $('#list');
let li = $('<li></li>');
let inputValue = $('#input').val();

li.append(inputValue);//check this

if (inputValue === '') {
  alert("You must write something!");
} else {
  list.append(li);
}

//Part 2

li.on('dblclick', function() {
  li.toggleClass("strike");
});

//Part 3

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode("X"));
li.append(crossOutButton);
crossOutButton.on('click', function(){
  li.addClass("delete");
});

//Part 4
list.sortable();




