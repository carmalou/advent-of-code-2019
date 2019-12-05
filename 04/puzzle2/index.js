var lorange = 372037;
var hirange = 905157;
var arr = [];

function createPotentialList() {
    // first make the list of possible numbers
    for(let i = lorange; i < hirange; i++) {
        arr.push(convertToArr(i));
    }
}

function convertToArr(num) {
    // convert num param into arr and then return
    var tmpArr = [];
    
    while(num > 10) {
        var subtract = num % 10;
        num = num - subtract;
        tmpArr.push(subtract);
        
        if(num >= 10) {
            num = num / 10;
        }
    }
    
    tmpArr.push(num);
    return tmpArr.reverse();
}

function checkOrder(paramArr) {
    for(var i = 1; i < paramArr.length; i++) {
        if(paramArr[i] < paramArr[i - 1]) {
            return false;
        }
        if(i == paramArr.length - 1) {
            return true;
        }
    }
}

function checkLength(paramArr) {
    return paramArr.length == 6;
}

function checkDoubles(paramArr) {
    var rtnBool = false;
    for(var i = 0; i < paramArr.length; i++) {
        if(paramArr[i] == paramArr[i + 1]) {
            rtnBool = true;
        }
    }
    
    return rtnBool;
}

function checkSequence(paramArr, tmpObj, j) {
    if(tmpObj == null) {
        tmpObj = {};
    }
    
    if(j == null) {
        j = 0;
    }
    
    if(j == paramArr.length) {
        // here check tmpObj for properties
        // if properties, check if any aren't even numbers
        var rtnBool = true;
        
        for(var prop in tmpObj) {
            if(tmpObj[prop] % 2 != 0) {
                rtnBool = false;
            }
        }
        console.log(rtnBool);
        return rtnBool;
    }
    
    // if current num is equal to the next num, add it to tmpObj
    // increment it
    if(paramArr[j] == paramArr[j + 1]) {
        if(!tmpObj[paramArr[j]]) {
            tmpObj[paramArr[j]] = 1;
        }
        tmpObj[paramArr[j]] = tmpObj[paramArr[j]] + 1;
    }
    
    j++;
    return checkSequence(paramArr, tmpObj, j);
}

function exec() {
    // first create potential list
    // once we have list, check order -> if not 'proper' remove from list
    // once we've checked list, return total
    
    createPotentialList();
    var filteredArr = arr.filter(checkLength).filter(checkDoubles).filter(checkSequence).filter(checkOrder);
    console.log(filteredArr.length);
}

exec();

