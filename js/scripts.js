// Business Logic ------------- //

function robotSpeak(stringToNum) {
let rangeArray = [];
for (let index =0; index <= stringToNum; index+=1)  {
  if (index === 3) {
    rangeArray.push("Won't you be my neighbor?");
  } else if (index === 2) {
    rangeArray.push("Boop.");
  } else if (index === 1)  {
    rangeArray.push("Beep!");
  } else {
    rangeArray.push(index);
  }
} 
  return rangeArray;
}


// User Interface Logic  ------------- //
$(document).ready(function()  {
  $("#numberInput").submit(function() {
    event.preventDefault();
    let stringToNum = (parseInt($("#stringInput").val()));
    let output = robotSpeak(stringToNum);
    $("#output").text(output);
  })
})