
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
  $("#trans").show();
  $("#purple").show();
  $("#forest").show();
  $("#eastern").show();
  $("#adolescent").show();
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
  $("#trans").show();
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
  $("#ice2").show();
  $("#black").show();
  $("#jungle").show();
  $("#eastern").show();
  $("#elder").show();
  $("#water").show();
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
  $("#fire2").show();
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
  $("#grey").show();
  $("#trans").show();
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
  $("#electricity2").show();
  $("#brown").show();
  $("#forest").show();
  $("#eastern").show();
  $("#adult").show();
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
  $("#cave").show();
  $("#eastern").show();
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
  $("#fire2").show();
  $("#blue").show();
  $("#forest").show();
  $("#western").show();
  $("#hatchling").show();
  $("#fire").show();
} else if (q1 === "3" && q2 === "Yes" && q3 === "Yes" && q4 === "11+" && q5 === "No") {
  $("#grey").show();
  $("#electricity2").show();
  $("#glacier").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#ice").show();
} else if (q1 === "3" && q2 === "No" && q3 === "Yes" && q4 === "11+" && q5 === "Yes") {
  $("#trans").show();
  $("#blue").show();
  $("#house").show();
  $("#forest").show();
  $("#western").show();
  $("#hatchling").show();
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
  $("#trans").show();
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
  $("#white").show();
  $("#ocean").show();
  $("#eastern").show();
  $("#adolescent").show();
  $("#air").show();
} else if (q1 > "3" && q2 === "No" && q3 === "Yes" && q4 === "0-3" && q5 === "Yes") {
  $("#trans").show();
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
  $("#white").show();
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
  $("#jungle").show();
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
  $("#fire2").show();
  $("#red").show();
  $("#mountain").show();
  $("#eastern").show();
  $("#hatchling").show();
  $("#fire").show();
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
