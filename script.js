$(document).ready(function() {

  var tableDiv;

  $(".available").click(function() {
    tableDiv = $(this);
    $("#inputdiv").fadeIn(1000).css("display", "block");
    $tablenumber = $(event.target).text();
    $(".num").html($tablenumber);

  });

  $(".xout").click(function() {
    $("#inputdiv").fadeOut(500);

  });

  $(".btn").click(function(event) {
    event.preventDefault();
    $("#inputdiv").fadeOut(500);
    var tablenumber = $(".num").text();
    $(".available:contains(" + tablenumber + ")").removeClass("available").addClass("reserved");
    hoverData();
    $("#name").val("");
    $("#guests").val("");
    // $(".available)".removeClass("reserved");
  });

  function hoverData () {
    var name = $("#name").val();
    var guestSize = $("#guests").val();
    tableDiv.append('<div id="hoverdiv" class="hover"><div>Name: ' + name + '</div><div>Guests: ' + guestSize + '</div></div>');
  }

});

//submit vs click .... submit you can use enter to submit it and not have to click the button

//anonymous function is a no name function without parameters. can also be written as $(function () {});
