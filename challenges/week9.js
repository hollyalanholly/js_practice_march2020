/**
 * DONE This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
//done
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("Array is required");
  //filter the array and return only numbers divisible by 3 or 5
  //loop thorugh that array and sum them up with a .reduce
  //the example in video was (I watched after i wrote my own function):
  //let total=0;
  //arr.forEach(n=> {
  //if(n%5===0||n%3===0) {total+=n;}});
  //return total;
  let selectNumbers = arr.filter((number) => Number.isInteger(number / 3) || Number.isInteger(number / 5))
  return selectNumbers.reduce((a, b) => a + b, 0);
};

/**done
 * This function will receive a string of characters and should return true/false depending on whether
 *  it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("string is required");

  const arr = str.toUpperCase().split("");

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "C")
      newArr.push(arr[i]);
    if (arr[i] === "G")
      newArr.push(arr[i]);
    if (arr[i] === "T")
      newArr.push(arr[i]);
    if (arr[i] === "A")
      newArr.push(arr[i]);
  }

  if (newArr.length < arr.length) {
    return false;
  }
  else {
    return true;
  }
};

/**done
 * This function will receive a valid DNA string (see above) and should return a string of the 
 complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. 
 So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("string is required");

  const arr = str.toUpperCase().split("");

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "C")
      newArr.push("G");
    if (arr[i] === "G")
      newArr.push("C");
    if (arr[i] === "T")
      newArr.push("A");
    if (arr[i] === "A")
      newArr.push("T");
  }

  if (newArr.length < arr.length) { return false; }
  else { return newArr.join(""); }
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. 
 * A prime number is a number that can ONLY be divided evenly by 1 and itself (for example, 7)
 * //
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");

  if (n === 2 || n === 3 || n === 5 || n === 7 || n === 11) { return true; }
  else if (n === 0 || n === 1 || n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0 || n % 11 === 0) { return false }
  else { return true };
};

/**done
 * This function should receive a number and return an array of n arrays, each filled with n items. 
 * The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 
 * and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */

const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  //push the fill into an array
  //create another array and push array 1 into it
  let arr1 = [];
  for (let step = 0; step < n; step++) { arr1.push(fill); }

  let arr2 = [];
  for (let step = 0; step < n; step++) { arr2.push(arr1); }

  return arr2;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
//done
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (staff.length === 0) {
    return false;
  }

  //loop into each iten in array, and search the rota values for the day
  //if rota value contains day push the staff name into new array
  //count new array.length and if >=3 return true
  //else return false
  //case sensitive
  let array = [];
  staff.forEach(person => {
    for (let i = 0; i < person.rota.length; i++) {
      if (person.rota[i].toLowerCase().includes(day.toLowerCase())) { array.push(person.name) }
    };
  });

  if (array.length >= 3) { return true; }
  else { return false };
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
