var fs = require('fs');

fs.readFile('input.json', function(err, data) {
    if (err) {
        throw err;
    } else {
        var tmpArr = JSON.parse(data);
        var total = 0;

        tmpArr.forEach(function(num) {
            while(num > 0) {
                var fuel = (Math.floor(num / 3) - 2);
                if(fuel > 0) {
                    total = total + fuel;
                    num = fuel;
                } else {
                    break;
                }
            }
        })

        console.log(total);

        return total;
        // total I got was 4955106
    }
})

function test(num) {
    var total = 0;
    while(num > 0) {
        var fuel = (Math.floor(num / 3) - 2);
        if(fuel > 0) {
            total = total + fuel;
            num = fuel;
        } else {
            break;
        }
    }

    console.log(total);
}

test(14);
test(1969);
test(100756);

