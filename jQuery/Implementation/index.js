// $ or jQuery it is the same thing
/* $(document).ready(function(){}); - once the document is ready then it will execute all that is inside of the brackets*/
$("h1").css("color", "blue");
$("h1").addClass("big-title", "margin-80");

$(document).keydown(function(event){
    $("h1").text(event.key);
});
