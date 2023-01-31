export const daysLeftForBDay = (eDate) => {
  // Get the current date
  const today = new Date();

  // Convert the birthday string into a date object
  const bday = new Date(eDate);

  // Set the year of the bday date object to the current year
  bday.setFullYear(today.getFullYear());

  // If the user's birthday has already passed this year, set the year to next year
  if (today > bday) {
  bday.setFullYear(today.getFullYear() + 1);
  }

  // Calculate the number of milliseconds until the user's next birthday
  const msPerDay = 24 * 60 * 60 * 1000;
  const msUntilBday = bday - today;
  const daysUntilBday = msUntilBday / msPerDay;

  // Round the number of days down to the nearest whole number
  const wholeDaysUntilBday = Math.ceil(daysUntilBday);

  //return the days
  return wholeDaysUntilBday
}

export const minimunWarranty = (eDates) => {
  // Get current date
  const currentDate = new Date();

  // Initialize minimum day left to a large value
  let minDayLeft = Number.MAX_VALUE;

  // Loop through dates array
  for (let i = 0; i < eDates.length; i++) {
    // Calculate number of days left
    const dayLeft = (eDates[i] - currentDate) / (1000 * 60 * 60 * 24);

    // Update minimum day left if current day left is smaller
    if (dayLeft < minDayLeft) {
      minDayLeft = dayLeft;
    }
  }
  // Print minimum day left
  return minDayLeft
  //console.log(`Minimum day left: ${Math.ceil(minDayLeft)} days`);
}