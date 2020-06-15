/**DONE
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  //convert to string and then into an array
  const arr = n.toString().split("");
  //if the number is a negative need to treat first number as -ve.
  let negativeArrStart = [];
  negativeArrStart.push(arr[0].concat(arr[1]))
  let negativeArrEnd = [];
  for (let i = 2; i < arr.length; i++) {
    negativeArrEnd.push(arr[i]);
  }
  //taking the start of the negative array and looping theough the END of the -ve array and making a new array.
  negativeArrStart.push(...negativeArrEnd);
  //make a total, so we can loop through either the negative array or the positive array
  let total = 0;
  if (arr[0] === "-") {
    negativeArrStart.forEach(n => total += parseInt(n))
    return total;
  }
  else {
    arr.forEach(n => total += parseInt(n))
    return total;
  }
};
/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. 
 * Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 
 * the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined && end === undefined) throw new Error("start and end required");
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step <= 0) throw new Error("step required >0");
  let fakeStep = 1;
  let arrayLengthFake =(end-start)/fakeStep;
  let arrayLength= (end-start)/step;
  let arr = [];
//Other people used step === undefined ? step = 1 : 0.  

  if(step!== undefined && !Number.isInteger(arrayLength)) 
    throw new Error("the end number has to be able to be included in the range, change end number");
  
  if (step === undefined && Number.isInteger(arrayLengthFake)) {
    for (let i = start; i <= end; i += fakeStep) {
      arr.push(i);}return arr;
  }

  else {
    for (let i = start; i <= end; i += step) {
      arr.push(i);}
    return arr;}
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. 
 * The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime 
 * for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as
 *  she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, dates) => {
  if (dates === undefined && users === undefined) throw new Error("users and date is required");
  if (users === undefined) throw new Error("user is required");
  if (dates === undefined) throw new Error("date is required");
  

  let total = 0;
  let userNameArr = [];

  for (let g = 0; g < users.length; g++) {
    for (let i = 0; i < users[g].screenTime.length; i++) {
      if (users[g].screenTime[i].date === dates) {

        for (let j = 0; j < Object.values(users[g].screenTime[i].usage).length; j++) {
          total += Object.values(users[g].screenTime[i].usage)[j];
        }
        if (total > 100) { userNameArr.push(users[g].username) }
      }
    }
  }

  return userNameArr;
  console.log(userNameArr);
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. 
 * A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. 
 * If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, 
 * the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 *  //split to array
  //loop through array if sees # push rgb( into new array
  //if a push 10, b push 11 etc
  //else push number
  //[r,g,b,(,15,15,1,1,3,3)]
  // go into the new array and start at position 4.
  //thenmaybe do a map so if the position is even each number is transformed (arr[i]*16) but if position is odd (arr[i]*1)
  //this new array shoulf be [240, 15, 16, 1, 48, 3]
  //then filter or reduce  so position 0 and position 1 are added the position 2 and 3 then position 4 and 5
  //[255,17,51]
  //join to a string including a comma
  //concat that string with a join on the first array position 0-3 =rgb( + 255,17,51 and push a ) on the end.
 */
const hexToRGB = hex => {
  if (hex === undefined) throw new Error("hex STRING is required");
  if (hex[0]!=="#") throw new Error("has to start with #");
  if(/^#[0-9A-F]{6}$/i.test(hex.toUpperCase())===false) throw new Error("has to be a valid hexidecimal colour code");

  hexArr = (hex.toUpperCase().slice(1, (hex.length+1))).split("");
  const convertStepOne = char => {
    if(char==="F"){return 15}
    else if(char==="E"){return 14}
    else if(char==="D"){return 13}
    else if(char==="C"){return 12}
    else if(char==="B"){return 11}
    else if(char==="A"){return 10}
    else {return parseInt(char,10);}
  }
  let conversionStepOneMap = hexArr.map(convertStepOne);

  const convertStepTwo = (char, index) => {
    for(var t = 0; t < conversionStepOneMap.length; t++) {
      if(index % 2 === 0) {return char*16}
      else{return char*1}
  }}

  let conversionStepTwoMap = conversionStepOneMap.map(convertStepTwo);

  var groups = [];
  for(var i = 0; i < conversionStepTwoMap.length; i += 2) {
    groups.push(conversionStepTwoMap.slice(i, i + 2));
  }

  let conversionStepThreeArr=[];
    for (let i=0; i<groups.length; i++) {
// console.log(groups[i].reduce((a, b) => a + b, 0)) couldnt get a reduce to work :()
      sum=0;
      for(j=0; j<groups[i].length; j++) {
        sum = sum + groups[i][j];
      }
      conversionStepThreeArr.push(sum);
    }
let finalString = "rgb("+conversionStepThreeArr.join()+")";
return finalString;

//I found something on 15th june which is way cleverer!!
// function hexStringToRGBMORE(hex) {
//   return [
//     parseInt(hex.slice(1,3), 16),
//     parseInt(hex.slice(3,5), 16),
//     parseInt(hex.slice(5,7), 16)
//   ];  
// }

// let arrAgain ="rgb("+hexStringToRGBMORE("#Ff1133").join()+")";

// console.log(arrAgain);
};

/**DONE
 * This function takes a noughts and crosses board represented as an array, where an empty space is 
 * represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, 
 * and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  //make the array or arrays into one array
  let newArr = [];
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {

      newArr.push(board[i][j]);
    }
  }
  //making everything uppercase (didnt work with null so had to get rid of that)
  let string = newArr.toString(",").toUpperCase();
  arr = string.split(",");
  if (arr[0] === arr[3] && arr[0] === arr[6] && arr[0] === "X" || arr[1] === arr[4] && arr[1] === arr[7] && arr[1] === "X" || arr[2] === arr[5] && arr[2] === arr[8] && arr[2] === "X" || arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === "X" || arr[3] === arr[4] && arr[3] === arr[5] && arr[3] === "X" || arr[6] === arr[7] && arr[6] === arr[8] && arr[6] === "X") {
    return "X";
  }
  else if (arr[0] === arr[3] && arr[0] === arr[6] && arr[0] === "0" || arr[1] === arr[4] && arr[1] === arr[7] && arr[1] === "0" || arr[2] === arr[5] && arr[2] === arr[8] && arr[2] === "0" || arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === "0" || arr[3] === arr[4] && arr[3] === arr[5] && arr[3] === "0" || arr[6] === arr[7] && arr[6] === arr[8] && arr[6] === "0") {
    return "0";
  }
  else if (arr[0] === arr[4] && arr[0] === arr[8] && arr[0] === "X" || arr[2] === arr[4] && arr[2] === arr[6] && arr[2] === "X") {
    return "X";
  }
  else if (arr[0] === arr[4] && arr[0] === arr[8] && arr[0] === "0" || arr[2] === arr[4] && arr[2] === arr[6] && arr[2] === "0") {
    return "0";
  }
  else { return null; }
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
