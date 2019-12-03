var arr = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,5,23,1,23,9,27,2,27,6,31,1,31,6,35,2,35,9,39,1,6,39,43,2,10,43,47,1,47,9,51,1,51,6,55,1,55,6,59,2,59,10,63,1,6,63,67,2,6,67,71,1,71,5,75,2,13,75,79,1,10,79,83,1,5,83,87,2,87,10,91,1,5,91,95,2,95,6,99,1,99,6,103,2,103,6,107,2,107,9,111,1,111,5,115,1,115,6,119,2,6,119,123,1,5,123,127,1,127,13,131,1,2,131,135,1,135,10,0,99,2,14,0,0];

function myownloopcausewhynot(num) {
    if(num == null) {
        num = 0;
    }

    var length = arr.length;
    if(length == num) {
        return;
    }

    // 1 means add the next two indexes
    // the fourth index tells you where to place the new value
    if(arr[num] == 1) {
        var a = arr[num + 1];
        var b = arr[num + 2];
        var e = arr[num + 3];

        arr[e] = arr[a] + arr[b];
    }

    // 2 means multiply the next two indexes
    // the fourth index tells you where to place the new value
    else if(arr[num] == 2) {
        var c = arr[num + 1];
        var d = arr[num + 2];
        var f = arr[num + 3];

        arr[f] = arr[c] * arr[d];
    }
    
    // 99 means stop
    else if(arr[num] == 99) {
        // console.log(arr);
        return arr;
    }

    // if we get here, it means our array counting got off and we have an invalid opcode
    else {
        throw Error("Ya dun fucked up.");
    }

    
    myownloopcausewhynot(num + 4);
}

myownloopcausewhynot();
console.log(arr[0]);