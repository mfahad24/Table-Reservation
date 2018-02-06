$(document).ready(function() { //anonymous function is a no name function without parameters. can also be written as
  //$(function () {});
  $(".available").click(function() {
    $("#inputdiv").css("display", "block");
    $tablenumber = $(event.target).text()
    $(".num").html($tablenumber);
    $(event.target).removeClass("available");
  });

  $(".btn").click(function() {
    $("#inputdiv").css("display", "none");
    $(event.target).removeClass("available").addClass("reserved");
    });
  });

  $(".xout").click(function() {
    $("#inputdiv").css("display", "none");
  });

  // $(".btn").click(function() {
  //   $("#inputdiv").css("display", "none");
  //   $(event.target).removeClass("available");
  // });

});

//set it up
//do it to all of them
