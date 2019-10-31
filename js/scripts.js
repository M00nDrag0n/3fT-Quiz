
$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

var q1 = $("#q1").val();
var q2 = $("#q2").val();
var q3 = $("#q3").val();
var q4 = $("#q4").val();
var q5 = $("#q5").val();

var questions = [q1, q2, q3, q4, q5];

let dragonSpecies;

// for (i = 0; i < questions; i++) {
if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  dragonSpecies = "Eastern, Purple, Electric Forest Dragon of Transformation and Time";
  $("#time").show();
  $("#eastern").show();
  $("#trans").show();
  $("#adolescent").show();
  $("#purple").show();
  $("#forest").show();
  $("#electricity").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "No") {
  $("#electricity2").show();
  $("#black").show();
  $("#forest").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#ice").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#fire2").show();
  $("#purple").show();
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#air").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#green").show();
  $("#trans").show();
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#green").show();
  $("#fire2").show();
  $("#time").show();
  $("#radiation").show();
  $("#space").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#ice2").show();
  $("#black").show();
  $("#jungle").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#water").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#yellow").show();
  $("#ice2").show();
  $("#radiation").show();
  $("#space").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth2").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "0-3" && q5 === "No") {
  $("#green").show();
  $("#electricity2").show();
  $("#cave").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#metal").show();

} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#time").show();
  $("#purple").show();
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#electricity").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#ice2").show();
  $("#black").show();
  $("#jungle").show();
  $("#western").show();
  $("#adult").show();
  $("#water").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#yellow").show();
  $("#electricity2").show();
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#metal").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#green").show();
  $("#fire2").show();
  $("#lr-t").show();
  $("#western").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#electricity2").show();
  $("#black").show();
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#ice").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#green").show();
  $("#trans").show();
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#fire2").show();
  $("#purple").show();
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#air").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#yellow").show();
  $("#ice2").show();
  $("#seafloor").show();
  $("#western").show();
  $("#adult").show();
  $("#earth2").show();


} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#trans").show();
  $("#purple").show();
  $("#forest").show();
  $("#eastern").show();
  $("#elder").show();
  $("#electricity").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#photosynth").show();
  $("#regen").show();
  $("#black").show();
  $("#jungle").show();
  $("#eastern").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#yellow").show();
  $("#electricity2").show();
  $("#cave").show();
  $("#eastern").show();
  $("#elder").show();
  $("#metal").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#green").show();
  $("#fire2").show();
  $("#lr-t").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#electricity2").show();
  $("#black").show();
  $("#forest").show();
  $("#eastern").show();
  $("#elder").show();
  $("#ice").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#green").show();
  $("#cave").show();
  $("#eastern").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#electricity2").show();
  $("#weather").show();
  $("#purple").show();
  $("#cave").show();
  $("#eastern").show();
  $("#elder").show();
  $("#air").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#yellow").show();
  $("#ice2").show();
  $("#seafloor").show();
  $("#eastern").show();
  $("#elder").show();
  $("#earth2").show();

} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#trans").show();
  $("#purple").show();
  $("#house").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#electricity").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#ice2").show();
  $("#black").show();
  $("#jungle").show();
  $("#western").show();
  $("#hatchling").show();
  $("#water").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#yellow").show();
  $("#electricity2").show();
  $("#cave").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#metal").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#green").show();
  $("#fire2").show();
  $("#radiation").show();
  $("#space").show();
  $("#western").show();
  $("#hatchling").show();
  $("#fire").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#electricity2").show();
  $("#black").show();
  $("#forest").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#ice").show();
} else if (q1 < "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#green").show();
  $("#trans").show();
  $("#house").show();
  $("#western").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 < "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#fire2").show();
  $("#purple").show();
  $("#cave").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#air").show();
} else if (q1 < "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#yellow").show();
  $("#ice2").show();
  $("#radiation").show();
  $("#space").show();
  $("#western").show();
  $("#hatchling").show();
  $("#earth2").show();

} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#grey").show();
  $("#trans").show();
  $("#river").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#electricity").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "No") {
  $("#grey").show();
  $("#electricity2").show();
  $("#glacier").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#ice").show();
} else if (q1 ==="3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#orange").show();
  $("#fire2").show();
  $("#corrosion").show();
  $("#necro").show();
  $("#graveyard").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#trans").show();
  $("#blue").show();
  $("#forest").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#fire2").show();
  $("#blue").show();
  $("#forest").show();
  $("#western").show();
  $("#adolescent").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#grey").show();
  $("#ice2").show();
  $("#time").show();
  $("#necro").show();
  $("#graveyard").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#water").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#ice2").show();
  $("#brown").show();
  $("#seafloor").show();
  $("#western").show();
  $("#adolescent").show();
  $("#earth2").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "0-3" && q5 === "No") {
  $("#electricity2").show();
  $("#brown").show();
  $("#forest").show();
  $("#western").show();
  $("#adolescent").show();
  $("#metal").show();

} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#black").show();
  $("#corrosion").show();
  $("#river").show();
  $("#eastern").show();
  $("#adult").show();
  $("#electricity").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#grey").show();
  $("#ice2").show();
  $("#jungle").show();
  $("#western").show();
  $("#adult").show();
  $("#water").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#adult").show();
  $("#electricity2").show();
  $("#brown").show();
  $("#forest").show();
  $("#eastern").show();
  $("#metal").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#fire2").show();
  $("#trans").show();
  $("#blue").show();
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#grey").show();
  $("#electricity2").show();
  $("#glacier").show();
  $("#eastern").show();
  $("#adult").show();
  $("#ice").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#trans").show();
  $("#blue").show();
  $("#forest").show();
  $("#western").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#orange").show();
  $("#fire2").show();
  $("#electricity2").show();
  $("#weather").show();
  $("#cave").show();
  $("#western").show();
  $("#adult").show();
  $("#air").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#ice2").show();
  $("#brown").show();
  $("#seafloor").show();
  $("#western").show();
  $("#adult").show();
  $("#earth2").show();


} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#grey").show();
  $("#trans").show();
  $("#river").show();
  $("#eastern").show();
  $("#elder").show();
  $("#electricity").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#grey").show();
  $("#ice2").show();
  $("#jungle").show();
  $("#western").show();
  $("#elder").show();
  $("#water").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#electricity2").show();
  $("#brown").show();
  $("#forest").show();
  $("#eastern").show();
  $("#elder").show();
  $("#metal").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#fire2").show();
  $("#blue").show();
  $("#forest").show();
  $("#western").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#grey").show();
  $("#electricity2").show();
  $("#glacier").show();
  $("#eastern").show();
  $("#elder").show();
  $("#ice").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#trans").show();
  $("#blue").show();
  $("#forest").show();
  $("#western").show();
  $("#elder").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#orange").show();
  $("#cave").show();
  $("#weather").show();
  $("#electricity2").show();
  $("#eastern").show();
  $("#elder").show();
  $("#air").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#ice2").show();
  $("#brown").show();
  $("#seafloor").show();
  $("#western").show();
  $("#elder").show();
  $("#earth2").show();

} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#grey").show();
  $("#trans").show();
  $("#house").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#electricity").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#grey").show();
  $("#ice2").show();
  $("#jungle").show();
  $("#western").show();
  $("#hatchling").show();
  $("#water").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#electricity2").show();
  $("#brown").show();
  $("#forest").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#metal").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#hatchling").show();
  $("#fire2").show();
  $("#blue").show();
  $("#forest").show();
  $("#western").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#hatchling").show();
  $("#grey").show();
  $("#electricity2").show();
  $("#glacier").show();
  $("#eastern").show();
  $("#ice").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#hatchling").show();
  $("#trans").show();
  $("#blue").show();
  $("#house").show();
  $("#forest").show();
  $("#western").show();
  $("#earth").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#orange").show();
  $("#fire2").show();
  $("#cave").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#air").show();
} else if (q1 === "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#ice2").show();
  $("#brown").show();
  $("#seafloor").show();
  $("#western").show();
  $("#hatchling").show();
  $("#earth2").show();

} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#corrosion").show();
  $("#radiation").show();
  $("#pink").show();
  $("#desert").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#electricity").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "0-3" && q5 === "No") {
  $("#electricity2").show();
  $("#white").show();
  $("#glacier").show();
  $("#western").show();
  $("#adolescent").show();
  $("#ice").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#fire2").show();
  $("#water2").show();
  $("#white").show();
  $("#ocean").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#air").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#trans").show();
  $("#regen").show();
  $("#red").show();
  $("#mountain").show();
  $("#western").show();
  $("#adolescent").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "Yes") {
  $("#fire2").show();
  $("#red").show();
  $("#mountain").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#ice2").show();
  $("#white").show();
  $("#jungle").show();
  $("#western").show();
  $("#adolescent").show();
  $("#water").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "0-3" && q5 === "No") {
  $("#ice2").show();
  $("#red").show();
  $("#seafloor").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#earth2").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "0-3" && q5 === "No") {
  $("#electricity2").show();
  $("#turquoise").show();
  $("#mountain").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#metal").show();

} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#trans").show();
  $("#pink").show();
  $("#desert").show();
  $("#western").show();
  $("#adult").show();
  $("#electricity").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#ice2").show();
  $("#white").show();
  $("#ocean").show();
  $("#eastern").show();
  $("#adult").show();
  $("#water").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#electricity2").show();
  $("#turquoise").show();
  $("#mountain").show();
  $("#western").show();
  $("#adult").show();
  $("#metal").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#fire2").show();
  $("#red").show();
  $("#mountain").show();
  $("#eastern").show();
  $("#adult").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "3.5-6" && q5 === "No") {
  $("#electricity2").show();
  $("#white").show();
  $("#glacier").show();
  $("#western").show();
  $("#adult").show();
  $("#ice").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "3.5-6" && q5 === "Yes") {
  $("#trans").show();
  $("#red").show();
  $("#mountain").show();
  $("#eastern").show();
  $("#adult").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "3.5-6" && q5 === "Yes") {
  $("#fire2").show();
  $("#corrosion").show();
  $("#black").show();
  $("#ocean").show();
  $("#western").show();
  $("#adult").show();
  $("#air").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "3.5-6" && q5 === "No") {
  $("#ice2").show();
  $("#red").show();
  $("#seafloor").show();
  $("#eastern").show();
  $("#adult").show();
  $("#earth2").show();


} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#trans").show();
  $("#pink").show();
  $("#desert").show();
  $("#western").show();
  $("#elder").show();
  $("#electricity").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#ice2").show();
  $("#white").show();
  $("#ocean").show();
  $("#eastern").show();
  $("#elder").show();
  $("#water").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#electricity2").show();
  $("#turquoise").show();
  $("#mountain").show();
  $("#western").show();
  $("#elder").show();
  $("#metal").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#fire2").show();
  $("#red").show();
  $("#mountain").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "6.5-10" && q5 === "No") {
  $("#electricity2").show();
  $("#white").show();
  $("#glacier").show();
  $("#western").show();
  $("#elder").show();
  $("#ice").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "6.5-10" && q5 === "Yes") {
  $("#trans").show();
  $("#red").show();
  $("#mountain").show();
  $("#eastern").show();
  $("#elder").show();
  $("#fire2").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "6.5-10" && q5 === "Yes") {
  $("#fire2").show();
  $("#white").show();
  $("#ocean").show();
  $("#western").show();
  $("#elder").show();
  $("#air").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "6.5-10" && q5 === "No") {
  $("#ice2").show();
  $("#red").show();
  $("#seafloor").show();
  $("#eastern").show();
  $("#elder").show();
  $("#earth2").show();

} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#trans").show();
  $("#pink").show();
  $("#house").show();
  $("#western").show();
  $("#hatchling").show();
  $("#electricity").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#ice2").show();
  $("#white").show();
  $("#river").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#water").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#electricity2").show();
  $("#turquoise").show();
  $("#mountain").show();
  $("#western").show();
  $("#hatchling").show();
  $("#metal").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#photosynth").show();
  $("#regen").show();
  $("#corrosion").show();
  $("#red").show();
  $("#jungle").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#electricity2").show();
  $("#white").show();
  $("#glacier").show();
  $("#western").show();
  $("#hatchling").show();
  $("#ice").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#trans").show();
  $("#red").show();
  $("#house").show();
  $("#western").show();
  $("#hatchling").show();
  $("#earth").show();
} else if (q1 > "3" && q2 === "Yes" && q3 === "No" && q4 === "11+" && q5 === "Yes") {
  $("#fire2").show();
  $("#white").show();
  $("#ocean").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#air").show();
} else if (q1 > "3" && q2 === "No" && q3 === "No" && q4 === "11+" && q5 === "No") {
  $("#ice2").show();
  $("#red").show();
  $("#seafloor").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#earth2").show();

} else if (q1 > "3") {
  $("#western").show();
} else if (q1 === "3") {
  $("#western").show();
} else if (q1 < "3") {
  $("#eastern").show();
} else if (q2 === "Yes") {
  $("#water").show();
} else if (q2 === "No") {
  $("#fire").show();
} else if (q3 === "Yes") {
  $("#forest").show();
} else if (q3 === "No") {
  $("#cave").show();
} else if (q4 === "0-3") {
  $("#adolescent").show();
} else if (q4 === "3.5-6") {
  $("#adult").show();
} else if (q4 === "6.5-10") {
  $("#elder").show();
} else if (q4 === "11+") {
  $("#hatchling").show();
if (q5 === "Yes") {
  $("#photosynth").show();
} else if (q5 === "No") {
  $("#ice2").show();
} else {
  $("#oops").show();
};


$("#results").append(dragonSpecies);

console.log("I AM A CONSOLE LOG!");

  });
});
