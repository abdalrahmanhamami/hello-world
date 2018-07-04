let myArray =[];
function threeFive(initial,final,sayThree,sayFive){
  for(let i = initial;i<=final;i++){
    myArray.push(i);

    if(i % 3 ===0 && i % 5 ===0){
       sayThree();
       sayFive();
    }else if(i % 3 ===0){
      sayThree();
    }else if(i % 5 ===0){
      sayFive();
    }else{
      console.log('Not Three or Five');
    }
  };
  console.log(myArray);
}

function sayThree(number){
  console.log('say three')
}

function sayFive(number){
  console.log('say five')
}

console.log(threeFive(10,15,sayThree,sayFive));



//step 5 
// function createBase(number){
//   return function(num){

//     return number + num;
//   }
// }

// let addSix = createBase(6);

// addSix(10); // returns 16
// addSix(21); // returns 27


const multiply = num => {
  let answer = num;
  
  if (num === undefined) return 1;
  else {
    return function multi (number) {
      if (number !== undefined) {
        answer *= number;
        return multi;
      } else return answer;
    };
  }
};

let f = multiply(6);
g = f(4);
h = g();


const once = (num, cb) => {
  let flag = false;
  
  if (flag === false) {
    let answer = cb(num);
    flag = true;
    return answer;
  } else return answer;
};

const addTwo = num => num + 2;
console.log(once(4, addTwo));
console.log(once(4, addTwo));
console.log(once(4, addTwo));

const createBase = base => {
    return function baseCreator (number) {
      return base + number;
    };
};

let addSix = createBase(6);
addSix(10);
addSix(21);

console.log(addSix);

// const privateCounter = () => {
//   let counter = 0;
//   return function (increment) {
//     return counter += increment;
//   }
// }

// const c = privateCounter();
// c(5);
// c(9);





///bonus 
let newArray = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];


var uniqueItems = [...new Set(newArray)];


console.log(uniqueItems);
