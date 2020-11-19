function combine(list) {

    var pairs = new Array((list.length * (list.length - 1)) / 2),

    pos = 0;

    for (var i = 0; i < list.length; i++) {

        for (var j = i + 1; j < list.length; j++) {

            pairs[pos++] = [list[i], list[j]];

        }

    }

    return pairs;

    }

var result = combine([3,1,4,2,3]);
console.log("Combinaciones = "+ JSON.stringify(result));