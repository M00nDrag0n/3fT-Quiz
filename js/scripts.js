
$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

var q1 = $("#q1").val();
var q2 = $(".q2").val();
var q3 = $(".q3").val();
var q3 = $(".q4").val();

let dragonSpecies;


if (q1 === "3" && q2 === "Yes" && q3 === "Yes") {
  $("#forest").show();
  $("#western").show();
  $("#fire").show();
  $("#hatchling").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No") {
  $("#fire").show();
} else if (q1 < "3") {
  $("#fire").show();
} else if (q1 > "3") {
  $("#forest").show();
} else if (q1 === "3") {
  $("#fire").show();
} else if (q2 === "Yes") {
  $("#hatchling").show();
} else if (q2 === "No") {
  $("#fire").show();
} else if (q3 === "Yes") {
  $("#hatchling").show();
} else if (q3 === "No") {
  $("#western").show();
} else {
  $("#oops").show();
};

// Dragon quiz: just like last time, one of each category, start simple. Have user combine effects.

// if q1="_" || q1="_-_", show "fire"
// if q3 and q4 = 10, show western dragon
// gradually combine effects into a sequence of results which show


$("#results").append(dragonSpecies);

console.log("I am alone but adored by a hundred thousand more then I said when you were the last...");

  });
});


// To Do: empty var. Var becomes result and shows result (simply list multiple results) START MOST SPECIFIC AND GO DOWN THE LIST
