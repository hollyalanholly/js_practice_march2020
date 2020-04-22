//DONE
function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  //maybe do a .map to get an array of squares
  //first attempt
  //   function square(num) {
  //     return num ** 2;
  //   }
  //   const mapSqNumbers = nums.map(square);
  //  return mapSqNumbers;
  const square = (num) => num ** 2;
  const mapSqNumbers = nums.map(square);
  return mapSqNumbers;
}

//DONE
function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Loop into the array and make everything lower case incase there are any weird things in the tests.
  let secondArr = [];
  for (let i = 1; i < words.length; i++) {
    secondArr.push(words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase());
  }
  let newArr = [];
  newArr.push(words[0].toLowerCase() + secondArr);

  for (let i = 0; i < newArr.length; i++) {
    return newArr[i].replace(/,/g, '');
  }
}

//DONE
  function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");
    //This is an array of objects so went into each array and pulled out the SUBJECTS and shoved into new array.
    let subjectArr =[];
    for (let i=0; i<people.length;i++) {
    subjectArr.push(people[i].subjects);
  }
  //The above generated a lot of arrays so merged into one.
  let merged = ([].concat.apply([], subjectArr));

  //counted the subjects in the new merged array.
  let count=0;
  for(let subject in merged) {
  count++
  }

  return count;
  }

  //working
  function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");
    //This is an array of objects so went into each array and pulled out the INGREDIENTS.
    let ingredientsArr =[];
    for (let i=0; i<menu.length;i++) {
    ingredientsArr.push(menu[i].ingredients);}
    // joined it all into one string
    let string =ingredientsArr.join();
    //searching for the ingredient
    if(string.includes(ingredient)) {
      return true;
    }
    else {
      return false;  
    }
  }
  

  function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    // Your code here!
  }

  module.exports = {
    getSquares,
    camelCaseWords,
    getTotalSubjects,
    checkIngredients,
    duplicateNumbers
  };
