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

function checkSequence(paramArr) {
    // if numbers repeat, they must repeat an _even_ number of times (because why tf not)
    var j = 0;
    for(var i = 0; i < paramArr.length; i++ ) {
        if(paramArr[i] == paramArr[i + 1]) {
            j++
        }
    }

    return j % 2 == 0;
}

function exec() {
    // first create potential list
    // once we have list, check order -> if not 'proper' remove from list
    // once we've checked list, return total

    createPotentialList();
    var filteredArr = arr.filter(checkLength).filter(checkDoubles).filter(checkOrder);
    console.log(filteredArr.length);
}

exec();

