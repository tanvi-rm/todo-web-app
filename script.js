const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

if (form) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function renderTasks() {
    list.innerHTML = '';
    tasks.forEach((task, i) => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${task}
        <button onclick="deleteTask(${i})">🗑️</button>
      `;
      list.appendChild(li);
    });
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value.trim()) {
      tasks.push(input.value.trim());
      localStorage.setItem('tasks', JSON.stringify(tasks));
      input.value = '';
      renderTasks();
    }
  });

  renderTasks();
}
