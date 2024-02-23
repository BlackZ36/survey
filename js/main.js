document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  var submitButton = document.getElementById("submit-btn");
  var overlay = document.getElementsByClassName("overlay")[0];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    overlay.style.display = "block";

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.onload = function () {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          alert("successful.");
        } else {
          alert("Failed to submit form.");
        }
      } else {
        alert("Server error.");
      }
    };
    xhr.send(new URLSearchParams(formData));
  });
});
