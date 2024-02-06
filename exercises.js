/*chapter 5 exercises*/

//ex1.
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let combine = arrays.reduce(smash);
function smash() {
  let combo = [];
  let hammer = combo.concat(arrays[0], arrays[1], arrays[2]);
  return hammer;
}
console.log(combine);
// → [1, 2, 3, 4, 5, 6]

//ex2.
// Your code here.
function check(value, test, update, body) {
  for (i = 0; i < value; i++) {
    if (test(i)) {
      update(i);
      body(i);
      return i;
    }
  }
  //return null;
}

let blank = check(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

/*loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);*/
// → 3
// → 2
// → 1

//ex3.
function every(array, test) {
  // Your code here.
  for (i = 0; i < array; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}

//alternate function using .some()
/*
function every(array, test){
    let check = array.some(test);
    return check;
}*/

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true

//ex4.
/*function dominantDirection(text) {
  // Your code here.
  if (text.style.direction == rtl) {
    return console.log("rtl");
  } else if (text.style.direction == ltr) {
    return console.log("ltr");
  } else {
    return console.log("ttb");
  }
}*/
function dominantDirection(text) {
  let div = document.createElement("div");
  div.textContent = text;
  if (div.dir === "rtl") {
    return "rtl";
  } else if (div.dir === "ltr") {
    return "ltr";
  } else {
    return "ttb";
  }
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
