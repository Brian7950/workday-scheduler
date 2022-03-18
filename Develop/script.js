var dateToday = moment();
console.log(dateToday._d);

var htmlCode = "";

for(i = 9; i < 18; i++){
    var storedEntry = localStorage.getItem(i) || "";
    htmlCode += ` <div class="row" >
    <h2>${i}</h2>
    <textarea id="${i}" value="${storedEntry}" placeholder="${storedEntry}" cols="90"></textarea>
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