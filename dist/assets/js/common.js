function getDate(time){
  var time = new Date(time);
  return time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDay() + "&nbsp;&nbsp;" + time.getHours() + ":" + time.getMinutes()
}