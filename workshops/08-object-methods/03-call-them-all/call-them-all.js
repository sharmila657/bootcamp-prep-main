// YOUR CODE BELOW

function callThemAll(object, value) {
    let val = [];
    for (let key in object) {
        // console.log(key)
        // console.log([key])
        if (typeof object[key] === "function") {
            val.push(object[key](value));
        }
    }
    return val;
}

let addsNums = {
    addTen: function(num) {
      return num + 10;
    },
  
    addTwenty: function(num) {
      return num + 20;
    },
  
    someProperty: 'value'
  }
  
console.log(callThemAll(addsNums, 100));