    /* Write a JavaScript function to split a string and convert it into  an array of words.
    Test Data : console.log(string_to_array("Robin Singh"));
    ["Robin", "Singh"]*/

    function isString(str) {
      let words = str.split(" ")
      return words
    }

    console.log(isString("Robin Singh"))