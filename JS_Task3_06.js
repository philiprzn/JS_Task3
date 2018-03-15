var obj = {
    a : 1,
    b : {
        c : 0
    },
    e : {
        f : {
            g : 1
        }
    }
};


function clone(obj) {

    if (null == obj || "object" != typeof obj) return obj;

    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
}

var copyObj = clone(obj);

console.log(copyObj);
console.log(obj.b === copyObj.b);
console.log(obj.e === copyObj.e);
console.log(obj.e.f === copyObj.e.f);


