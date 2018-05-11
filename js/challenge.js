let QuestionMarks = (str) => {
  // console.time();
  for(let i = 0; i < str.length; i++) {
      for(let j = i+1; j < str.length; j++) {
          if(Number(str[i])+Number(str[j]) === 10) {
            if(str.slice(i+1,j).split('?').length - 1 === 3) {
                return true;
            }
          }
      }
  }
  // console.timeEnd();
  return false;
}

console.time("timer");
QuestionMarks("bcc?7??ccc?3tt1??????5");
console.timeEnd("timer");

console.time("timer");
QuestionMarks("alsdkf")
console.timeEnd("timer");

// Input:"bb6?9" Output:"false"
//
// Input:"bcc?7??ccc?3tt1??????5" Output:"true"
