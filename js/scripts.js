
$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

var q1 = $("#q1").val();
var q2 = $(".q2").val();
var q3 = $(".q3").val();
var q4 = $(".q4").val();
var q5 = $(".q5").val();

// var questions = [q1, q2, q3, q4, q5];

let dragonSpecies;

// for (i = 0; i < questions; i++) {
if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#black").show();
  $("#forest").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "No") {
  $("#black").show();
  $("#forest").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#black").show();
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#forest").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#black").show();
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#fire").show();

} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#black").show();
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#black").show();
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#black").show();
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#black").show();
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#fire").show();


} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#black").show();
  $("#forest").show();
  $("#eastern").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#black").show();
  $("#cave").show();
  $("#eastern").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#forest").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#cave").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#black").show();
  $("#forest").show();
  $("#eastern").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#forest").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#black").show();
  $("#cave").show();
  $("#eastern").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#cave").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire").show();

} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#black").show();
  $("#forest").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#black").show();
  $("#cave").show();
  $("#western").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#forest").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#cave").show();
  $("#western").show();
  $("#hatchling").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#black").show();
  $("#forest").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#forest").show();
  $("#western").show();
  $("#hatchling").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#black").show();
  $("#cave").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#cave").show();
  $("#western").show();
  $("#hatchling").show();
  $("#fire").show();

} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#forest").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "No") {
  $("#forest").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 ==="3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#blue").show();
  $("#forest").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#blue").show();
  $("#cave").show();
  $("#western").show();
  $("#adolescent").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#blue").show();
  $("#cave").show();
  $("#western").show();
  $("#adolescent").show();
  $("#fire").show();

} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#forest").show();
  $("#eastern").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#blue").show();
  $("#forest").show();
  $("#eastern").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#blue").show();
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#forest").show();
  $("#eastern").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#blue").show();
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#cave").show();
  $("#eastern").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#blue").show();
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#fire").show();


} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#forest").show();
  $("#eastern").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#cave").show();
  $("#western").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#blue").show();
  $("#forest").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#blue").show();
  $("#cave").show();
  $("#western").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#forest").show();
  $("#eastern").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#blue").show();
  $("#forest").show();
  $("#western").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#cave").show();
  $("#eastern").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#blue").show();
  $("#cave").show();
  $("#western").show();
  $("#elder").show();
  $("#fire").show();

} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#forest").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#cave").show();
  $("#western").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#blue").show();
  $("#forest").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#blue").show();
  $("#cave").show();
  $("#western").show();
  $("#hatchling").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#forest").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#blue").show();
  $("#forest").show();
  $("#western").show();
  $("#hatchling").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#cave").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#blue").show();
  $("#cave").show();
  $("#western").show();
  $("#hatchling").show();
  $("#fire").show();

} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#white").show();
  $("#forest").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "No") {
  $("#white").show();
  $("#forest").show();
  $("#western").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#white").show();
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#red").show();
  $("#forest").show();
  $("#western").show();
  $("#adolescent").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#red").show();
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#white").show();
  $("#cave").show();
  $("#western").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#red").show();
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#fire").show();

} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#white").show();
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#white").show();
  $("#cave").show();
  $("#eastern").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#red").show();
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#red").show();
  $("#cave").show();
  $("#eastern").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#white").show();
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#red").show();
  $("#forest").show();
  $("#eastern").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#white").show();
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#red").show();
  $("#cave").show();
  $("#eastern").show();
  $("#adult").show();
  $("#fire").show();


} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#white").show();
  $("#forest").show();
  $("#western").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#white").show();
  $("#cave").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#red").show();
  $("#forest").show();
  $("#western").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#red").show();
  $("#cave").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#white").show();
  $("#forest").show();
  $("#western").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#red").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#white").show();
  $("#cave").show();
  $("#western").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#red").show();
  $("#cave").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire").show();

} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#white").show();
  $("#forest").show();
  $("#western").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#white").show();
  $("#cave").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#red").show();
  $("#forest").show();
  $("#western").show();
  $("#hatchling").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#red").show();
  $("#cave").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#white").show();
  $("#forest").show();
  $("#western").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#red").show();
  $("#forest").show();
  $("#western").show();
  $("#hatchling").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#white").show();
  $("#cave").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#red").show();
  $("#cave").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#fire").show();

} else {
  $("#oops").show();
};

// Dragon quiz: just like last time, one of each category, start simple. Have user combine effects.

// when more results are created, alternate them. Ex: q1="no", fire(show), q1="no", earth(show)

// gradually combine effects into a sequence of results which show


$("#results").append(dragonSpecies);

console.log("I am alone but adored by a hundred thousand more then I said when you were the last...");
// };
  });
});
