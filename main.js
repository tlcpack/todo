let todoItems = []

function addTodo (text) {
  const todo = {
    text,
    checked: false,
    id: Date.now()
  }

  todoItems.push(todo)
  const list = document.querySelector('.js-todo-list')
  list.insertAdjacentHTML(
    'beforeend',
    `
    <li class="todo-item" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span>${todo.text}</span>
      <button class="delete-todo js-delete-todo">
        <svg><use href="#delete-icon"></use></svg>
      </button>
    </li>
  `
  )
}

const form = document.querySelector('.js-form')

document.addEventListener('DOMContentLoaded', function () {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('.js-todo-input')
    const text = input.nodeValue.trim()
    if (text !== '') {
      addTodo(text)
      input.value = ''
      input.focus()
    }
  })
})
