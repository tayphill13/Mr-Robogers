// Business Logic ------------- //

function robotSpeak(stringToNum) {
for (let index =0; index <= stringToNum; index+=1)  {
  index;
}
}







// User Interface Logic  ------------- //
$(document).ready(function()  {
  $("#numberInput").submit(function() {
    event.preventDefault();
    let stringToNum = (parseInt($("#stringInput").val()));
    let output = robotSpeak(stringToNum);
    $("#output").text(robotSpeak);
  })
})