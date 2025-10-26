document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements using exact required names
  const addButton = document.getElementById('add-task-btn')
  const taskInput = document.getElementById('task-input')
  const taskList = document.getElementById('task-list')

  // In-memory tasks array (keeps current state)
  let tasks = []

  /**
   * Save tasks array to localStorage under key 'tasks'
   */
  function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  /**
   * addTask
   * If taskText is provided (string), it will use that text.
   * If taskText is omitted or null, it will read from taskInput.
   * The 'save' parameter (default true) controls whether to update localStorage.
   */
  function addTask(taskText, save = true) {
    // Determine the task text source
    const rawText = typeof taskText === 'string' ? taskText : taskInput.value
    const taskTextTrimmed = rawText.trim()

    // If input is empty, alert and do nothing
    if (taskTextTrimmed === '') {
      // Only alert if taskText was from input (i.e., taskText param not provided)
      if (typeof taskText !== 'string') {
        alert('Please enter a task.')
      }
      return
    }

    // Create a new list item and set its text
    const li = document.createElement('li')
    li.textContent = taskTextTrimmed

    // Create a remove button, set text and class
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.className = 'remove-btn'

    // Assign onclick event to remove the li and update localStorage/tasks array
    removeButton.onclick = function () {
      // Find index in tasks array by text match (first occurrence)
      const index = tasks.indexOf(taskTextTrimmed)

      if (index > -1) {
        // Remove from array and update localStorage
        tasks.splice(index, 1)
        saveTasksToLocalStorage()
      }

      // Remove from DOM
      if (li.parentNode === taskList) {
        taskList.removeChild(li)
      }
    }

    // Append the remove button to li and li to the task list
    li.appendChild(removeButton)
    taskList.appendChild(li)

    // If we should persist, push to tasks array and save to localStorage
    if (save) {
      tasks.push(taskTextTrimmed)
      saveTasksToLocalStorage()
    }

    // Clear input field if this invocation used the input
    if (typeof taskText !== 'string') {
      taskInput.value = ''
    }
  }

  /**
   * loadTasks
   * Loads tasks from localStorage and populates the DOM.
   */
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')

    // Ensure tasks array reflects stored tasks
    tasks = Array.isArray(storedTasks) ? storedTasks.slice() : []

    // Clear any existing DOM children
    taskList.innerHTML = ''

    // Create DOM items for each stored task without saving again
    tasks.forEach((taskText) => {
      addTask(taskText, false) // pass save=false so we don't duplicate in localStorage
    })
  }

  // Attach event listeners as required
  addButton.addEventListener('click', function () {
    addTask() // reads from input and saves
  })

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask()
    }
  })

  // Initialize by loading tasks from localStorage
  loadTasks()
})
