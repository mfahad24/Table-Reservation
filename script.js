$(document).ready(function() { //anonymous function is a no name function without parameters. can also be written as
  //$(function () {});
  $(".available").click(function() {
    $("#inputdiv").css("display", "block");
    $tablenumber = $(event.target).text()
    $(".num").html($tablenumber);
    $(event.target).removeClass("available");
  });

  $(".xout").click(function() {
    $("#inputdiv").css("display", "none");
  });
  //unable to find code to revert reserved to available after entering
  //the input field div and X'ing out

  $(".btn").click(function(event) {
    event.preventDefault();
    $("#inputdiv").css("display", "none");
  });



});
