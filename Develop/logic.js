

const m = moment();
var displayTime = document.getElementById("currentDay")

displayTime.innerText = (m.format("dddd MMM Mo YYYY"));


//Change textarea background color based on time
var checkTime = function () {

  //Get Current time
  var currentTime = moment().format('H');

  console.log(currentTime);

  //get all elements with class "taskarea"
  var timeBlockElements = $(".textarea");

  //loop through taskarea classes
  for (var i = 0 ; i < timeBlockElements.length ; i++) {

      //Get element i's ID as a string
      var elementID = timeBlockElements[i].id;

      //get element by ID
      var manipID = document.getElementById(timeBlockElements[i].id)

      //remove any old classes from element
      $(timeBlockElements[i].id).removeClass(".present .past .future");

      // apply new class if task is present/past/future
      if (elementID < currentTime) {
          $(manipID).addClass("past");
      } else if (elementID > currentTime) {
          $(manipID).addClass("future");
      } else {
          $(manipID).addClass("present");
      }

      //localStorage.setItem('tasks', manipID.value)

  }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

$(".save-button").on("click", function (){
  var textElement = $(this).siblings(".textarea").val()
  var textAreaId = $(this).siblings(".textarea").attr("id");
  console.log(textElement);
  localStorage.setItem(textAreaId, textElement);

})

for(var i = 0; i < localStorage.length; i++) {

var displayTextElement = localStorage.getItem(localStorage.key(i))
$(`#${localStorage.key(i)}`).val(displayTextElement)

}





























/* dark mode
var timeChecker = function () {
  // check time
  var currentTime = moment().format("H");
 // get textareas
 var timeBlockEl = $(".textarea");

 


}

const css = `html {
    -webkit-filter: invert(90%);
    -moz-filter: invert(90%);
    -o-filter: invert(90%);
    -ms-filter: invert(90%);
  }`
  const head = document.head
  const style = document.createElement('style')
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);

  */