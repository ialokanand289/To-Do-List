// Get the input field and button
var input = document.getElementById("new-task");
var button = document.getElementById("add-task");

// Create a new task list
var tasks = [];

// Listen for button click
button.addEventListener("click", function() {
  var task = input.value;
  
  // Add the new task to the list
  tasks.push(task);

  // Refresh the task list
  refreshList();
  
  // Clear the input field
  input.value = "";
});

// Refresh the task list
function refreshList() {
  var list = document.getElementById("task-list");

  // Clear the existing list items
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Add each task to the list
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var listItem = document.createElement("li");
    listItem.innerText = task;

    // Add a delete button for each task
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("data-index", i);
    deleteButton.addEventListener("click", function() {
      var index = parseInt(this.getAttribute("data-index"));
      tasks.splice(index, 1);
      refreshList();
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
  }
}
