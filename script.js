const taskList = document.querySelector('.js-tasks-list')
const input = document.querySelector('.js-input')
const form = document.querySelector('.js-form')

const tasks = localStorage.getItem('tasks')
let arrayTasks = tasks.split(',')


function addTask (taskName) {
  taskList.innerHTML += `<li>${taskName}</li>`
}

function renderList () {
  arrayTasks.forEach(function (task) {
    addTask(task)
  })
}

renderList()

form.addEventListener('submit', function (e) {
  e.preventDefault()
  if (input.value.length > 0) {
    arrayTasks.join()
    arrayTasks = `${arrayTasks},${input.value}`
    localStorage.setItem('tasks', arrayTasks)
    addTask(input.value)
    input.value = ''
    input.focus()
  }
  return false
})
