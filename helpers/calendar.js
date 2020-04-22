export const getCalendarDays = (month, year,day) => {
    const weekDay = {0: 'Sekm', 1: 'Pirm', 2: 'Antr', 3: 'Trec', 4: 'Ketv', 5: 'Penkt', 6: 'Sest'};
  
    let date = new Date(year, month, day - 7);
    let days = [];
  
    while (new Date(year, month, day + 7) > date) {
      days.push({dayName:weekDay[date.getDay()], day: date.getDate(),  month:  date.getMonth(),  year:  date.getFullYear()})
      date.setDate(date.getDate() + 1);
    }
    return days;
  };