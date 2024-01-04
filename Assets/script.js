// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

window.onload = mainFunction; 
 
console.log("made it through the current date population");


 // today.setAttribute("style", )

  // Your code here.


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


function mainFunction() {

  var today = document.getElementById("currentDay");
  var whatsTodayDay = dayjs().format('dddd');
  var whatsTodayDate = dayjs().format('MMMM DD, YYYY');
  // var myEventInput = document.getElementById('myInput');

  today.textContent = "Today is " + whatsTodayDay + ", " + whatsTodayDate;
  today.setAttribute("style", "font-family: 'Satisfy', cursive; font-size: 2em");
  

  console.log(whatsTodayDay);
  console.log(whatsTodayDate);
  console.log(this.document);

 // const addEventHere = document.querySelectorAll(".description");
  const whatTimeIsIt = dayjs().format('h:mm A');
  const timeBlock = querySelectorAll("div.time-block");
  const timeBlockValues = [];

  timeBlock.forEach(timeBlock => {
    timeBlockValues.push(timeBlock.textContent);
  });

  console.log(timeBlockValues);
  console.log(whatTimeIsIt);


  // figure out how to do a math floor or some other rounding thing so that present goes from x:00 to x:59

 
  /* RETURN TO THIS!!!

if whatTimeIsIt.isBefore(timeBlock); {
  $("div.timeblock").addClass("future");
 } else-if { whatTimeIsIt.isAfter(timeBlock);
    $("div.timeblock").addClass("past"); 
   }  else {
      $("div.timeblock").addClass("past"); 
    }
  */


  
  

}

$(".saveButton").on("click", function() {
  // Get the event description from the textarea within the clicked div
  var eventDescription = $(this).siblings("textarea").val();

  // Get the time from the text of the clicked div
  var eventTime = $(this).parent().text();

  // Create an object to store the event details
  var event = {
    description: eventDescription,
    time: eventTime
  };

 // Convert the event object to a string
 var eventString = JSON.stringify(event);

 // Save the event string to localStorage
 localStorage.setItem("event", eventString);
});

/*
function whenStyle () {
 // var nowHour = dayjs().hour();
//  var nowMinute = dayjs().minute();
  var now = nowHour.dayjs().format('h:mm A');
  var timeSlot = document.querySelectorAll.

}
*/


