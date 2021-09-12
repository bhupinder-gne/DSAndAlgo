function isPalindrome(s, first, last){
    // add whatever parameters you deem necessary - good luck!
    first = first || 0;
    last = last || s.length -1;
    if(s[first] != s[last]) return false;
    if(first == last) return true;
    
    return isPalindrome(s,++first,--last);
  }

  console.log(isPalindrome("tacocat"));

  function someRecursive(arr, cb){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length == 0) return false;
    if(cb(arr[0]))
        return true;

    return someRecursive(arr.slice(1), cb);
  }

  console.log(someRecursive([4,6,8,9], val => val % 2 !== 0));

  function flatten(arr){    
    if(arr.length == 0) return [];
    let newArr =[arr[0]];
    if(Array.isArray(arr[0]))
        newArr = flatten(arr[0]);
    return newArr.concat(flatten(arr.slice(1)));
  }
  
  console.log( flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))

  function nestedEvenSum (obj) {
    if(typeof obj !== 'object') return 0;
    let sum =0;
    for(let key of Object.keys(obj)){
        if(typeof obj[key] == 'number' && obj[key] % 2 == 0)
            sum += obj[key];
        else if(typeof obj[key] == 'object'){
            sum += nestedEvenSum(obj[key])
        }
    }
    return sum;
  }

  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10

  const stringifyNumbers = (obj) => {
    let newObj = {};
    for(let key in obj){
      if(typeof obj[key] === 'number')
        newObj[key] = obj[key].toString();
      else if(Array.isArray(obj[key]) || typeof obj[key] ===  "boolean" || typeof obj[key] === "string")
        newObj[key] = obj[key]
      else if(typeof obj[key] === 'object')
        newObj[key] =stringifyNumbers(obj[key]);
    }

    return newObj;
  }

  let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
  //console.log(stringifyNumbers(obj));

  const collectStrings = (obj) => {
    let result = [];
    for(let key in obj){
      if(typeof obj[key] === "string")
       result.push(obj[key]);
      else if(Array.isArray(obj[key]))
        continue;
      else if(typeof obj[key] === 'object')
        result = [...result, ...collectStrings(obj[key])];
    }

    return result;
  }

  const obj3 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj3));