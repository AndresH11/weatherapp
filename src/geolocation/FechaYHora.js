const dateDay = (num) => {
  const date = new Date();
  const weekday = ['Sun', 'Mon', 'Tue','Wed', 'Thu', 'Fri', 'Sat'];
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if(date.getDay() + num > 6){
    return [weekday[Math.abs(date.getDay() + num - 7)],month[date.getMonth()],date.getDate()];
  }else{
    return [weekday[date.getDay() + num],month[date.getMonth()],date.getDate()];
  }
};
export default dateDay;