var dateToday = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(dateToday);

var htmlCode = "";
var currentHour = moment().hours()

for(i = 7; i < 20; i++){
    var storedEntry = localStorage.getItem(i) || "";
    if(i < currentHour){
        var color = "past"
    }
    else if(i == currentHour){
        var color = "present"
    }else{
        var color = "future"
    }
    if(i < 12){
        var hourChange = i + "AM"
    }else if(i==12){
        var hourChange = i + "PM"
    }
    else{
        var hourChange = (i - 12)+"PM"
    } 
    htmlCode += ` <div class="row" >
    <h2>${hourChange}</h2>
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

