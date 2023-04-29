const form = document.getElementById('dateForm');

form.addEventListener('submit', event => {
  // Storing start and end date values
  const endDateInput = document.getElementById('endDate').value;

  //Prevent form from submitting
  event.preventDefault();

  // Split the date input into an array: YYYY-MM-DD
  const dates = endDateInput.split('-');

  /*
    In JavaScript, the month parameter (dates[2]) is 0 indexed, so we would need to subtract 1 to get the correct month.
  */
  const endDate = new Date(
    dates[0],
    dates[1] - 1,
    dates[2],
    0,
    0,
    0,
    0
  ).getTime();

  // Function to update the count.
  const countdown = setInterval(() => {
    // Retrieve today's date.
    const startDate = new Date().getTime();

    // Storing the difference between the two dates as the number of milliseconds between them (will need to convert).
    const timeDifference = endDate - startDate;

    // Conversions for days, hours, minutes and seconds. (1000 * 60) represents the no of ms in a minute.
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('timer').innerHTML =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    // Checks if the count finished.
    if (timeDifference < 0) {
      clearInterval(countdown);
      document.getElementById('timer').innerHTML = 'OVER';
    }
  }, 1000);
});
