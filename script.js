// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements using the exact required names
  const addButton = document.getElementById('add-task-btn')
  const taskInput = document.getElementById('task-input')
  const taskList = document.getElementById('task-list')

  // Define the addTask function
  function addTask() {
    // Retrieve and trim the input value
    const taskText = taskInput.value.trim()

    // If the input is empty, alert the user
    if (taskText === '') {
      alert('Please enter a task.')
      return
    }

    // Create a new list item and set its text
    const listItem = document.createElement('li')
    listItem.textContent = taskText

    // Create a remove button and set properties
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.className = 'remove-btn'

    // When remove button is clicked, remove this list item from taskList
    removeButton.onclick = function () {
      taskList.removeChild(listItem)
    }

    // Append the remove button to the list item and the list item to the list
    listItem.appendChild(removeButton)
    taskList.appendChild(listItem)

    // Clear the input
    taskInput.value = ''
  }

  // Attach event listeners
  addButton.addEventListener('click', addTask)

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask()
    }
  })

  // (Do NOT auto-invoke addTask here — tests expect only listeners to be set up on load)
})
