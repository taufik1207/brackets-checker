'use strict';

exports.validationBrackets = function(expression) {
  var count = 0
    for (var i = 0; i < expression.length; i++)
        if (expression[i] == '(')
            count++
        else if (expression[i] == ')')
            if (count == 0)
                return false
            else
                count--

    if (count == 0)
        return true
    
    return false
}