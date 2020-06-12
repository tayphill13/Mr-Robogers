// Business Logic ------------- //
function robotSpeak(stringToNum) {
let rangeArray = [];
for (let i =0; i <= stringToNum; i+=1)  {
  if (i.toString().includes("3")) {
    rangeArray.push(" Won't you be my neighbor, "+($("#nameInput").val())+"?");
  } else if (i.toString().includes("2")) {
    rangeArray.push(" Boop");
  } else if (i.toString().includes("1"))  {
    rangeArray.push(" Beep!");
  } else {
    rangeArray.push(i);
  }
} 
  return rangeArray;
}


// User Interface Logic  ------------- //
$(document).ready(function()  {
  $("#numberInput").submit(function() {
    event.preventDefault();
    let stringToNum = parseInt($("#stringInput").val());
    let output = robotSpeak(stringToNum);
    $("#output").text(output);
  })
})