function updateProgressCircle(cgpa) {
    const circle = document.getElementById('cgpaCircle');
    const text = document.getElementById('cgpaText');
  
    const percent = (cgpa / 4) * 100;
    circle.style.background = `conic-gradient(#a28ae4 ${percent}%, #e0e0e0 ${percent}%)`;
    text.textContent = cgpa.toFixed(2);
  }
  
  function getSuggestions(cgpa) {
    if (cgpa >= 3.5) return "Excellent! Keep it up.";
    if (cgpa >= 3.0) return "Good job. Try to aim higher.";
    if (cgpa >= 2.5) return "Fair. Focus more on weak subjects.";
    return "You need to study harder. Consider forming a study group.";
  }
  
  function addCgpa() {
    const input = document.getElementById('semesterCgpa');
    let value = parseFloat(input.value);
    if (isNaN(value) || value < 0 || value > 4) {
      alert("Please enter a valid CGPA between 0.00 and 4.00.");
      return;
    }
  
    let cgpas = JSON.parse(localStorage.getItem('cgpaData')) || [];
    cgpas.push(value);
    localStorage.setItem('cgpaData', JSON.stringify(cgpas));
  
    const avg = cgpas.reduce((a, b) => a + b, 0) / cgpas.length;
    updateProgressCircle(avg);
  
    document.getElementById('cgpaSuggestions').innerHTML = `
      <h4>Suggestions:</h4>
      <p>${getSuggestions(avg)}</p>
      <h4>Study Tips:</h4>
      <ul>
        <li>Revise topics regularly.</li>
        <li>Practice previous questions.</li>
        <li>Study in a distraction-free environment.</li>
        <li>Join or form a study group.</li>
      </ul>
    `;
  
    input.value = '';
  }
  
  // On load
  window.onload = () => {
    const cgpas = JSON.parse(localStorage.getItem('cgpaData')) || [];
    if (cgpas.length > 0) {
      const avg = cgpas.reduce((a, b) => a + b, 0) / cgpas.length;
      updateProgressCircle(avg);
      document.getElementById('cgpaSuggestions').innerHTML = `
  <div class="suggestion-box">
    <h4>Suggestions</h4>
    <p>${getSuggestions(avg)}</p>
  </div>
  <div class="suggestion-box">
    <h4>Study Tips</h4>
    <ul>
      <li>Revise topics regularly.</li>
      <li>Practice previous questions.</li>
      <li>Study in a distraction-free environment.</li>
      <li>Join or form a study group.</li>
    </ul>
  </div>
`;
    }
  };
  