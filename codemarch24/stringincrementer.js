// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.



function incrementString(str) {
    let num = '';
    let nonNumPart = str;
    
    for (let i = str.length - 1; i >= 0; i--) {
        if (!isNaN(parseInt(str[i]))) {
            num = str[i] + num;
            nonNumPart = str.slice(0, i);
        } else {
            break;
        }
    }
    
    if (num !== '') {
        let incrementedNum = (parseInt(num) + 1).toString();
        return nonNumPart + incrementedNum.padStart(num.length, '0');
    } else {
        return str + '1';
    }
}