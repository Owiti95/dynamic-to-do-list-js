// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn')
  const taskInput = document.getElementById('task-input')
  const taskList = document.getElementById('task-list')

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim() // Get and trim input value

    // Check if task input is empty
    if (taskText === '') {
      alert('Please enter a task.')
      return
    }

    // Create a new list item
    const listItem = document.createElement('li')
    listItem.textContent = taskText

    // Create a remove button for the task
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.className = 'remove-btn'

    // Set up remove button to delete the task when clicked
    removeButton.onclick = function () {
      taskList.removeChild(listItem)
    }

    // Append remove button to the list item
    listItem.appendChild(removeButton)

    // Append the list item to the task list
    taskList.appendChild(listItem)

    // Clear the input field
    taskInput.value = ''
  }

  // Event listener for Add Task button
  addButton.addEventListener('click', addTask)

  // Allow pressing Enter key to add task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask()
    }
  })
})
