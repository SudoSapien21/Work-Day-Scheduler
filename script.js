// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
// Display the current day at the top of the calendar
function displayCurrentDay() {
  var currentDay = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  $("#currentDay").text(currentDay);
}

// Update time-blocks to indicate past, present, or future
function updateBlocks() {
  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);

    // TODO: Add code to compare blockHour with currentHour and apply appropriate classes (past, present, future)


    if (blockHour < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");

    }
      else if (blockHour === currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("present");
      }
      else { 
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
  });
}

// Save user input to local storage when the save button is clicked
$(".saveBtn").on("click", function () {
  var timeBlockId = $(this).parent().attr("id");
  var userEvent = $(this).siblings(".description").val();

  // TODO: Add code to save userEvent in local storage using timeBlockId as the key

  // Example:
  localStorage.setItem(timeBlockId, userEvent);
});

// Load saved events from local storage and display them
function loadSavedEvents() {
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var savedEvent = localStorage.getItem(timeBlockId);

    // TODO: Add code to display savedEvent in the corresponding textarea

    // Example:
    $(this).find(".description").val(savedEvent);
  });
}

// Initialize the application
displayCurrentDay();
updateBlocks();
loadSavedEvents();
  
});
