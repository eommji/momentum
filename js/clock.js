const dateContainer = document.querySelector('.date-js'),
      clockContainer = document.querySelector('.clock-js');

function getTime() {
  const currentDate = new Date(),
        year = currentDate.getFullYear(),
        month = currentDate.getMonth() + 1,
        date = currentDate.getDate(),
        day = currentDate.getDay(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();
  let dayText;
  switch(day) {
    case 0:
      dayText = 'SUN';
      break;
    case 1:
      dayText = 'MON';
      break;
    case 2:
      dayText = 'TUE';
      break;
    case 3:
      dayText = 'WED';
      break;
    case 4:
      dayText = 'THU';
      break;
    case 5:
      dayText = 'FRI';
    case 6:
      dayText = 'SAT';
  }
  dateContainer.innerText = `${year}. ${month}. ${date}. ${dayText}`;
  clockContainer.innerText = `${hours < 10 ? `0${hours}` : hours}:${
                                minutes < 10 ? `0${minutes}` : minutes}:${
                                seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();