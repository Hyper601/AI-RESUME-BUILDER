// Page Navigation
function nextPage(pageNumber) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById("page" + pageNumber).classList.remove("hidden");
}

// Simple AI Name Checker
document.getElementById("name").addEventListener("input", function() {
  let val = this.value;
  let aiBox = document.getElementById("name-ai");

  if (!val) {
    aiBox.textContent = "⚠ AI Suggestion: Please enter your name.";
  } else if (/\d/.test(val)) {
    aiBox.textContent = "⚠ AI Suggestion: Name should not contain numbers.";
  } else if (val.length < 3) {
    aiBox.textContent = "⚠ AI Suggestion: Name too short.";
  } else {
    aiBox.textContent = "✅ Looks good!";
  }
});

// Generate Resume
function generateResume() {
  let name = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let location = document.getElementById("location").value;

  let edu10 = document.getElementById("class10").value;
  let edu12 = document.getElementById("class12").value;
  let college = document.getElementById("college").value;
  let degree = document.getElementById("degree").value;
  let department = document.getElementById("department").value;

  let techskills = document.getElementById("techskills").value;
  let softskills = document.getElementById("softskills").value;
  let experience = document.getElementById("experience").value;

  let achievements = document.getElementById("achievements").value;
  let languages = document.getElementById("languages").value;
  let likes = document.getElementById("likes").value;
  let dislikes = document.getElementById("dislikes").value;

  let output = `
  <H1 CLASS="OUT">AI RESUME BUILER<H1>
  <H2 class="cc">Personal Information<H2>

    <h3>Name : ${name}</h2>
    <p><b>Date of Birth:</b> ${dob}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Address:</b> ${address}, ${location}</p>
    <br></br>
    <h2 class="cc">Education</h2>
    <br></br>
    <p><b>10th:</b> ${edu10}</p>
    <p><b>12th:</b> ${edu12}</p>
    <p><b>College:</b> ${college} <P>
    <P><B>Degree:</b> ${degree} <P>
    <P><b>Dept:</b> ${department}</p>
    <br></br>
    <h2 class="cc">Skills & Experience</h2>
    <br></br>
    <p><b>Technology Skills:</b> ${techskills}</p>
    <p><b>Soft Skills:</b> ${softskills}</p>
    <p><b>Experience:</b> ${experience}</p>
    <br></br>
    <h2 class="cc">Achievements & More</h2>
    <br></br>
    <p><b>Achievements:</b> ${achievements}</p>
    <p><b>Languages:</b> ${languages}</p>
    <p><b>Likes:</b> ${likes}</p>
    <p><b>Dislikes:</b> ${dislikes}</p>

    <button onclick="downloadResume()">Download Resume</button>
  `;

  document.getElementById("form-container").classList.add("hidden");
  let resumeDiv = document.getElementById("resume-output");
  resumeDiv.classList.remove("hidden");
  resumeDiv.innerHTML = output;
}


// Download Resume
function downloadResume() {
  let content = document.getElementById("resume-output").innerText;
  let blob = new Blob([content], { type: "text/plain" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "resume.txt";
  link.click();
}