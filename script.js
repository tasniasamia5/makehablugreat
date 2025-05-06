window.onload = function () {
  function updateLocalStorage() {
    const currentTasks = [];
    document.querySelectorAll('.task-item .task-text').forEach(taskEl => {
      currentTasks.push(taskEl.textContent.trim());
    });
    localStorage.setItem('tasks', JSON.stringify(currentTasks));
  }
  
  const taskList = document.querySelectorAll('.task-item');
  const addBtn = document.getElementById('addTaskBtn');
  const todayPanel = addBtn.closest('section').querySelector('div');

  // Function to enhance a task
  function enhanceTask(taskEl) {
    // Avoid double-enhancement
    if (!taskEl.querySelector('.checkbox')) {
      const checkbox = document.createElement('span');
      checkbox.className = 'checkbox';

      const taskText = document.createElement('span');
      taskText.className = 'task-text';
      taskText.textContent = taskEl.textContent.trim();

      const editBtn = document.createElement('button');
      editBtn.className = 'edit-btn';
      editBtn.innerHTML = '<i class="fas fa-pen"></i>';
  
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  
      // Clear old content
      taskEl.innerHTML = '';
      taskEl.appendChild(checkbox);
      taskEl.appendChild(taskText);
      taskEl.appendChild(editBtn);
      taskEl.appendChild(deleteBtn);

      // Checkbox to toggle done
      checkbox.addEventListener('click', () => {
        taskEl.classList.toggle('done');
      });

      // Edit task text
      editBtn.addEventListener('click', () => {
        const newText = prompt('Edit your task:', taskText.textContent);
        if (newText !== null && newText.trim() !== '') {
          taskText.textContent = newText.trim();
          updateLocalStorage();
        }
      });

      // Delete task
      deleteBtn.addEventListener('click', () => {
        taskEl.remove();
        updateLocalStorage();
      });
    }
  }

  // Enhance existing tasks
  taskList.forEach(enhanceTask);
  updateLocalStorage();

  // Add new task
  addBtn.addEventListener('click', () => {
    const taskTitle = prompt('Enter task title:', '');
  
    if (taskTitle && taskTitle.trim() !== '') {
      const newTask = document.createElement('div');
      newTask.className = 'task-item';
  
      // Create checkbox
      const checkbox = document.createElement('span');
      checkbox.className = 'checkbox';
  
      // Create task text
      const taskText = document.createElement('span');
      taskText.className = 'task-text';
      taskText.textContent = taskTitle.trim();
  
      // Add event listeners
      checkbox.addEventListener('click', () => {
        newTask.classList.toggle('done');
      });
  
      editBtn.addEventListener('click', () => {
        const newText = prompt('Edit task:', taskText.textContent);
        if (newText && newText.trim() !== '') {
          taskText.textContent = newText.trim();
        }
      });
  
      deleteBtn.addEventListener('click', () => {
        newTask.remove();
      });
  
      // Build and add to DOM
      newTask.appendChild(checkbox);
      newTask.appendChild(taskText);
      newTask.appendChild(editBtn);
      newTask.appendChild(deleteBtn);
  
      todayPanel.insertBefore(newTask, addBtn);
      updateLocalStorage();
    } else {
      alert('Task title cannot be empty.');
    }
  });
};
document.getElementById('studyGroupLink').addEventListener('click', () => {
  window.location.href = 'study-group.html';
});

