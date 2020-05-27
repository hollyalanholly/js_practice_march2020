//DONE
const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  //find index of n and add 1 on, then return the char of that index
  //do a .length(-1) so you can see if n matches the final number in the array
  if (nums.indexOf(n) < 0 || n === nums[(nums.length) - 1]) {
    return null;
  } else {
    return nums[(nums.indexOf(n)) + 1]
  }
};

//DONE
//making a new string with a 01 to add at start of string which i will ignore, so we can get a 0:0 in an object
const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  const strNew = "01".concat(str);
  const frequenciesFinal = {};
  for (let i = 0; i < strNew.length; i++) {

    const char2 = strNew[i];
    if (frequenciesFinal[char2] === undefined) {
      frequenciesFinal[char2] = 0;
    } else {
      frequenciesFinal[char2] += 1;
    }
  }

  return frequenciesFinal;
};

//DONE
const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // reverse number with a map and reverse function
  //parse the number to remove oo before number?
  //changing string to array so can map it
  return parseInt(n.toString().split("").reverse().join(""))
};

//DONE
const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  //add up each set of numbers in an array and push into new array
  //then add the new array up
  let newArr = [];
  arrs.forEach(element => newArr.push(element.reduce((a, b) => a + b, 0)));
  return newArr.reduce((a, b) => a + b, 0)
};

//DONE
const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr;
  } else {
    let middleArr = [];
    for (let i = 1; i < (arr.length) - 1; i++) {
      middleArr.push(arr[i])
    };

    middleArr.unshift(arr[(arr.length) - 1]);
    middleArr.push(arr[0]);
    return middleArr;
  }
};

//done
const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // maybe make one giant string of obkect values and turn it to lowercase and search the lowecase term in it
  return (Object.values(haystack).join().toLowerCase()).includes(searchTerm.toLowerCase());
};

//doing
const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  //making an array of the words in the string
  const words = str.toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
  //make the tally chart from the new const words
  const frequencies = {};
  for (let i = 0; i < words.length; i++) {
    const char = words[i];
    if (frequencies[char] === undefined) {
      frequencies[char] = 1;
    } else {
      frequencies[char] += 1;
    }
  }

  return frequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
