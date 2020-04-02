function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
//  My first attempt was
//  let answer = word.charAt(0).toUpperCase();
//  let remain =word.slice(1);
//  return answer+remain;

 return word.charAt(0).toUpperCase() + word.slice(1);}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  //convert all to upper case
  // Take first characters only
  //add the . 

  return firstName.charAt(0).toUpperCase()+"."+lastName.charAt(0).toUpperCase();  
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
//Need to convert the vatRate to a % and also round the answer to 2.dp.
//toFixed converts to string so added that+ to convert to number.
  let unRounded =originalPrice*(1+(vatRate/100));
  return +unRounded.toFixed(2);

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let unRoundedSale = originalPrice * (1-(reduction/100));
  return +unRoundedSale.toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // count how many characters there are
  //divide number by two and do math ceiling to get middle number.  
  //remember that an index starts at 0
  //if odd just return position odd
  //if even return postion odd and postion odd +1
  //return the item at that character position
  
  let stringLen =str.length;
  let positionOdd =(Math.ceil(stringLen/2))-1;

    if(str.length % 2==0) 
      return str[positionOdd]+str[positionOdd+1];
      return str[positionOdd];
    }

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // let splitWord = word.split("");
  // let reverseArray =splitWord.reverse();
  // let joinArray= reverseArray.join("");
  // return joinArray;
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  //for each or .map may be handy.
  //take each word and reverse it then add back into an array
  const newWords = words.map(i => i.split("").reverse().join(""));
return (newWords);
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // its an object with .type being what we need to count IF its is linux
  //Maybe make linix all lowercase to be safe (I couldnt wuote figure out how to do that)
 
  let count =0;
  users.forEach(function(person) {
  if(person.type === ("Linux")) {
    count++;
  }
  });
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Need to count how many numbers in the array
  //need to toal the array
  let howManyInArray =scores.length;
  let total=0;
  for (let i=0; i < scores.length; i++) {
    total+=(scores[i]);}
return +(total/howManyInArray).toFixed(2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // if the nuber is divisible by 3 & 5 return fizzbuzz START WITH THIS ONE
  // if the number is divisible by 3 return fizz
  //if the number is divisible by 5 return buzz
  
  //else return number
    // if ((Number.isInteger (n/3)) && (Number.isInterger (n/5))) {return "fizzbuzz";}
    if ((Number.isInteger(n/3)) && (Number.isInteger(n/5))) {return "fizzbuzz"}
    else if (Number.isInteger(n/3)) {return "fizz";}
    else if (Number.isInteger(n/5)) {return "buzz";}
    else {return n;} 
  }


module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
