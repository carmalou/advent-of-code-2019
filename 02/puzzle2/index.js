var noun = 0;
var verb = 0;
var howmanytimesitran = 0;

function generateArr(a,b) {
    var arr = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,5,23,1,23,9,27,2,27,6,31,1,31,6,35,2,35,9,39,1,6,39,43,2,10,43,47,1,47,9,51,1,51,6,55,1,55,6,59,2,59,10,63,1,6,63,67,2,6,67,71,1,71,5,75,2,13,75,79,1,10,79,83,1,5,83,87,2,87,10,91,1,5,91,95,2,95,6,99,1,99,6,103,2,103,6,107,2,107,9,111,1,111,5,115,1,115,6,119,2,6,119,123,1,5,123,127,1,127,13,131,1,2,131,135,1,135,10,0,99,2,14,0,0];

    arr[1] = a;
    arr[2] = b;

    return arr;
}

function incrementNumbers() {
    if(verb == 99) {
        verb = 0;
        noun++;
    } else {
        verb++
    }
}

function parseIntcode(arr, num) {
    howmanytimesitran++;
    if(num == null) {
        num = 0;
    }

    // this opcode means to add
    if(arr[num] == 1) {
        let a = arr[num + 1];
        let b = arr[num + 2];
        let c = arr[num + 3];

        arr[c] = arr[a] + arr[b];
    }

    // this opcode means to multiply
    else if(arr[num] == 2) {
        let a = arr[num + 1];
        let b = arr[num + 2];
        let c = arr[num + 3];

        arr[c] = arr[a] * arr[b];
    }

    // this opcode means the program is complete
    // bail out
    else if(arr[num] == 99) {
        console.log(arr[0]);
        return;
    } else {
        console.log('something bad happened. \n our count got off');
        console.log('num: ', num);
        console.log('arr[num]: ', arr[num]);
    }

    return parseIntcode(arr, (num + 4));
}

function loopthrough() {
    var arr = generateArr(noun, verb);
    parseIntcode(arr);
    incrementNumbers();

    if(noun == 99 && verb == 99) {
        console.log('how many times it ran: ', howmanytimesitran);
        return;
    } else {
        return loopthrough();
    }

    // if(noun != 99 || verb != 99) {
    //     return loopthrough();
    // } else {
    //     console.log('how many times it ran: ', howmanytimesitran);
    //     return;
    // }
}

loopthrough();

// pass numbers into generateArr
// pass arr into parseIntcode
// increment numbers
// repeat

// check first index to see if its equal to 19690720
// then what??


// wtf: 359964
// wtf: 359964
// wtfff: 3564
