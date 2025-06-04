function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("formScreen").classList.remove("hidden");
  } else {
    alert("Both fields needed, Diamond 💎.");
  }
}

function submitGrievance() {
  const title = document.getElementById("title").value;
  const message = document.getElementById("message").value;
  const mood = document.getElementById("mood").value;
  const severity = document.getElementById("severity").value;

  if (message) {
    const logs = JSON.parse(localStorage.getItem('moodLogs')) || [];
    logs.push({
      title,
      message,
      mood,
      severity,
      time: new Date().toLocaleString()
    });
    localStorage.setItem('moodLogs', JSON.stringify(logs));

    document.getElementById("formScreen").classList.add("hidden");
    document.getElementById("thankYouScreen").classList.remove("hidden");
  } else {
    alert("Your words matter. Drop something in.");
  }
}

function restart() {
  document.getElementById("thankYouScreen").classList.add("hidden");
  document.getElementById("formScreen").classList.remove("hidden");
  document.getElementById("title").value = '';
  document.getElementById("message").value = '';
}
