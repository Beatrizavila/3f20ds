function permutar(list) {

    var pairs = new Array((list.length * (list.length - 1)) / 2),

    pos = 0;

    for (var i = 0; i < list.length; i++) {

        for (var j = i + 1; j < list.length; j++) {

            pairs[pos++] = [list[i], list[j]];
			pairs[pos++] = [list[j], list[i]];

        }

    }

    return pairs;

    }

var result = permutar([3,1,4,2,3]);
console.log("Permutaciones = "+ JSON.stringify(result));