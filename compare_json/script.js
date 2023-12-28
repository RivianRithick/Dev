function compareObjects(obj1,obj2){

    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);

    if(key1.length !== key2.length){
        return false;
    }

    for(let key of key1){
        if (obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

let obj1 = {name: "Person1", age: 5};
let obj2 = {age: 5, name: "Person1"};

let result = compareObjects(obj1,obj2);
console.log("The Answer is " + result);
