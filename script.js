document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn')
  const taskInput = document.getElementById('task-input')
  const taskList = document.getElementById('task-list')

  // Updated addTask() function
  function addTask() {
    const taskText = taskInput.value.trim()

    if (taskText !== '') {
      // Create new list item
      const li = document.createElement('li')
      li.textContent = taskText

      // Create remove button
      const removeBtn = document.createElement('button')
      removeBtn.textContent = 'Remove'
      removeBtn.className = 'remove-btn'

      // Assign remove functionality
      removeBtn.onclick = function () {
        taskList.removeChild(li)
      }

      // Append button to li and li to list
      li.appendChild(removeBtn)
      taskList.appendChild(li)

      // Clear input field
      taskInput.value = ''
    }
  }

  // Add event listeners
  addButton.addEventListener('click', addTask)

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask()
    }
  })
})
