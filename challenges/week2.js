//DONE return the fillings from an object sandwich
function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}
//DONE
//Return true if person is from Manchester
function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Need to make all lowercase
  if(person.city.toLowerCase()==="manchester") {
    return true;
  }
  return false;
}

//DONE
function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // PEOPLE/40 = NUMBER OF BUSSES REQUIRED
  //NEEDS TO BE A CEILING AS IF 41 PEOPLE YOU WOULD NEED 2 BUSSES
  //NEEDS TO BE INTEGER
  //put parse float in incase some text is in there too
 return Math.ceil((parseFloat(people))/40);
}

//DONE
function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  //need a count variable
  //loop through everything so careful where return is
  //change to all lowercase
  let words = arr.map(v => v.toLowerCase());

  let count=0;
  words.forEach(function (animal) {
    if(animal==="sheep")
    count++;
  });
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // needs to look at first letter on postcode so an INDEX of [0]
  if(isNaN(person.address.postCode[1])===true) {return false;}
  else if(person.address.postCode[0] ==="M") {return true;}
  else {return false;}
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
