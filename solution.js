'use strict';

const fs = require('fs');


// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    
//Iniatiate the variable answer to No
    var answer = "NO";
    if (x2 > x1 && v2 > v1) {
        answer = "NO";
    } else if ((x1 - x2) % (v2 - v1) === 0) {
        answer = "YES";
    }
    return answer;
}

