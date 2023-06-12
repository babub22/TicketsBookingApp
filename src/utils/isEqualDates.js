export function isEqualDates(date1,date2){
    const newDate1 = new Date(date1).toLocaleDateString();
    const newDate2 = new Date(date2).toLocaleDateString();
  
    return newDate1===newDate2
  }
  