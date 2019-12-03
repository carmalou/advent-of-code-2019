var tmpArr = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,5,23,1,23,9,27,2,27,6,31,1,31,6,35,2,35,9,39,1,6,39,43,2,10,43,47,1,47,9,51,1,51,6,55,1,55,6,59,2,59,10,63,1,6,63,67,2,6,67,71,1,71,5,75,2,13,75,79,1,10,79,83,1,5,83,87,2,87,10,91,1,5,91,95,2,95,6,99,1,99,6,103,2,103,6,107,2,107,9,111,1,111,5,115,1,115,6,119,2,6,119,123,1,5,123,127,1,127,13,131,1,2,131,135,1,135,10,0,99,2,14,0,0];

var noun = 0;
var arr = [];
var answerArr = [];

// this generates an array with 9801 arrays, or every possible solution where array[1] and array[2] have values that are 0-99, inclusive.
function incrementArr() {
    if(noun >= 99) {
        return;
    }

    for(var i = 0; i < 99; i++) {
        tmpArr[1] = noun;
        tmpArr[2] = i;
        arr.push(tmpArr);
    }

    noun += 1;
    
    incrementArr();
}

function loopAround() {
    arr.forEach(function(tmpArr, i) {
        runProgram(tmpArr, {max:tmpArr.length, index: i});
    })
}

function runProgram(tmpArr, objParam) {
    if(tmpArr == null) {
        throw Error("tmpArr cannot be null");
    }

    if(objParam.num >= objParam.max) {
        return;
    }

    if(objParam.num == null) {
        objParam.num = 0;
    }

    if(tmpArr[objParam.num] == 1) {
        // add stuff
        var a = tmpArr[objParam.num + 1];
        var b = tmpArr[objParam.num + 2];
        var c = tmpArr[objParam.num + 3];

        tmpArr[c] = a + b;
    }

    if(tmpArr[objParam.num] == 2) {
        // multiply stuff
        var d = tmpArr[objParam.num + 1];
        var e = tmpArr[objParam.num + 2];
        var f = tmpArr[objParam.num + 3];

        tmpArr[f] = d * e;
    }

    if(tmpArr[objParam.num] == 99) {
        // bail out
        return;
    }

    if(tmpArr[objParam.num] != 1 && tmpArr[objParam.num] != 2 && tmpArr[objParam.num] != 99) {
        // messed up
        console.log(JSON.stringify(objParam));
        console.log(tmpArr[objParam.num]);
        console.log(tmpArr);
        throw Error('invalid opcode');
    }
    
    objParam.num += 4;
    runProgram(tmpArr, objParam)
}

incrementArr();
loopAround();
// console.log(answerArr.length);

