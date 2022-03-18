var dateToday = moment();
console.log(dateToday._d);
$("#currentDay").text(dateToday);
var htmlCode = "";
var currentHour = moment().hours()

for(i = 9; i < 18; i++){
    var storedEntry = localStorage.getItem(i) || "";
    if(i < currentHour){
        var color = "past"
    }
    else if(i == currentHour){
        var color = "present"
    }else{
        var color = "future"
    }
    htmlCode += ` <div class="row" >
    <h2>${i}</h2>
    <textarea class="${color}" id="${i}" value="${storedEntry}" placeholder="${storedEntry}" cols="90"></textarea>
    <button class="saveBtn">Save</button>
  </div>`

}
$(".container").html(htmlCode);

$(".saveBtn").click(function(){
    var textInput = $(this).siblings("textarea").val();
    var timeStamp = $(this).siblings("textarea").attr("id");
    console.log(textInput,timeStamp);
    localStorage.setItem(timeStamp , textInput);
})

