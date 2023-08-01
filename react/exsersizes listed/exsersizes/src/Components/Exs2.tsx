// make an extention to a Date Object thats built in to javascript
function NextDay(date: string): void {
  // create a new day object
  const currentDate = new Date(date);
  console.log(currentDate);

  // create next day object
  let nextDay = new Date(currentDate.getDate());

  // add one day to it
  nextDay.setDate(nextDay.getDate() + 1);

  console.log("next day: " + nextDay);

  // get the day of the object
  const dd = nextDay.getDate();
  // get the month of the object
  const mm = nextDay.getMonth();
  // get the year of the object
  const yy = nextDay.getFullYear();

  // convert to a string
  const nextDayString = `${yy}-${mm}-${dd}`;

  return console.log(nextDayString);
}

export default NextDay;
