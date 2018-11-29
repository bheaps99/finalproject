window.onload = function() {
  var f = document.forms["contact"];

  f.addEventListener("submit", function() {
    alert("Thank you, your data has been submitted.");
  });

  var radio_current = document.getElementById("current");
  var radio_prospective = document.getElementById("prospective");
  var studentNumber = document.getElementById("student-number");

  if (radio_current.value === "current") {
    studentNumber.style.display = "none";
  } else {
    // studentNumber.style.display = "none";
  }
};
