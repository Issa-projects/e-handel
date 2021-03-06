//Start: Fjern feilmelding når brukeren begynner å fylle inputtene
$("input").keypress(function () {
  input_id = $(this).attr("id");
  feedback_id = "#" + input_id + "-" + "feedback";
  $(feedback_id).addClass("d-none");
});
//End: Fjern feilmelding når brukeren begynner å fylle inputtene

//Start: Fjern feilmelding når brukeren input type = radio er checked
$("input[type=radio]").change(function () {
  if (this.checked) {
    input_id = $(this).attr("id");
    feedback_id = "#" + input_id + "-" + "feedback";
    $(feedback_id).addClass("d-none");
  }
});
//End: Fjern feilmelding når brukeren input type = radio er checked

//Start: Sjekk verification-form om koden er 1234
$("#verification-form").submit(function (e) {
  e.preventDefault();
  code = $("#code").val();
  if (Number(code) !== 1234) {
    $("#code-feedback").removeClass("d-none");
  } else {
    $("#code-feedback").addClass("d-none");
    navigate(".welcome-page");
  }
});
//End: Sjekk verification-form om koden er 1234

//Start: Sjekk register-form om tlf og passord er 12345678
$("#register-form").submit(function (e) {
  e.preventDefault();
  phone = $("#phone").val();
  password = $("#password").val();
  if (Number(phone) !== 12345678) {
    $("#phone-feedback").removeClass("d-none");
    phone = false;
  } else {
    phone = true;
    $("#phone-feedback").addClass("d-none");
  }
  if (Number(password) !== 12345678) {
    password = false;
    $("#password-feedback").removeClass("d-none");
  } else {
    password = true;
    $("#password-feedback").addClass("d-none");
  }
  conditions = false;
  if (!$("#conditions").is(":checked")) {
    $("#conditions-feedback").removeClass("d-none");
  } else {
    $("#conditions-feedback").addClass("d-none");
    conditions = true;
  }
  if (password && phone && conditions) {
    navigate(".verification-page");
  }
});
//End: Sjekk register-form om tlf og passord er 12345678

//Start: Sjekk login-form om tlf og passord er 12345678
$("#login-form").submit(function (e) {
  e.preventDefault();
  phone = $("#login-phone").val();
  password = $("#login-password").val();
  if (Number(phone) !== 12345678) {
    $("#login-phone-feedback").removeClass("d-none");
    phone = false;
  } else {
    phone = true;
    $("#login-phone-feedback").addClass("d-none");
  }
  if (Number(password) !== 12345678) {
    password = false;
    $("#login-password-feedback").removeClass("d-none");
  } else {
    password = true;
    $("#login-password-feedback").addClass("d-none");
  }
  if (password && phone) {
    navigate(".home-page");
  }
});
//End: Sjekk login-form om tlf og passord er 12345678

//Start: Sjekk report-form
$("#report-form").submit(function (e) {
  e.preventDefault();
  bikeID = $("#bike").val();
  description = $("#description").val();
  if (Number(bikeID) !== 12345) {
    $("#bike-feedback").removeClass("d-none");
    bikeID = false;
  } else {
    bikeID = true;
    $("#bike-feedback").addClass("d-none");
  }
  if (description.length === 0) {
    description = false;
    $("#description-feedback").removeClass("d-none");
  } else {
    description = true;
    $("#description-feedback").addClass("d-none");
  }
  if (bikeID && description) {
    navigate(".home-page");
  }
});
//End: Sjekk report-form

//Start: Sjekk add-card-form om koden er 1234 4 ganger og at cvv == 123
$("#add-card-form").submit(function (e) {
  e.preventDefault();
  code = $("#add-card-number").val();
  cvv = $("#cvv-number").val();
  if (Number(code) !== 1234123412341234) {
    code = false;
    $("#add-card-number-feedback").removeClass("d-none");
  } else {
    $("#add-card-number-feedback").addClass("d-none");
    code = true;
  }
  if (Number(cvv) !== 123) {
    cvv = false;
    $("#cvv-number-feedback").removeClass("d-none");
  } else {
    $("#cvv-number-feedback").addClass("d-none");
    cvv = true;
  }
  if (code && cvv) {
    navigate(".home-page");
  }
});
//End: Sjekk add-card-form om koden er 1234 4 ganger og at cvv == 123

//Start: Navigate to home page after welcome page
$("#welcome-form").submit(function (e) {
  e.preventDefault();
  navigate(".home-page");
});
//End: Navigate to home page after welcome page

//Start: Navigate to log in page after sign out
$("#profile-form").submit(function (e) {
  e.preventDefault();
  navigate(".login-page");
});
//End: Navigate to log in page after sign out

//Start: Navigate to add card page
$("#addcardform").click(function (e) {
  e.preventDefault();
  navigate(".add-card-page");
});
//End: Navigate to log in page

//Start: Navigate to my reward page
$("#myrewardsform").click(function (e) {
  e.preventDefault();
  navigate(".my-rewards-page");
});
//End: Navigate to my reward page

//Start: Navigate to my history page
$("#myhistoryform").click(function (e) {
  e.preventDefault();
  navigate(".my-history-page");
});
//End: Navigate to my history page

//Start: Navigate to help page
$("#helpform").click(function (e) {
  e.preventDefault();
  navigate(".help-page");
});
//End: Navigate to help page

//Start: Navigate to previous page

//End: Navigate to previous page

function navigate(to) {
  $(".page").removeClass("active");
  $(to).addClass("active");
}

function tab(to) {
  $(".tab-screen").removeClass("active");
  $(to).addClass("active");
}

$(".tabs .tab").click(function () {
  $(".tabs .tab").removeClass("active-tab");
  $(this).addClass("active-tab");
});

/*---- Randomize bicycle icon position  -----*/

function randomPos() {
  let icons = $(".fa-bicycle");

  let map = new Object({ height: 575, width: 575 });

  for (let i = 0; i < icons.length; i++) {
    $(icons[i]).css({
      top: getRandomBetween(10, map.height, "top"),
      right: getRandomBetween(10, map.width, "right"),
    });
  }

  $(icons[0]).css({
    color: "red",
  });
  $(icons[1]).css({
    color: "red",
  });
}

function getRandomBetween(min, max, tag) {
  let value = 1000;
  if (tag === "top") {
    while (value > 490) {
      value = Math.random() * (max - min) + min;
    }
    return value;
  } else {
    while (value > 350) {
      value = Math.random() * (max - min) + min;
    }
    return value;
  }
}

randomPos();

function clickBicycle(that) {
  if ($(that).css("color") === "rgb(255, 0, 0)") {
    navigate(".error");
  } else {
    navigate(".scan-qr");
  }
}

$("#counter-btn").click(function () {
  var $worked = $("#worked");

  function update() {
    var myTime = $worked.html();
    var ss = myTime.split(":");
    var dt = new Date();
    dt.setHours(0);
    dt.setMinutes(ss[0]);
    dt.setSeconds(ss[1]);

    var dt2 = new Date(dt.valueOf() + 1000);
    var temp = dt2.toTimeString().split(" ");
    var ts = temp[0].split(":");

    $worked.html(ts[1] + ":" + ts[2]);
    setTimeout(update, 1000);
  }

  setTimeout(update, 1000);
  var text = $(this).text();
  if (text === "Start") {
    $(this).text("End");
  } else {
    navigate(".summary");
    //        $("#summary-time").text($worked.text());
  }
});
