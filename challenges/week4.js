//DONE FIRST TIME!!
function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // maybe do a filter.  to pull out only numbers smaller than 1.
  let littleNumbers = nums.filter((number) => number < 1);
  return littleNumbers;
}

//DONE FIRST TIME!!
function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Do a filter
  //Use charactersAt
  let filteredNames = names.filter((newName) => newName.charAt(0) === char);
  return filteredNames;
}

//DONE
function findVerbs(words) {
  if (!words) throw new Error("words is required");
  //Need to pull out characters at position 0,1 and 2 beacsue 2 will be a space!!
  let filteredWords = words.filter((word) => word.substring(0, 3) === "to ");
  return filteredWords;
}

//DONE 
function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // we did this in prog fun 004
  // const filtered = nums.filter((number) => number % parseInt(number) === 0);
  // return filtered;

  //tried a new method as did not want to do the same as last time
  const filtered2 = nums.filter((num) => Number.isInteger(num));
  return filtered2;
}

//done
function getCities(users) {
  if (!users) throw new Error("users is required");
  // its objects within objects so keep drilling down with ........'s
  //loop into each object 
  let subjectArr = [];
  for (let i = 0; i < users.length; i++) {
    subjectArr.push(users[i].data.city.displayName);
  }

  return subjectArr;

}
//done 
function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // maybe a .map
  //googled to find Math.sqrt(value)
  //do a Maths.round to 2 dp
  //had to parse float as it was converting to a string.  Parse float took back to a number.

  function sqRootNumbers(num) {
    return parseFloat(Math.sqrt(num).toFixed(2));
  }
  const mapSqRootNumbers = nums.map(sqRootNumbers);
  return mapSqRootNumbers;
}

//done
function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // ORIGINAL PLAN FELL DOWN as turning all to lowercase was a bad plan.
  //Do a map to get everything to lower case
  //   function lower(sentence){
  //     return sentence.toLowerCase();
  // }
  // const sentencesMap = sentences.map(lower);
  // //filtered out the sentences containg the specifies string
  // const filtered = sentencesMap.filter((sentence) => sentence.includes(str));

  // //now need to take the first letter of the sentence and make it capital.
  // function firstUpper(filter){
  //   return (filter[0].toUpperCase())+(filter.substring(1));
  // }
  // const firstUpperMap = filtered.map(firstUpper);
  // return firstUpperMap;
  const filtered = sentences.filter((sentence) => sentence.toLowerCase().includes(str));
  return filtered;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  function findBiggest(tri) {
    return parseFloat(Math.max(...tri));
  }
  const mapBiggest = triangles.map(findBiggest);
  return mapBiggest;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
