// Example task data (replace with real data or load from storage)
const tasksDone = [
    "Learned JavaScript Basics",
    "Solved 5 Coding Problems",
    "Watched 3 Tutorials",
    "Revised Math Notes",
    "Completed Assignment"
  ];
  
  const taskHistoryDiv = document.getElementById('taskHistory');
  tasksDone.forEach(task => {
    const item = document.createElement('div');
    item.className = 'task-item done';
    item.innerHTML = `<span class="task-text">${task}</span>`;
    taskHistoryDiv.appendChild(item);
  });
  
  // Update progress circle
  const progressPercent = Math.round((tasksDone.length / 10) * 100); // assume 10 as total for example
  document.querySelector('#studyProgress').style.background = 
    `conic-gradient(#a28ae4 ${progressPercent}%, #e0e0e0 ${progressPercent}%)`;
  document.querySelector('#studyProgress span').innerText = `${progressPercent}%`;
  
  // Show message based on progress
  const message = document.getElementById('progressMessage').querySelector('p');
  if (progressPercent >= 80) {
    message.innerText = "Excellent work! Keep the momentum going!";
  } else if (progressPercent >= 50) {
    message.innerText = "Good job! Try to do a little more.";
  } else {
    message.innerText = "You need to focus more on your tasks!";
  }
  