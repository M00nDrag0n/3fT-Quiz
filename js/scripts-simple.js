$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

    var q1 = $("#q1").val();

    if (q1 === "10") {
      $("#zorilla").show();
      $("#reload").show();
    } else if (q1 < 8 ) {
      $("#paper").show();
      $("#reload").show();
    } else if (q1 > 8 ) {
      $("#paperClip").show();
      $("#reload").show();
    } else {
      $("#oops").show();
      $("#reload").show();
    }


    $("#output").text(q1);
  });
});
