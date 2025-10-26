// Define global variables
const addButton = document.getElementById('add-task-btn')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

// Define the addTask function globally
function addTask() {
  const taskText = taskInput.value.trim()

  // Check if input is empty
  if (taskText !== '') {
    // Create new list item
    const li = document.createElement('li')
    li.textContent = taskText

    // Create remove button
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.className = 'remove-btn'

    // Set onclick event for remove button
    removeButton.onclick = function () {
      taskList.removeChild(li)
    }

    // Append remove button to li
    li.appendChild(removeButton)

    // Append li to task list
    taskList.appendChild(li)

    // Clear the input field
    taskInput.value = ''
  }
}

// Attach event listeners directly (no DOMContentLoaded wrapper)
addButton.addEventListener('click', addTask)

taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask()
  }
})
