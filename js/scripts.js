
$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

var q1 = $("#q1").val();
var q2 = $(".q2").val();
var q3 = $(".q3").val();
var q4 = $(".q4").val();
var q5 = $(".q5").val();

let dragonSpecies;


if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#cave").show();
  $("#western").show();
  $("#hatchling").show();
  $("#red").show();
  $("#fire").show();
  $("#fire2").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No") {
  $("#fire").show();
} else if (q1 < "3") {
  $("#cave").show();
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
  $("#eastern").show();
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
