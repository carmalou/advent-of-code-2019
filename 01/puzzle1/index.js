var fs = require('fs');

fs.readFile('input.json', function(err, data) {
    if (err) {
        throw err;
    } else {
        var tmpArr = JSON.parse(data);
        var total = 0;

        tmpArr.forEach(function(num) {
            // divide by 3, then round down
            var fuel = Math.floor(num / 3);
            total = total + (fuel - 2);
        });

        return total;
        // total I got was 3305301
    }
})

function test(num) {
    // divide by 3, then round down
    var fuel = Math.floor(num / 3);
    console.log(fuel - 2);
}

test(12);
test(14);
test(1969);
test(100756);