var powerSet = function(str) {

    var set = [];
    var hash = {};
    if (!str) { str = ''; }
    str = str.split(',').sort();
  
    
    for (var i = 1; i < str.length; i++) {
      if (str[i - 1] === str[i]) {
        str.splice(i, 1);
        i--;
      }
    }
  
    
    var recurse = function(strSet) {
      var joined = strSet.join('');
  
      
      if (hash[joined]) { return; }
      hash[joined] = true;
      set.push(joined);
  
      
      if (strSet.length === 1) { return; }
  
      
      for (var i = 0; i < strSet.length; i++) {
        var subSet = strSet.slice(0, i).concat(strSet.slice(i + 1));
        recurse(subSet);
      }
    };
    recurse(str);
    set.push(''); 
    set.sort()
    return set;
    };
  
  powerSet([3,1,4,2,3].join(','))
  console.log(powerSet([3,1,4,2,3].join(",")));