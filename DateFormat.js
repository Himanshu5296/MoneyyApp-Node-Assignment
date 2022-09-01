const formatDate=(date)=>{
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
}

const padTo2Digits=(num)=> {
  return num.toString().padStart(2, '0');
}

module.exports = formatDate
  
  // 👇️ 2021-10-24 16:21:23 (yyyy-mm-dd hh:mm:ss)
// console.log(formatDate(new Date()));
