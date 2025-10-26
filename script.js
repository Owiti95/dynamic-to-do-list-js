document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements using the required names
  const addButton = document.getElementById('add-task-btn')
  const taskInput = document.getElementById('task-input')
  const taskList = document.getElementById('task-list')

  // Create the addTask function as required
  function addTask() {
    const taskText = taskInput.value.trim()

    // If input is empty, alert and exit
    if (taskText === '') {
      alert('Please enter a task.')
      return
    }

    // Create a new li and set its text content
    const li = document.createElement('li')
    li.textContent = taskText

    // Create remove button, set text and class
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.className = 'remove-btn'

    // Assign onclick event to remove this li from the taskList
    removeButton.onclick = function () {
      taskList.removeChild(li)
    }

    // Append removeButton to li, then append li to the taskList
    li.appendChild(removeButton)
    taskList.appendChild(li)

    // Clear the input field
    taskInput.value = ''
  }

  // Attach event listener to addButton for click
  addButton.addEventListener('click', addTask)

  // Attach event listener to taskInput for 'keypress' to allow Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask()
    }
  })
})
