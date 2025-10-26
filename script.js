// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn')
  const taskInput = document.getElementById('task-input')
  const taskList = document.getElementById('task-list')

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim()

    // Check if task input is empty
    if (taskText === '') {
      alert('Please enter a task.')
      return
    }

    // Create a new list item
    const li = document.createElement('li')
    li.textContent = taskText

    // Create a remove button for the task
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.className = 'remove-btn'

    // Add click event to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(li)
    }

    // Append button to list item and item to list
    li.appendChild(removeButton)
    taskList.appendChild(li)

    // Clear the input field
    taskInput.value = ''
  }

  // Add task when button is clicked
  addButton.addEventListener('click', addTask)

  // Add task when Enter key is pressed
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask()
    }
  })
})
