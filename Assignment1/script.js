document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  var name = document.getElementById("name").value.trim();
  var roll = document.getElementById("roll").value.trim();
  var email = document.getElementById("email").value.trim();
  var maths = document.getElementById("maths").value;
  var science = document.getElementById("science").value;
  var english = document.getElementById("english").value;

  var error = document.getElementById("error");
  error.textContent = "";

  // Validate data
  if (name === "" || roll === "" || email === "" || maths === "" || science === "" || english === "") {
    error.textContent = "All fields are required.";
    return;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email.";
    return;
  }

  maths = Number(maths);
  science = Number(science);
  english = Number(english);

  if (maths < 0 || maths > 100 || science < 0 || science > 100 || english < 0 || english > 100) {
    error.textContent = "Marks must be between 0 and 100.";
    return;
  }

  var students = JSON.parse(localStorage.getItem("students")) || [];
  var exists = students.some(function (s) {
    return s.roll === roll;
  });
  if (exists) {
    error.textContent = "A student with this roll number already exists.";
    return;
  }

  // Calculate total and percentage
  var total = maths + science + english;
  var percentage = (total / 300) * 100;

  // Determine Pass/Fail (pass if every subject is 35 or above)
  var status = (maths >= 35 && science >= 35 && english >= 35) ? "Pass" : "Fail";

  // Create student object
  var student = {
    name: name,
    roll: roll,
    email: email,
    marks: {
      maths: maths,
      science: science,
      english: english
    },
    total: total,
    percentage: percentage.toFixed(2),
    status: status
  };

  // Convert to JSON and store in Local Storage
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  // Display result
  showResults();

  document.getElementById("studentForm").reset();
});

function showResults() {
  var students = JSON.parse(localStorage.getItem("students")) || [];
  var result = document.getElementById("result");

  if (students.length === 0) {
    result.innerHTML = "";
    return;
  }

  var rows = "";
  students.forEach(function (s) {
    rows +=
      "<tr>" +
      "<td>" + s.roll + "</td>" +
      "<td>" + s.name + "</td>" +
      "<td>" + s.email + "</td>" +
      "<td>" + s.marks.maths + "</td>" +
      "<td>" + s.marks.science + "</td>" +
      "<td>" + s.marks.english + "</td>" +
      "<td>" + s.total + "</td>" +
      "<td>" + s.percentage + "%</td>" +
      "<td><span class='" + s.status.toLowerCase() + "'>" + s.status + "</span></td>" +
      "</tr>";
  });

  result.innerHTML =
    "<h2>Results</h2>" +
    "<div class='table-wrap'><table>" +
    "<tr><th>Roll</th><th>Name</th><th>Email</th><th>Maths</th><th>Science</th><th>English</th><th>Total</th><th>Percentage</th><th>Status</th></tr>" +
    rows +
    "</table></div>";
}

showResults();
