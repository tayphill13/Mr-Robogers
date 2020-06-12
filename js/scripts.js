// Business Logic ------------- //









// User Interface Logic  ------------- //
$(document).ready(function()  {
  $("#numberInput").submit(function(event) {
    event.preventDefault();
    const stringToNum = (parseInt($("#stringInput").val()));
    console.log(stringToNum);
  })
})