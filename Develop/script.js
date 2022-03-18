var dateToday = moment();
console.log(dateToday._d);

var htmlCode = "";
for(i = 9; i < 18; i++){
    htmlCode += ` <div class="row" >
    <h2>${i}</h2>
    <textarea id="${i}" cols="90"></textarea>
    <button class="saveBtn">Save</button>
  </div>`
}
$(".container").html(htmlCode);