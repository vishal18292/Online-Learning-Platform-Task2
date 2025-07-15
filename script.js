// === Mobile Menu Toggle ===
const menuToggleOpen = document.getElementById("menu-btn");
const menuToggleClose = document.getElementById("menu-close");
const navList = document.querySelector(".navigation ul");

menuToggleOpen?.addEventListener("click", () => {
  navList.classList.add("active");
  menuToggleOpen.style.display = "none";
  menuToggleClose.style.display = "inline";
});

menuToggleClose?.addEventListener("click", () => {
  navList.classList.remove("active");
  menuToggleClose.style.display = "none";
  menuToggleOpen.style.display = "inline";
});

// === Quiz Evaluation (Multi-question logic) ===
document.getElementById("quiz-form")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const results = document.getElementById("quiz-result");
  let score = 0;
  let total = 0;

  // Define correct answers here
  const correctAnswers = {
    q1: "b",
    q2: "c",
    q3: "c"
  };

  for (const [question, correct] of Object.entries(correctAnswers)) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    total++;
    if (selected?.value === correct) {
      score++;
    }
  }

  if (score === total) {
    results.textContent = `✅ Perfect score! ${score}/${total} – You're a star!`;
    results.style.color = "green";
  } else if (score > 0) {
    results.textContent = `✅ You scored ${score}/${total}. Review and try again!`;
    results.style.color = "#2c74b3";
  } else {
    results.textContent = `❌ Oops! No correct answers. Give it another shot.`;
    results.style.color = "red";
  }
});

// === Simulated Progress Bar Update ===
function setCourseProgress(courseId, value) {
  const progressBar = document.querySelector(`#${courseId}`);
  if (progressBar) {
    progressBar.value = value;
  }
}

// Example: Simulate some progress levels
setCourseProgress("progress-web", 75);
setCourseProgress("progress-data", 50);
setCourseProgress("progress-app", 30);

// === Contact Form Submission Feedback ===
document.querySelector("#contact form")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();

  if (name && email) {
    alert(`📬 Thanks, ${name}! We'll respond to ${email} shortly.`);
    this.reset();
  } else {
    alert("⚠️ Please fill out your name and email before submitting.");
  }
});
