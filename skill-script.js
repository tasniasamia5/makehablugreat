document.addEventListener("DOMContentLoaded", () => {
    const skillInput = document.getElementById("skillInput");
    const addSkillBtn = document.getElementById("addSkillBtn");
    const skillList = document.getElementById("skillList");
    const progressBar = document.getElementById("progressFill");
    const jobMessage = document.getElementById("jobMessage");
  
    const validSkills = [
      "html", "css", "javascript", "python", "java", "c++", "c#", "php", "sql",
      "react", "node", "express", "mongodb", "git", "github", "docker",
      "aws", "linux", "networking", "machine learning", "data analysis",
      "flutter", "kotlin", "swift", "photoshop", "illustrator", "excel", "web developer"
    ];
  
    let learnedSkills = JSON.parse(localStorage.getItem("skills")) || [];
  
    function updateUI() {
      skillList.innerHTML = "";
      learnedSkills.forEach((skill, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = skill;

        const delBtn = document.createElement("button");
        delBtn.textContent = "x";
        delBtn.className = "delete-btn";
        delBtn.onclick = () => {
          learnedSkills.splice(index, 1);
          saveAndUpdate();
        };
        li.appendChild(span);
        li.appendChild(delBtn);
        skillList.appendChild(li);
      });
  
      const percent = Math.min((learnedSkills.length / 10) * 100, 100);
      progressBar.style.width = percent + "%";
      document.getElementById("progressText").textContent = Math.floor(percent) + "%";

  
      if (percent >= 100) {
        jobMessage.textContent = "Great! You’ve learned enough to get a job.";
      } else {
        jobMessage.textContent = "";
      }
    }
  
    function saveAndUpdate() {
      localStorage.setItem("skills", JSON.stringify(learnedSkills));
      updateUI();
    }
  
    addSkillBtn.addEventListener("click", () => {
      const newSkill = skillInput.value.trim().toLowerCase();
      if (
        newSkill &&
        validSkills.some(skill => newSkill.includes(skill)) &&
        !learnedSkills.includes(newSkill)
      ) {
        learnedSkills.push(newSkill);
        skillInput.value = "";
        saveAndUpdate();
      } else {
        alert("Please enter a valid skill from the tech field.");
      }
    });
  
    updateUI();
  });
  