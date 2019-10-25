
$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

var q1 = $("#q1").val();

var dragonSpecies;


if (q1 === "3") {
  dragonSpecies = ["Your species is [insert species]"]
  $("[Xresult]").show();
} else {
  dragonSpecies = ["Sorry. Your Species cannot be identified."]
};
console.log("I am alone but adored by a hundred thousand more then I said when you were the last...");






  });
});


// To Do: empty var. Var becomes result and shows result (simply list multiple results) START MOST SPECIFIC AND GO DOWN THE LIST
