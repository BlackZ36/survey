function validate1(val) {
  v1 = document.getElementById("name");
  v2 = document.getElementById("email");
  v3 = document.getElementById("phone");
  v4 = document.getElementById("lop");
  v5 = document.getElementById("content");

  flag1 = true;
  flag2 = true;
  flag3 = true;
  flag4 = true;
  flag5 = true;

  if (val >= 1 || val == 0) {
    if (v1.value == "") {
      v1.style.borderColor = "red";
      flag1 = false;
    } else {
      v1.style.borderColor = "green";
      flag1 = true;
    }
  }

  if (val >= 2 || val == 0) {
    if (v2.value == "") {
      v2.style.borderColor = "red";
      flag2 = false;
    } else {
      v2.style.borderColor = "green";
      flag2 = true;
    }
  }

  if (val >= 3 || val == 0) {
    if (v3.value == "") {
      v3.style.borderColor = "red";
      flag3 = false;
    } else {
      v3.style.borderColor = "green";
      flag3 = true;
    }
  }

  if (val >= 4 || val == 0) {
    if (v4.value == "") {
      v4.style.borderColor = "red";
      flag4 = false;
    } else {
      v4.style.borderColor = "green";
      flag4 = true;
    }
  }

  if (val >= 5 || val == 0) {
    if (v5.value == "") {
      v5.style.borderColor = "red";
      flag5 = false;
    } else {
      v5.style.borderColor = "green";
      flag5 = true;
    }
  }
  flag = flag1 && flag2 && flag3 && flag4 && flag5;
  return flag;
}

function validate2(val) {
  v3 = document.getElementById("title");
  v4 = document.getElementById("desc");
  flag3 = true;
  flag4 = true;
  if (val >= 3 || val == 0) {
    if (v3.value == "") {
      v3.style.borderColor = "red";
      flag3 = false;
    } else {
      v3.style.borderColor = "green";
      flag3 = true;
    }
  }
  if (val >= 4 || val == 0) {
    if (v4.value == "") {
      v4.style.borderColor = "red";
      flag4 = false;
    } else {
      v4.style.borderColor = "green";
      flag4 = true;
    }
  }
  flag = flag3 && flag4;
  return flag;
}

$(".next").click(function () {
  str1 = "next1";
  str2 = "next2";
  str3 = "next3";

  if (!str2.localeCompare($(this).attr("id")) && validate1(0) == true) {
    
    var form = document.querySelector("form");
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.onload = function () {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          overlay.style.display = "block";
        } else {
          alert("Failed to submit form.");
        }
      } else {
        alert("Server error.");
      }
    };
    xhr.send(new URLSearchParams(formData));

    
    val2 = true;
  } else {
    val2 = false;
  }
  if (!str3.localeCompare($(this).attr("id")) && validate2(0) == true) {
    val3 = true;
  } else {
    val3 = false;
  }
  if (
    !str1.localeCompare($(this).attr("id")) ||
    (!str2.localeCompare($(this).attr("id")) && val2 == true) ||
    (!str3.localeCompare($(this).attr("id")) && val3 == true)
  ) {
    current_fs = $(this).parent().parent();
    next_fs = $(this).parent().parent().next();
    $(current_fs).removeClass("show");
    $(next_fs).addClass("show");
    current_fs.animate(
      {},
      {
        step: function () {
          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({
            display: "block",
          });
        },
      }
    );
    setProgressBar(++current);
    var c = document.getElementById("cnt").textContent;
    document.getElementById("cnt").textContent = Number(c) + 25;

    
  }
});

$(".prev").click(function () {
  current_fs = $(this).parent().parent();
  previous_fs = $(this).parent().parent().prev();
  $(current_fs).removeClass("show");
  $(previous_fs).addClass("show");
  current_fs.animate(
    {},
    {
      step: function () {
        current_fs.css({
          display: "none",
          position: "relative",
        });
        previous_fs.css({
          display: "block",
        });
      },
    }
  );
  setProgressBar(--current);
  var c = document.getElementById("cnt").textContent;
  document.getElementById("cnt").textContent = Number(c) - 25;
});

function setProgressBar(curStep) {
  var percent = parseFloat(100 / steps) * curStep;
  percent = percent.toFixed();
  $(".progress-bar").css("width", percent + "%");
}
$(".radio-group .radio").click(function () {
  // Xác định các button và disable button next khi trang được tải
  var nextButton = $(".next");
  nextButton.addClass("disabled");

  $(".selected .fa").removeClass("fa-check");
  $(".selected .fa").addClass("fa-circle");
  $(".radio").removeClass("selected");
  $(this).addClass("selected");
  $(".selected .fa").removeClass("fa-circle");
  $(".selected .fa").addClass("fa-check");

  window.open("https://www.facebook.com/profile.php?id=100066483925385", "_blank");
  // Enable nút next
  nextButton.removeClass("disabled");
  nextButton.prop("disabled", false);


});
