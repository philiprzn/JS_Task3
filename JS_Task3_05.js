var obj = {
    name : 'Ivan',
    age : '25',
    height : 177,
    gendere : 'male'
},
    newObj;


function copyObj(obj) {
    newObj = obj;
    return newObj
}


copyObj(obj);

console.log(newObj);
